import { useState } from "react";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverlay,
  DragOverEvent,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { DebugPanel } from "@/components/DebugPanel";
import { Card, CardContent } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

// ----- Types -----
type Id = string | number;

interface Container {
  id: Id;
  title: string;
}

interface Item {
  id: Id;
  label: string;
  containerId: Id;
}

export default function DndBasic() {
  // Containers and Items state
  const [containers] = useState<Container[]>([
    { id: "container1", title: "Container 1" },
    { id: "container2", title: "Container 2" },
    { id: "container3", title: "Container 3" },
  ]);

  const [items, setItems] = useState<Item[]>([
    { id: "apple", label: "Apple", containerId: "container1" },
    { id: "carrot", label: "Carrot", containerId: "container1" },
    { id: "banana", label: "Banana", containerId: "container1" },
    { id: "fig", label: "Fig", containerId: "container3" },
    { id: "durian", label: "Durian", containerId: "container2" },
  ]);

  const [logs, setLogs] = useState<string[]>([]);

  function log(message: string) {
    setLogs((prev) => [...prev.slice(-50), message]);
  }

  const [activeId, setActiveId] = useState<string | null>(null);

  // When the drag ends: update item order if dropped over another
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    log(`Active event: ${active.id}, Over event: ${over?.id}`);
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);

    setItems(arrayMove(items, oldIndex, newIndex));
  }

  // While dragging: update container assignment based on what it's hovering
  function handleDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = active.id;
    const overId = over.id;

    log(`Dragging ${activeId} over ${overId}`);

    const activeItem = items.find((item) => item.id === activeId);
    if (!activeItem) return;

    let newContainerId: string | null = null;

    // Hovering over a container
    if (containers.some((c) => c.id === overId)) {
      newContainerId = String(overId);
    } else {
      // Hovering over another item => use its container
      const overItem = items.find((item) => item.id === overId);
      if (overItem) {
        newContainerId = String(overItem.containerId);
      }
    }

    if (newContainerId && newContainerId !== activeItem.containerId) {
      log(`Moved ${activeId} to container ${newContainerId}`);
      setItems((prev) =>
        prev.map((item) =>
          item.id === activeId
            ? { ...item, containerId: newContainerId! }
            : item
        )
      );
    }
  }

  return (
    <>
      <h1 className="sr-only">DnD Basic Demo</h1>
      <Helmet>
        <title>DnD Basic Demo | React DnD Kit</title>
        <meta
          name="description"
          content="Try out a working multi-container drag and drop demo using dnd-kit in React."
        />
        <meta
          name="keywords"
          content="drag and drop demo, dnd-kit, multi container drag, react sortable list"
        />
        <meta
          property="og:title"
          content="Basic Multi-Container Drag and Drop Demo"
        />
        <meta
          property="og:description"
          content="Try out a sortable drag-and-drop layout using dnd-kit in React."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <DndContext
        collisionDetection={closestCenter}
        onDragStart={(event) => {
          setActiveId(String(event.active.id));
          log(`Started dragging: ${event.active.id}`);
        }}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={() => {
          log(`Drag cancelled for: ${activeId}`);
          setActiveId(null);
        }}
      >
        <div className="flex gap-6 p-4">
          {containers.map((container) => {
            const containerItems = items.filter(
              (item) => item.containerId === container.id
            );

            return (
              <DroppableContainer key={container.id} id={String(container.id)}>
                <SortableContext
                  items={containerItems.map((item) => item.id)}
                  strategy={verticalListSortingStrategy}
                >
                  <h2 className="font-bold mb-2">{container.title}</h2>
                  <ul>
                    {containerItems.map((item) => (
                      <SortableItem key={item.id} item={item} />
                    ))}
                  </ul>
                </SortableContext>
              </DroppableContainer>
            );
          })}
        </div>

        <DragOverlay>
          {activeId ? (
            <SortableItemView item={items.find((i) => i.id === activeId)!} />
          ) : null}
        </DragOverlay>
      </DndContext>
      <DebugPanel logs={logs} />
    </>
  );
}

// ----- Sortable Item -----
function SortableItem({ item }: { item: Item }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <SortableItemView
      item={item}
      style={style}
      dragProps={{ ref: setNodeRef, ...attributes, ...listeners }}
    />
  );
}

// ----- UI Component to Render Each Item -----
function SortableItemView({
  item,
  style,
  dragProps,
}: {
  item: Item;
  style?: React.CSSProperties;
  dragProps?: React.HTMLAttributes<HTMLDivElement> & {
    ref?: React.Ref<HTMLDivElement>;
  };
}) {
  return (
    <Card className="cursor-move my-2" style={style} {...dragProps}>
      <CardContent className="py-2 px-3">
        <div className="text-sm font-semibold">{item.label}</div>
        <div className="text-xs text-muted-foreground">
          Container: {item.containerId}
        </div>
      </CardContent>
    </Card>
  );
}

// ----- Wrapper for Droppable Containers -----
function DroppableContainer({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <Card ref={setNodeRef} className="w-64 p-4 bg-muted border rounded">
      {children}
    </Card>
  );
}

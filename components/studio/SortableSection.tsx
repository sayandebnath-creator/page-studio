"use client"

import { useSortable }
from "@dnd-kit/sortable"

import { CSS }
from "@dnd-kit/utilities"

export default function SortableSection({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform:
      CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-black
        transition-all
        duration-300
        hover:border-blue-500
        hover:shadow-[0_0_0_1px_rgba(59,130,246,0.4)]
        cursor-grab
        active:cursor-grabbing
      "
    >
      {children}
    </div>
  )
}
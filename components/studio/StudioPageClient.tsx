"use client"

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"

import {
  updateHeroHeading,
  updateHeroSubheading,
  updateCTALabel,
  updateCTAUrl,
  addSection,
  reorderSections
} from "@/features/draftPage/draftPageSlice"

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core"

import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import { sectionRegistry } from "@/registry/sectionRegistry"

import UnsupportedSection from "@/components/sections/UnsupportedSection"

import SortableSection
from "@/components/studio/SortableSection"

export default function StudioPageClient() {
  const dispatch = useDispatch()

  const page = useSelector(
    (state: RootState) => state.draftPage
  )

  const heroSection = page.sections.find(
    (section) => section.type === "hero"
  )

  const ctaSection = page.sections.find(
    (section) => section.type === "cta"
  )

  function handleDragEnd(event: {
    active: { id: string | number }
    over: { id: string | number } | null
  }) {
    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {
      dispatch(
        reorderSections({
          activeId: String(active.id),
          overId: String(over.id),
        })
      )
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="border-b border-white/10 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center justify-between px-8 py-5">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Page Studio
            </h1>

            <p className="text-sm text-zinc-400 mt-1">
              Schema-driven landing page builder
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              Publisher
            </span>

            <button
              className="
                rounded-xl
                bg-emerald-500
                px-5
                py-2.5
                text-sm
                font-medium
                text-black
                transition
                hover:bg-emerald-400
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-emerald-500
              "
              onClick={async () => {

                const response =
                  await fetch("/api/publish", {
                    method: "POST",
                  })

                const data =
                  await response.json()

                alert(
                  `Published version ${data.version}`
                )
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[420px_1fr]">
        <aside
          className="
            border-r
            border-white/10
            bg-[#111111]
            p-6
            xl:h-[calc(100vh-89px)]
            xl:sticky
            xl:top-[89px]
            overflow-y-auto
          "
        >
          <div className="space-y-6">

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-zinc-900/60
                p-5
                shadow-2xl
              "
            >
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  Hero Section
                </h2>

                <p className="text-sm text-zinc-400 mt-1">
                  Manage hero copy and messaging
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label
                    htmlFor="heading"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Hero Heading
                  </label>

                  <input
                    id="heading"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      focus:border-blue-500
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-blue-500
                    "
                    value={heroSection?.props.heading ?? ""}
                    onChange={(e) =>
                      dispatch(updateHeroHeading(e.target.value))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subheading"
                    className="text-sm font-medium text-zinc-300"
                  >
                    Hero Subheading
                  </label>

                  <textarea
                    id="subheading"
                    rows={5}
                    className="
                      w-full
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      focus:border-blue-500
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-blue-500
                    "
                    value={heroSection?.props.subheading ?? ""}
                    onChange={(e) =>
                      dispatch(updateHeroSubheading(e.target.value))
                    }
                  />
                </div>
              </div>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-zinc-900/60
                p-5
                shadow-2xl
              "
            >
              <div className="mb-5">
                <h2 className="text-lg font-semibold">
                  CTA Section
                </h2>

                <p className="text-sm text-zinc-400 mt-1">
                  Configure call-to-action behavior
                </p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    CTA Label
                  </label>

                  <input
                    className="
                      w-full
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      focus:border-blue-500
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-blue-500
                    "
                    value={ctaSection?.props.label ?? ""}
                    onChange={(e) =>
                      dispatch(updateCTALabel(e.target.value))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    CTA URL
                  </label>

                  <input
                    className="
                      w-full
                      rounded-xl
                      border
                      border-zinc-700
                      bg-zinc-950
                      px-4
                      py-3
                      text-white
                      outline-none
                      transition
                      focus:border-blue-500
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-blue-500
                    "
                    value={ctaSection?.props.url ?? ""}
                    onChange={(e) =>
                      dispatch(updateCTAUrl(e.target.value))
                    }
                  />
                </div>
              </div>
            </div>

            <button
              className="
                w-full
                rounded-2xl
                border
                border-dashed
                border-zinc-700
                bg-zinc-900/40
                px-5
                py-4
                text-sm
                font-medium
                text-zinc-300
                transition
                hover:border-blue-500
                hover:bg-zinc-800
                hover:text-white
              "
              onClick={() => dispatch(addSection())}
            >
              + Add Testimonial Section
            </button>
          </div>
        </aside>

        <div className="bg-[#0d0d0d] p-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Live Preview
                </h2>

                <p className="text-sm text-zinc-400 mt-1">
                  Drag sections to reorder layout
                </p>
              </div>

              <div className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
                {page.sections.length} Sections
              </div>
            </div>

            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={page.sections.map((section) => section.id)}
                strategy={verticalListSortingStrategy}
              >
                <section className="space-y-6">
                  {page.sections.map((section) => {
                    const Component =
                      sectionRegistry[
                        section.type as keyof typeof sectionRegistry
                      ] as React.ElementType

                    if (!Component) {
                      return (
                        <UnsupportedSection
                          key={section.id}
                          type={section.type}
                        />
                      )
                    }

                    return (
                      <SortableSection
                        key={section.id}
                        id={section.id}
                      >
                        <div
                          className="
                            absolute
                            right-4
                            top-4
                            z-20
                            rounded-full
                            border
                            border-white/10
                            bg-black/70
                            px-3
                            py-1
                            text-xs
                            font-medium
                            uppercase
                            tracking-wide
                            text-zinc-400
                            backdrop-blur
                          "
                        >
                          {section.type}
                        </div>

                        <Component {...section.props} />
                      </SortableSection>
                    )
                  })}
                </section>
              </SortableContext>
            </DndContext>
          </div>
        </div>
      </div>
    </main>
  )
}
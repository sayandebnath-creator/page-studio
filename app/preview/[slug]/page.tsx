"use client"

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

export default function StudioPage() {
  const dispatch = useDispatch()

  const page = useSelector(
    (state: RootState) => state.draftPage
  )

    // Sections is working as union type array now 
    const heroSection = page.sections.find(
    (section) => section.type === "hero"
    )

    const ctaSection = page.sections.find(
    (section) => section.type === "cta"
    )

    function handleDragEnd(event: any) {
        const { active, over } = event

        if (!over) return

        if (active.id !== over.id) {
            dispatch(
            reorderSections({
                activeId: active.id,
                overId: over.id,
            })
            )
        }
    }


  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="grid grid-cols-1 md:grid-cols-[380px_1fr]">

        {/* LEFT SIDEBAR */}

        <aside className="border-r border-zinc-800 bg-zinc-900 p-6">
          <h1 className="text-2xl font-bold mb-8">
            Page Studio
          </h1>

          <div className="space-y-6">

            {/* HERO HEADING */}

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
                  rounded-lg
                  border
                  border-zinc-700
                  bg-zinc-800
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                "
                value={
                heroSection?.props
                    .heading ?? ""
                }
                onChange={(e) =>
                  dispatch(
                    updateHeroHeading(
                      e.target.value
                    )
                  )
                }
              />
            </div>

            {/* HERO SUBHEADING */}

            <div className="space-y-2">
              <label
                htmlFor="subheading"
                className="text-sm font-medium text-zinc-300"
              >
                Hero Subheading
              </label>

              <textarea
                id="subheading"
                rows={4}
                className="
                  w-full
                  rounded-lg
                  border
                  border-zinc-700
                  bg-zinc-800
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-blue-500
                "
                value={
                    heroSection?.props.subheading ?? ""
                }
                onChange={(e) =>
                  dispatch(
                    updateHeroSubheading(
                      e.target.value
                    )
                  )
                }
              />
            </div>
            <div className="pt-6 border-t space-y-4">
                <h3 className="font-semibold">
                    CTA Section
                </h3>

                <div className="space-y-2">
                    <label className="block text-sm">
                    CTA Label
                    </label>

                    <input
                    className="w-full border p-2 rounded"
                    value={
                        ctaSection?.props.label ?? ""
                    }
                    onChange={(e) =>
                        dispatch(
                        updateCTALabel(
                            e.target.value
                        )
                        )
                    }
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm">
                    CTA URL
                    </label>

                    <input
                    className="w-full border p-2 rounded"
                    value={
                        ctaSection?.props.url ?? ""
                    }
                    onChange={(e) =>
                        dispatch(
                        updateCTAUrl(
                            e.target.value
                        )
                        )
                    }
                    />
                </div>
            </div>
          </div>
          <button
            className="
                px-4
                py-2
                bg-black
                text-white
                rounded
            "
            onClick={() =>
                dispatch(addSection())
            }
            >
            Add Testimonial
        </button>
        </aside>

        {/* PREVIEW */}

        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            >
            <SortableContext
                items={page.sections.map(
                (section) => section.id
                )}
                strategy={
                verticalListSortingStrategy
                }
            >
                <section className="bg-black min-h-screen">
                {page.sections.map((section) => {
                    const Component =
                    sectionRegistry[
                        section.type as keyof typeof sectionRegistry
                    ]

                    if (!Component) {
                    return (
                        <UnsupportedSection
                        key={section.id}
                        type={section.type}
                        />
                    )
                    }

                    return (
                    <div
                        key={section.id}
                        id={section.id}
                        className="
                        border
                        border-transparent
                        hover:border-blue-500
                        "
                    >
                        <Component
                        {...section.props}
                        />
                    </div>
                    )
                })}
                </section>
            </SortableContext>
            </DndContext>
      </div>
    </main>
  )
}
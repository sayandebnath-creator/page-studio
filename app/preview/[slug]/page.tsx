"use client"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"

import {
  updateHeroHeading,
  updateHeroSubheading,
} from "@/features/draftPage/draftPageSlice"

import { sectionRegistry } from "@/registry/sectionRegistry"

import UnsupportedSection from "@/components/sections/UnsupportedSection"

export default function StudioPage() {
  const dispatch = useDispatch()

  const page = useSelector(
    (state: RootState) => state.draftPage
  )

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
                  page.sections[0].props.heading
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
                  page.sections[0].props
                    .subheading
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
          </div>
        </aside>

        {/* PREVIEW */}

        <section className="bg-black">
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
              <Component
                key={section.id}
                {...section.props}
              />
            )
          })}
        </section>
      </div>
    </main>
  )
}
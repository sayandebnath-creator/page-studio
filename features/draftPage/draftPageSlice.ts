import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {Page} from "@/types/page"

const initialState : Page = {
  pageId: "1",
  slug: "home",
  title: "Home",
  sections: [
    {
      id: "hero-1",
      type: "hero",
      props: {
        heading: "Welcome",
        subheading: "Build landing pages fast",
        ctaLabel: "Get Started",
        ctaUrl: "#",
      },
    },
    {
        id: "cta-1",
        type: "cta",
        props: {
        label: "Start Now",
        url: "#",
        },
    },

  ],
}

const draftPageSlice = createSlice({
  name: "draftPage",
  initialState,
  reducers: {
    updateHeroHeading: (
      state,
      action: PayloadAction<string>
    ) => {
      const heroSection = state.sections.find(
        (section) => section.type === "hero"
      )

      if (heroSection) {
        heroSection.props.heading = action.payload
      }
    },

    updateHeroSubheading: (
      state,
      action: PayloadAction<string>
    ) => {
      const heroSection = state.sections.find(
        (section) => section.type === "hero"
      )

      if (heroSection) {
        heroSection.props.subheading =
          action.payload
      }
    },
    // added reducers for cta
    updateCTALabel: (
        state,
        action: PayloadAction<string>
        ) => {
        const ctaSection = state.sections.find(
            (section) => section.type === "cta"
        )

        if (ctaSection) {
            ctaSection.props.label = action.payload
        }
    },

    updateCTAUrl: (
        state,
        action: PayloadAction<string>
        ) => {
        const ctaSection = state.sections.find(
            (section) => section.type === "cta"
        )

        if (ctaSection) {
            ctaSection.props.url = action.payload
        }
    },

    addSection: (state) => {
    state.sections.push({
        id: crypto.randomUUID(),
        type: "testimonial",
        props: {
        quote: "Amazing product",
        author: "John Doe",
        },
    })
    },
},
})

export const {
  updateHeroHeading,
  updateHeroSubheading,
  updateCTALabel,
  updateCTAUrl,
  addSection
} = draftPageSlice.actions

export default draftPageSlice.reducer
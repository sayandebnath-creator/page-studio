import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState = {
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
  },
})

export const {
  updateHeroHeading,
  updateHeroSubheading,
} = draftPageSlice.actions

export default draftPageSlice.reducer
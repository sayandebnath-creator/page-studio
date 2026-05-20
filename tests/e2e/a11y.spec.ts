import { test, expect }
from "@playwright/test"

import AxeBuilder
from "@axe-core/playwright"

test(
  "homepage accessibility",
  async ({ page }) => {

    await page.goto(
      "http://127.0.0.1:3000/preview/home"
    )

    const accessibilityScanResults =
      await new AxeBuilder({
        page,
      }).analyze()

    expect(
      accessibilityScanResults
        .violations
    ).toEqual([])
  }
)
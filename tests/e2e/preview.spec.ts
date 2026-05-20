import { test, expect }
from "@playwright/test"

test(
  "preview page renders",
  async ({ page }) => {

    await page.goto(
      "http://127.0.0.1:3000/preview/home"
    )

    await expect(
      page.getByRole("heading")
    ).toBeVisible()
  }
)
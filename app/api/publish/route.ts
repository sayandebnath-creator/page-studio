import { NextResponse }
from "next/server"

import {
  determineVersionBump,
} from "@/lib/semver/diff"

import {
  incrementVersion,
} from "@/lib/semver/version"

import {
  generateChangelog,
} from "@/lib/semver/changelog"

export async function POST() {

  const previousVersion = "1.0.0"

  const previousSections = [
    { type: "hero" },
  ]

  const currentSections = [
    { type: "hero" },
    { type: "cta" },
  ]

  const bump =
    determineVersionBump(
      previousSections,
      currentSections
    )

  const nextVersion =
    incrementVersion(
      previousVersion,
      bump
    )

  const changelog =
    generateChangelog(bump)

  return NextResponse.json({
    success: true,
    version: nextVersion,
    changelog,
    publishedAt:
      new Date().toISOString(),
  })
}
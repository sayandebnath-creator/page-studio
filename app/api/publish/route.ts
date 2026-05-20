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

import {
  saveRelease,
} from "@/lib/releases/saveRelease"

export async function POST() {

  // mock previous release
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

  const snapshot = {
    version: nextVersion,
    sections: currentSections,
    publishedAt:
      new Date().toISOString(),
  }

  await saveRelease({
    slug: "home",
    version: nextVersion,
    data: snapshot,
  })

  return NextResponse.json({
    success: true,
    version: nextVersion,
    changelog,
  })
}
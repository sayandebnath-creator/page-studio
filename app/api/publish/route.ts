import { NextResponse }
from "next/server"

export async function POST() {

  return NextResponse.json({
    success: true,
    version: "1.0.0",
    message:
      "Release published successfully",
  })
}
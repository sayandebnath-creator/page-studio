import { NextResponse }
from "next/server"

import type { NextRequest }
from "next/server"

export function proxy(
  request: NextRequest
) {

  const role =
    request.cookies.get("role")
      ?.value || "viewer"

  const isStudioRoute =
    request.nextUrl.pathname.startsWith(
      "/studio"
    )

  if (
    isStudioRoute &&
    role === "viewer"
  ) {
    return NextResponse.redirect(
      new URL(
        "/preview/home",
        request.url
      )
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/studio/:path*"],
}
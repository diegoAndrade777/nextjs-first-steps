import type { NextFetchEvent, NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return NextResponse.next();

  //redirect to other page, example if user is not logged or doesn't have permission
  //return NextResponse.redirect("/");
}

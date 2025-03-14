import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  try {
    throw new Error("Sentry Example API Route Error"); // Simulating an error
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

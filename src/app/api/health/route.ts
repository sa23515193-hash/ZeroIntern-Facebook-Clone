
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    application: "FriendSpace",
    message: "FriendSpace API is running",
    timestamp: new Date().toISOString(),
  });
}

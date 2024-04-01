import { find } from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  const response = await find();
  return NextResponse.json(response);
}

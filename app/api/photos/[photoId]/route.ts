import { findById } from "@/database";
import { NextResponse } from "next/server";

type Params = {
  photoId: string;
};

export async function GET(request: Request, { params }: { params: Params }) {
  const response = await findById(params.photoId);
  return NextResponse.json(response);
}

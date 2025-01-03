import { NextRequest, NextResponse } from "next/server";
import db from "../../../config/astraDb.config";

export async function GET(_req: NextRequest) {
  try {
    const collections = await db.listCollections();
    
    return NextResponse.json({ collections }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Langflow API" }),
      { status: 500 }
    );
  }

}
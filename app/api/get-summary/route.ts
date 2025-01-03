import { NextRequest, NextResponse } from "next/server";
import db from "../../../config/astraDb.config";
import { client } from "@/lib/cassandraDB.lib";

export async function GET(_req: NextRequest) {
  try {
    // const data = await db.collection("chailytics")

    const data = await client.execute('SELECT * FROM chailytics.summary')
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Langflow API" }),
      { status: 500 }
    );
  }

}
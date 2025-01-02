import axios from "axios";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    const url = process.env.ASTRA_URL!;

    try {
        const body = await req.json();
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.ASTRA_TOKEN}`,
            },
        });

        return new Response(JSON.stringify(response.data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        if (error instanceof Error)
            console.error(error);
        return new Response(
            JSON.stringify({ error: "Failed to fetch data from Langflow API" }),
            { status: 500 }
        );
    }
}

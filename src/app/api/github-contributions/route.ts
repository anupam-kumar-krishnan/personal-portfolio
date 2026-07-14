import { NextResponse } from "next/server";

const DEFAULT_API = "https://github-contributions-api.jogruber.de";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get("user");

    if (!username) {
      return NextResponse.json({ error: "missing user" }, { status: 400 });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const apiUrl = `${process.env.GITHUB_CONTRIBUTIONS_API_URL || DEFAULT_API}/v4/${encodeURIComponent(
      username,
    )}?y=last`;

    const res = await fetch(apiUrl, { signal: controller.signal });
    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json({ contributions: [] }, { status: 200 });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ contributions: [] }, { status: 200 });
  }
}

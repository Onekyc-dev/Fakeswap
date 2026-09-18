export async function POST(request) {
  const origin = request.headers.get("origin") || new URL(request.url).origin;
  const redirectUri = `${origin.replace(/\/$/, "")}/callback`;

  const res = await fetch("https://onekyc-zeta.vercel.app/api/verify/request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ dappName: "FakeSwap", redirectUri }),
  });
  const data = await res.json();

  if (!res.ok) return Response.json({ error: data.error }, { status: res.status });
  return Response.json(data);
}

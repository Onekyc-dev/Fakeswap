export async function POST(request) {
  const { token } = await request.json();
  const res = await fetch("https://onekyc-zeta.vercel.app/api/verify/token-check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  const data = await res.json();
  return Response.json(data, { status: res.status });
}

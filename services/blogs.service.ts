export async function getblogs(url: string) {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
}

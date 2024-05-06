export async function isCorrectSource(src) {
  const response = await fetch(src, { method: 'HEAD' });
  return response.ok;
}

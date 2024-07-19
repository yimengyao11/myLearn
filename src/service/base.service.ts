export const baseService = async (url: string) => {
  return fetch(url, { method: 'GET' }).then((res) => res.json())
}

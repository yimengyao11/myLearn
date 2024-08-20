export const baseService = {
  get: async (url: string) => {
    return fetch(url, { method: "GET" }).then((res) => res.json());
  },
};

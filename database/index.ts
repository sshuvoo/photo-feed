import photos from "./photos.json";

const findById = async (_id: string) => {
  return photos.find(({ id }) => id === _id);
};

const findByIdSync = (_id: string) => {
  return photos.find(({ id }) => id === _id);
};

const find = async () => {
  return photos.map(({ id, title, url }) => ({ id, title, url }));
};

export { photos, findById, find, findByIdSync };

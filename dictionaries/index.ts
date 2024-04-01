import "server-only";

type Dictionaries = {
  [type: string]: () => Promise<any>;
};

const dictionaries: Dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  bn: () => import("./bn.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => dictionaries[locale]();

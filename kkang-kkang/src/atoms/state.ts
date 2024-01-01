import { atom } from "recoil";

export const easterEgg = atom({
  key: "easterEgg",
  default: false,
});

export const idState = atom({
  key: "idState",
  default: "",
});

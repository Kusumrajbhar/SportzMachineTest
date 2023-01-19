import { request } from "./ApiCall";
import { PLAYER_DETAILS } from "./ApiConstant";

export const API = {
  playerDetailsGet: async (onResponse, data) => {
    const url = PLAYER_DETAILS;
    return await request(onResponse, url, data, {}, "GET");
  },
};

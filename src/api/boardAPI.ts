import { LOCAL_SERVER } from "./common";
import axios from "axios";
import { BOARD_TYPE } from "../types/boardTypes";

export const getBoardList = (page: number): Promise<BOARD_TYPE[] | []> => {
  const url = `${LOCAL_SERVER}/board?_limit=10&_page=${page}`;

  return axios
    .get(url)
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        return [];
      }
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
};

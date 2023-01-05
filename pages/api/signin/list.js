import axios from "axios";
import { url_service } from "../url";
import Cookies from "universal-cookie";

const APIUserArticle = async (data) => {
  const cookies = new Cookies();
  const result = await axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: `${url_service}/user_article/login-by-email`,
    data: data,
  })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });

  return result;
};

export default APIUserArticle;

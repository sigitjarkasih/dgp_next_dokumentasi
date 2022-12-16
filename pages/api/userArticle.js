import axios from "axios";
import { url_service } from "./url";
// import { url_service1 } from "./url";


const APIUserArticle = async (data) => {
  const result = await axios({
    method: "post",
    mode: "no-cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    url: `${url_service}/user_article/listbyid/`,
    // url: `${url_service1}/admin/api/dgmalluserarticle/`,
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

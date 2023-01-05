import axios from "axios";
import { url_service } from "../../url";
// import Cookies from "universal-cookie";

const APIEventCreate = async (data) => {
//   const cookies = new Cookies();
//   const token = cookies.get("TOKEN");
  const result = await axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    //   Authorization: "BASIC " + token,
    },
    url: `${url_service}/event/create/`,
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

export default APIEventCreate;

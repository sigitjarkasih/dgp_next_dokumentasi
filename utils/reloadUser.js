import APIUserClientLoginToken from "../config/api/userClient/loginToken";
import GetToken from "./getToken";
import SetToken from "./setToken";

const ReloadUser = async () => {
  var data = {};
  const token = GetToken();
  const resp = await APIUserClientLoginToken({
    token_id: token,
  });

  var dataResponse = resp.data.data[0];
  if (dataResponse === undefined) {
    data = null;
  } else {
    var json_admin_access = JSON.parse(dataResponse["admin_access"]);

    data = {
      user_id: dataResponse["user_id"],
      email: dataResponse["email"],
      sex: dataResponse["sex"],
      admin_access: json_admin_access === null ? [] : json_admin_access,
    };
  }
  return data;
};

export default ReloadUser;

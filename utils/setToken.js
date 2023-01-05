import Cookies from "universal-cookie";

export default function SetToken(token) {
  const cookies = new Cookies();
  cookies.set("TOKEN", token, { path: "/" });
  return "success";
}

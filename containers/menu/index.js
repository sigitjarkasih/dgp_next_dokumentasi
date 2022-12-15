import * as React from "react";
import { List } from "@mui/material";
// import MenuShipment from './menuShipment';
// import MenuWallet from "./menuWallet";
// import MenuArticle from "./menuArticle";
// import MenuClient from "./menuClient";
// import MenuDonasi from "./menuDonasi";
// import MenuViolation from "./menuViolation";
// import MenuVacation from "./menuVacation";
// import MenuSetting from "./menuSetting";
// import MenuHelpDoc from "./menuHelpDoc";
import AppContext from "../../config/context/app";
// import MenuCategory from "./menuCategory";
// import MenuMobilepulsa from "./menuMobilepulsa";
// import MenuPaymentGateway from "./menuPaymentGateway";
// import MenuCustomerService from "./menuCustomerService";
// import MenuFoodnb from "./menuFoodnb";
// import MenuFinance from "./menuFinance";
// import MenuRemove from "./menuRemove";
// import MenuAppProfile from "./menuAppProfile";

export default function Menu() {
  const context = React.useContext(AppContext);
  const adminAccess = context.user.admin_access;

  return (
    <List sx={{ maxWidth: 360 }} component="nav">
      {/* <MenuShipment />  */}
      {adminAccess != undefined ? (
        <div>
          {adminAccess.includes("app_profile") ? <MenuAppProfile /> : <></>}
          {adminAccess.includes("remove") ? <MenuRemove /> : <></>}
          {adminAccess.includes("mobilepulsa") ? <MenuMobilepulsa /> : <></>}
          {adminAccess.includes("finance") ? <MenuFinance /> : <></>}
          {adminAccess.includes("customerservice") ? (
            <MenuCustomerService />
          ) : (
            <></>
          )}
          {adminAccess.includes("category") ? <MenuCategory /> : <></>}
          {adminAccess.includes("helpdoc") ? <MenuHelpDoc /> : <></>}
          {adminAccess.includes("client") ? <MenuClient /> : <></>}
          {adminAccess.includes("article") ? <MenuArticle /> : <></>}
          {adminAccess.includes("donasi") ? <MenuDonasi /> : <></>}
          {adminAccess.includes("vacation") ? <MenuVacation /> : <></>}
          {adminAccess.includes("foodnb") ? <MenuFoodnb /> : <></>}
          {adminAccess.includes("setting") ? <MenuSetting /> : <></>}
          {adminAccess.includes("wallet") ? <MenuWallet /> : <></>}
          {adminAccess.includes("violation") ? <MenuViolation /> : <></>}
          {adminAccess.includes("payment_gateway") ? (
            <MenuPaymentGateway />
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </List>
  );
}

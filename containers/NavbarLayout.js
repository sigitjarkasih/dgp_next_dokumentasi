import React from "react";
import * as Widget from "../team/widget";
import Head from "next/head";
import Snackbar from "../components/TableDefault/snackbar";
import MenuApps from "../containers/menu";
import { useContext } from "react";
import { useEffect } from "react";
import AppContext from "../config/context/app";
import { useRouter } from "next/router";
// import GetToken from "../../utils/getToken";
// import ReloadUser from "../../utils/reloadUser";
// import SetToken from "../../utils/setToken";
import { Drawer } from "@mui/material";

const NavbarLayout = ({ children }) => {
  const context = useContext(AppContext);
  const router = useRouter();
//   const token = GetToken();
  const [drawerOpen, setDrawerOpen] = React.useState(true);

  const handleLogOut = async () => {
    // REFRESH CONTEXT USER
    await context.setUser({});

    // SET TOKEN
    SetToken("");

    // UPDATE STATUS LOG IN
    await context.setLoggedIn(false);

    // REDIRECT TO LOGIN
    router.push("/account/signin");
  };

  async function getDataUser() {
    // REFRESH CONTEXT USER
    const resp = await ReloadUser();

    if (resp != null) {
      if (resp.is_admin === 0) {
        alert("Anda tidak mempunyai izin untuk membuka panel admin!!!");
        router.push("/account/signin");
      }
      await context.setUser(resp);

      // UPDATE STATUS LOG IN
      await context.setLoggedIn(true);
    } else {
      SetToken("");
      router.push("/account/signin");
    }
  }

  useEffect(() => {
    if (token) {
      if (token === "error") {
        SetToken("");
        router.push("/account/signin");
      }
      if (context.loggedIn === false) {
        getDataUser();
      }
    } else {
      router.push("/account/signin");
    }
  });

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "#F6F6F6",
        minHeight: "100vh",
      }}
    >
      <Snackbar />
      <Head>
        <link
          rel="icon"
          href="https://collections.dgpmall.com/image/1.03/logo.png"
        />
        <title>DGMALL Admin Centre</title>
      </Head>

      <Widget.AppBar
        title="Admin Center"
        logo="https://collections.dgpmall.com/image/1.03/logo.png"
        context={context}
        position="sticky"
        numberInbox={1}
        numberNotification={2}
        color="#043229"
        onLogOut={handleLogOut}
        onMenuDrawerClick={() => setDrawerOpen(!drawerOpen)}
      />
      <Drawer
        sx={{
          top: 10,
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        // variant="permanent"
        anchor="left"
        open={drawerOpen}
      >
        <br />
        <br />
        <br />
        <br />
        <MenuApps />
      </Drawer>
      <main style={{ marginLeft: drawerOpen === true ? 250 : 0 }}>
        <div style={{ padding: "15px 50px" }}>{children}</div>
      </main>
    </div>
  );
};

export default NavbarLayout;

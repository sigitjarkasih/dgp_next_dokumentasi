import React from "react";
import * as Widget from "../../team/widget";
import AppContext from "../../config/context/app";
import Router from "next/router";
import { Box } from "@mui/material";
import Head from "next/head";
import APIUserArticle from "../api/signin/login-by-email";

class AccountSignin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  static contextType = AppContext;

  submitData = async () => {
    this.setState({ loading: true });
    const resp = await APIUserArticle({
      email: this.state.email.trim().toLowerCase(),
      password: this.state.password.trim(),
    });
    // console.log(resp);

    console.log(resp.data);

    {
      Router.push("/admin/article");
    }
  };

  componentDidMount() {
    // console.log('Sign In Page')
  }

  render() {
    return (
      <div
        style={{
          margin: 0,
          padding: 0,
          background: "#F6F6F6",
          minHeight: "100vh",
        }}
      >
        <Head>
          <link rel="icon" href="/LogoDgmall.png" />
          <title>Login | Admin Dokumentasi | DGMALL</title>
        </Head>

        <Box
          bgcolor="whitesmoke"
          minHeight="100vh"
          alignItems="center"
          display="flex"
          justifyContent="center"
        >
          <Box width={500}>
            <Widget.Paper>
              <Widget.TextField
                label="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Masukkan Username"
              />

              <Widget.TextField
                label="Password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Masukkan Password"
                type="password"
              />

              <Widget.BreakSpace size={20} />

              <Widget.Button
                title="MASUK"
                width="100%"
                loading={this.state.loading}
                onClick={this.submitData}
              />
            </Widget.Paper>
          </Box>
        </Box>
      </div>
    );
  }
}

export default AccountSignin;

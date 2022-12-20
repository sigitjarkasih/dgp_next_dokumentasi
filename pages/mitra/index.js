import React from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import APIArticleList from "../api/article/list";
import { Component } from "react";
import Image from "next/image";
import { url_media_local } from "../api/url";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

export async function getServerSideProps(context) {
  const resp = await APIArticleList({
    id: context.query.id,
  });

  const data = await resp.data;

  return {
    props: { data },
  };
}

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      id: [],
      judul: "",
      deskripsi: "",
      image_link: null,
    };
  }

  goToDetail = (id) => {
    const data = this.props.data.filter((data) => data.id === id);
    this.setState({
      judul: data[0].title,
      deskripsi: data[0].content_desc,
      image_link: data[0].image_link,
    });
  };

  // handleStickItemClick(event, index){
  //   this.state.selectedIndex(index)
  // }

  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props.data);
    // console.log(typeof this.props.data);
    // console.log(this.props.data[3].title);
    // this.setState({ title: this.props.data[3].title });
  }

  render() {
    const data1 = this.state.title;
    return (
      <div
        style={{
          paddingTop: "65px",
        }}
      >
        <Head>
          <title>DGMall Syariah Help Center</title>
          <link rel="icon" href="/logoDgmall.png" />
        </Head>
        <Navbar />

        <div style={{ paddingRight: "5px" }}>
          <Box>
            <Drawer
              sx={{
                width: 250,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 250,
                  boxSizing: "border-box",
                },
              }}
              variant="permanent"
              anchor="left"
            >
              <Toolbar />
              {this.props.data.map((rows) => {
                <li key={rows.id}>{rows.title}</li>;
                return (
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      cursor: "pointer",
                    }}
                    component="nav"
                    onClick={() => this.goToDetail(rows.id)}
                  >
                    {rows.title}
                  </List>
                );
              })}
            </Drawer>
          </Box>

          <div style={{ marginLeft: 275 }}>
            <h1 align="center">{this.state.judul}</h1>
            <div>
              {this.state.image_link != null ? (
                <Image
                  src={url_media_local + this.state.image_link}
                  align="center"
                  width={250}
                  height={250}
                  alt="foto"
                />
              ) : (
                <></>
              )}
            </div>
            <div>{this.state.deskripsi}</div>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              height="100vh"
              paddingTop="80px"
            >
              {"Copyright © "}

              <a target="_blank" href="https://dgmall.id/" rel="noreferrer">
                DGMall
              </a>
              {new Date().getFullYear()}
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

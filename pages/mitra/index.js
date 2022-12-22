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
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../../styles/Home.module.css";

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

  componentDidMount() {
    // console.log(this.props);
    // console.log(this.props.data);
    // console.log(typeof this.props.data);
    // console.log(this.props.data[3].title);
    // this.setState({ title: this.props.data[3].title });
  }

  render() {
    // const data1 = this.state.title;
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

        <div
          style={{
            marginLeft: "280px",
          }}
        >
          <h2>
            Assalamualaikum,
            <br />
            Selamat Datang Di Help Center DGMall Syariah,
            <br />
            Ada yang Bisa Kami Bantu ?
          </h2>
          <br />
        </div>

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
                    key={rows.title}
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

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div style={{ display: "block" }}>
                <h3> Sosial Media</h3>
                <div style={{ alignItems: "center", display: "flex" }}>
                  <div style={{ alignItems: "center" }}>
                    <InstagramIcon fontSize="medium" />
                  </div>
                  &nbsp;
                  <div>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/dgmallsyariah_official/?hl=id"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </div>
                </div>

                <div style={{ alignItems: "center", display: "flex" }}>
                  <div style={{ alignItems: "center" }}>
                    <FacebookIcon fontSize="medium" />
                  </div>
                  &nbsp;
                  <div>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100087343495536"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </div>
                </div>

                <div style={{ alignItems: "center", display: "flex" }}>
                  <div style={{ alignItems: "center" }}>
                    <YouTubeIcon fontSize="medium" />
                  </div>
                  &nbsp;
                  <div>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@dgmall_official5354/videos"
                      rel="noreferrer"
                    >
                      Youtube
                    </a>
                  </div>
                </div>

                <div style={{ alignItems: "center", display: "flex" }}>
                  <div style={{ alignItems: "center", paddingLeft: "3px" }}>
                    <Image
                      src="/tiktok.png"
                      height={17}
                      width={17}
                      alt="sosmed"
                    />
                  </div>
                  &nbsp;
                  <div>
                    <a
                      style={{ paddingLeft: "4px" }}
                      target="_blank"
                      href="https://www.tiktok.com/@dgmallsyariah_official?lang=id-ID"
                      rel="noreferrer"
                    >
                      Tiktok
                    </a>
                  </div>
                </div>
              </div>
              <br />

              <div>
                <h3> Hubungi Kami</h3>

                <a href="https://wa.me/6281294999804">
                  WhatsApp : +62 812-9499-9804
                </a>
                <br />
                <a>Email : marketing@dgpmall.com</a>
                <br />
                <a>Nomor Telpon : (021) 27874784</a>
              </div>
              <br />
              <div>
                <h3> Download DGMall Syariah Mobile</h3>
                <div style={{ alignItems: "center", display: "flex" }}>
                  <div style={{ alignItems: "center", paddingLeft: "5px" }}>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.dgpnet"
                      rel="noreferrer"
                    >
                      <Image
                        src="/store.png"
                        height={66}
                        width={160}
                        alt="sosmed"
                      />
                    </a>
                  </div>
                </div>

                <div style={{ alignItems: "center", display: "flex" }}>
                  <div style={{ alignItems: "center", paddingLeft: "10px" }}>
                    <a
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.dgpnet"
                      rel="noreferrer"
                    >
                      <Image
                        src="/apple.png"
                        height={55}
                        width={155}
                        alt="sosmed"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <br />

            <footer className={styles.footer}>
              <a
                href="https://dgmall.id/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/LogoDgmall.png"
                  alt="DGMall Logo"
                  width={50}
                  height={35}
                />
                &nbsp;
                {"Copyright © "} DGMall Syariah &nbsp;
                {new Date().getFullYear()}
              </a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

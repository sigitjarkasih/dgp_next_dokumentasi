import React from "react";
import * as Widget from "../../../team/widget/";
import { Button } from "@mui/material";
import APIArticleList from "../../api/article/list";
import AppContext from "../../../config/context/app";
// import NavbarLayout from "../../../containers/NavbarLayout";
import Image from "next/image";
import Link from "next/link";
import { url_media } from "../../api/url";
import Head from "next/head";

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  static contextType = AppContext;

  getData = async () => {
    const resp = await APIArticleList({
      //   user_id: this.context.user.user_id,
    });
    if (resp.status === 200) {
      this.setState({
        data: resp.data,
      });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const dataList = this.state.data;
    return (
      //   <NavbarLayout>
      <Widget.Paper elevation={3}>
        <Head>
          <title>DGMall Syariah Dokumentasi</title>
          <link rel="icon" href="/logoDgmall.png" />
        </Head>
        <Widget.PageHeader title="Dokumentasi Article" />
        <Button
          // variant="outlined"
          style={{ textTransform: "none" }}
          href="../article/add"
        >
          Create Article
        </Button>
        <Widget.Box>
          {dataList.length > 0 ? (
            <Widget.Table
              head={[
                { title: "Image", align: "center" },
                { title: "Title", align: "left" },
                { title: "Status", align: "center" },
                { title: "Actions", align: "left" },
              ]}
              body={dataList.map(function (row) {
                return [
                  {
                    value: (
                      <>
                        {row.image_link === null ? (
                          <div style={{ fontSize: 10, color: "GrayText" }}>
                            No Image
                          </div>
                        ) : (
                          <Image
                            src={url_media + row.image_link}
                            height={55}
                            width={55}
                            alt="cover"
                          />
                        )}
                      </>
                    ),
                    align: "center",
                  },
                  { value: row.title, align: "left" },
                  {
                    value: (
                      <>
                        {row.is_active === 1 ? (
                          <span style={{ color: "green" }}>Tampilkan</span>
                        ) : (
                          <span style={{ color: "#D1D1D1" }}>Tidak Aktif</span>
                        )}
                      </>
                    ),
                    align: "center",
                  },
                  {
                    value: (
                      <Link href={`../article/update?id=${row.id}`}>
                        <Button size="small" color="warning">
                          Edit
                        </Button>
                      </Link>
                    ),
                    align: "left",
                  },
                ];
              })}
            />
          ) : (
            <div style={{ color: "GrayText" }}>
              Belum ada Article yang dibuat
            </div>
          )}
        </Widget.Box>
      </Widget.Paper>
      //   </NavbarLayout>
    );
  }
}

export default ArticlePage;

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../components/Layout";
import { Container, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import APIArticleList from "../../api/article/list";
import { url_media } from "../../api/url";
import Image from "next/image";

const ArtikelList = () => {
  const [artikel, setArtikel] = useState([]);

  const router = useRouter();

  const getArtikel = async () => {
    const response = await APIArticleList({});
    // const response = await axios.get("http://127.0.0.1:8000/api/");
    setArtikel(response.data);
  };

  const goToDetails = (id) => {
    router.push({
      pathname: "/admin/article/edit",
      query: { id: id },
    });
  };

  useEffect(() => {
    getArtikel();
  }, []);

  return (
    <div
      style={{
        paddingLeft: "270px",
        paddingRight: "5px",
        paddingTop: "80px",
        display: {
          xs: "12.5%",
          sm: "25",
          md: "50",
          lg: "75%",
          xl: "100%",
        },
      }}
    >
      <Head>
        <title>DGMall Syariah Dokumentasi</title>
        <link rel="icon" href="/LogoDgmall.png" />
      </Head>
      <Layout />

      <Container>
        <h2>Data Article</h2>

        <button type="button" onClick={() => router.push("./article/add")}>
          Tambah Data
        </button>

        <table border={1}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Content Desc</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {artikel.map((artikel) => (
              <tr key={artikel.id}>
                <td>
                  {artikel.image_link === null ? (
                    <div style={{ fontSize: 12, color: "GrayText" }}>
                      No Image
                    </div>
                  ) : (
                    <Image
                      src={url_media + artikel.image_link}
                      height={40}
                      width={45}
                      alt="media"
                    />
                  )}
                </td>
                <td>{artikel.title}</td>
                <td>{artikel.content_desc}</td>

                <td>
                  <button type="button" onClick={() => goToDetails(artikel.id)}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </Container>
    </div>
  );
};

export default ArtikelList;

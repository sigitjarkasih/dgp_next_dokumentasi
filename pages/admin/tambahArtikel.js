import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { Button, Container, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Image from "next/image";
import SaveIcon from "@mui/icons-material/Save";
import Editor from "../../components/CKEditors";

const ArtikelList = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");

    useEffect(() => {
      setEditorLoaded(true);
    }, []);

  return (
    <div
      style={{
        paddingLeft: "260px",
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
        <link rel="icon" href="/logoDgmall.png" />
      </Head>
      <Layout />

      <Container>
        <h2>Tambah Artikel</h2>

        <div
          style={{ border: "2px solid grey", borderRadius: 5, padding: "10px" }}
        >
          <label>
            <strong>Masukkan Gambar</strong>
          </label>
          <br />
          <input type="file" />
          <br />

          <br />
          <label>
            <strong>Masukkan Judul Artikel</strong>
          </label>
          <input type="text" style={{ width: "100%", height: "30px" }} />
          <br />

          <br />
          <label>
            <strong>Pilih Kategori</strong>
          </label>
          <select style={{ width: "100%", height: "30px" }}>
            <option value="volvo"> </option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <br />

          <br />
          <label>
            <strong>Masukkan Deskripsi Artikel</strong>
          </label>
          <Editor
            name="description"
            onChange={(data) => {
              setData(data);
            }}
            editorLoaded={editorLoaded}
          />
          <br/>
          <Button variant="contained" color="success" startIcon={<SaveIcon />}>
            Simpan Data
          </Button>
          <br />
        </div>

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

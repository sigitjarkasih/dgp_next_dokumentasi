import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [thumbnail, setThumbnail] = useState("null");
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    setJudul(artikel.thumbnail);
    setDeskripsi(artikel.deskripsi);
    setKategori(artikel.kategori);
  }, []);

  const updateArtikel = async (e) => {
    try {
      e.preventDefault();
      let formData = new FormData();
      formData.append("thumbnail", thumbnail);
      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      formData.append("kategori", kategori);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };

      const HOST = "http://127.0.0.1:8000/api/";

      const resp = await axios.post(HOST, formData);

      console.log(resp);
      router.push("./artikel");
    } catch (error) {
      console.log(error);
    }
  };

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
      <Container sx={{ borderRadius: "5px" }}>
        <Grid>
          <h1 align="center">Halaman Edit Artikel</h1>
        </Grid>
      </Container>
      <Head>
        <title>DGMall Syariah Dokumentasi</title>
        <link rel="icon" href="/logoDgmall.png" />
      </Head>
      <Layout />
      <form onSubmit={updateArtikel}>
        <Card>
          <CardContent>
            <Grid xs={25} sm={20} item>
              <InputLabel>
                Upload Foto Artikel Anda <br />
                <input
                  type="file"
                  multiple
                  //  value={image}
                  required
                  onChange={(e) => setThumbnail(e.target.files[0])}
                />
              </InputLabel>
            </Grid>

            <Grid container spacing={1}>
              <Grid xs={25} sm={20} item>
                <input
                  type="text"
                  className="Judul"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Judul"
                />
              </Grid>

              <Grid xs={25} sm={20} item>
                <FormControl fullWidth>
                  <input
                    type="text"
                    className="input"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    placeholder="Deskripsi"
                  />
                </FormControl>
              </Grid>

              <Grid xs={25} sm={20} item>
                <FormControl fullWidth>
                  <input
                    type="text"
                    className="input"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    placeholder="Kategori"
                  />
                </FormControl>
              </Grid>

              <Button type="submit" className="btn btn-success" fullWidth>
                Save
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};
export default EditProduct;

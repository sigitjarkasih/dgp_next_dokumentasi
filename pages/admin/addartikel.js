import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Container } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Editor from "../../components/CKEditors";

// const pilihanKategori = [
//   {
//     value: 1,
//     label: "Dompet Madrasah",
//   },
//   {
//     value: 2,
//     label: "Event",
//   },
//   {
//     value: 3,
//     label: "Seller",
//   },
// ];

const Addartikel = () => {
  // const [dataKategori, setDataKategori] = useState(null);
  const [thumbnail, setThumbnail] = useState("null");
  const [judul, setJudul] = useState("");
  // const [deskripsi, setDeskripsi] = useState("");
  const [kategori, setKategori] = useState("");
  const router = useRouter();
  // CKEditor
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  // end CKEditor

  // #Menampilkan Data Kategori
  // const getKategori = async () => {
  //   const response = await axios.get("http://localhost:8000/api/kategori/");
  //   setDataKategori(response.data);
  // };

  const saveArtikel = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("thumbnail", thumbnail);
      formData.append("judul", judul);
      formData.append("deskripsi", data);
      formData.append("kategori", kategori);
      // formData.append("nama_", image);
      // formData.append("create_thumbnail", true);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      // const HOST = "http://localhost:8000/api/artikel-upload/";

      const HOST = "http://127.0.0.1:8000/api/";

      const resp = await axios.post(HOST, formData);

      //post biasa
      // const resp = await axios.post('http://localhost:8000/api/artikel-2/',{
      //     judul: judul,
      //     deskripsi: deskripsi,
      //     // image: image,
      //     // nama_kategori: nama_kategori
      // });
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
          <h1 align="center">Halaman Tambah Artikel</h1>
        </Grid>
      </Container>

      <Head>
        <title>DGMall Syariah Dokumentasi</title>
        <link rel="icon" href="/logoDgmall.png" />
      </Head>
      <Layout />

      <form onSubmit={saveArtikel}>
        <Card>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={25} sm={20} item>
                <InputLabel>
                  Upload Foto Artikel Anda <br />
                  <input
                    type="file"
                    multiple
                    //  value={image}
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                </InputLabel>
              </Grid>

              <Grid xs={25} sm={20} item>
                <FormControl fullWidth>
                  <input
                    type="text"
                    className="Judul"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    placeholder="Judul"
                  />
                </FormControl>
              </Grid>

              {/* <Grid xs={25} sm={20} item>
                <FormControl fullWidth>
                  <input
                    type="text"
                    className="input"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                    placeholder="Deskripsi"
                  />
                </FormControl>
              </Grid> */}

              <Grid xs={25} sm={20} item>
                <Editor
                  name="description"
                  value={data}
                  onChange={(data) => {
                    setData(data);
                  }}
                  // onChange={(e) => setDeskripsi(e.target.value)}
                  editorLoaded={editorLoaded}
                />
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

export default Addartikel;

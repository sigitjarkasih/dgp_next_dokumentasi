import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Head from "next/head";
import { Container, Grid } from "@mui/material";

function Madrasah() {
  const [artikel, setArtikel] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtikel() {
      // const response = await fetch("http://127.0.0.1:8000/api/");
      // const data = await response.json();
      // setArtikel(data);
      setLoading(true);
    }
    fetchArtikel();
  }, []);

  return (
    <div
      style={{
        paddingTop: "80px",
      }}
    >
      <Container>
        <Grid>
          <h1 align="center">Pesanan</h1>
        </Grid>
      </Container>

      <Head>
        <title>DGMall Syariah Help Center</title>
        <link rel="icon" href="/LogoDgmall.png" />
      </Head>
      <Navbar />

      {loading ? (
        <div>Loading...</div>
      ) : (
        artikel.map((artikel) => (
          <div key={artikel.id}>
            <h4>{artikel.judul}</h4>
            <h4>{artikel.deskripsi}</h4>
          </div>
        ))
      )}
    </div>
  );
}

export default Madrasah;

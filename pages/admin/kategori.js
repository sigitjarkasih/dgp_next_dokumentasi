import React from 'react'
import Head from "next/head";
import Layout from '../../components/Layout'
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function kategori() {
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
      <link rel="icon" href="/logoDgmall.png" />
      </Head>
      <Layout />

      <Container>
            <h2>Data Kategori</h2>

    <table border={1}>
    <thead>
      <tr>
        <th>Nama_Kategori</th>
        <th>Create_at</th>
        <th>Update_at</th>
        <th>Actions</th>
    </tr>
    </thead>
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
  )
}

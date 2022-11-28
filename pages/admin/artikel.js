import React, {useState, useEffect} from "react";
import Head from "next/head";
import Layout from '../../components/Layout';
import { Container, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from 'axios';

const ArtikelList = () => {
  const [artikel, setArtikel] = useState([])

  const getArtikel = async ()=>{
    const response = await axios.get('http://localhost:8000/api/artikel/');
   
    setArtikel(response.data)
  
  }

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
      <link rel="icon" href="/logoDgmall.png" />
      </Head>
    <Layout />

    <Container>
    <h2>Data Artikel</h2>

      <a href="./addartikel">Tambah Data Artikel</a> <br />

  <table border={1}>
    <thead>
      <tr>
        <th>Foto</th>
        <th>Judul</th>
        <th>Deskripsi</th>
        <th>Kategori</th>
        <th>Actions</th>
      </tr>
    </thead>
        <tbody>
          {artikel.map((artikel) => (
          <tr key={artikel.id}>
          <td>
            <img src={artikel.image} width="90px" />
          </td>
          <td>{artikel.judul}</td>
          <td>{artikel.deskripsi}</td>
          <td>{artikel.nama_kategori}</td>
          <td>
               <a href="" class="btn btn-danger">Edit</a>
               <a href="" class="btn btn-danger">Hapus</a>

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
  )
}

export default ArtikelList;
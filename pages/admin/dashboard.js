import Head from "next/head";
import Layout from "../../components/Layout";
import { Container } from "@mui/material";

export default function Dashboard() {
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
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <Layout />

        <Container>
            <h2>Selamat Datang di Dashboard Syariah Dokumentasi</h2>
        </Container>
    
    </div>
    );
};

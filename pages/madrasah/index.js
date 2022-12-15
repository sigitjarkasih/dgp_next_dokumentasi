import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Head from "next/head";
import { Container, Grid } from "@mui/material";
import APIArticleList from "../api/article/list";
import { Component } from "react";

export async function getServerSideProps(context) {
  const resp = await APIArticleList({
    channle: "getJSONById",
    article_id: "9999xx9999",
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
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.setState({ title: this.props.data.title });
  }

  render() {
    const data1 = this.state.title;
    return (
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <Head>
          <title>DGMall Syariah Help Center</title>
          <link rel="icon" href="/logoDgmall.png" />
        </Head>
        <Navbar />

        <Container>
          <Grid>
            {/* {data1.map((artikle) => {
              <div key={artikle.id}>
                <h1 align="center">{artikle.title[4]}</h1>
              </div>;
            })} */}
          </Grid>
        </Container>
      </div>bu
    );
  }
}

// function Madrasah() {
//   const [artikel, setArtikel] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchArtikel() {
//       // const response = await fetch("http://127.0.0.1:8000/api/");
//       // const data = await response.json();
//       // setArtikel(data);
//       setLoading(true);
//     }
//     fetchArtikel();
//   }, []);

//   return (
//     <div
//       style={{
//         paddingTop: "80px",
//       }}
//     >
//       <Head>
//         <title>DGMall Syariah Help Center</title>
//         <link rel="icon" href="/logoDgmall.png" />
//       </Head>
//       <Navbar />

//       <Container>
//         <Grid>
//           <h1 align="center">Dompet Madrasah</h1>
//         </Grid>
//       </Container>

//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         artikel.map((artikel) => (
//           <div key={artikel.id}>
//             <h4>{artikel.judul}</h4>
//             <h4>{artikel.deskripsi}</h4>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Madrasah;

import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Head from "next/head";
import { Container, Grid } from "@mui/material";
import APIArticleList from "../../api/article/list";
import { Component } from "react";

export async function getServerSideProps(context) {
  const resp = await APIArticleList({
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
      </div>
    );
  }
}

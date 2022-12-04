import {
  Box,
  Grid,
  Typography,
  Card,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
} from "@mui/material";
// import Document from "next/document";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SButton from "../../salmComponenets/Button/1.01";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import BentoIcon from "@mui/icons-material/Bento";
import StoreIcon from "@mui/icons-material/Store";
import ReportIcon from "@mui/icons-material/Report";
import WidgetsIcon from "@mui/icons-material/Widgets";
import styles from "../../styles/Home.module.css";
import React, { Component } from "react";

export default class enjual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nano: null,
    };
  }
  render() {
    return (
      <div>
        <Head>
          <title>DGMall Syariah Help Center</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/logoDgmall.png" />
        </Head>

        <div>
          <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <div style={{ marginTop: "20px", marginLeft: "70px" }}>
                <Image
                  src="/logoDgmall.png"
                  width={60}
                  height={60}
                  alt="logo"
                />
              </div>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                <Image
                  src="/logoDgmall.png"
                  width={40}
                  height={40}
                  alt="logo"
                />
              </div>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <h1>
                    Assalamualaikum,
                    <br />
                    Selamat Datang Di Help Center DGMall Syariah,
                    <br />
                    Ada yang Bisa Kami Bantu ?
                  </h1>
                  <div
                    style={{
                      display: "flex",
                      background: "grexy",
                      borderRadius: "50px",
                    }}
                  >
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      fullWidth
                      // value={values.weight}
                      // onChange={handleChange("weight")}
                      endAdornment={
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src="/penjual.gif"
                    width={500}
                    height={500}
                    alt="logo"
                  />
                </div>
              </div>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <div
                style={{
                  display: "inline-list-item",
                  justifyContent: "space-around",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Image
                    src="/penjual.gif"
                    width={250}
                    height={250}
                    alt="logo"
                  />
                </div>
                <div
                  style={{
                    padding: "15px",
                  }}
                >
                  <h3>
                    <strong>
                      Assalamualaikum,
                      <br />
                      Selamat Datang Di Help Center DGMall Syariah,
                      <br />
                      Ada yang Bisa Kami Bantu ?
                    </strong>
                  </h3>
                </div>
                <div
                  style={{
                    display: "inline-list-item",
                    background: "grexy",
                    borderRadius: "50px",
                    paddingBottom: "50px",
                  }}
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    sx={{ width: "300px", height: "30px" }}
                    // value={values.weight}
                    // onChange={handleChange("weight")}
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </div>
              </div>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <div
                style={{
                  alignItems: "center",
                  borderRadius: "50px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  className={styles.btn}
                  style={{
                    marginleft: "25px",
                    marginRight: "25px",
                  }}
                >
                  <Link href="/pembeli">
                    <SButton
                      type="button"
                      fontSize="15px"
                      radius="50px"
                      cursor="pointer"
                      bgcolor="grey"
                      color="white"
                      title="Pembeli"
                      padding="10px"
                      border="none"
                      paddingLeft="100px"
                      paddingRight="100px"
                    />
                  </Link>
                </div>

                <div
                  className={styles.btn}
                  style={{
                    marginleft: "25px",
                    marginRight: "25px",
                  }}
                >
                  <Link href="/penjual">
                    <SButton
                      type="button"
                      fontSize="15px"
                      radius="50px"
                      cursor="pointer"
                      bgcolor="#10856c"
                      color="white"
                      title="Penjual"
                      padding="10px"
                      border="none"
                      paddingLeft="100px"
                      paddingRight="100px"
                    />
                  </Link>
                </div>
                <div
                  className={styles.btn}
                  style={{
                    marginleft: "25px",
                    marginRight: "25px",
                  }}
                >
                  <Link href="./mitra">
                    <SButton
                      type="button"
                      fontSize="15px"
                      radius="50px"
                      cursor="pointer"
                      bgcolor="grey"
                      color="white"
                      title="Mitra"
                      padding="10px"
                      border="none"
                      paddingLeft="100px"
                      paddingRight="100px"
                    />
                  </Link>
                </div>
              </div>
            </Box>

            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <div
                style={{
                  alignItems: "center",
                  borderRadius: "50px",
                  display: "inline-list-item",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",

                    marginleft: "25px",
                    marginRight: "25px",
                  }}
                >
                  <Link href="/pembeli">
                    <SButton
                      type="button"
                      fontSize="15px"
                      radius="50px"
                      cursor="pointer"
                      bgcolor="grey"
                      color="white"
                      margin="10px"
                      title="Pembeli"
                      padding="10px"
                      border="none"
                      paddingLeft="97px"
                      paddingRight="97px"
                    />
                  </Link>
                </div>

                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginleft: "25px",
                    marginRight: "25px",
                  }}
                >
                  <Link href="/penjual">
                    <SButton
                      type="button"
                      fontSize="15px"
                      radius="50px"
                      cursor="pointer"
                      bgcolor="#10856c"
                      color="white"
                      title="Penjual"
                      margin="10px"
                      padding="10px"
                      border="none"
                      paddingLeft="100px"
                      paddingRight="100px"
                    />
                  </Link>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    alignItems: "center",
                    marginleft: "25px",
                    marginRight: "25px",
                  }}
                >
                  <Link href="./mitra">
                    <SButton
                      type="button"
                      fontSize="15px"
                      radius="50px"
                      cursor="pointer"
                      bgcolor="grey"
                      color="white"
                      margin="10px"
                      title="Mitra"
                      padding="10px"
                      border="none"
                      paddingLeft="107px"
                      paddingRight="107px"
                    />
                  </Link>
                </div>
              </div>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <div
                style={{
                  paddingLeft: 50,
                  paddingRight: 50,
                  border: "#10856c solid 1px",
                  borderRadius: "5px",
                  marginTop: "50px",
                  marginLeft: 30,
                  marginRight: 30,
                }}
              >
                <div>
                  <h2>Kategori Penjual</h2>
                </div>
                <div
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "25px",
                    display: "flex",
                  }}
                >
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <StorefrontIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>
                          Akun dan <br /> Kemanan Toko
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <InventoryIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>Proses Pesanan</h4>
                      </div>
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <LocalShippingIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>Pengiriman</h4>
                      </div>
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <ProductionQuantityLimitsIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>Komplain Pesanan</h4>
                      </div>
                    </div>
                  </Link>
                </div>
                {/* BAWAH */}
                <div
                  style={{
                    justifyContent: "space-between",
                    paddingBottom: "25px",
                    display: "flex",
                  }}
                >
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <BentoIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>Fitur Penjualan</h4>
                      </div>
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <StoreIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>Mitra DGMall</h4>
                      </div>
                    </div>
                  </Link>
                  <Link href="/">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <ReportIcon fontSize="large" />
                      </div>

                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>
                          Laporan Penyalah <br /> Gunaan
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <Link href="">
                    <div
                      className={styles.btn}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        background: "#10856c",
                        borderRadius: "5px",
                        border: "1px solid ",
                        borderColor: "#10856c",
                        paddingLeft: 20,
                        width: 280,
                        height: 65,
                      }}
                    >
                      <div
                        style={{
                          color: "#fefefe",
                        }}
                      >
                        <WidgetsIcon fontSize="large" />
                      </div>
                      <div
                        style={{
                          textAlign: "left",
                          color: "white",
                          paddingLeft: 20,
                        }}
                      >
                        <h4>Lainnya</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <div
                style={{
                  paddingLeft: 25,
                  paddingRight: 25,
                  paddingBottom: 30,
                  border: "#10856c solid 1px",
                  borderRadius: "5px",
                  marginTop: "50px",
                  marginLeft: 30,
                  marginRight: 30,
                }}
              >
                <div>
                  <h4>Kategori Penjual</h4>
                </div>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <StorefrontIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Akun dan Keamanan Toko
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>

                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <InventoryIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Proses Pesanan
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <LocalShippingIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Pengiriman
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <ProductionQuantityLimitsIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Komplain Pesanan
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <BentoIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Fitur Penjualan
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <StoreIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Mitra DGMall
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <ReportIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Laporan Penyalah Gunaan
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                  <Grid item xs={3}>
                    <Link href="./">
                      <Card
                        sx={{
                          maxWidth: 50,
                          textAlign: "center",
                          height: 85,
                          color: "white",
                          backgroundColor: "#10856c",
                        }}
                      >
                        <WidgetsIcon fontSize="large" />
                        <Typography
                          align="center"
                          display="block"
                          sx={{ fontSize: "10px" }}
                        >
                          Lainnya
                        </Typography>
                      </Card>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Box>
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
            display: "flex",
          }}
        >
          <div>
            <a
              href="https://info.dgmall.id/aboutUs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <h3>Powered by</h3> <span className={styles.logo}></span> */}
            </a>
          </div>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <div style={{ verticalAlign: "baseline" }}>
              <Image src="/logoDgmall.png" alt="Logo" width={50} height={50} />
            </div>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <div style={{ verticalAlign: "baseline" }}>
              <Image src="/logoDgmall.png" alt="Logo" width={30} height={30} />
            </div>
          </Box>
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import Head from "next/head";
import { Container, Button, Grid, Paper, TextField, IconButton, InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Image from "next/image";
import Link from '@mui/material/Link';

const Login = () => {
    const [values,setValues] = useState({
        email:"",
        pass:"",
        showPass: false
    });

    const handlePassVisibility = () => {
        setValues({
            ...values,
            showPass: !values.showPass,
        })
    }

    return(
        <div>
        <Container maxWidth="sm"> 
            <Grid 
                container 
                spacing={2} 
                direction="column" 
                justifyContent="center"
                style={{ minHeight: "100vh" }}
            >
        
        <Head>
        <title>DGMall Syariah Help Center </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="/LogoDgmall.png"
        />
      </Head>

      <Container sx={{ borderRadius: "10px" }}>
          <Grid>
          <h1 align ="center">HALAMAN LOGIN</h1>
          <h1 align ="center">DGMall Syariah Help Center</h1>
          </Grid>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        <div style={{textAlign:"center"}}>
            <Image
              src="/LogoDgmall.png"
              textAlign="center"
              width={100}
              height={80}
              alt="dgmall"
            />
            </div>
          </Typography>
        </Container>

     
            <Paper elelvation={2} sx={{ padding: 5  }} >
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextField
                            type="email"
                            fullWidth
                            label="Masukkan Email Anda"
                            placeholder="Emaill"
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            type={values.showPass ? "text" : "password"}
                            fullWidth
                            label="password"
                            placeholder="password"
                            variant="outlined"
                            InputProps={{
                                endAdornment:(
                                    <InputAdornment position="end">
                                        <IconButton
                                         onClick ={handlePassVisibility}
                                          aria-label="toggle password"
                                          edge="end"
                                        >
                                            {values.showPass ? (
                                                <VisibilityIcon />
                                            ) : (
                                                <VisibilityOffIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item>
                    <Button
                            fullWidth
                            color="success"
                            variant="contained"
                            // onClick={""}
                        >    Log-in
                    </Button>

              <Typography variant="body2" color="text.secondary" align="center">
                {"Copyright © "}

                <a target="_blank" href="https://dgmall.id/" rel="noreferrer">
                    DGMall
                </a>

                {new Date().getFullYear()}
             </Typography>

                    </Grid>
                </Grid>
            </Paper>
            </Grid>
        </Container>
        </div>
    );
};

export default Login;
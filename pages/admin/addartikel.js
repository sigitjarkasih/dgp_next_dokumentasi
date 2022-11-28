import React from "react";
import axios from 'axios';
import Head from "next/head";
import Layout from '../../components/Layout';
import { Box, Grid, Card, CardContent, Container, Select, MenuItem, MenuList } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

class AddArtikel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
      id: 0,
      file: "",
      judul: "",
      deskripsi: "",
      kategori: "",
      };
    }

}

  inputChange(e) {
   let newdataPost = {...this.state.dataPost}
   newdataPost['id'] = new Date().getTime();
   newdataPost[e.target.name] = e.target.value;
  
   this.setState()
  };

  onSubmitForm=()=> {
    axios.post('http://localhost:8000/api/artikel/posts', this.state.dataPost).then(()=> {
      this.reloadData();
    });
  }

  componentDidMount() {

  this.reloadData();  

  };

  
return(
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
          <h1 align ="center">Halaman Tambah Artikel</h1>
          </Grid>
        </Container>

      <Head>
      <title>DGMall Syariah Dokumentasi</title>
      <link rel="icon" href="/logoDgmall.png" />
      </Head>
    <Layout />

    <Card>
        <CardContent>
          <Grid container spacing={1}>

      <Grid xs={25} sm={20} item>
        <InputLabel>Upload Foto Artikel Anda <br />
        <input
         type="file"
         multiple 
         onChange={this.inputChange}
         />        
        </InputLabel>
      </Grid>

      <Grid xs={25} sm={20} item>
        <input
        type="text"
        placeholder="Masukkan Judul Anda"
        onChange={this.inputChange} 
        /> 
      </Grid>

      <Grid xs={25} sm={20} item>
      <FormControl fullWidth>
        <input
        type="text"
        placeholder="Masukkan Deskripsi Anda"
        onChange={this.inputChange}
      /> 
      </FormControl>
      </Grid>
    
      <Grid xs={25} item>
      <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
         <Select
          labelId="demo-simple-select-label"
          label="Sikahkan Pilih Kategori"
          onChange={this.inputChange}
          >
          <MenuItem value={1}>Dompet Madrasah</MenuItem>
          <MenuItem value={2}>Event</MenuItem>
        </Select>
      </FormControl>
      </Grid>

        <Button className="btn btn-success" onClick={this.onSubmitForm} fullWidth>Submit</Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
    );

export default AddArtikel;

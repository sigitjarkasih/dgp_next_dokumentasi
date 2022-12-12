import React from "react";
import * as Widget from "../../../team/widget/";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikSelectField from "../../../components/atoms/Formik/SelectField";
import FormikTextField from "../../../components/atoms/Formik/TextField";
import { Box, Button, Stack, Typography, Container, Grid } from "@mui/material";
import APIArticleListById from "../../api/article/listById";
import ConfirmationDialog from "../../../components/fungsi/confirmationDialog";
import Router, { withRouter } from "next/router";
import Head from "next/head";
import Editor from "../../../components/CKEditors";
import APIArticleUpdate from "../../api/article/update";


class ArticleEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      content_desc: "",
      is_active: "",
    };
  }

  validate = Yup.object({
    id: Yup.string().required("Wajib diisi!"),
    title: Yup.string().required("Wajib diisi!"),
    content_desc: Yup.string().required("Wajib diisi!"),
    is_active: Yup.string().required("Wajib diisi!"),
  });

  getData = async () => {
    const resp = await APIArticleListById({
      id: this.props.router.query.id,
    });
    this.setState({
      id: "",
      title: resp.data[0].title,
      content_desc: "",
      is_active: "",
      create_ad: "",
      update_at: "",
    });
    console.log(resp.data[0].title);
  };

  submitData = async (values) => {
    const resp = await APIArticleUpdate(values);
    if (resp.data === "success") {
      this.context.setSnackbar({
        open: true,
        message: "Update Berhasil",
      });
      // Router.push('/setting/article/edit?id=');
    } else {
      this.context.setSnackbar({
        open: true,
        message: resp.statusText,
      });
    }
  };

  deleteArticle = async () => {
    let data = {};
    data.id = this.props.data["id"];
    const resp = await APIArticleDelete(data);
    if (resp.data === "success") {
      this.context.setSnackbar({
        open: true,
        message: "Article berhasil dihapus",
      });

      this.setState({
        open: false,
      });

      Router.push("/article");
    }
  };

  handleOKConfirmDelete = () => {
    this.deleteArticle();
    this.setState({
      openConfirmDelete: false,
    });
  };

  handleDelete = () => {
    this.setState({
      openConfirmDelete: true,
    });
  };

  keepSelectProField = (data) => {
    const objectArray = Object.entries(data);
    objectArray.forEach(([key, value]) => {
      this.setState({ [key]: value });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div
        style={{
          paddingTop: "80px",
        }}
      >
        <Container>
          <Grid>
            <h1 align="center">Halaman Edit Artikel</h1>
          </Grid>
        </Container>
        <Head>
          <title>DGMall Syariah Dokumentasi</title>
          <link rel="icon" href="/logoDgmall.png" />
        </Head>
        <Formik
          initialValues={{
            id: this.state.id,
            title: this.state.title,
            content_desc: this.state.content_desc,
            is_active: this.state.is_active,
          }}
          enableReinitialize
          validationSchema={this.validate}
          onSubmit={(values) => {
            this.submitData(values);
          }}
        >
          {(formik) => (
            <Form>
              <ConfirmationDialog
                title="Konfirmasi"
                child={<Box p={3}>Yakin akan hapus ?</Box>}
                open={this.state.openConfirmDelete}
                onClose={this.handleCloseConfirmDelete}
                onCancel={this.handleCloseConfirmDelete}
                onOK={this.handleOKConfirmDelete}
              />
              <Widget.Paper>
                <Widget.PageHeader title="Edit Article" />
                <Stack direction="row">
                  <Button color="error" onClick={this.handleDelete}>
                    Hapus
                  </Button>
                  <Button href="/article">Daftar Artikel</Button>
                </Stack>
                <Widget.Box>
                  <Box mb={3}>
                    <Typography>Title</Typography>
                    <FormikTextField
                      name="title"
                      placeholder="Masukkan judul article"
                    />
                  </Box>

                  {/* <Box mb={3}>
                    <Typography>Content Description</Typography>
                    <Editor
                      content={this.props.data["content_desc"]}
                      onUpdateEditor={this.onUpdateContent}
                    />
                  </Box> */}

                  {/* <Box mb={3}>
                    <Typography>Image</Typography>
                    <ImageArticleUploadTools
                      id={this.state.id}
                      image_link={this.state.image_link}
                    />
                  </Box> */}

                  <Box mb={3}>
                    <Typography>Status</Typography>
                    <FormikSelectField
                      id="is_active"
                      instanceId="is_active"
                      name="is_active"
                      options={optionsIsActive}
                      onChange={(e) => this.setState({ is_active: e.value })}
                      value={optionsIsActive.filter(
                        (obj) => obj.value === this.state.is_active
                      )}
                      onInputChange={(e) =>
                        this.keepSelectProField(formik.values)
                      }
                    />
                  </Box>

                  <Box m={3}></Box>

                  <Widget.Box textAlign="right" p={0}>
                    <Widget.Button type="submit" title="SIMPAN" />
                  </Widget.Box>
                </Widget.Box>
              </Widget.Paper>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default withRouter(ArticleEdit);

const optionsIsActive = [
  { value: 0, label: "Tidak Aktif" },
  { value: 1, label: "Aktif" },
];

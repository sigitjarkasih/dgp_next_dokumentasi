import React from "react";
import AppContext from "../../config/context/app";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarInfo() {
  const context = React.useContext(AppContext);

  const handleClose = () => {
    context.setSnackbar({ open: false, message: "" });
  };

  return (
    <>
      <Snackbar
        style={{ zIndex: 10000000000 }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        // open={context.snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
        //   severity={
        //     context.snackbar.severity === ""
        //       ? "info"
        //     //   : context.snackbar.severity

          onClose={handleClose}
          sx={{ width: "100%" }}
        >
          {/* {context.snackbar.message} */}
        </Alert>
      </Snackbar>
    </>
  );
}

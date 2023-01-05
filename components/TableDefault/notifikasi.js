import React from "react";
import SnackbarMaterialUI from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AppContext from "../../config/context/app";

export default function Snackbar() {
  const context = React.useContext(AppContext);

  const handleClose = () => {
    context.setSnackbar({ open: false, message: "" });
  };

  return (
    <div className="mySnackbar">
      <SnackbarMaterialUI
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={context.snackbar.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={context.snackbar.message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}

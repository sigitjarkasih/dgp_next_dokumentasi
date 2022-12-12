import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import ButtonDefault from "../ButtonDefault";

export default function ConfirmationDialog({
  title,
  child,
  open,
  onClose,
  onCancel,
  onOK,
}) {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>{child}</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel}>
          Cancel
        </Button>
        <ButtonDefault onClick={onOK} title="OK" />
      </DialogActions>
    </Dialog>
  );
}

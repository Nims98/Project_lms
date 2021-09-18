import * as React from "react";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import SignUp from "./LandingPage/SignUp";

export default function Basic() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <SignUp />
      </Modal>
    </div>
  );
}

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TokenViewModal from "../modals/TokenViewModal";

export default function SimbaCard({ props }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);
  return (
    <>
      <TokenViewModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        dataProps={props}
      />

      <Box
        border="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        onClick={handleOpen}
      >
        <Box sx={{ boxShadow: 3 }}>
          <img
            src={props ? props.img : ""}
            alt=""
            className="scales"
            style={{
              width: "15rem",
              height: "100%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Typography variant="caption" color="gray" mt={1}>
        {props ? props.title : ""}
        </Typography>
        <Typography variant="body2">{props ? props.token : ""}</Typography>
      </Box>
    </>
  );
}

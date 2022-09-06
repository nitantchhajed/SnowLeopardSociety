import { Box, Typography } from "@mui/material";
import React from "react";
import "../../css/socialcards.css";

export default function GalleryCards({ props }) {
  return (
    <Box className="boxs">
      <img src={props.imgs} alt="" className="imgs" />
      <Box display="flex" flexDirection="column" className="box2">
        <Typography variant="body1" fontWeight="bold" className="pt-6">
          {props.title}
        </Typography>
        <Typography
          variant="caption"
          fontWeight="400"
          className="pt-6"
        >
          {props.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

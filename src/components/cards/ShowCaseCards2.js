// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React from "react";
import "../../css/showCaseCards.css";

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from "@mui/material/Grid";
export default function ShowCaseCards({ props }) {
  
  const theme = useTheme();

  return (
      <Card sx={{ display: 'block',background:"red"}} >
      <Box>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box> */}
        
      </Box>
      
      <CardMedia
        component="img"
        sx={{ width: 151,display:"inline"}}
        image={props.imgs}
        alt="Live from space album cover"
        // style={{display:"inline"}}
      />
      <CardContent style={{display:"inline",background:"green"}}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        
    </Card>

    // <Box className = "mainBox" style={{background:"",display: "inline-block",
    // alignItems: "center",justifyContent: "center"}} >
    //   <Box className="boxed">
    //     <img src={props.imgs} alt="" className="images" style={{width:"160px",height:"150px"}} />
      
    //   </Box>
    //   <Box style={{ alignItems: "center",justifyContent: "center",background:"#808080",borderRadius:"6px", color:"black",width:"100%",height:"80px"}}>
    //       <Typography container variant="subtitle2" fontWeight="bold" className="pt-6" >
    //         {props.title}
    //       </Typography>
    //       <Typography
    //         style={{color:"black"}}
    //         variant="caption"
    //         fontWeight="400"
    //         color="#cdcdcd"
    //         className="pt-6"
    //       >
    //       {props.subtitle}
    //     </Typography>
    //   </Box>
    // </Box>
  );
}

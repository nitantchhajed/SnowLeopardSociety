import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../../css/showCaseCards.css";
export default function ShowCaseCards({ props }) {
  return (
    <Box className = "mainBox" style={{background:"",display: "inline-block",
    alignItems: "center",justifyContent: "center"}} >
      <Box className="boxed">
        <img src={props.imgs} alt="" className="images" style={{width:"160px",height:"150px"}} />
      
      </Box>
      <Box style={{ boxShadow:"0px 5px 15px rgba(0,0,0,0.5)",display:"flex",alignItems: "center",justifyContent: "center",flexDirection: 'column',background:"#F7FFFF",borderRadius:"6px", color:"black",width:"100%",height:"80px"}}>
          <Typography container variant="subtitle2" fontWeight="bold"  >
            {props.title}
          </Typography>
          
          <Typography
            justifyContent="center"
            style={{color:"black"}}
            variant="caption"
            fontWeight="400"
            color="#cdcdcd"
            // className="pt-6"
          >
          {props.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Line from "./Line";
import { useThemeContext } from "../../contexts/ThemeContext";
import blackScratch from '../../assets/pictures/blackScratch.png';
import tag1 from '../../assets/pictures/tag1.png';
import tag2 from '../../assets/pictures/tag2.png';
// import Checkbox from '@mui/core/Checkbox';


// import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

export default function FiltersBox({ props }) {
  const { theme } = useThemeContext();
  // const label1 = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [checked,setChecked] = React.useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log("changed")
  };

  return (
    <div style={{
      overflow:"auto",
      
      // background:"red"
    }}>
      <Accordion
        className="accordians"
        style={{
          backgroundColor: theme == "black" ? "black" : "white",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              style={{
                color: theme == "white" ? "black" : "white",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginLeft: "0",
            }}
          >
            <img src={blackScratch} alt="" className="filterIcon"/>
            <Typography
              sx={{ width: "100%" }}
              variant="body1"
              textTransform="uppercase"
              fontWeight="bold"
              // color="white"
              style={{
                color: theme == "white" ? "black" : "white",
  
              }}
            >
              {props.title}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="filterOptions" color="white">
            <form>
              <input
                type="text"
                placeholder="Search..."
                className="minSearch"
              />
            </form>
            {props.subtypes.map((e, k) => (
              <div key={k} className="pretty p-svg p-plain p-bigger p-smooth">
                {/* <input type="checkbox" style={{width:"20px",height:"20px"}}/> */}
                
                <div style={{padding:"0.4em"}}>
                <Checkbox
                  // {...label1}
                  // defaultChecked
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  sx={{
                    color: (theme == "black" ? "white" : "black"),
                    '&.Mui-checked': {
                      color: "#94dbe0",
                    },
                  }}
                />
                  <img src={theme == "black" ? tag1 : tag2} style={{width:"14px",height:"14px"}}/>
                  <label
                    style={{
                      color: theme == "black" ? "white" : "black",
                    }}
                  >
                    {e.replaceAll('_'," ")}
                  </label>
                </div>
              </div>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* <TreeView
      aria-label="file system navigator"
      sx={{
          height: "fit-content",
          flexGrow: 1,
          display: "flex",
          maxWidth: "100%",
          overflowX: "hidden",
          overflowY: "auto",
        }}
        >
      <TreeItem
        nodeId="1"
        style={{
            flexDirection: "row-reverse",
        }}
        className="treeBox"
        label={
            <div
            style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginLeft: "0",
            }}
          >
            <ChevronRightIcon />
            <Typography sx={{ width: "100%" }} variant="body2">
              type
            </Typography>
            <ChevronRightIcon
              color="inherit"
              style={{
                  marginLeft: "auto",
                  paddingRight: "2rem",
                  paddingBlock: "1rem",
                }}
                />
          </div>
        }
        >
        
      </TreeItem>
    </TreeView> */}
      <div
        style={{
          width: "100%",
          background: "white",
          marginBlock: ".2rem",
          height: "1px",
        }}
      ></div>
    </div>
  );
}

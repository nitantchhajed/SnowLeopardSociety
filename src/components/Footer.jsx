import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logoWhite from "../assets/pictures/logoWhite.png";
import logoBlack from "../assets/pictures/logoBlack.png";
import blackScratch from '../assets/pictures/blackScratch.png';
import SLS from '../assets/pictures/sls.png'
import "../css/header.css";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";
import twitter1 from "../assets/pictures/twitter1.png";
import twitter2 from "../assets/pictures/twitter2.png";
import discord1 from '../assets/pictures/discord1.png';
import discord2 from '../assets/pictures/discord2.png';
import instagram1 from "../assets/pictures/instagram1.png";
import instagram2 from "../assets/pictures/instagram2.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useEffect } from "react";

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const mobile = useMediaQuery("(min-width:320px) and (max-width:768px)");


  const pages = [
    {
      name: (
        <img
          src={theme == "white" ? twitter1 :twitter2}
          style={{
            width: "16px",
            padding: 0,
            // backgroundColor: theme == "white" ? "" : "white",
          }}
        />
      ),
      route: "",
    },
    {
      name: (
        <img
          src={theme == "white" ? instagram1 : instagram2}
          style={{
            width: "16px",
            padding: 0,
            // backgroundColor: 
          }}
        />
      ),
      route: "",
    },
    {
      name: (
        <img
          src={theme == "white" ? discord1: discord2}
          style={{
            width: "16px",
            padding: 0,
            // backgroundColor: 
          }}
        />
      ),
      route: "",
    },
  ];

  return (
    <Box
      position="relative"
    //   sx={
    //   }}
      elevation={0}
      style={{display:"flex",textAlign:"right",zIndex:"2000", 
        
    }}
    sx={{
        mt:{xl:"-120px",lg:"-100px",md:"-80px",sm:"",xs:"-80px"},
        ml:{xl:"92%",lg:"91%",md:"90%",sm:"88%",xs:"83%"},
        height:{xl:"90px",lg:"90px",md:"64px",sm:"60px",xs:"50px"},
        width:{xl:"90px",lg:"90px",md:"64px",sm:"60px",xs:"50px"},
        // background:{xl:"gray",lg:"orange",md:"blue",sm:"yellow",xs:"green"}
    }}  
    >
    <img src={blackScratch} style={{width:"100%",height:"100%"}}
             
    />
    </Box>
  );
};
export default Header;

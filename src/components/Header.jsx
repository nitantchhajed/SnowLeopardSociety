import * as React from "react";
import AppBar from "@mui/material/AppBar";
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
// import whiteScratch from '../assets/pictures/whiteScratch.png';
import SLS from '../assets/pictures/sls.png'
import "../css/header.css";
import { Router, useNavigate } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";
import twitter1 from "../assets/pictures/twitter1.png";
import twitter2 from "../assets/pictures/twitter2.png";
import discord1 from '../assets/pictures/discord1.png';
import discord2 from '../assets/pictures/discord2.png';
import instagram1 from "../assets/pictures/instagram1.png";
import instagram2 from "../assets/pictures/instagram2.png";
import sun from "../assets/pictures/sun.png";
import moon from "../assets/pictures/moon.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { useEffect } from "react";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [dropValue, setdropValue] = React.useState(null);
  const { theme, toggleTheme } = useThemeContext();
  const mobile = useMediaQuery("(min-width:320px) and (max-width:768px)");
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleToggleTheme = () => {
    if (theme == "white") toggleTheme("black");
    else toggleTheme("white");
  };

  const handleNavigation = (path) => {
    console.log(path);
    if(path == "https://www.instagram.com/slsnft/" || path == "https://twitter.com/SLSnft_"){
      window.open(path,"_blank");
        return; 
    }
    navigate(`/${path}`);
    // if (theme == "black") toggleTheme("black");
    // else toggleTheme("white");
  };

  useEffect(()=>{

  // web3.eth.getAccounts(function(err, accounts){
  //     if (err != null) console.error("An error occurred: "+err);
  //     else if (accounts.length == 0) console.log("User is not logged in to MetaMask");
  //     else console.log("User is logged in to MetaMask");
  // });
    // if(typeof window.ethereum !== 'undefined')
    // {
    //   window.ethereum.request({method:'eth_requestAccounts'})
    //   .then(res=>{
    //     console.log(res) 
    //   }) 
    // }
    // console.log("HELLO FROM HEADER")
    // window. ethereum. on('accountsChanged', (accounts)=>{
    //   console.log("my accounts are",accounts)
    //   if(accounts.length !== 0){
    //     console.log(accounts[0])
    //     // setWalletAddress(accounts[0])
    //   }
    //   else{
    //     // setWalletAddress('')
    //     console.log("no account found")
    //   }
    // })

    // window.ethereum.on('chainChanged', function(networkId){
    //   console.log('networkChanged',networkId);
      // if(networkId ==1 || networkId==4)
        // setNetwork(1)
      // else
        // setNetwork(2)
    // });
  },[])

  const options = [
    { name: "LICENSE", route: "license" },
    { name: "TERMS OF USE", route: "termandconditions" },
    { name:"FAQ",route:"faq"}
  ]
  const pages = [
    { name: "Gallery", route: "gallery" },
    { name: "THE RUNWAY", route: "runway" },
    { name:"Shop",route:"shop"},
    { name: "RoadMap", route: "roadMap" },
    { name: "SLS Story", route: "slsStory" },
    // { name: "More", route: "test" },
    // { name: "Upload", route: "upload" },
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
      route: "https://twitter.com/SLSnft_",
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
      route: "https://www.instagram.com/slsnft/",
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
    <AppBar
      position="fixed"
      sx={{
        // background: "transparent",
        // background: "black",
        background: theme == "black" ? "black" : "white",
        
        // mt:4,
        p:2,
      }}
      elevation={0}
      
    >
      <Box
        className="header"
        sx={{
          background: theme && theme,
          mt: 0,
          border: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar disableGutters className="headerChild">
          

          { mobile && <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              display: { xs: "flex", md: "none",lg:"none"},
              width: mobile && "fit-content",
              height: mobile && "100px",
              marginTop: mobile && "-23px",
              marginLeft:mobile && "-50px",
            }}
            onClick={() => (window.location.href = "/")}
          >
            <img src={theme == "black" ? SLS : SLS} alt="" />
          </Typography>
          }

          {/* SMALL NAV ICON */}
          {/* SMALL NAV END */}
          {mobile && <Box 
          // style={{marginLeft:mobile && "70%"}}
              sx={{
                ml:{xs:"%",sm:"76%",md:"100px"}
                  // flexGrow: 1,
                  // display: { xs: "flex", md: "none" },
                  // position: "absolute",
                  // right:2
              }}
            >
              <Button
                className={
                  `
                  navButton3 
                  ${
                  theme == "black" ? "navButtonWhite" : "navButtonBlack"
                }`}
                onClick={handleToggleTheme}
                sx={{
                  // mt: 1,
                  // display: { xs: "block", md: "none" },
                }}
                style={{
                  marginTop:mobile && "-25px",
                  // background:"red"
                  // marginLeft:mobile && "135px",
                }}
              >
                <img
                  src={sun}
                  // src={moon}
                  style={{
                    width: "16px",
                    padding: 0,
                  }}
                />
              </Button>

              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  position: "absolute",
                  top: 10,
                  right: -20,
                  m: 0,
                }}
                className="menus"
                style={{
                  // width:"40px",
                  // background:'red',
                  // marginLeft:"40px",
                  display:"flex"
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  className={`navButton ${
                    theme == "black" ? "navButtonWhite" : "navButtonBlack"
                  }`}
                  style={{alignItems:"right",width:"200%"}}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                    p: 0,
                  }}
                  className="grayGlass"
                >
                  <Box width="95vw" height="100%"  style={{display:"block"}} >
                    <Box  style={{height:"50px",display:"block",width:"20px",marginTop:"10px",verticalAlign: "right",textAlign:"right",width:"90vw"}} >
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleCloseNavMenu}
                        className={`navButton ${
                          theme == "black" ? "navButtonBlack" : "navButtoWhite"
                        }`}
                        style={{
                                width:"80px",
                                height:"40px",
                                // background:"#D3D3D3",
                              }}
                        
                      >
                          <CloseIcon />
                      </IconButton>
                      </Box>
                    {pages.map((page, k) => (
                      <MenuItem
                        onClick={(e) => {handleCloseNavMenu();handleNavigation(page.route.toString())}}
                        key={k}
                        style={{height:"50px"}}
                        // className={`navButton ${
                        //   theme == "black" ? "navButtonBlack" : ""
                        // }`}
                        sx={{
                          // borderBottom: "1px solid #dccbcd",
                          // background:'red'
                        }}
                        className="mobileNav"
                      >
                        <Button
                          className="navButton"
                          textAlign="center"
                          fontSize="small"
                          fontWeight="400"
                          style={{width:'90%',background:"#DEDEDE"}}
                          // fontSize="200px"
                          pl={4}
                        >
                          
                          {page.name}
                        </Button>
                      </MenuItem>
                    ))}
                    {options.map((page, k) => (
                      <MenuItem
                        onClick={(e) => {handleCloseNavMenu();handleNavigation(page.route.toString())}}
                        key={k}
                        style={{height:"50px"}}
                        // className={`navButton ${
                        //   theme == "black" ? "navButtonBlack" : ""
                        // }`}
                        sx={{
                          // borderBottom: "1px solid #dccbcd",
                          // background:'red'
                        }}
                        className="mobileNav"
                      >
                        <Button
                          className="navButton"
                          textAlign="center"
                          fontSize="small"
                          fontWeight="400"
                          style={{width:'90%',background:"#DEDEDE"}}
                          // fontSize="200px"
                          pl={4}
                        >
                          
                          {page.name}
                        </Button>
                      </MenuItem>
                    ))}
                  </Box>
                </Menu>
              </Box>
            </Box>
          }

          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => (window.location.href = "/")}
            href="#"
            sx={{
              mt:1,
              mr: 2,
              display: { xs: "none", md: "none",lg:"flex" },
            }}
          >
            {/* <img width="60px" height="60px" src={theme == "black" ? blackScratch : blackScratch} alt="" /> */}
            <img src={theme == "black" ? logoWhite : logoBlack} alt="" />
          </Typography> 
          <Typography sx={{
              mt:1,
              mr: 2,
              display: { xs: "none", md: "flex",lg:"none",xl:"none" },
            }}
            onClick={() => (window.location.href = "/")}
            >
            <img style={{height:"100px",cursor:"pointer"}} src={theme == "black" ? SLS : SLS} alt="" />

          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", flex: 1 },
            }}
            container justifyContent="flex-end"
            style={{background:"",}}
          >
            <Box
              // className="menus"
              sx={{
                display: { xs: "none", md: "flex" },
                // background:"red"
              }}
              // style={{background:"green",width:""}}
              // background="red"
            >
              {pages.map((page, k) => (
                <Button
                  key={k}
                  onClick={() => handleNavigation(page.route.toString())}
                  className={`navButton ${
                    theme == "black" ? "navButtonWhite" : "navButtonBlack"
                  }`}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                className={`navButton2 ${
                  theme == "black" ? "navButtonWhite" : "navButtonBlack"
                }`}
                onClick={handleToggleTheme}
              >
                <img
                  src={sun}
                  // src={moon}
                  style={{
                    width: "16px",
                    padding: 0,
                  }}
                />
              </Button>
              <Box
                sx={{
                  mt: 1,
                  height: "2rem",
                }}
              >
                <select
                  value={"/more"}
                  id="dd"
                  className="opt"
                  style={{
                    paddingBlock: ".3rem",
                    background: theme == "black" ? "black" : "white",
                    // fontSize: ".8rem",
                    fontSize: ".8rem",
                    fontWeight: "bold",
                    color: theme == "white" ? "black" : "white",
                  }}
                  onChange={() => {
                    setdropValue(document.getElementById("dd").value);
                    if (document.getElementById("dd").value != "/more") {
                      navigate(`${document.getElementById("dd").value}`);
                    }
                  }}
                >
                  <option
                    value={"/more"}
                    className="opt"
                    disabled
                    style={{
                      color: theme == "white" ? "black" : "white",
                      background: theme == "black" ? "black" : "white",
                      fontSize:'.8rem'
                    }}
                  >
                    MORE
                  </option>
                  {/* <option value={"/faq"}>FAQ</option> */}
                  <option value={"/slsStory"} className="opt">
                    <Typography
                      sx={{
                        color: theme == "white" ? "black" : "white",
                      }}
                    >
                      SLS STORY
                    </Typography>
                  </option>
                  <option value={"/license"} className="opt">
                    <Typography
                      sx={{
                        color: theme == "white" ? "black" : "white",
                      }}
                    >
                      LICENSE
                    </Typography>
                  </option>
                  <option value={"/termandconditions"} className="opt">
                    <Typography
                      sx={{
                        color: theme == "white" ? "black" : "white",
                      }}
                    >
                      {/* MANIFESTO */}
                      TERMS OF USE
                    </Typography>
                  </option>
                  <option value={"/faq"} className="opt">
                    <Typography
                      sx={{
                        color: theme == "white" ? "black" : "white",
                      }}
                    >
                      {/* MANIFESTO */}
                      FAQ
                    </Typography>
                  </option>
                </select>
              </Box>
            </Box>
          </Box>


        </Toolbar>
      </Box>
    </AppBar>
  );
};
export default Header;

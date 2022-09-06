import React, { useState,useEffect } from "react";
import Cheemdas from "../assets/pictures/Cheemdas.png";
import "../css/backyard.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ShowCaseCards from "../components/cards/ShowCaseCards";
import maps from "../assets/pictures/map.png";
import loc from "../assets/pictures/loc.png";
import SocialCards from "../components/cards/SocialCards";
import Line from "../components/other/Line.js";
import { useThemeContext } from "../contexts/ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import One from "../assets/pictures/one.png";
import Two from "../assets/pictures/two.png";
import Three from "../assets/pictures/three.png";
import Four from "../assets/pictures/four.png";
import Five from "../assets/pictures/five.png";
import Six from "../assets/pictures/six.png";
import arrow from "../assets/pictures/arrow.png";

export default function Runway() {
  const [value, setValue] = React.useState(0);
  let lastScrollTop = 0;
  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
          if(value > 0)
            handleChange('',value-1);
          else
            handleChange('',3)  
          console.log(e.keyCode)
          break;
        case 40:
          if(value<3)
            handleChange('',value+1)
          else
            handleChange('',0)  
          break;
    }
  };

  document.addEventListener("wheel", event => {
      if(Math.sign(event.deltaY) ==-1){
        if(value > 0)
            handleChange('',value-1);
          else
            handleChange('',3)  
      }
      else if(Math.sign(event.deltaY) == 1){
        if(value<3)
            handleChange('',value+1)
          else
            handleChange('',0)
      }
  });

  document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop) 
    {
       // downscroll code
      if(value > 0)
       handleChange('',value-1);
      else
       handleChange('',3)
    } 
    else {
       // upscroll code
      if(value<3)
        handleChange('',value+1)
      else
        handleChange('',0)
    }
    
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
 }, false);

  const { theme } = useThemeContext();
  const mobile = useMediaQuery("(min-width:320px) and (max-width:374px)");

  let sCase = [
    {
      imgs: One,
      title: "@Samirbadi",
      subtitle: "Co-Founder",
    },
    {
      imgs: Two,
      title: "@Metaversehands",
      subtitle: "Co-Founder",
    },
    {
      imgs: Three,
      title: "@Jackbarr",
      subtitle: "Social Media Community Manager",
    },
    {
      imgs: Four,
      title: "@jjj",
      subtitle: "lead artist",
    },
    {
      imgs: Five,
      title: "@ms",
      subtitle: "Marketing",
    },
    {
      imgs: Six,
      title: "@tsj",
      subtitle: "Dev",
    },
  ];
  let socialCards = [
    {
      // imgs: "https://www.azuki.com/rh/manifesto.png",
      imgs: Five,
      title: "GALLERY",
      subtitle: "10000 simbas",
    },
    {
      imgs: Two,
      title: "ROADMAP",
      subtitle: "Check out our plans!",
    },
    {
      imgs: Six,
      title: "TWITTER",
      subtitle: "COMMUNITY",
    },
    {
      imgs: Four,
      title: "DISCORD",
      subtitle: "COMMUNITY",
    },
  ];

  return (
    <div
      style={{
        overflowY: "auto",
        width: "100%",
        display: "flex",
        background: theme == "black" ? "black" : "white",
        // background: 'black',
        minHeight: "100vh",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        height="100vh"
        overflowY="auto"
        justifyContent={"start"} // bgcolor="red"
      >
        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            zIndex: "2",
          }}
          height="100%"
          overflowY="auto"
          display="flex"
          // flexDirection="column"
          alignItems="start"
          className="menu"
        >
          {/* VERTICAL TAB PANEL  */}
          <Box display="flex" alignItems="center" position="sticky" >
            <Box
              sx={{
                display: "flex",
                width: "fit-content",
              }}
            >
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                className="tbName"
                onChange={handleChange}
                TabIndicatorProps={{
                  style: { background: "#94dbe0", width: "100%" },
                }}
                sx={{
                  borderRight: 1,
                  borderColor: "divider",
                  background: "black",
                  border: "1px solid white",
                }}
              >
                <Tab label="" className="tabs" {...a11yProps(0)} />
                <Tab label="" className="tabs" {...a11yProps(1)} />
                <Tab label="" className="tabs" {...a11yProps(2)} />
                <Tab label="" className="tabs" {...a11yProps(3)} />
              </Tabs>
            </Box>
          </Box>

          {/* VERTICAL TAB PANEL  */}
          {/* Tabs */}
          <Box flexGrow={1} height="70%" style={{}}>
            <TabPanel className="tabItem" value={value} index={0}>
              <Typography
                variant="h2"
                className="heading"
                sx={{
                  fontSize: { xs: "x-large", md: "3.2rem" },
                  color: theme == "white" ? "black" : "white",
                }}
              >
                <span >THE RUNWAY</span>
                {/* <br /> */}
                {/* <span style={{margin:"1px"}}>/span> */}
              </Typography>
              <div
                className="spaced"
                style={{
                  color: theme == "white" ? "black" : "white",
                }}
              >
                {/* <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: "small", md: ".8rem" },
                  }}
                >
                 The Backstage

                </Typography> */}
                <Typography
                  // variant="overline"
                  sx={{
                    // fontSize: { xs: "xx-small", md: ".8rem" },
                    // fontVariantCaps:"normal"
                    fontSize:"20px"
                  }}
                >
                  Snow Leopard Society “SLS” is a fashion brand  being built by
                  the community aiming to break the barriers! Incorporating Web3
                  technology and taking fashion to new heights.
                </Typography>
                <br />
                <Typography
                  // variant="overline"
                  sx={{
                    // fontSize: { xs: "xx-small", md: ".8rem" },
                    fontSize:"20px"
                  }}

                >
                  SLS is a collection of 10,000 full body high resolution 3D art
                  models with hand drawn streetwear clothes.
                  <br/>
                  These beautiful 3D art models give you membership and access to world of Web3
                  fashion and metaverse experiences.
                </Typography>
                <br />
                <br />
                <Typography
                  // variant="overline"
                  sx={{
                    // fontSize: { xs: "xx-small", md: ".8rem" },
                    fontSize:"20px"
                  }}
                >
                  Ownership in SLS is the beginning of a new age of fashion, one
                  driven by the people and one that will shape fashion trends in
                  the metaverse.
                </Typography>
                <br />
                <br />
                <Typography
                  // variant="overline"
                  sx={{
                    // fontSize: { xs: "xx-small", md: ".8rem" },
                    
                    fontSize:"20px"
                  }}
                >
                  The Runway represents an area where fashion, technology ideas
                  and culture come together from the audience and backstage to
                  create enchantment, to be celebrated and shaped by the
                  audience, the community.
                </Typography>
                <br />
                <br/>
                <Typography
                  variant="overline"
                  sx={{
                    // fontSize: { xs: "xx-small", md: ".8rem" },
                    fontSize:"20px"
                  }}
                >
                  Be part of the change, break the barriers, join the community
                  and Enter the Runway!
                </Typography>
                <br />

                {/* <Typography
                  mt={5}
                  variant="subtitle2"
                  fontWeight="bold"
                  className="scripture"
                >
                  A brand for the metaverse. By the community.
                </Typography>
                <button
                  className="readMore"
                  style={{
                    color: theme == "white" ? "black" : "white",
                  }}
                >
                  Read More
                </button> */}
              </div>
            </TabPanel>
            {/* Second tab */}
            <TabPanel className="tabItem" value={value} index={1}>
             
                <Box
                  sx={{
                    width: { xs: "90%", sm: "110%", lg: "90%" },
                  }}
                  className="mt-2r"
                >
                    <Box sx={{
                      display:{xl:"none",lg:"none",md:"none"}
                    }}>
                <Typography
                  variant="h2"
                  className="heading"
                  sx={{
                    fontSize: { xs: "x-large", md: "2.5rem" },
                    color: theme == "white" ? "black" : "white",
                  }}
                >
                  <span> THE BACKSTAGE</span>
                  <Typography
                  className="spaced para"
                  sx={{
                    width: { xs: "90%", lg: "100%", },
                    color: theme == "white" ? "black" : "white",
                    fontSize: { xs: "small", md: "1.8rem" },
                    // mt:"-10px"
                  }}
                  >
                  The team working hard to deliver value
                </Typography>
                </Typography>

                <br/>
                <Typography style={{color: theme == "white" ? "black" : "white"}}
                sx={{fontSize:{xs:"20px",sm:"21px",md:"22px",lg:"24px",xl:"25px"}}}
                >
                Co-founded by @samirbadi and @metaversehands SLS NFT models are unique hand drawn detailed full body pieces of 3D art, each with its own special traits and accessories.
                </Typography>
                <br/>
                <Typography style={{color: theme == "white" ? "black" : "white",}}
                  sx={{fontSize:{xs:"20px",sm:"21px",md:"22px",lg:"24px",xl:"25px"}}}
                >
                  The team together with our talented 3D artists worked very hard together to produce a unique collection of beautiful Fully body 3D SLS models.
                  With a combined of over 20 years backgrounds in digital technology, crypto, marketing and administration, the team vows on community building to build the decentralized fashion brand of the future.
                </Typography>
                  </Box> 
                  <Grid container spacing={1} >
                    {sCase.map((e, k) => (
                      <Grid item xs={12} sm={6} md={6} lg={6} xl={4} style={{}}>
                        <Box >
                          <ShowCaseCards props={e} key={k} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  
                
                  {/* <button className="readMore">The Simba Community</button> */}
                </Box>
            </TabPanel>
            <TabPanel className="tabItem" value={value} index={2}>
              <Typography
                variant="h2"
                className="heading"
                sx={{
                  fontSize: { xs: "x-large", md: "3.2rem" },
                  color: theme == "white" ? "black" : "white",
                }}
              >
                <span>BUILDING A GLOBAL COMMUNITY</span>
              </Typography>
              <Typography
                variant="subtitle2"
                className="spaced para"
                sx={{
                  width: "80%",
                  color: theme == "white" ? "black" : "white",
                  // fontSize: { xs: "xx-small", md: "1rem" },
                  fontSize:"20px"
                }}
              >
                SLS will lead to build a global fashion brand built by community for the people
              </Typography>
              <div
                style={{
                  position: "relative",
                  // background:"red",
                  
                  marginTop:"-1em"
                }}
              >
                <img className="maps" src={maps} alt="" />
                {/* <div
                  style={{
                    position: "absolute",
                    top: "30%",
                    left: "32%",
                    cursor: "pointer",
                  }}
                >
                  <img src={loc} alt="" className="locs" />
                </div> */}
                {/* <div
                  style={{
                    position: "absolute",
                    top: "40%",
                    left: "18%",
                    cursor: "pointer",
                  }}
                >
                  <img src={loc} alt="" className="locs" />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "37%",
                    cursor: "pointer",
                  }}
                >
                  <img src={loc} alt="" className="locs" />
                </div> */}
              </div>
              {/* {" "} */}
              {/* <button className="readMore">Rabbit Hole</button> */}
            </TabPanel>
            <TabPanel className="tabItem mt-2r" value={value} index={3}>
              <Typography
                variant="h2"
                className="heading"
                sx={{
                  fontSize: { xs: "x-large", md: "3.2rem" },
                  color: theme == "white" ? "black" : "white",
                }}
              >
                <span>
                  Take The Step{" "}
                  {/* <br /> */}
                </span>
              </Typography>
              <Typography
                variant="subtitle2"
                className="spaced para"
                sx={{
                  width: { xs: "90%", lg: "60%" },
                  color: theme == "white" ? "black" : "white",
                  fontSize: { xs: "xx-small", md: "1rem" },
                }}
              >
              Be part of a revolution. 
              A revolution that rewrites the rules of an iconic,
              timeless industry...
              <br/>
              Take the step.
                {/* To the ones with the courage to jump down a peculiar rabbit
                hole. One that pulls you away from a world that's created by
                many and owned by few... */}
              </Typography>
              <Line />
              <Box
                sx={{
                  height: "1px",
                  width: { xs: "90%", sm: "100%", lg: "70%" },
                }}
                className="mt-1r"
              >
                <Box
                  width="100%"
                  className="mt-2r"
                  style={{
                    color: theme == "white" ? "black" : "white",
                  }}
                >
                  <Grid container spacing={2}>
                    {socialCards.map((e, k) => (
                      <Grid item xs={12} sm={6}>
                        <Box>
                          <SocialCards props={e} key={k} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                  {/* <button className="readMore">The Simba Community</button> */}
                </Box>
              </Box>
            </TabPanel>
          </Box>

          {/* Tabs */}
        </Box>
      </Box>

      {value != 1 ?
        <Box
          sx={{
            height: "90%",
            width: { xs: "50%", lg: "50%" },
            display: "flex",
            // justifyContent: "left",
            // alignItems: "end",
            position: "fixed",
            transform: 'translate("-50%","-50%")',
            // right: { xs: "10px", sm: "70%", md: "40%", lg: "10%", xl: "-100px" },
            // bottom: { xs: "0", lg: "-100px" }, 
            // right:{xl:"-100px",lg:"10%"},
            left:{xs:"-40%",sm:"20px",md:'42%',lg:"48%",xl:"50%"},
            // marginLeft:"200px",
            // margin:"auto",      
            // margin: "0%",
            padding: "0%",
            opacity: { xs: "40%", md: "100%" },
          }}
        >
          <img src={Cheemdas} alt="" className="cheemdas" style={{height:"690px",marginTop:"155px"}} />
          {/* <img
            src={arrow}
            style={{
              position: "absolute",
              top:'30%',
              right:'70%'
            }}
          /> */}
        </Box>:
        
        <Box sx={{
          height: "90%",
          display:{xs:"none",sm:"none",md:"block",lg:"block",xl:"block"},
          width: { lg: "40%",md:"40%" },
          justifyContent: "left",
          alignItems: "end",
          position: "fixed",
          transform: 'translate-50%","-50%")',
           marginTop:{md:"200px"},
          marginLeft:{md:"-300px"},
          // right: { xs: "120%", sm: "70%", md: "40%", lg: "10%", xl: "90px" },
          //top:{xl:"200px",lg:"180px",md:"160px"}, 
          //left:{xs:"-40%",sm:"20px",md:'54%',lg:"48%",xl:"50%"},   
           // bottom: { xs: "0",md:"10%", lg: "10%" },       
          // margin: "0%",
          // padding: "0%",
          opacity: { xs: "40%", md: "100%" },
        }}>
                <Typography
                  variant="h2"
                  className="heading"
                  sx={{
                    fontSize: { xs: "x-large", md: "2.5rem" },
                    color: theme == "white" ? "black" : "white",
                  }}
                >
                  <span> THE BACKSTAGE..</span>
                  <Typography
                  className="spaced para"
                  sx={{
                    width: { xs: "90%", lg: "100%", },
                    color: theme == "white" ? "black" : "white",
                    fontSize: { xs: "small", md: "1.8rem" },
                    // mt:"-10px"
                  }}
                  >
                  The team working hard to deliver value
                </Typography>
                </Typography>

                <br/>
                <Typography style={{color: theme == "white" ? "black" : "white"}}
                sx={{fontSize:{xs:"20px",sm:"21px",md:"22px",lg:"24px",xl:"25px"}}}
                >
                Co-founded by @samirbadi and @metaversehands SLS NFT models are unique hand drawn detailed full body pieces of 3D art, each with its own special traits and accessories.
                </Typography>
                <br/>
                <Typography style={{color: theme == "white" ? "black" : "white",}}
                  sx={{fontSize:{xs:"20px",sm:"21px",md:"22px",lg:"24px",xl:"25px"}}}
                >
                  The team together with our talented 3D artists worked very hard together to produce a unique collection of beautiful Fully body 3D SLS models.
                  With a combined of over 20 years backgrounds in digital technology, crypto, marketing and administration, the team vows on community building to build the decentralized fashion brand of the future.
                </Typography>
        </Box> 
      }
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {/* {value === index && ( */}
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      {/* )} */}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

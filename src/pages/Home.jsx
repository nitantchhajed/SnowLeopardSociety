import React from "react";
import "../css/home.css";
import vid from "../assets/videos/Video.mp4";
import kitty from "../assets/pictures/kitty.png";
import kitty2 from '../assets/pictures/kittym.png'
import homeBg from "../assets/pictures/homeBg.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import { useThemeContext } from "../contexts/ThemeContext";

function Home() {
  const { theme } = useThemeContext();

  React.useEffect(() => {
    // setTimeout(() => {
    //   document.getElementById("vids").click();
    // }, 1000);
    setTimeout(()=>{
      const ele = document.getElementById('vids');
      // ele.muted = false;
      // ele.play = true;
    },1000)
    // console.log(ele.muted)
    // ele.muted = false;
    
    
  }, []);
  const mobile = useMediaQuery("(min-width:320px) and (max-width:768px)");

  return (
    <div className="home" style={{height:"100vh",backgroundColor: theme == "black" ? "black" : "white",}}>
      {!mobile ? (
        <div className="vidContainer">
          <video
            playsinline
            className="vids"
            id = "vids"
            // controls
            autoPlay
            muted
            preLoad="auto"
            loop={true}
            style={{
              width: "100%",
              marginTop:"55px",
              height: "100%",
              // marginLeft:"200px",
              position: "absolute",
              // marginTop:"60px",
              // background:"green",
              backgroundColor: theme == "black" ? "black" : "white",
              // "background-color: #fff;"
            //   right: 0,
            //   top: 0,
            //   left: 0,
            //   bottom: 0,
            //   overflow: "hidden",
            //   outline :'none'
            }}
          >
            <source src={vid} type="video/mp4" ></source>
          </video>
          {/* <img src={theme != "black" ? kitty2 : kitty} alt="" className="kitty" style={{marginLeft:"-3.6%"}} /> */}
        </div>
      ) : (
        <Box
          width="100vw"
          height="100vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundColor: theme == "black" ? "black" : "white",
            marginTop:"70px"
          }}
        >
          <img
            src={homeBg}
            style={{
              width: "360px",
              height:"90%",
              objectFit: "fill",
            }}
          />
        </Box>
      )}
    </div>
  );
}

export default Home;

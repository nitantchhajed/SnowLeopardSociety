import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function FAQ() {
  const { theme } = useThemeContext();
  const mobile = useMediaQuery("(min-width:320px) and (max-width:480px)");
  const tablet = useMediaQuery("(min-width:480px) and (max-width:768px)");
  return (
    <Box
      sx={{
        height: "98.5vh",
        width:"100vw",
        // background:"green",
        backgroundColor:theme == "white" ?  "white":"black" ,
        marginTop:"6vh",
        alignItems: "center",
      }}
    >
      <Box width="100%" height="100%">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={1}
          columnGap={0}
          style={{
            fontSize:mobile?"60px":tablet?"160px":"180px",
            color:theme == "black" ?  "white":"black" ,
            // marginTop:"1em",
            background:theme=="white"?"white":"black",
            fontFamily:"monospace"
          }}
          // sx={{
          //   height:"55vh",
          //   overflowY:'auto'

          // }}
        >
          {/* <img src={SLSbg} style={{height:"98.5vh",width:"100%"}}/> */}
          <div style={{zIndex:"100",position :"absolute", color:theme=="white"?"grey":"white",opacity:"0.4",marginLeft:"25%",marginTop:"20%"}}>
            COMING SOON
          </div>
        </Grid>
      </Box>   
      {/* <Grid
        container
        sx={{
          height: "fit-content",
          width: "100%",
        }}
        spacing={1}
      >
        <Grid item md={6}>
          <Box width="fit-content" bgcolor="#94dbe0">
            <Typography
              sx={{
                fontSize: { xs: "large", md: "2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                pt: 1,
                pl: { xs: 2, md: 6 },
              }}
            >
              ART DIRECTOR, BRANDING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "small", md: "1.2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                width: { xs: "95%", md: "75%" },
                pl: { xs: 2, md: 6 },
                pb: 1,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam “.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box width="fit-content" bgcolor="#94dbe0">
            <Typography
              sx={{
                fontSize: { xs: "large", md: "2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                pt: 1,
                pl: { xs: 2, md: 6 },
              }}
            >
              ART DIRECTOR, BRANDING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "small", md: "1.2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                width: { xs: "95%", md: "75%" },
                pl: { xs: 2, md: 6 },
                pb: 1,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam “.
            </Typography>
          </Box>
        </Grid>{" "}
        <Grid item md={6}>
          <Box width="fit-content" bgcolor="#94dbe0">
            <Typography
              sx={{
                fontSize: { xs: "large", md: "2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                pt: 1,
                pl: { xs: 2, md: 6 },
              }}
            >
              ART DIRECTOR, BRANDING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "small", md: "1.2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                width: { xs: "95%", md: "75%" },
                pl: { xs: 2, md: 6 },
                pb: 1,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam “.
            </Typography>
          </Box>
        </Grid>{" "}
        <Grid item md={6}>
          <Box width="fit-content" bgcolor="#94dbe0">
            <Typography
              sx={{
                fontSize: { xs: "large", md: "2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                pt: 1,
                pl: { xs: 2, md: 6 },
              }}
            >
              ART DIRECTOR, BRANDING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "small", md: "1.2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                width: { xs: "95%", md: "75%" },
                pl: { xs: 2, md: 6 },
                pb: 1,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam “.
            </Typography>
          </Box>
        </Grid>{" "}
        <Grid item md={6}>
          <Box width="fit-content" bgcolor="#94dbe0">
            <Typography
              sx={{
                fontSize: { xs: "large", md: "2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                pt: 1,
                pl: { xs: 2, md: 6 },
              }}
            >
              ART DIRECTOR, BRANDING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "small", md: "1.2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                width: { xs: "95%", md: "75%" },
                pl: { xs: 2, md: 6 },
                pb: 1,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam “.
            </Typography>
          </Box>
        </Grid>{" "}
        <Grid item md={6}>
          <Box width="fit-content" bgcolor="#94dbe0">
            <Typography
              sx={{
                fontSize: { xs: "large", md: "2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                pt: 1,
                pl: { xs: 2, md: 6 },
              }}
            >
              ART DIRECTOR, BRANDING
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "small", md: "1.2rem" },
                color: theme == "white" ? "black" : "white",
                fontWeight: "bold",
                width: { xs: "95%", md: "75%" },
                pl: { xs: 2, md: 6 },
                pb: 1,
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam “.
            </Typography>
          </Box>
        </Grid>
      </Grid> */}
    </Box>
  );
}

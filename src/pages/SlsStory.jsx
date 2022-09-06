import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";
import cheemsGroup from "../assets/pictures/cheemsGroup.png";

export default function SlsStory() {
  const { theme } = useThemeContext();

  return (
    <Box
      sx={{
        height: "100vh",
        pt: { xs: 6, md: 12 },
        px: { xs: 2, md: 5 },
        background: theme && theme,
        overflowY: "auto",
      }}
    >
      <Grid container   style={{marginTop:"2.5em"}} >
        <Grid
      
          item
          md={6}
          lg={4}
          sx={{
            px: { xs: 2, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "x-large", md: "3.2rem" },
              color: theme == "white" ? "black" : "white",
              fontWeight: "bold",
              my: 2,
            }}
          >
            SLS STORY
          </Typography>{" "}
          <Typography
            sx={{
              fontSize: { xs: "medium", md: "1.3rem" },
              mt: 3,
              color: theme == "white" ? "black" : "white",
            }}
          >
            Afraid of extinction… We escaped the snowy mountains And ventured
            into the lower grounds, To enter a new world.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "medium", md: "1.3rem" },
              mt: 3,
              color: theme == "white" ? "black" : "white",
            }}
          >
            A new world of decentralized everything No Limits, no prejudice Hold
            onto your dreams
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "medium", md: "1.3rem" },
              mt: 3,
              color: theme == "white" ? "black" : "white",
            }}
          >
            It is the audience not the judges, The community that shapes trends
            in fashion. A new wave of voices…
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "medium", md: "1.3rem" },
              mt: 3,
              color: theme == "white" ? "black" : "white",
            }}
          >
            Together, we are indivisible. Together, we build new trends.
            Together, we take streetwear fashion to new heights.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "medium", md: "1.3rem" },
              color: theme == "white" ? "black" : "white",
              mt: 3,
            }}
          >
            Do you dare enter the Runway?
          </Typography>
        </Grid>
        <Grid 
          style={{marginTop:"4.6em"}}
          item
          md={6}
          lg={8}
          sx={{
            pb: { xs: 6, md: 0 },
          }}
        >
          <img
            src={cheemsGroup}
            alt=""
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

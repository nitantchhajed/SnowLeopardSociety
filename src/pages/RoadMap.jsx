import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

import spirals from "../assets/pictures/spirals.png";
import people from "../assets/pictures/people.png";
import head from "../assets/pictures/head.png";
import halfCheemda from "../assets/pictures/halfcheemda.png";
import { useThemeContext } from "../contexts/ThemeContext";
import "../css/roadMap.css"

export default function RoadMap() {
  const { theme } = useThemeContext();

  return (
    <Box
      className="RoadMapContainer"
      sx={{
        height: "100vh",
        // overflow: "hidden",
        overflow:"auto",
        pt: "18vh",
        px: { xs: "1rem", lg: "4rem" },
        color: "white",
        //  background: theme ?theme:'black',
        background: theme == "black" ? "black" : "white",
      }}
    >
      <Typography
        variant="h2"
        className="heading"
        sx={{
          color: theme == "white" ? "black" : "white",
          fontSize: { xs: "x-large", md: "3.2rem" },
        }}
      >
        <span>ROAD MAP</span>
      </Typography>

      <Typography
        variant="body1"
        fontSize="medium"
        my="1rem"
        sx={{
          width: { xs: "55%", lg: "40%" },
          zIndex: 2,
          color: theme == "white" ? "black" : "white",
        }}
      >
        We are guided by a simple yet profound vision - create the largest
        decentralized brand for the metaverse that is built and owned by the
        community.
      </Typography>

      {/* CARDS  */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          minHeight: { lg: "60vh" },
          flex: 1,
          // background: "red",
          position: "relative",
        }}
        id="parentDiv"
      >
        <Grid container columnSpacing={1}>
          {/* <img
            src={halfCheemda}
            alt=""
            style={{
              zIndex: 0,
              objectFit: "contain",
              width: "auto",
              position: "absolute",
              right: 0,
              bottom: "100%",
            }}
          /> */}
          {/* GRID 1 */}
          <Grid item md={8} sm={12} className="RoadMapContent">
            <div style={{height:"500px",overflow:"auto"}} className="RoadmapText">
              <Typography
                className="RoadMapText"
                sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}
              >
                1. Mission and Vision
                <br />
                Mission: decentralize streetwear fashion using web 3 where the
                community defines and trends fashion. Educate, inspire and build
                the next generation of fashion designers, artists and builders in
                the world of augmented reality.
              </Typography>
              <Typography
                className="RoadMapText"
                sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}
              >
                Vision: to become a leader in building a metaverse streetwear
                fashion community, building an all-inclusive culture that explores
                the world of augmented reality.
                <br />
              </Typography>

              <Typography
                className="RoadMapText"
                sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}
              >
                <br />
                2. The Community
                <br />
                The community is the most important component of SLS. It will shape our vision and the future decisions. SB  Collection is a clothing line of SLS. SLS members will be shape the direction of clothing launch, picking from designs from our lead designers. After we sellout, holders will be airdropped a SLS Pass. This SLS Pass will serve as a discount, varying in rarity by its percentage which will last on SB Collection as long as we're producing.

                <br />
                The representation of Snow Leopard will not go unrecognized. After
                we are sold out we will send some proceeds to a foundation to help
                this endangered species.
              </Typography>
              
              <Typography 
              className="RoadMapText"
              sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}>
                  As the SLS community grows we want to hold larger NFT gatherings than just meetups. 
                  A long-term goal we want to incorporate to our community and our clothing is concerts with 
                  iconic names in fashion! Our community will have special access to special drops, free sample clothing, 
                  and future streetwear collaborations!
              </Typography>
              
              <Typography
                className="RoadMapText"
                sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}
              >
                <br />
                3. SB Clothing
                <br />
                  The SB Clothing line is the official clothing line for Snow Leopard Society.
                  The collection is a Streetwear line that plans to drop a new collection frequently, 
                  once up and running, in limited quantities. Through the use of fashion influencers,
                  pop-up events, and great marketing, SB Collection will compete with other Streetwear companies
                <br />
                SB Collection will be one the first streetwear collections backed by Web3 technology. 
                It will connect our community to building the next generation of designers, artists and builders.
              </Typography>
              <Typography
                className="RoadMapText"
                sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}
              >
                <br />
                4. Metaverse
                <br />
                Working closely with a Metaverse development company , our presence in the Metaverse is almost certain.
                SLS will be proud to share these experiences with its community. SLS will be present in the major 
                Metaverses with a plan to create a virtual store and offer exciting experiences.  Becoming a SLS member 
                means to be a part of the community that builds the Metaverses fashion culture. Exciting use of Augmented Reality is not far away!

              </Typography>
              <Typography
                className="RoadMapText"
                sx={{
                  fontSize: { xs: "medium", md: "1.3rem" },
                  mt: 3,
                  px: 6,
                  fontWeight: "500",
                  color: theme == "white" ? "black" : "white",
                }}
              >
              Enter the Runway and Get Ready to Take Off!!
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} sm={12} style={{width:"80%",margin:"auto"}}>
            <img
              src={people}
              style={{
                widht: "500px",
                height: "500px",
              }}
            
            />
               <Typography
               style={{borderRadius:"10px"}}
              sx={{
                fontSize: { xs: "large", md: "1.5rem" },
                mt: 3,
                px: 6,
                fontWeight: "500",
                background:'#f4ba00'
                ,
                py:2,
                px:1,
                textAlign:'center'
                ,
                color: "black",
              }}>

            Taking Streetwear Fashion to New Heights! 
              </Typography>

          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

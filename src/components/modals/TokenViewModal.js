import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function TokenViewModal({ open, handleClose, dataProps }) {
  let filtersArr = [
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Type.png",
      title: "type",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Special.png",
      title: "special",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Clothing.png",
      title: "clothing",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Offhand.png",
      title: "offhand",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Hair.png",
      title: "hair",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Headgear.png",
      title: "claws",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Face.png",
      title: "headgear",
      subtypes: ["HUMAN"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Neck.png",
      title: "face",
      subtypes: ["HUMAN"],
    },
  ];
  const xsSize = useMediaQuery("(min-width:320px) and (max-width:480px)");
  const mdSize = useMediaQuery("(min-width:481px) and (max-width:768px)");

  // console.log("%c--->", "font-size:1.3rem;color:red", open);
  return (
    <Modal
      open={open}
      sx={{
        overflow: "auto",
      }}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          // height: "60vh",
          transform: "translate(-50%, -50%)",
          width: { xs: "85vw", md: "70vw", lg: "60vw" },
          boxShadow: 24,
          background: "#dfdfdd",
          borderRadius: "10px",
          outline: "none",
          p: 0,
          my: { xs: 14, md: 16 },
        }}
      >
        <Grid
          // columnGap={xsSize ? 2 : 4}
          container
          sx={{
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          <Grid
            item
            md={6}
            className="x"
            sx={{
              height: "100%",
            }}
          >
            <Box width="fit-content"
            sx={{
            }}>
              <img
                src={dataProps ? dataProps.img : ""}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  justifySelf: "start",
                  objectFit: "contain",
                  height: "100%",
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              background: "#02587b",
              // width: "100%",
              height: "100%",
            }}
          >
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                width: "90%",
                height: "100%",
                py: 2,
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                fontWeight="bold"
                sx={{
                  width: "100%",
                  py: { xs: 1, md: 2 },
                  pl: 3,
                  background: "#f0b700",
                  borderRadius: "6px",
                  fontSize: { xs: ".8rem" },
                }}
              >
                #{dataProps ? dataProps.token : ""}
                {" - "}
                {dataProps ? dataProps.title : ""}
              </Typography>

              <Grid
                container
                sx={{
                  pl: 3,
                  placeContent: "space-between",
                }}
                width="100%"
              >
                {filtersArr.map((e, k) => (
                  <Grid item md={6} key={k}>
                    <Box
                      sx={{
                        py: 2,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img className="filterIcon" src={e.icon} />
                      <Box>
                        {" "}
                        <Typography variant="button" fontWeight="500">
                          {e.title}
                        </Typography>
                        <br />
                        <Typography variant="button" fontWeight="bold">
                          {e.subtypes}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import "../css/gallery.css";
import { Container } from "@mui/system";
import { Drawer, Grid, IconButton, Typography } from "@mui/material";
import Line from "../components/other/Line";
import SearchIcon from "@mui/icons-material/Search";
import FiltersBox from "../components/other/FiltersBox";
import SimbaCard from "../components/cards/SimbaCard";
import chimba from "../assets/pictures/chimba.png";
import kitty from "../assets/pictures/kitty.png";
import kitty2 from '../assets/pictures/kittym.png'
import SLSbg from '../assets/pictures/SLSbg.png'

import { useThemeContext } from "../contexts/ThemeContext";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from '@mui/material/TextField';
import { ethers } from 'ethers'
import MetaSimba from '../Important/artifacts/contracts/MetaSimba.sol/MetaSimba.json'
import { metaSimbaAddress } from '../Important/config'
import axios from 'axios';
const { ethereum }  = window;

export default function Gallery() {

  const [state, setState] = React.useState({
    right: false,
  });
  
  const [startPoint,setStartPoint] = React.useState(0);
  const [NFTs,setNFTs] = React.useState([]);
  const [nftType,setNftType]=React.useState("allNfts")
  const [walletAddress, setWalletAddress ] = React.useState('');
  const [network,setNetwork] = React.useState(1);
  const tablet = useMediaQuery("(min-width:480px) and (max-width:768px)");

  const [alignment, setAlignment] = React.useState("META");
  const { theme } = useThemeContext();
  
  // const mobile = useMediaQuery("(min-width:320px) and (max-width:374px)");
  const mobile = useMediaQuery("(min-width:320px) and (max-width:480px)");

  async function loadNfts(){
    const url = "https://rinkeby.infura.io/v3/83cbe518bf9042949402aed22caa2ed5"
    const provider = new ethers.providers.JsonRpcProvider(url)
    const contract = new ethers.Contract(metaSimbaAddress, MetaSimba.abi, provider)
    const data = await contract.MultipletokenURIsAfterSelling(startPoint,2);
    console.log(data)
    const Data = [];
    const items = await Promise.all(
        data.map(async ItemUri => {
          await axios.get(ItemUri)
          .then((Item)=>{
            console.log("my item is",Item)
            let item = {
              description: Item.data.description,
              name: Item.data.name,
              image: Item.data.image,
              attributes:Item.data.attributes
            }
            
            Data.push(item);
            })
          .catch(e=>{
            console.log("errors =>",e)
          })
        })
    )
    const newData = [...NFTs,...Data];
    console.log(newData)
    setNFTs(newData);
  }
  React.useEffect( () => {
  
    if (typeof window.ethereum !== 'undefined') 
    {
      window. ethereum. on('accountsChanged', (accounts)=>{
        console.log("my accounts are",accounts)
        if(accounts.length !== 0){
          setWalletAddress(accounts[0])
        }
        else{
          setWalletAddress('')
          console.log("no account found")
        }
      })

      window.ethereum.on('chainChanged', function(networkId){
        console.log('networkChanged',networkId);
        if(networkId ==1 || networkId==4)
          setNetwork(1)
        else
          setNetwork(2)
      });
    }
    loadNfts()
  },[network,walletAddress,startPoint])
  

  const connectWallet = async () =>{

    if (typeof window.ethereum !== 'undefined') {

      ethereum.request({
        method: 'eth_chainId',
      }).then(chainId=>{

        console.log(chainId)

        if(chainId === '0x1'|| chainId ==='0x4')
        {
          setNetwork(1)
          console.log("maybe rinkeby or ethreum network")
        }
        else
        {
          setNetwork(2)
          console.log("another network")
        }

      })

      ethereum.request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        console.log(accounts);
        setWalletAddress(accounts[0]);
        // console.log("set your nfts from here");
        setNftType("MyNfts")
        // walletID = `Wallet connected: ${account}`;
      })
      .catch((err)=>{
        // console.log("not  account is connected to my metamask")
        console.log("error",err)
      })
      console.log("not showing anything ")
    }
    else{
      window.open("https://metamask.io/download/", "_blank");
    }
  }

  const handleToggle = (newAl) => {
    setAlignment(newAl);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  let sampleNFTs = [
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/7438.png",
      title: "CHEEMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/2854.png",
      title: "TIMBA",
      token: "NO.931",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/4242.png",
      title: "MIMBA",
      token: "NO.1971",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/911.png",
      title: "SIMBA",
      token: "NO.8534",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.2191",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
    {
      img: "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8571.png",
      title: "SIMBA",
      token: "NO.8571",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{
        width:anchor === "top" || anchor === "bottom" ? "auto" : (mobile||tablet) ? 280 : 320,
        background: theme == "black" ? "black" : "white",
        paddingBlock: "1.5rem",
        height:"100vh",
        // background:'red',
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {filters}
    </Box>
  );

  let filtersArr = [
    {
      title: "Background",
      subtypes: [ "red_carpet_black", "red_carpet_white", "background_black", "background_grey", "background_white", "background_beige"],
    },
    {
      title: "Clothing Bottom",
      subtypes: ["red_utility_cargo_shorts", "grey_utility_cargo_shorts", "black_utility_cargo_shorts", "black_cargo_pants", "grey_cargo_pants", "olive_green_cargo_pants",
      "chili_red_cargo_pants", "black_purple_flame_jeans", "brown_sb_sweat_pants", "cream_sb_sweat_pants", "vintage_sb_sweat_pants", "khaki_sb_sweat_pants",
      "white_blue_wave_jeans", "white_purple_wave_jeans", "white_red_wave_jeans", "navy_blue_corduroy_pants", "brown_corduroy_pants", "cream_corduroy_pants",
      "green_yellow_sb_shorts", "black_red_sb_shorts", "black_yellow_sb_shorts", "brown_yellow_sb_shorts", "grey_blue_sb_shorts", "pink_blue_sb_shorts", "monogram_sb_shorts",
      "blue_flame_sb_shorts", "city_landscape_sb_shorts", "cloud_sb_shorts", "tan_flame_sb_shorts",
      "ice_blue_bone_jeans", "artic_night_bone_jeans", "slime_green_bone_jeans", "classic_bone_jeans", "sunshine_yellow_bone_jeans", "halloween_orange_bone_jeans", "neutral_bone_jeans"],
    },
    {
      title: "Clothing Top",
      subtypes: [ "baby_blue_blue_sb_hoodie", "black_red_sb_hoodie", "brown_cream_sb_hoodie", "cream_green_sb_hoodie", "green_cream_sb_hoodie",
      "grey_blue_sb_hoodie", "light_grey_light_blue_sb_hoodie", "yellow_brown_sb_hoodie", "navy_blue_yellow_sb_hoodie",
      "red_yellow_sb_hoodie", "purple_black_sb_hoodie", "white_purple_sb_hoodie", "urban_landscape_button_up", "mountain_landscape_button_up", "valley_landscape_button_up", "city_of_love_button_up",
      "oil_paint_puffer_jacket", "lake_side_puffer_jacket", "autum_landscape_puffer_jacket", "baren_landscape_puffer_jacket",
      "orange_yellow_flannel", "flannel_blue_checks", "black_white_flannel", "skeleton_flannel",
      "shiesty_black_jacket", "shiesty_cream_jacket", "black_sb_varsity_jacket", "blue_sb_varsity_jacket", "green_sb_varsity_jacket",
      "purple_sb_varsity_jacket", "red_sb_varsity_jacket", "black_worksman_jacket", "navy_worksman_jacket", "cream_worksman_jacket",
      "blue_sls_racing_jacket", "orange_sls_racing_jacket", "red_sls_racing_jacket"],
    },
    {
      title: "Ear",
      subtypes: [ "diamond_stud", "diamond_cross", "diamond_circle", "gold_stud", "gold_cross", "gold_circle", 'none'],
    },
    {
      title: "Expression",
      subtypes: ["straight",
      "relaxed",
      "shocked",
      "smile",
      "laughing",
      "grin",
      "smoking"],
    },
    {
      title: "Eyes",
      subtypes: ["color_brown", "color_red", "color_yellow", "color_purple", "color_hazel", "color_orange", "color_blue", "color_dark_blue", "color_green", "color_black"],
    },
    {
      title: "Eyewear",
      subtypes: [
        "blue_lens_buffies", "red_lens_buffies", "clear_framed_buffies", "black_blue_framed_sunglasses", "black_red_framed_sunglasses", "black_clear_framed_sunglasses",
        "purple_blue_framed_sunglasses", "purple_red_framed_sunglasses", "purple_clear_framed_sunglasses", "red_blue_framed_sunglasses", "red_red_framed_sunglasses", "red_clear_sunglasses", "white_blue_framed_sunglasses",
        "white_red_framed_sunglasses", "white_clear_framed_sunglasses"
      ],
    },
    {
      title: "Fur",
      subtypes: [    "light_gray",
      "ash_gray",
      "battleship_gray",
      "snow_white",
      "beige",
      "silver",
      "gold",
      "black",
      "amur_platinum",
      "amur_gold"],
    },
    {
      title: "Claws",
      subtypes: ["black", "gold", "ivory", "silver"],
    },
    {
      title: "Headwear",
      subtypes: [
        "la_unc_blue_&_white", "la_red_&_white", "la_purple_&_white",
        "la_purple_&_orange", "la_green_&_white", "la_brown_&_cream",
        "la_blue_&_yellow", "la_blue_&_white", "la_blue_&_grey",
        "la_black_&_white", "la_black_&_red", "la_black_&_orange", "la_black_&_gold",
        "ny_black_&_gold", "ny_black_&_orange", "ny_black_&_red", "ny_black_&_white",
        "ny_blue_&_grey", "ny_blue_&_white", "ny_blue_&_yellow", "ny_brown_&_cream",
        "ny_cream_&_white", "ny_gold_&_white", "ny_green_&_white", "ny_purple_&_orange",
        "ny_purple_&_white", "ny_red_&_white", "ny_unc_blue_&_white", "la_cream_&_white", "la_gold_&_white", "none",
      ],
    },
    {
      title: "Teeth",
      subtypes: ["white", "diamond", "gold"],
    },
    {
      title: "Neck",
      subtypes: [
        "cuban_diamond_chain",
        "cuban_diamond_chain_logo",
        "cuban_gold chain",
        "cuban_gold_chain_logo",
        "pearl_diamond chain",
        "pearl_diamond_chain_logo",
        "pearl_gold_chain",
        "pearl_gold_chain_logo",
        "tennis_diamond_chain",
        "tennis_diamond_chain_logo",
        "tennis_gold_chain",
        "tennis_gold_chain_logo",
        "rope_diamond_chain",
        "rope_diamond_chain_logo",
        "rope_gold_chain",
        "rope_gold_chain_logo",
        "none"],
    },
    {
      title: "Spots",
      subtypes: ["black", "beige", "brown", "grey", "gold", "super_black", "super_gold", "super_silver"],
    },
    {
      title: "Type",
      subtypes: [""],
    },
  ];

  let filters = (
    <Box className="filters" style={{height:"100%"}} >
      {/* <Typography
        sx={{
          alignSelf: "start",
          paddingInline: "6rem",
          color: theme == "black" ? "white" : "black",
        }}
        variant="h4"
        fontWeight="bolder"
      >
        Filter
      </Typography> */}
      {/* <Line props={"60%"} /> */}

      <div onChange={() => {}} className="cap"  >
        <div style={{
              height:"80vh",
              }}>
          <div className="searchBox" style={{width:"200px",height:"60px"}}>
          
              {/* <input type="text" visibility="true" name="password" placeholder="Password" /> */}
             
              <Box
                component="form"
                sx={{
                  // color:"white",
                  width:"100%",
                  // background:"green"
                  // '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <SearchIcon
              className="searchicon"
              style={{
                width:"14%",
                color: "white",
                // background:"red",
                // fontSize: "2rem",
                color: theme == "white" ? "black" : "white",
                height:"54px",
                // width:"50px",
                display:"inline",
                padding:"1px",
                // marginLeft:"px",
                // background:"green",
                // borderRight:"1px solid white",
                // borderTop:"1px solid white",
                borderLeft:theme == "white"?"1px solid black":"1px solid #808080",
                borderTop:theme == "white"?"1px solid black":"1px solid #808080",
                borderBottom:theme == "white"?"1px solid black":"1px solid #808080",
                borderRadius:"5px 0px 0px 5px",
                // padding:"23px",
              }}/>
                <TextField id="standard-basic" placeholder="Filter"  variant="standard" 
                  style={{
                    width:"86%",
                    // padding:"17px",
                    // backgroundColor: "white",
                    // borderBottom:"1px solid white",
                    borderRadius:"4px",
                    color:"white"
                  }}
                  InputProps={{
                      style: {
                          color: theme == "white"?"black":"white",
                          padding:"10px",
                          
                          borderBottom:theme == "white"?"1px solid black":"1px solid #808080",
                          borderRight:theme == "white"?"1px solid black":"1px solid #808080",
                          borderTop:theme == "white"?"1px solid black":"1px solid #808080",
                          // borderLeft:"1px solid white",
                          // borderTop:"1px solid transparent",
                          borderRadius:"0px 5px 5px 0px",
                        }
                  }}
                />
                 
              </Box>
             
            {/* <input
              type="text"
              placeholder="Search by serial..."
              onChange={(e) => console.log("e>>>>", e.target.value)}
              className="searchBar"
              style={{
                margin:"200px",
                backgroundColor: theme == "black" ? "black" : "white",
                // color:"white",
                // border:"2px solid green"
              }}
            /> */}
          </div>
          <Box
            style={{
              height: "700px",
              overflowY: "auto",
            }}
          >
            {filtersArr.map((e, k) => (
              <FiltersBox props={e} key={k} />
            ))}
          </Box>
        </div>
        {/* <Box style={{}} sx={{mt:{lg:"-6em",xl:"-6em"}, }}>
        <img
          src={theme == "black"?kitty:kitty2}
          alt=""
          style={{
            // background: theme == "black" ? "" : "black",
            width: "5rem",
            // marginTop: "1rem",
            height: "auto",
          }}
        />
        </Box> */}
      </div>
    </Box>
  );

  let nfts = (
    <Box className="filters" overflowY="auto" height="90vh" style={{}} >
      <Box
        justifyContent="end"
        sx={{
          width: "100%",
          display: { xs: "flex", lg: "none" },
        }}
      >
        <div
          style={{
            position: "relative",
            display:"flex",
          }}
        >
          {["right"].map((anchor) => (
            <React.Fragment key={anchor} >
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                sx={{
                  color: theme == "black" ? "white" : "black",
                }}
              >
                <FilterAltIcon />
              </IconButton>
              <Box style={{background:"",height:"100px",textAlign:"right",width:"100%",padding:"20px"}}>
                {/* {
                nftType == 'allNfts' && (<button style={{width:"160px",padding:"1em",cursor:'pointer',margin:"20px"}} onClick={connectWallet}>My Collections</button>)
                } */}
                {
                  nftType !== 'allNfts' && (<button style={{width:"200px",padding:"1em",cursor:'pointer',margin:"20px"}} onClick={()=>setNftType('allNfts')}>Back</button>)
                }
              </Box>
              {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                // background="orange"
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </Box>
      <Box  container justifyContent="flex-end" style={{display:"flex",width:"92%",padding:"1em"}} sx={{display:{xs:"none",md:"none",lg:"flex"}, mt:{xs:"-100px",md:"-86px",lg:"10px"},ml:{xl:"0px",lg:"0px",md:"-60px",sm:"-90px",xs:"-120px"}}}>
        <button style={{width:"140px",padding:"1em",cursor:'pointer',fontWeight:"bold"}} onClick={connectWallet}>My Collections</button>
      </Box>

      <Grid
        
        style={{
          border:(theme == "black" ? "2px solid white" : "2px solid Black"),
          // background:"green",
          width: "90%",
          padding: 0,
          margin: 0,
          borderRadius: "6px",
        }}
        container
      >
        { 
          !mobile && 
          <Grid item xs={12} sm={4} lg={3} xl={2} md={3} 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{display:"block",height:(tablet||mobile)?"0px":"180px", background:(theme == "black" ? "black" : "white"),alignItems:"center"}} 
        sx={{
            height:{xs:"160px"},
            width:{xs:"160px"}  
          }}
          style={{background:'',display:"flex",justifyContent:"center",alignItems:"center"}}
        >
          { 
          <Box style={{height:"100%",minWwidth:"100vw"}}>
            <img
              src={chimba}
              // width={mobile?"180px":(tablet?"80%":"100%")}

              // width={mobile?"100%":"100%"}
              height="100%"
              style={{
                margin:"auto",
                padding: 0,
                // margin:0,
                objectFit: "fill",
                border: "none",
                borderRadius:"12px 0px 0px 12px"
              }}
            />
            </Box>
          }
          </Grid>
        }
        <Grid item  xs={12} sm={8} lg={9} xl={10} md={9} style={{padding:"1em"}}>
          <Box bgcolor="">
            <Typography
              color={theme == "black" ? "white" : "Black"}
              fontWeight="bold"
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "2.8rem" },
              }}
            >
              FIND YOUR SLS MODEL
            </Typography>
            <Typography
              color={theme == "black" ? "white" : "Black"}
              variant="body2"
              sx={{
                marginBlock: ".6rem",
                fontSize: { xs: ".8rem", md: "1rem", lg: "1.2rem" },
              }}
            >
              You can connect your metamask wallet and see your collection
            </Typography>

            {/* <button style={{width:"160px",alignItems: "right",padding:"0.5em",cursor:'pointer',fontWeight:"bold",fontSize:"20px"}} onClick={connectWallet}>PAIR NOW</button> */}
          </Box>
        </Grid>
      </Grid>
      {/* SIMBAssssss */}
     
      <Box mt="2rem" overflowY="auto" style={{width:"90%",background:"blue",}}>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={1}
          columnGap={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          
          style={{
            color:theme == "black" ?  "white":"black" ,
            // marginTop:"1em",
            fontFamily:"monospace",
          }}
          // sx={{
          //   height:"55vh",
          //   overflowY:'auto'

          // }}
        >
          
          <Box style={{zIndex:"100",position :"absolute", color:theme=="white"?"grey":"white",opacity:"0.4"}}
              sx={{
                // ,marginLeft:"10%",marginTop:"11%"
                fontSize:{xs:"40px",sm:"70px",md:"80px",lg:"90px",xl:"105px"},
                // background:"green",
                mt:"25vh"
              }}
            >
            COMING SOON
          </Box>

        </Grid>
      </Box>


    </Box>
  );
  console.log("%cTHEME VAL->", "font-size:1.4rem", theme);

  return (
    <div
      className="galleryMain"
      style={{
        background: theme == "black" ? "black" : "white",
        fontFamily : 'monospace',
        // background:"red"
        // overlfow:"hidden",
        // background:"green"
      }}
    >

      <Container maxWidth="xxl" maxHeight="100vh">
        {
        network ==1 ?
          (
          
          <Grid xs={12}>
            { 
            (<Grid xs={12} style={{ margin:"10px"}}>
              {/* <button style={{width:"160px",padding:"1em",cursor:'pointer',marginLeft:"86vw"}} onClick={connectWallet}>My Collections</button> */}
            </Grid>)
            }
            <Grid xs={12} container style={{height:"100%"}}>
            
              <Grid
                item
                xs={0}
                lg={4}
                sx={{
                  display: { xs: "none", lg: "flex" },
                  mt:"1.4em"
                }}
                style={{width:"200px",
                height:"100%",background:""}}
              >
                {filters}
              </Grid>
              
              {
                nftType == 'allNfts'?
                (
                <Grid item xs={12} lg={8} style={{height:"100%"}}>
                  {nfts}
                </Grid>)
                :(
                  walletAddress !== ''?
                    (
                      <Grid item xs={12} md={12} lg={8} style={{fontSize:'1.5rem',height:"80vh",color:'white',display:'flex',textAlign:'center',fontFamily: "monospace",width:"100vw"}}>
                        <div style={{margin:'auto', height:"auto"}}>
                          <p style={{margin:"auto"}}>
                            you don't have any snow leopard
                        
                          </p>
                          <p mobile tablet>
                            Address: <span>{walletAddress.slice(0,4)}</span>...<span>{walletAddress.slice(walletAddress.length-4)}</span>
                          </p>
                          <p >
                            Address: <span>{walletAddress.slice(0,4)}</span>...<span>{walletAddress.slice(walletAddress.length-4)}</span>
                          </p>
                          
                          <button className="btns">VIEW OPENSEA</button>
                        
                        </div>
                      </Grid>
                    )
                    :
                    (
                      <Grid item md={8} style={{fontSize:'1.5rem',color:'white',display:'flex',textAlign:'center',fontFamily: "monospace",}}>
                        <div style={{margin:'auto'}}>
                          <button className="btns" onClick={connectWallet}>Connect to Wallet</button>
                        </div>
                      </Grid>
                    )
                )
              }
            </Grid>
          </Grid>) 
          :
          (
            <Grid item md={12} style={{width:"90vw", dislpay:"flex",fontSize:'1.5rem',height:"100vh",color:'white',justifyContent:"center",margin:"auto"}}>
              <p style={{
                justifyContent:"center",
                textAlign: "center",
                height: "100%",
                
                border:"2em solid transparent",
                }} 
              >
                <h4>You are currently connected to a different network, please change your wallet to mainnet network</h4>
                <h2>Address:</h2>
                <h1 mobile tablet><span>{walletAddress}</span></h1>
                <h1><span>{walletAddress.slice(0,4)}</span>...<span>{walletAddress.slice(walletAddress.length-4)}</span></h1>
              </p>
            </Grid>
          )
        }

      </Container>
    </div>
  );
}

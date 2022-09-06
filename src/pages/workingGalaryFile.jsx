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
        width:
          anchor === "top" || anchor === "bottom" ? "auto" : (mobile||tablet) ? 280 : 320,
        background: theme == "black" ? "black" : "white",
        paddingBlock: "1.5rem",
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
      icon: "https://www.azuki.com/filtericons/Black/0/Type.png",
      title: "type",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Special.png",
      title: "special",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Clothing.png",
      title: "clothing",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Offhand.png",
      title: "offhand",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Hair.png",
      title: "hair",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Headgear.png",
      title: "claws",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Face.png",
      title: "headgear",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
    {
      icon: "https://www.azuki.com/filtericons/Black/0/Neck.png",
      title: "face",
      subtypes: ["HUMAN", "RED", "BLUE", "SPIRIT"],
    },
  ];

  let filters = (
    <Box className="filters" style={{height:"100%"}}>
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

      <div onChange={() => {}} className="cap" >
        <div style={{
              // height:"60vh",
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
                width:"10%",
                color: "white",
                // background:"red",
                // fontSize: "2rem",
                color: theme == "white" ? "black" : "white",
                height:"54px",
                // width:"50px",
                display:"inline",
                padding:"6px",
                // background:"green",
                // borderRight:"1px solid white",
                // borderTop:"1px solid white",
                border:theme == "white"?"1px solid black":"1px solid #808080",
                borderRadius:"5px 0px 0px 5px",
                // padding:"23px",
              }}/>
                <TextField id="standard-basic" placeholder="Filter"  variant="standard" 
                  style={{
                    width:"90%",
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
                          
                          border:theme == "white"?"1px solid black":"1px solid #808080",
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
              height: "550px",
              overflowY: "auto",
            }}
          >
            {filtersArr.map((e, k) => (
              <FiltersBox props={e} key={k} />
            ))}
          </Box>
        </div>
        <Box style={{}}>
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
        </Box>
      </div>
    </Box>
  );

  let nfts = (
    <Box className="filters" overflowY="auto" height="90vh">
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
            display:"flex"
          }}
        >
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                onClick={toggleDrawer(anchor, true)}
                sx={{
                  color: theme == "black" ? "white" : "black",
                }}
              >
                <FilterAltIcon />
              </IconButton>
              <Box style={{background:"",height:"100px",textAlign:"right",width:"100%",padding:"20px"}}>
                {
                nftType == 'allNfts' && (<button style={{width:"160px",padding:"1em",cursor:'pointer',margin:"20px"}} onClick={connectWallet}>My Collections</button>)
                  // :(<button  style={{width:"200px",padding:"1em",cursor:'pointer',margin:"20px"}} onClick={setNftType("allNfts")}> Go Back</button>)
                }
                {
                  nftType !== 'allNfts' && (<button style={{width:"200px",padding:"1em",cursor:'pointer',margin:"20px"}} onClick={()=>setNftType('allNfts')}>Back</button>)
                }
              </Box>
              {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </Box>
      {/* <Box
        width="100%"
        justifyContent="center"
        sx={{
          display: { xs: "flex", lg: "none" },
        }}
      >
        <div
          style={{
            // #e5e5e5
            background: theme == "black" ? "#e5e5e5" : "black",
            width: "90%",
            height: "1px",
            marginBlock: ".6rem",
          }}
        ></div>{" "}
      </Box> */}

      <Grid
        
        style={{
          // background: "#94dbe0"
          border:(theme == "black" ? "2px solid white" : "2px solid Black"),
          width: "90%",
          padding: 0,
          margin: 0,
          borderRadius: "6px",
        }}
        container
      >
        <Grid item xs={0} md={2} style={{display:"block",height:(tablet||mobile)?"0px":"180px", background:(theme == "black" ? "black" : "white"),alignItems:"center"}} >
          { !mobile && !tablet && <Box style={{height:"100%",width:"100%"}}>
            <img
              src={chimba}
              // width={mobile?"180px":(tablet?"80%":"100%")}
              // width={mobile?"100%":"100%"}
              // background: 
              height="100%"
              style={{
                padding: 0,
                margin:0,
                objectFit: "fill",
                border: "none",
                borderRadius:"12px 0px 0px 12px"
              }}
            />
            </Box>
          }
        </Grid>
        <Grid item xs={12} md={10} style={{padding:"1em"}}>
          <Box bgcolor="">
            <Typography
              color={theme == "black" ? "white" : "Black"}
              fontWeight="bold"
              variant="h3"
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem", lg: "2.8rem" },
              }}
            >
              FIND YOUR SIMBA
            </Typography>
            <Typography
              color={theme == "black" ? "white" : "Black"}
              variant="body2"
              sx={{
                marginBlock: ".6rem",
                fontSize: { xs: ".8rem", md: "1rem", lg: "1.2rem" },
              }}
            >
              You can now pair your BEANZ to your Azukis. Head over to your
              Collection, click on any Azuki, and then Pair BEANZ. Note: pairing
              does not update your metadata or change either NFT.
            </Typography>

            {/* <button className="btns">My Collection</button> */}
          </Box>
        </Grid>
      </Grid>
      {/* SIMBAssssss */}
      <Box width="fit-content" mt="2rem" overflowY="auto">
        <Grid
          container
          rowSpacing={3}
          columnSpacing={1}
          columnGap={0}
          style={{
            fontSize:mobile?"40px":tablet?"100px":"120px",
            color:theme == "black" ?  "white":"black" ,
            marginTop:"1em",
            fontFamily:"monospace"
          }}
          // sx={{
          //   height:"55vh",
          //   overflowY:'auto'

          // }}
        >
          COMING SOON
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
        // overlfow:"hidden",
        // background:"green"
      }}
    >
      {/* For mobile version */}
      {/* {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))} */}

      <Container maxWidth="xxl" maxHeight="100vh">
        {
        network ==1 ?
          (
          
          <Grid xs={12}>
            {!tablet && !mobile && (<Grid xs={12} color="green">
              <button style={{marginLeft:"90%",width:"160px",padding:"1em",cursor:'pointer',margin:"20px"}} onClick={connectWallet}>My Collections</button>
            </Grid>)}
            <Grid xs={12} container style={{height:"100%"}}>
            
              <Grid
                item
                xs={0}
                lg={4}
                sx={{
                  display: { xs: "none", lg: "flex" },
                }}
                style={{width:"200px",
                height:"100%"}}
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

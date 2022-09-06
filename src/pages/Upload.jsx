import { Box, Grid, Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";
import uploads from "../assets/pictures/uploads.png";
import thumbsUp from '../assets/pictures/thumbsUp.png'
import { useThemeContext } from "../contexts/ThemeContext";
import { create as ipfsHttpClient } from "ipfs-http-client";
import Web3Modal from 'web3modal'
import CIDTool from 'cid-tool';
import {Buffer} from 'buffer';
import { metaSimbaAddress } from '../Important/config'
import { ethers } from 'ethers';
import '../css/upload.css'
import metaSimba from '../Important/artifacts/contracts/MetaSimba.sol/MetaSimba.json'
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const tokenIFPS = `2CNYV8Ob2xGv4Mx6fNJZWy6prnw:d1de8d9b4bb592042f5c29d301025cce`
const authIFPS = Buffer.from(tokenIFPS).toString('base64')

const client = ipfsHttpClient(
  {
    host:'ipfs.infura.io',
    port:'5001',
    protocol:'https',
    apiPath:'/api/v0',
    headers:{
      Authorization:`Basic ${authIFPS}`
    }
});

export default function Upload() {
  
  let [uploadedImages,setUploadedImages]=React.useState(0);
  let [error,setError] = React.useState('')
  let Nfts = [];
  let [finalUrls,setFinalUrls]=React.useState([]);
  let [NFTs,setNFTs] = React.useState([]);
  const [imageUploaded,setImageUploaded] = React.useState(0);
  console.log("my images are ",imageUploaded)
  const { theme, toggleTheme } = useThemeContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  React.useEffect(()=>{
    console.log("my initial nfts ",Nfts)
    // removing the abi's error part from the metaSimba.abis 
    // useImageUploaded(0)
    // setImageUploaded(1)
    const newABI = []
    // console.log("meta data error is removed  ",metaSimba.abi)
    metaSimba.abi.forEach((data)=>{
      if(data.inputs.length === 0){
        if(data.type === "error"){
          // console.log("errors are ",data)
        }
        else{
          newABI.push(data);
        }
      }
      else{
        newABI.push(data)
      }
    })
    metaSimba.abi = newABI;

  },[])


  function captureFileData(event) {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);
  }

  const configureFinalData = async (Nfts) =>{
    const finalNft = [];
    Nfts.forEach(nft=>{
      finalNft.push(JSON.stringify(nft))
    })
    // console.log(JSON.stringify(Nfts))
    const AllNFTSIPFS = await client.addAll(finalNft)
    let data = []
    for await (const file of AllNFTSIPFS) {
      console.log(file.path); // Note these are logged out as they are added
      const url = `https://ipfs.infura.io/ipfs/${file.path}`;
      data.push(url);
      setFinalUrls(data);
      console.log(url)
    }
  }
  function onReaderLoad(event){

    console.log("my NFTS",NFTs)
      // const AllData = event.target.result
      const AllData = JSON.parse(event.target.result);
      console.log("before saving data the data is",AllData)
      let j=0;
      Nfts=[];
      NFTs.forEach((nft)=>{
        console.log("my nft data is ",nft)
       
        nft.name = AllData[j].name
        nft.description = AllData[j].description
        nft.attributes = AllData[j].attributes
        Nfts.push({
          name: `snow Leopard #${j}`,
          description: "snow leopard Society",
          image: nft.image,
          attributes:AllData[j].attributes 
        })
        j++;      
      })
      // setNFTs(Nfts)
      console.log(Nfts)
      configureFinalData(Nfts)
  }

  const createImagesList = async (event) => 
  {
    try{
    setImageUploaded(1)
    console.log("length of the function is >>>>>>>>>>>>>>>>>>>",event.target.files.length);
    let i = 0;
    let fileAndUrl = [];
    while (event.target.files[i]) 
    {
      // let k = uploadedImages +1;
     
      console.log("uploading image is not uopdating here",)
      let key = event.target.files[i].name.split(".")[0];
      const file = event.target.files[i]
      setUploadedImages(i);
      const added =  await client.add(file,{
          progress:(prog) => console.log(`received:${prog}`),
          pin:true
        }).catch();
        console.log("my new added is",added)
      const base32CID = CIDTool.base32(added.path)
      const IPFSurl = `https://${base32CID}.ipfs.infura-ipfs.io`
      
      fileAndUrl[key] = IPFSurl;
      // console.log("my image JSON data name is ",Nft)
      // const jsonCid = await client.add(JSON.stringify(Nft))
      // Nfts.push(`https://ipfs.infura.io/ipfs/${jsonCid.path}`)
      console.log('my image',i," ipfs is ",IPFSurl)
      Nfts.push({
        name:'',
        image:IPFSurl,
        description:'',
        attributes:[]
      })
      i++;
    }
    setImageUploaded(2)
    }
    catch(e){
      console.log("facing error ",e.message)
      setError(e.message)
    }
    console.log(Nfts)
    setNFTs(Nfts);
  }

  async function createIPFSTokens() 
  {
    const web3Modal  = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner();

    let contract = new ethers.Contract(metaSimbaAddress,metaSimba.abi,signer)
    console.log(finalUrls)
    let transaction1  = await contract.createTokens(finalUrls)
    let tx = transaction1.wait();
    console.log("Transaction Done",tx);
  }


  return (
    <Box
      className="container"
      sx={{
        color:"white",
        minHeight: "100vh",
        // scrollbarColor:"green",
        textAlign:"center",
        pt: { xs: "10vh", md: "14vh", lg: "18vh" },
        px: { xs: ".8rem", md: "4rem" },
        backgroundColor: theme == "black" ? "black" : "white",
      }}
    >
      <Typography variant="h3" style={{ color:(theme == "black" ? "white" : "black") }}>Hi Admin</Typography>
      <Box
        sx={{
          mt: { xs: 6, md: 12 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          // bgcolor="#94dbe0"
          // bgcolor="white"
          bgcolor = {theme == "black" ? "white" : "black"}
          borderRadius="10px"
          sx={{
            width: { xs: "96%" },
            py: 6,
          }}
        >

          <form onSubmit={(e) => handleSubmit(e)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
              }}
            >
              <Grid container style={{margin:"auto",display:'flex',alignItems:'center',justifyItems:"center"}} >
                <Box 
                  style={{
                    width:"100%",
                    height:"350px",
                    padding:'1rem',
                    transition: `width 2s`,
                    // border:"2em solid #94dbe0",
                    borderRadius:"20px",
                    // background:"white"
                  }}
                >
                  {/* <div style={{background:"#F2F2F2", padding:"10px",borderRadius:"10px",border:'2px solid #94dbe0',width:"80%",height:"90%",margin:"auto"}}> */}
                  <div style={{background:"#94dbe0",padding:"10px",borderRadius:"10px",border:'4px solid #94dbe0',width:"90%",height:"90%",margin:"auto"}}>
                  
                  <Typography
                    sx={{
                      fontSize: { xs: "1.2rem", md: "2rem" },
                      marginTop:"1rem"
                    }}
                    color={theme == "black" ? "white" : "black"}

                  >
                    Upload Images
                  </Typography>
                  <br />
                  <label for="imageUpload" style={{ margin:"auto",marginTop:"1rem"}}>                  
                  
                  { imageUploaded===1?
                    (<Stack sx={{ marginLeft:"20%", width: '60%',marginTop:'2.4em' }} spacing={2}>
                      <LinearProgress color="primary" />
                    </Stack>):
                    (
                      imageUploaded === 2?(
                        <img
                          src={thumbsUp}
                          // src = {thumbsUp}
                          style={{
                            objectFit: "contain",
                            width: "7rem",
                            height: "7rem",
                            cursor:"pointer",
                            visibility:`${imageUploaded}==1?"":"hidden"`
                        }}
                        />
                      ):(
                        <img
                          src={uploads}
                          // src = {thumbsUp}
                          style={{
                            marginTop:"30px",
                            objectFit: "contain",
                            width: "6rem",
                            height: "6rem",
                            cursor:"pointer",
                            visibility:`${imageUploaded}==1?"":"hidden"`
                        }}
                        />
                      )
                    )
                  }
                  </label>
                  <br/>
                    
                  <div style={{fontSize:"1.6rem",padding:"1.6em",color:"black"}}>
                  {error===''?(imageUploaded=== 0?'':( imageUploaded===1?`Item ${uploadedImages+1} Uploading...`:`${uploadedImages} Items Uploaded Sucessfully`)):(`${error===undefined?"IPFS ERROR":error}, please refresh and try again`)}
                  </div>

                  </div>
                  <input id="imageUpload" type="file" required multiple onChange={createImagesList} accept="image/png, image/gif, image/jpeg" />
                </Box>
                  
                {imageUploaded === 2 && <Box 
                  style={{
                    width:"100%",
                    height:"350px",
                    padding:'1rem',
                    borderRadius:"20px",
                  }}
                >
                  <div style={{background:"#94dbe0",padding:"10px",borderRadius:"10px",border:'4px solid #94dbe0',width:"90%",height:"90%",margin:"auto"}}>
                      <Typography
                        color={theme == "black" ? "white" : "black"}
                        sx={{
                          fontSize: { xs: "1.2rem", md: "2rem" },
                          marginTop:"1rem"
                        }}
                      >
                        Upload Metadata File
                      </Typography>
                      <br />
                      <label for="MetaDataUpload">
                      <img
                        // src={metaDataImage}
                        src={uploads}
                        style={{
                          marginTop:"1.5rem",
                          objectFit: "contain",
                          width: "6rem",
                          height: "6rem",

                        }}
                      />
                    </label>

                  </div>
                  <input id="MetaDataUpload" type="file" onChange={captureFileData}  accept="application/json"/>
                </Box>}

              </Grid>
            </Box>
          </form>
      
      
      
        </Box>
        <Box my={2} display="flex" justifyContent="center">
          <button
            type="submit"
            style={{
              paddingBlock: ".8rem",
              paddingInline: "1.4rem",
              borderRadius: "10px",
              outline: "none",
              cursor: "pointer",
              border: "none",
              background: "yellow",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
            onClick = {createIPFSTokens}
          >
            Upload
          </button>
        </Box>
      </Box>
    </Box>
  );
}

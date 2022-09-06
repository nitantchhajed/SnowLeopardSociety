// import axios from 'axios'
// import { create as ipfsHttpClient } from "ipfs-http-client";
// import Web3Modal from 'web3modal'
// import { metaSimbaAddress } from './Important/config'
// import { ethers } from 'ethers';
// import CIDTool from 'cid-tool';

// import metaSimba from './artifactsWithConfiguration/artifacts/contracts/MetaSimba.sol/MetaSimba.json'

// const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

// function Test() 
// {
//   // const data = [];

//   let addedFile=[]
//   const FinalIPFS = []

//   async function createAddeFile(){
//     console.log("===> ",addedFile)
//     for await (const file of addedFile) {
//       console.log(file.path); // Note these are logged out as they are added
//       const url = `https://ipfs.infura.io/ipfs/${file.path}`;
//       console.log("my final ipfs is ",url)
//       FinalIPFS.push(url)
//     }
//   }

//   async function createIPFSTokens() 
//   {
//     const added = await client.addAll(Nfts);
//     console.log("------------->", added);
//     for await (const file of added) {
//       console.log(file.path); // Note these are logged out as they are added
//       const url = `https://ipfs.infura.io/ipfs/${file.path}`;
//       console.log(url);
      
//     }
//   }

//   async function removeABIErrors()
//   {
//     const newABI = []
//     console.log("meta data error is removed  ",metaSimba.abi)
//     metaSimba.abi.forEach((data)=>{
//       if(data.inputs.length === 0){
//         if(data.type === "error"){
//           console.log("errors are ",data)
//         }
//         else{
//           newABI.push(data);
//         }
//       }
//       else{
//         newABI.push(data)
//       }
//     })
//     metaSimba.abi = newABI;
//     console.log(metaSimba.abi);
//   }

//   async function createItem()
//   { 
//     const web3Modal  = new Web3Modal();
//     const connection = await web3Modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection)
//     const signer = provider.getSigner();

//     let contract = new ethers.Contract(metaSimbaAddress,metaSimba.abi,signer)
  
//     let transaction1  = await contract.createTokens(FinalIPFS)
//     let tx = transaction1.wait();
//     console.log("Transaction Done");
//   }

//   const readURL = (file) => {
//     return new Promise((res, rej) => {
//       const reader = new FileReader();
//       reader.onload = (e) => res(e.target.result);
//       reader.onerror = (e) => rej(e);
//       reader.readAsDataURL(file);
//     });
//   };

//   const createImagesList = async (event) => 
//   {
//     console.log("length of the function is >>>>>>>>>>>>>>>>>>>",event.target.files.length);
//     let i = 0;
//     let fileAndUrl = [];
//     while (event.target.files[i]) 
//     {
//       let key = event.target.files[i].name.split(".")[0];
//       const file = event.target.files[i]
//       const added = await client.add(file,{
//         progress:(prog) => console.log(`received:${prog}`)
//       });
      
//       const base32CID = CIDTool.base32(added.path)
//       const IPFSurl = `https://${base32CID}.ipfs.infura-ipfs.io`
      
//       fileAndUrl[key] = IPFSurl;
//       Nft.image = IPFSurl;

//       // const jsonCid = await client.add(JSON.stringify(Nft))
//       // Nfts.push(`https://ipfs.infura.io/ipfs/${jsonCid.path}`)
//       console.log('my image',i," ipfs is ",IPFSurl)
//       // console.log("my url is",i,"  ",IPFSurl," it's jsonCid is ====> ",`https://ipfs.infura.io/ipfs/${jsonCid.path}`)
//       Nfts.push(Nft)
//       i++;
//     }
//   }

//   return (
//     <div className="App">
//       <button onClick={createIPFSTokens}> create multiple baseURI</button>
//       <br/>
//       <button onClick={createItem}> minting nfts</button>
//       <br/>
//       <button onClick={removeABIErrors}> remove abi Errors</button>
//       <button onClick={createAddeFile}> run before minting</button>
//       <div>
//         <input
//           type="file"
//           id="file"
//           name="nftToken"
//           required
//           style={{ color: "green", fontSize: "20px" }}
//           multiple
//           onChange={(e) => {
//             createImagesList(e);
//           }}
//         />
//       </div>

//     </div>
//   );

// }

// export default Test;

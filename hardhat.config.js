require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = fs.readFileSync('.secret').toString().trim()

const projectId = "f24f3359949a49ba94398bd446428f90"

module.exports = {
  networks:{
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url:`https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    kovan:{
      url:`https://kovan.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    rinkeby:{
      url:`https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
  paths:{
    artifacts:'./src/Important/artifacts'
  }
};

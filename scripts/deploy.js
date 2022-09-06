const hre = require("hardhat");

async function main() {
  const MetaSimba  = await hre.ethers.getContractFactory('MetaSimba')
  const metaSimba = await MetaSimba.deploy()
  await metaSimba.deployed();
  console.log("Meta Simba is deployed sucessfully, the address is ", metaSimba.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("facing error in deployment",error);
    process.exit(1);
  });

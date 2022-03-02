// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const AINFTCollection = await hre.ethers.getContractFactory("AINFTCollection");
  const aiNFTCollection = await AINFTCollection.deploy();

  await aiNFTCollection.deployed();

  console.log("AI NFT collection is deployed to:", aiNFTCollection.address);

  // await aiNFTCollection.mint("https://ipfs.io/ipfs/QmeEbzNjpKEbEiN9vCbkTdsN5uWGGA6w5rRF3qPZaj2otE")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

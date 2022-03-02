const hre = require("hardhat");

async function main() {
  const AINFTCollection = await hre.ethers.getContractFactory("AINFTCollection");
  const aiNFTCollection = await AINFTCollection.deploy();

  await aiNFTCollection.deployed();

  console.log("AI NFT collection is deployed to:", aiNFTCollection.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

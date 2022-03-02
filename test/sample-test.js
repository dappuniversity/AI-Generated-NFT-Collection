const { expect } = require("chai");
const { ethers } = require("hardhat");

require('chai')
    .use(require('chai-as-promised'))
    .should()

describe("AINFTCollection", function () {

  let aiNFTCollection

  beforeEach(async () => {
    const AINFTCollection = await ethers.getContractFactory("AINFTCollection");
    aiNFTCollection = await AINFTCollection.deploy();
    await aiNFTCollection.deployed();
    
    console.log("AI NFT collection was deployed to:", aiNFTCollection.address);
  }) 

  it("Should return the new greeting once it's changed", async function () {
    
    const [user1] = await ethers.getSigners();
    await aiNFTCollection.connect(user1).mint("https://ipfs.io/ipfs/QmeEbzNjpKEbEiN9vCbkTdsN5uWGGA6w5rRF3qPZaj2otE")

    result = await aiNFTCollection.ownerOf(1)
    result.should.equal(user1.address)
  });
});

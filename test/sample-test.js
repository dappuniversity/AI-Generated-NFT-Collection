const { expect } = require("chai");
const { ethers } = require("hardhat");

require('chai')
    .use(require('chai-as-promised'))
    .should()

// describe("Greeter", function () {
//   it("Should return the new greeting once it's changed", async function () {
//     const Greeter = await ethers.getContractFactory("Greeter");
//     const greeter = await Greeter.deploy("Hello, world!");
//     await greeter.deployed();

//     expect(await greeter.greet()).to.equal("Hello, world!");

//     const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

//     // wait until the transaction is mined
//     await setGreetingTx.wait();

//     expect(await greeter.greet()).to.equal("Hola, mundo!");
//   });
// });


describe("AINFTCollection", function () {
  it("Should return the new greeting once it's changed", async function () {
    const AINFTCollection = await ethers.getContractFactory("AINFTCollection");
    const aiNFTCollection = await AINFTCollection.deploy();
    await aiNFTCollection.deployed();

    console.log("AI NFT collection is deployed to:", aiNFTCollection.address);
    const [owner, user1, user2] = await ethers.getSigners();
    await aiNFTCollection.connect(user2).mint("https://ipfs.io/ipfs/QmeEbzNjpKEbEiN9vCbkTdsN5uWGGA6w5rRF3qPZaj2otE")

    result = await aiNFTCollection.ownerOf(1)
    result.should.equal(user2.address)
  });
});

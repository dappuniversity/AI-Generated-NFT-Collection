To change the NFTs you need to change the files in the 
metadata folder

For images:
Change the images to your NFT art then upload them to pinata
and then change the link to the image in the specified .json NFT file
with the correct link(CID of the image)

and of course change the .json files (actual NFTs) to whatever attributes you want


Create env file with the ropsten url which is basicaly just infura endpoint 
and also provide your private key that you can get from a generated account on
vanity website for free.

Generate account - https://vanity-eth.tk/
Get ether on Ropsten - https://faucet.egorfine.com/
See your deployed NFT on Ropsten - https://ropsten.etherscan.io/
Get infura Ropsten endpoint - https://infura.io/

npx hardhat run --network ropsten scripts/deploy.js?

coodles1.json - QmeEbzNjpKEbEiN9vCbkTdsN5uWGGA6w5rRF3qPZaj2otE
coodles2.json - QmY4qVqZBopUAn9L6afDi8F2LgSy5JZKPoQoEX2hpWkX1Z
coodles3.json - QmVbXbfszZZYTM3FeWPwtvNxjsAzjb346nB5xWgWggNgsQ
coodles4.json - QmYQMZ2pBZRs4pr7LyaaEp2FeP7GwWDSFpyVL35N2yDnY9
coodles5.json - Qmdhmh16LPsHRWLiHkGWZW7HHs1PHyibTCTX6FdroC3TXq
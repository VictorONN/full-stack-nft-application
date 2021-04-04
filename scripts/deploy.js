async function main() {
    // We get the contract to deploy
    const NFT = await ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
  
    console.log("NFT deployed to:", nft.address);
    //0x2FD757Da689B6FFF982A185eB74dC6e14C7E9F88
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  
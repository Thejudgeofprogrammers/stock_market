import { ethers } from "hardhat";
import "@nomiclabs/hardhat-ethers";

async function main() {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    const simpleStorage = await SimpleStorage.deploy();

    await simpleStorage.deployed();
    console.log("simpleStorage deployed to:", simpleStorage.address)
};
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
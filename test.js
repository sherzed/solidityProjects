const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomiclabs/hardhat-waffle");

describe("SetAirConditioning", function () {
  let contract;

  beforeEach(async function () {
    const SetAirConditioning = await ethers.getContractFactory("SetAirConditioning");
    const bixos = await SetAirConditioning.deploy("Life's Good");
    contract = await bixos.deployed();
  });
  it("Trying 4 commands via 'setAdmin' function", async function () {
    var i;
    for(i = 0; i < 4; i++) {
        const test = await expect(contract.setAdmin(i, 100));
    }
  });
  it("Trying 4 commands via 'getAcDetail' function'", async function () {
        for(i = 0; i < 4; i++) {
        const test = await expect(contract.getAcDetail(i));
    }
  });
});

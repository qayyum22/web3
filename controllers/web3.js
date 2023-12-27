const { Web3, HttpProvider } = require("web3");

const web3 = new Web3(
  "https://mainnet.infura.io/v3/96cc3f4d735c48c98beb421846472022"
);
web3.eth.getBlock("latest").then(console.log);

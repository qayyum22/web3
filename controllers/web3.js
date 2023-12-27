const { Web3 } = require('web3');

import { Web3, HttpProvider } from 'web3';


exports.getBlockData = async (req, res) => {
    try {
        const web3 = new Web3('https://mainnet.infura.io/v3/96cc3f4d735c48c98beb421846472022');
        web3.eth.getBlock('latest').then(console.log);
    } catch (err) {
        console.log(err);
        res.send("Internal Server Error")
    }
}
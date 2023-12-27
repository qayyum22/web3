// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;
// const { getBlockData } = require("./controllers/web3")


// app.get("/", (req, res) => {
//     res.send("Web3 Backend is connected successfuly");
// })

// app.get("/web3", getBlockData);

// app.listen(PORT, () => {
//     console.log(`Web3 is running at ${PORT}`)
// })

// You should only attempt to request the user's account in response to user
// interaction, such as selecting a button.
// Otherwise, you popup-spam the user like it's 1999.
// If you fail to retrieve the user's account, you should encourage the user
// to initiate the attempt.
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

ethereumButton.addEventListener('click', () => {
  getAccount();
});

// While awaiting the call to eth_requestAccounts, you should disable
// any buttons the user can select to initiate the request.
// MetaMask rejects any additional requests while the first is still
// pending.
async function getAccount() {
  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
    .catch((err) => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
  const account = accounts[0];
  showAccount.innerHTML = account;
}
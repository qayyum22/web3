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

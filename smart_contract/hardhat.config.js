require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      // Your alchemy https link
      url: process.env.URL,
      // Your deploy key from terminal command (from hardhat)
      accounts: [process.env.ACCOUNTS],
    },
  },
};
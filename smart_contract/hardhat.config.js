require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: process.env.URL,
      accounts: [process.env.ACCOUNTS],
    },
  },
};
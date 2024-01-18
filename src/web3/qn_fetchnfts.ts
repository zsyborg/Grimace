// not currently supported by solanaJS
const axios = require("axios");
(() => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = {
    jsonrpc: "2.0",
    id: 1,
    method: "qn_fetchNFTs",
    params: {
      wallet: "DcTmx4VLcf5euAB17nynax7g55xuB3XKBDyz1pudMcjW",
      omitFields: ["provenance", "traits"],
      page: 1,
      perPage: 10,
    },
  };
  axios
    .post("https://few-hidden-aura.solana-mainnet.discover.quiknode.pro/df1981120c63443a60e666489992f43a604cfa9c/", data, config)
    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch((err) => {
      // handle error
      console.log(err);
    });
})();

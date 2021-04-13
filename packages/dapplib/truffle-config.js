require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift rival office equip inflict enroll army gas'; 
let testAccounts = [
"0x9e1405a7d325deb46884077f2fda2ef2cfb785578fe8f5c37b61a6de6bcdc79a",
"0x675f1022b9b0668293f42d119a212c9a9ebc60800369fd981875319f420526c2",
"0xc7b414fc7cf3dc446d5e04de1bf2b22eed1312e50373d9cf6aaa59b8f17870eb",
"0x1a80ecc140a7de2e71ae95936350c327b59e888a7393047cb778b46c8b990e49",
"0x67e980f88f5f02c86a8eda265355e95031f3d24c38d585d9fd3c48c84c46d48e",
"0xdecacdc9505dde4b59e5578aad37d37695508bac244f16a7338be03c9dc71f04",
"0xc11d3c23698b6698f4eb3b86e1b698dfcadef417cf67e59f42b0b237d3057ec8",
"0x271ac6df03cec49625a4a14b4f4fa5b7b0807e1dfa6e2a293a2c8a3831ad389c",
"0xb6422c9535deaacbbd324d6e1611502e348f99417c38fc437170124f77e93848",
"0x2800ba00ba6fedfc39e1f86cb6e9f6a1144d15bcd894631cbffdea63f6dcf3ee"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

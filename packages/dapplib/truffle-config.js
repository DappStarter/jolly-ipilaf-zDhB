require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture story return pizza method great light army gift'; 
let testAccounts = [
"0xeaae5663ca270552c741a5d93a05dccf759381d449d277c7d8b93d3a03b39e5c",
"0xeec2726496487ab24adcba80dca712520adf2a91745cb34035dd09589f9aeec5",
"0xd2f460b137e45f07d66c3a104ecfdb1e2ea4fa9300da3a03f4c383005d5bf492",
"0xadf200683e77d4d90785108f63b6827311fbad6e8a63f02c076e2127ad031289",
"0x4a2178512d4f57b73354468aad740e49e1843a98e7118001388f1761d626d2ce",
"0xec4889af430e30db4f98ddb475462b8ec5a8eaa680a9627669cf3146fac17900",
"0x120943e86771928535ee3157bed53afe2c42b6cb972b0e1baceb335613af8f1a",
"0x378e36c33e4c234f002968d45949cba187cc942fe8d98558b3311df0292aa855",
"0x69faeed39fd72340e9d6d75c71ac572117a52cb51c340c9b704cd6e693d70314",
"0x571604c40a046325d60becd090bdbe24e4b551710a21510cb2ccb49a2c2b0310"
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
            version: '^0.8.0'
        }
    }
};


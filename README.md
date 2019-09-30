# demo-erc721

### Using Democracy to access ERC-721 assets.

This demo retrieves the owner of an NFT by Token ID
programmatically using the ERC-721 ABI.

We call the `ownerOf` method, but any of the methods are available here:

http://erc721.org/

## How to use

Clone this repo locally

```
git clone https://github.com/cryptogoth/demo-erc721.git
```

Install dependencies with `yarn` or `npm install`

```
yarn
```

Create a secure, web-accessible Ethereum account by going to http://ethgarden.com
and copying and pasting them into your `.env` file.

This wallet doesn't need any ETH so far and isn't used to hold any assets.
You'll fund it later and use it if you need to call contract mutator methods
that change on-chain state.

For this demo, we only call read-only methods.

Edit these lines in the `.env` file
```
MAINNET.DEPLOYER_ADDRESS=''
MAINNET.DEPLOYER_PASSWORD=''
```

Do the thing

```
yarn depart
```

Wait a few seconds, and you'll see some output
(the owner of an ERC721 NFT on mainnet)

```
NFT Owner is {"0":"0x66040374e443ae3e25afef08a781c4c2d175f43c"}
```

You can verify this with the NFT on Etherscan:

https://etherscan.io/token/0x22cc8b3666e926bcbf58cb726143b2b044c80a0c?a=34410171212740518240382548201030436272862311489479305301712148182074228170203


Rejoice! Please send questions or feedback to us on Twitter @cryptogoth

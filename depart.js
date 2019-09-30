depart({
  unlockSeconds: 20,
  autoConfig: false,
}, async ({ deployed }) => {
  const nft = await deployed('ERC721')
  
  // You can call any ERC721 method, as describe in the ABI
  // http://erc721.org/
  

  // You can view this NFT for tickets to Devcon5 in Osaka
  // which sadly doesn't belong to me
  // https://etherscan.io/token/0x22cc8b3666e926bcbf58cb726143b2b044c80a0c?a=34410171212740518240382548201030436272862311489479305301712148182074228170203
  const owner = await nft.ownerOf("34410171212740518240382548201030436272862311489479305301712148182074228170203")
  console.log(`NFT Owner is ${JSON.stringify(owner)}`)
})

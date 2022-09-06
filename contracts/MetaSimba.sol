// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "hardhat/console.sol";

contract MetaSimba is ERC721A, Ownable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address private ContractOwner;

    string public baseExtension = ".json";
    uint256 public maxMintAmount = 10000;

    mapping (uint256 => string) private _tokenURIs;

    constructor() ERC721A("Mustafa", "Animal Socity") {
        ContractOwner = address(msg.sender);
    }   
    
    function createTokens(string[] memory URIs) external onlyOwner
    {   
        require(msg.sender != address(0),"admin address can not be zero");
        require(msg.sender == address(ContractOwner),"only owner allowed to mint nft");
        uint256 supply = URIs.length;
        require(supply>0,"please enter minimum one baseURL to mint");
        require(maxMintAmount >=  supply + _tokenIds.current(),"please increase the max Mint Amount");
        _safeMint(msg.sender, supply);
        
        uint256 tokenId;
        for(uint256 i=0;i<supply;i++) 
        {
            tokenId = _tokenIds.current(); 
            require(_exists(tokenId), "token does not exist");
            _setTokenURI(tokenId , URIs[i]);
            _tokenIds.increment();
            console.log("token no",tokenId);
        }
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721AMetadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual onlyOwner
    {
        require(_exists(tokenId), "token does not exist, please check the token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function totalMintedNFTCount() public view returns(uint256) 
    {
        return _tokenIds.current(); 
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
        maxMintAmount = _newmaxMintAmount;
    }

    function MultipletokenURIsAfterSelling(uint256 startTokenId,uint256 noOfTokenURI) view external returns(string[] memory) 
    {
        require(startTokenId < _tokenIds.current() , "index not found");
       // console.log(msg.sender,ContractOwner);
       // require(address(ContractOwner) == address(msg.sender),"address did not match with minted address");
        
        uint256 endTokenId = startTokenId + noOfTokenURI;
        if( endTokenId > _tokenIds.current())
        {
            endTokenId =  _tokenIds.current();
        }
        
        uint256 count = 0;
        for(uint256 i=startTokenId;i<endTokenId;i++) 
        {
            require(_exists(i), "token does not exist");
            if(ownerOf(i) != ContractOwner)
            {
                count++;
            }
        }
        if(count==0){
            revert("Empty Array");
        }
        string[] memory URIs = new string[](count);
        for(uint256 i=startTokenId;i<endTokenId;i++) 
        {
            if(ownerOf(i) != ContractOwner)
            {
                URIs[i-startTokenId] = _tokenURIs[i];
            }
        }
        return URIs;
    }
}
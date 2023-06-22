
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract WallPosts {

    event NewPost(
        address indexed author,
        uint256 timestamp,
        string note,
        string imageHash
    );

    struct Post {
        address author;
        uint256 timestamp;
        string note;
        string imageHash;
    }

    Post[] posts;

    function newPost(string memory _note, string memory _ipfsHash) external {
        posts.push(Post(msg.sender, block.timestamp, _note, _ipfsHash));
        emit NewPost(msg.sender, block.timestamp, _note, _ipfsHash);
    }

    function getAllPosts() external view returns (Post[] memory) {
        return posts;
    }

}
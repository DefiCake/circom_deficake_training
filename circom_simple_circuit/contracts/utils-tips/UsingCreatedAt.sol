// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

/// @author DefiCake
/// @dev Used to log block number on contract creation, avoids lookups in other sources
contract UsingCreatedAt {
    event CreatedAt(uint256 blockNumber);

    constructor() {
        emit CreatedAt(block.number);
    }
}

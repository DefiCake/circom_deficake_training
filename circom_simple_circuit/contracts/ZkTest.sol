// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Verifier as InitVerifier } from './InitVerifier.sol';

contract ZkTest is InitVerifier {
    function verifyInitProof(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input
    ) public view returns (bool) {
        return InitVerifier.verifyProof(a, b, c, input);
    }
}

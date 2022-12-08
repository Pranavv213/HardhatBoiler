// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.17;

contract simple{

     uint256 public interest=5;
     address public owner; 
    constructor()
    {
        owner=msg.sender;
    }
   

    function pay(address ad)external payable {

        require(msg.sender==owner,"You are not owner");

         payable(ad).transfer(msg.value);
 
    }

    
}
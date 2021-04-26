pragma solidity ^0.4.17;

contract Inbox {
    string public message;
    
    function Inbox(string intMsg) public {
        message = intMsg;
    }
    
    function setMsg(string newMsg) public {
        message = newMsg;
    }

}
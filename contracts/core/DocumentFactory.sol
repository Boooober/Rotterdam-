pragma solidity ^0.4.0;
import './Document.sol';

contract DocumentFactory {
    address ds;

    function DocumentFactory(address _ds){
       ds = _ds;
    }

    function createNew (bytes32 _hash){
        new Document(ds, _hash);
    }
}

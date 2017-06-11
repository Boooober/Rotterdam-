pragma solidity ^0.4.0;
import './core/App.sol';

contract Document is DepartmentStorage, PresetManager { // Such composition should be discussed

    function createApp(string presetName) {
    //  TODO create contract and save it by address
        //new App(presets[sha3(presetName)]);

    }

    function getAppsToApprove() returns (address[]){
        var currentUserGroup = getType(msg.sender);
        // TODO implement getAppsByGroup
        return getAppsByGroup(currentUserGroup);
    }

    function approve(address app) constant returns (string) {
        var choosenApp = getAppByAddress(app);
        choosenApp.sign(msg.sender);
    }
}

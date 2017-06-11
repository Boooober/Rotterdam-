pragma solidity ^0.4.0;

contract PresetManager is Object{

    mapping(string => uint) public presets;

    // TODO replace presetId with array of strings ?
    function addNewPreset(string name, uint presetId) onlyOwner{
        if (!!presets[sha3(name)]) return;
        presets[sha3(name)] = presetId;
    }
}

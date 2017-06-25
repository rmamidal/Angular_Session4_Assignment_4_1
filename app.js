var VehicalNameSpace;
(function (VehicalNameSpace) {
    function display(vehical) {
        console.log("Vehical name is " + vehical.name + " and model is " + vehical.model);
    }
    VehicalNameSpace.display = display;
})(VehicalNameSpace || (VehicalNameSpace = {}));
/// <reference path="interface.ts" />
var bike = { name: "Activa", model: "2014" };
VehicalNameSpace.display(bike);

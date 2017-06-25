// Namespace vehicalnamespace created.
namespace VehicalNameSpace {
    //Interface.
    export interface IVehical {
        name: string; // proprty name.
        model: string; // property model
    }
    // Function.
    export function display (vehical:IVehical) {
        console.log(`Vehical name is ${vehical.name} and model is ${vehical.model}`); // Print vehical info
    }
}
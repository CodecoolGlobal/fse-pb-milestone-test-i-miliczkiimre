/*
Context
Abacus the powerful wizard is hiding somewhere in a pile of object-s! We quickly put all objects in an array before he got away.
But we still don't know which object contains the mage! Help us find which object has a key called abacus and its value is true!

Task & Objectives
TODO: Write the findAbacus(array) function so it returns the index of the object which contains the key abacus and its value is true.
If none of the objects contain Abacus, return null !

Tip
The wrong object may contain the key abacus but with false value! There may only be one object which contains the key as true.
*/

function findAbacus(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.abacus === true) {
            return i;
        }
        
    }
    return null;
}

module.exports = findAbacus;

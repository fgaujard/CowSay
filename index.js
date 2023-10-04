const msg = require('./information.js');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hey ! I'm ${msg.name} from ${msg.campus} Campus`,
    e : "oO",
    T : "U "
}));
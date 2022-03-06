const prefix = require("./config.json")
module.exports = 
function prikazy(command, args, MessageEmbed, message) {
if (args.length > 1) {message.channel.send("Až moc argumentů")}
let embed = new MessageEmbed();    
switch (parseInt(args)) {
	        case 2: embed.setTitle(`Příkazy - Strana 2`)
        	.setColor("#ff0000")
        	.setDescription("Seznam příkazů a jejich využití")
        	.addFields(
            { name: `odpovez!`, value: `Odpoví na všecho. NA VŠECHNO. (Ale musí to být otázka na ano nebo ne)
            Využití: ?odpovez [otázka]` },
	    { name: `nabijej`, value: `NABÍJÍ
            Využití: ?nabijej` },
	    { name: `SFX`, value: `Pustí do voice-chatu určený zvukový efekt z výběru: [flakanec, kdoseptal, debil, curak, kecy]
            Využití: ?sfx [název efektu]` },
	    { name: `odpojuj`, value: `Odpojí se z voice-chatu
            Využití: ?odpojuj` },

	    
        ) 
	break;
        default: embed.setTitle(`Příkazy - Strana 1`)
        .setColor("#ff0000")
        .setDescription("Seznam příkazů a jejich využití")
        .addFields(
            { name: `prikazy`, value: `Seznam příkazů a jejich využití.
            Využití: ?prikazy [stránka]` },
            { name: `MPS`, value: `Pošle určenou stránku pracovního sešitu do matematiky.
            Využití: ?MPS [stránka]` },
            { name: `odmoc`, value: `Vypočítá druhou a třetí odmocninu určeného čísla.
            Využití: ?odmoc [číslo]` },
            { name: `moc`, value: `Vypočítá druhou a třetí mocninu určeného čísla.
            Využití: ?moc [číslo]` },
            { name: `rozvrh`, value: `Ukáže rozvrh třídy 8.F.
            Využití: ?rozvrh` },
            { name: `retos`, value: `Náhodně změní některá písmena věty na velká a některá na malá.
            Využití: ?retos [věta/slovo/cokoliv]` }
        )
    }
    message.channel.send({ embeds: [embed] })
}

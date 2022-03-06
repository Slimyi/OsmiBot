module.exports = 
function odpovez(command, args, MessageEmbed, message) {
    function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min)
}
    let ans = ["Možná", "Ano", "Jo", "Ne", "Rozhodně ne", "Nepočítej s tím",
     "Je to možné", "Pravděpodobně", "Určitě", "Všechno odkazuje k tomu, že ne",
    "Nevím", "Brzy se to objasní.", "Co já vím?", "Uplně jasný to je"]
    message.reply(ans[randomNumber(0, 14)] + " :8ball:")
}

function sendMessage(botname, title, desc, image, clr, webhook) { 
    var request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        title: title,
        description: desc,
        color: hexToDecimal clr,
        footer: {
            text: "by penguinpowers#5415"
        }
    }
    var params = {
        username: botname,
         avatar_url: image,
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}

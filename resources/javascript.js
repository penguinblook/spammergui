function sendMessage(botname, title, desc, image, webhook) { 
    var request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        title: title,
        description: desc,
        color: hexToDecimal("#000"),
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

function messageHandler() {
    var i = 1;
    let botname = document.getElementById("Botname").value;
    let title = document.getElementById("Title").value;
    let desc = document.getElementById("Desc").value;
    let webhook = document.getElementById("Webhook").value; 
    let amt = Number(document.getElementById("Num").value);
    let img = document.getElementById('image').value;
    sendMSG = setInterval(() => {
        if (i <= amt) {
            sendMessage(botname, title, desc, img, webhook)
            i++;
        } else {
            clearInterval(sendMSG)
        }
    }, 100);

}

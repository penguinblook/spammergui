var amt = Number(document.getElementById("Num").value);
alert(amt)
function HandelInterval() {
   let amnt = document.getElementById("Num").value;
   
}

function sendMessage(botname, title, desc, webhook) { 
   let botname = document.getElementById("Botname").value;
   let title = document.getElementById("Title").value;
   let desc = document.getElementById("Desc").value;
   let webhook = document.getElementById("Webhook").value;
    var request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        title: title,
        description: desc,
        color: hexToDecimal("#ff0000"),
        footer: {
            text: "By penguinpowers#5415"
        }
    }
    var params = {
        username: botname,
         avatar_url: "",
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}
let NUM = document.getElementById("Num").value;

setInterval(() => {
    sendMessage();
}, NUM);

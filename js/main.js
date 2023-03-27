//  the main functions:
let selectedChannel = channel1;
//  myselectedChannel(channel1);
function switchChannel(channel){
    
    consoleLog("seected Channel = " + channel.id);
    document.getElementById(selectedChannel.id).classList.remove("selected");
    selectedChannel = channel;
    document.getElementById(selectedChannel.id).classList.add("selected");
    showHeader();
} 
// !"" §$%¡“¶¢[2].]
function showHeader(){
    const nx = document.getElementById(selectedChannel.id).innerHtml;
    // consoleLog(nx);
    // const chname = nx.getitem("span");
    // selectedChannel.name = nx[2].innerHtml;
    document.getElementById('channelName').innerHTML = selectedChannel.name;
    const chButton = selectedChannel.favorite ? 'favorite' : 'favorite_border';
    document.getElementById('favorite-button').innerHTML = chButton;
}
function sendMessage(){
    var messageText = document.getElementById("message-input").value;
    let messageString;

    consoleLog("message in  = " + messageText);
    messageString = '<div class="message outgoing-message"><div class="message-wrapper"><i class="material-icons" aria-errormessage="account">account_circle</i><div class="message-content"><p>' + messageText + 
    '</p></div></div><span class="timestamp">09:45</span ></div> ';


    /* messageString = '<div class="message outgoing-message"><div class="message-wrapper"><div class="message-content"><p>' 
    + messageText + '</p></div><i class="material-icons">account_circle</i></div><span class="timestamp">11:45</span></div>' ; */
    document.getElementById('chat-area').innerHTML = messageString; 
    document.getElementById("message-input").value = '';

}
function consoleLog(logInfo) {
    const d = new Date(Date.now());
    const YYYY = d.getFullYear();
    const MM = d.getMonth() + 1;
    const DD = d.getDate();
    const HH = d.getHours();
    const MI = d.getMinutes();
    const SS = d.getSeconds();
    const MS = d.getMilliseconds();
    logInfo =  YYYY + "-"  + MM  + "-" +  DD  + "  " + HH  + ":" + MI  + ":"  + SS + ":"  + MS + "   " + logInfo ;    console.log(logInfo);
}
// !"§%&//(()=??`ÜÜÄÖ" “¢[]]|][]
//  the main functions:
let channels = [];
let messages = [];
let selectedChannel;
let mylanguage = navigator.language;
let nextChannelid = 5;
const oneday =  (new Date(2023, 03, 02, 00, 00, 00, 0) - new Date(2023, 03, 01, 00, 00, 00, 0));
// get browser language for formatting of time stamp
const browserLanguage = navigator.language || navigator.userLanguage; 
function Message(name, date, chan, who, text){
    this.createdBy = name;
    this.createdOn = date;
    this.channel = chan;
    this.own = who;
    this.text = text;
    this.yesterdayOrOlder = function() {
        return new Date().getDate() - createdOn.getDate() > 1
    };
}
function Channel(id, name, favorite){
    this.id = id;
    this.name = name; 
    this.favorite = favorite; 
    this.messages = [];
    this.latest = function(){
        if (!!this.messages.length){
            return new Date(Math.max(...this.messages.map(x => x.createdOn)));
        } else {
            return "No Messages";
        }

    },
    this.latestMessage = function () {
        if (!!messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date() - latest > oneday) {
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric", hour:"numeric", minute:"numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        };
    }
}
function init() {
    consoleLog("App is initialized");
    consoleLog("mylanguage : " + mylanguage);
    getChannels();
    getMessages();
    loadMessagesIntoChannel();
    displayChannels();
    loadEmojis();
    document.getElementById("send-button").addEventListener("click", sendMessage);
    document
      .getElementById("emoticon-button")
      .addEventListener("click", toggleEmojiArea);
    document
      .getElementById("close-emoticon-button")
      .addEventListener("click", toggleEmojiArea);
  }
  function getChannels(){
    channels = mockChannels;
}
function getMessages(){
    messages = mockMessages ;
}
function switchChannel(selectedChannelID){
    channels.forEach((channel) => {
        
        if (!!selectedChannel) {
            document.getElementById(selectedChannel.id).classList.remove("selected");
        }
    })
    document.getElementById(selectedChannelID).classList.add("selected");
    channels.forEach((channel) => {
        if (channel.id === selectedChannelID) {
          selectedChannel = channel;
        }
      });
    showHeader();
    showMessages();
} 
function sendMessage() {
    const text = document.getElementById("message-input").value;
    if (!!text) {
      const myUserName = "Basti";
      const own = true;
      const channelID = selectedChannel.id;
      const datum = new Date();
      const message = new Message(myUserName, datum, own, channelID, text);
      // console.log("New message: ", message);
      selectedChannel.messages.push(message);
      document.getElementById(selectedChannel.id).classList.add("selected");
      document.getElementById("message-input").value = "";
      showMessages();
      displayChannels();
    } else {
      return;
    }
  }
 
function addChannel(){
    let name = prompt("Channel Name", "my channel name");
    if (!!name) {
        let id = "channel" + nextChannelid;
        nextChannelid =  nextChannelid + 1;
        const channel = new Channel(id, name, Boolean(false));
        channels.push(channel);

        // selectedChannel = channel;
        displayChannels();
        switchChannel(id);
        
        
        
    }
}

function toggleEmojiArea(){

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
    logInfo =  YYYY + "-"  + MM  + "-" +  DD  + "  " + HH  + ":" + MI  + ":"  + SS + ":"  + MS + "   " + logInfo ;    
    console.log(logInfo);
}


function displayChannels(){
    const favoriteList = document.getElementById('favorite-channels') ;
    const regularList = document.getElementById('regular-channels');
    favoriteList.innerHTML = "";
    regularList.innerHTML = "";
    channels.sort((a, b) =>  b.latest() - a.latest());
    channels.forEach((channel) => {
        const currentChannelHtmlString =
          `  <li id="` +
          channel.id +
          `"onclick="switchChannel(this.id)">
                 <i class="material-icons">group</i>
                <span class="channel-name">` +
                channel.name +
          `     </span>
                 <span class="timestamp">` +
                 channel.latestMessage() +
          `     </span>
            </li>`;
            
        if (channel.favorite) {
            favoriteList.innerHTML += currentChannelHtmlString;
        } else {
            regularList.innerHTML += currentChannelHtmlString;
        }
          
      });
      if (!!selectedChannel) {
        document.getElementById(selectedChannel.id).classList.add("selected");
    }
      
}
function loadMessagesIntoChannel(){
    channels.forEach((channel) => {
        messages.forEach((message) => {
            if (message.channel == channel.id){
                channel.messages.push(message); 
            }
        })
    })  
}
function showHeader(){

    let chName = document.getElementsByTagName('h1')[1];
    chName.innerHTML = selectedChannel.name;
    document.getElementById('favorite-button').innerHTML = selectedChannel.favorite ? 'favorite' : 'favorite_border';
}
function prtDate (myDate){    
    // new Date().getDate();  oneday
    if (new Date() - myDate > oneday) {
        return myDate.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric", hour:"numeric", minute:"numeric"})
    } else {
        return myDate.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
    }
}
function showMessages(){
    let messageString = '';
    selectedChannel.messages.sort((a, b) => a.createdOn - b.createdOn);
    selectedChannel.messages.forEach((message) => {
        const msgDate =  prtDate(message.createdOn); 
        if (message.own ){
        messageString = messageString +
        '<div class="message outgoing-message"><div class="message-wrapper"><div class="message-content"><p id="myFirstMessage">' +
        message.text + '</p></div><i class="material-icons">account_circle</i></div><span class="timestamp">' +
        msgDate + '</span></div>'
        } else {
            messageString = messageString +
        '<div class="message incoming-message"><div class="message-wrapper"><i class="material-icons">account_circle</i><div class="message-content"><h3>'
             + message.createdBy + 
            '</h3><p> '
             + message.text + 
            '</p></div></div><span class="timestamp">'
             + msgDate + 
             '</span></div>'
        }
        /* 
        <div class="message incoming-message">
                <div class="message-wrapper">
                    <i class="material-icons">account_circle</i>
                    <div class="message-content">
                        <h3>Jessie Koch</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eveniet porro officia,
                            nesciunt aut delectus incidunt possimus illum placeat repudiandae reiciendis corporis ab.
                            Iste vel ducimus blanditiis, tempora adipisci doloribus.</p>
                    </div>
                </div>
                <span class="timestamp">11:45</span>
        </div>
        <div class="message outgoing-message">
                <div class="message-wrapper">
                    <div class="message-content">
                        <p id="myFirstMessage">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eveniet porro officia,
                            nesciunt aut delectus incidunt possimus illum placeat repudiandae reiciendis corporis ab.
                            Iste vel ducimus blanditiis, tempora adipisci doloribus.</p>
                    </div>
                    <i class="material-icons">account_circle</i>
                </div>
                <span class="timestamp">11:45</span>
        </div>
        */
    })
    document.getElementById('chat-area').innerHTML = messageString;
}
function toggleFavorite(){
    selectedChannel.favorite = !selectedChannel.favorite;
    displayChannels();
    showHeader();
}
function loadEmojis(){

}
//
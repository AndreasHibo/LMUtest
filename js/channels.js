//  the channel functions:
const onedd = (new Date(2023, 03, 02, 00, 00, 00, 0) - new Date(2023, 03, 01, 00, 00, 00, 0));
const mockChannels = [

{
    id:"channel2", 
    name:"Channel-Fav 2", 
    favorite:Boolean(true), 
    messages: [], 
    latest(){
        if (!!this.messages.length){
            return new Date(Math.max(...this.messages.map(x => x.createdOn)));
        } else {
            return "No Messages";
        }

    },
    latestMessage () {
        if (!!this.messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date() - latest > onedd) {
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric", hour:"numeric", minute:"numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        }
    }
},
{
    id:"channel1", 
    name:"Channel-Fav 1",
    favorite:Boolean(true), 
    messages: [], 
    latest(){
        if (!!this.messages.length){
            return new Date(Math.max(...this.messages.map(x => x.createdOn)));
        } else {
            return "No Messages";
        }

    },
    latestMessage () {
        if (!!this.messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date() - latest > onedd){
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric", hour:"numeric", minute:"numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        }
    }
},

{
    id:"channel3", 
    name:"Channel-reg 1", 
    favorite:Boolean(false), 
    messages: [], 
    latest(){
        if (!!this.messages.length){
            return new Date(Math.max(...this.messages.map(x => x.createdOn)));
        } else {
            return "No Messages";
        }

    },
    latestMessage () {
        if (!!this.messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date() - latest > onedd) {
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric", hour:"numeric", minute:"numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        }
    }
},
{
    id:"channel4", 
    name:"Channel-reg 2", 
    favorite:Boolean(false), 
    messages: [],
    latest(){
        if (!!this.messages.length){
            return new Date(Math.max(...this.messages.map(x => x.createdOn)));
        } else {
            return "No Messages";
        }

    }, 
    latestMessage () {
        if (!!this.messages.length){
            const latest = new Date(Math.max(...this.messages.map(x => x.createdOn)));
            // if message is from yesterday or older, display date, else display time
            if (new Date() - latest > onedd) {
                return latest.toLocaleDateString(navigator.language, {year:"numeric", month:"numeric", day: "numeric", hour:"numeric", minute:"numeric"})
            } else {
                return latest.toLocaleTimeString(navigator.language, {hour:"numeric", minute:"numeric"})
            }
        } else {
            return "No Messages"
        }
    }
}
]

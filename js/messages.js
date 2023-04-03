
const mockMessages = [
    {
        createdBy: "Tony",
        createdOn: new Date(2023, 02, 24, 10, 33, 30, 0),
        channel: "channel1",
        own: false,
        text: 'Who are you ? 1',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Reni",
        createdOn: new Date(2023, 02, 22, 10, 33, 30, 0),
        channel: "channel2",
        own: false,
        text: 'What\'s up? 2',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Tony",
        createdOn: new Date(2023, 02, 20, 10, 55, 30, 0),
        channel: "channel1",
        own: false,
        text: 'What\'s up? 3',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    }, 
    {
        createdBy: "Mimi",
        createdOn: new Date(2023, 02, 10, 10, 55, 30, 0),
        channel: "channel1",
        own: false,
        text: 'What\'s up? 4',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Reni",
        createdOn: new Date(2023, 01, 20, 10, 55, 30, 0),
        channel: "channel1",
        own: false,
        text: 'What\'s up? 5',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    }, 
    {
        createdBy: "Jonny",
        createdOn: new Date(2023, 02, 01, 10, 30, 30, 0),
        channel: "channel1",
        own: false,
        text: 'What\'s up? 6',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Franzi",
        createdOn: new Date(2023, 02, 20, 10, 35, 30, 0),
        channel: "channel2",
        own: false,
        text: 'What\'s up?',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Franzi",
        createdOn: new Date(2023, 03, 01, 10, 55, 30, 0),
        channel: "channel2",
        own: false,
        text: 'What\'s up? 1',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Franzi",
        createdOn: new Date(2023, 02, 13, 10, 25, 30, 0),
        channel: "channel3",
        own: false,
        text: 'What\'s up? 2',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Franzi",
        createdOn: new Date(2023, 02, 12, 11, 55, 30, 0),
        channel: "channel3",
        own: false,
        text: 'What\'s up? 3',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    },
    {
        createdBy: "Franzi",
        createdOn: new Date(2023, 03, 02, 10, 55, 30, 0),
        channel: "channel4",
        own: false,
        text: 'What\'s up?',
        yesterdayOrOlder() {
            return new Date().getDate() - this.createdOn.getDate() > 1
        }
    }
];

/*
const message6 = {
    createdBy: "Jonny",
    createdOn: new Date('Mar 06, 2023 17:24:00'),
    channel: "channel4",
    own: false,
    text: 'What\'s up?'
};
const mockMessagesAlt = [message1, message2, message3, message4, message5, message6]; */

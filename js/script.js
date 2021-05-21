var app = new Vue ({
    el: "#root",
    data: {
        profile: {
            name: 'Nome Utente',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem eveniet quos error corrupti exercitationem distinctio praesentium, sint et ipsa molestiae nobis odio autem facere dolore rem consequatur doloribus officiis?',
                        status: 'sent'
                    }
                ],
            },     
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeIndex: 0,
    },
    methods: {
        getImage: function(avatarName) {
            return "img/avatar" + avatarName + ".jpg";
        },
        getLastMessage: function(contact) {
            return contact.messages[contact.messages.length - 1];
        },
        setActive: function(newIndex) {
            this.activeIndex = newIndex;
        },
        getDay: function(contact) {
            return this.getLastMessage(contact).date.substring(0, 10);
        },
        getTime: function(contact) {
            return this.getLastMessage(contact).date.substring(11, 19);
        },  
        msgTime: function(message) {
            return message.date.substring(11, 17);
        },
        sendMessage: function(event) {
            let now = dayjs();
            let newMsg = {
                date: now.format("DD/MM/YYYY H:mm:ss"),
                text: event.target.value,
                status: 'sent'
            }
            if(newMsg.text.trim().length > 0) {
                this.contacts[this.activeIndex].messages.push(newMsg);
                event.target.value = "";
            };
        },
        lastAccess: function(contact) {
            let activeContact = this.contacts[this.activeIndex];
            let lastMsg = getLastMessage(activeContact);
            if (lastMsg.status == 'received') {
                return lastMsg.date;
            }
        }

    }  
})
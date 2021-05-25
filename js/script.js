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
                        text: 'Massì, si può fare',
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
                name: 'Alberto',
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
            {
                name: 'Federico',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai dormito bene?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Abbastanza',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Andiamo a farci un giro?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ci sto, facciamolo',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 16:02:45',
                        text: 'Per che ora passo a prenderti?',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Giovanni',
                avatar: '_7',
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
                    },
                    {
                        date: '10/01/2020 16:02:45',
                        text: 'Cosa vuoi vedere',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:05:00',
                        text: 'Non so, scegli tu',
                        status: 'received'
                    },
                ],
            },
            {
                name: 'Simone',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai chiamato il dottore?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ho preso appuntamento settimana prossima',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:55:28',
                        text: 'Bravo',
                        status: 'sent'
                    },
                ],
            } 
        ],
        activeIndex: 0,
        search: '',
        show: false,
        msgIndex: 0
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
            return message.date.substring(11, 16);
        },
        sendMessage: function(event) {
            const now = dayjs();
            const newMsg = {
                date: now.format("DD/MM/YYYY H:mm:ss"),
                text: event.target.value,
                status: 'sent'
            }
            if(newMsg.text.trim().length > 0) {
                this.contacts[this.activeIndex].messages.push(newMsg);
                event.target.value = "";
            };
            setTimeout(() => {
                const response = {
                    date: now.format("DD/MM/YYYY H:mm:ss"),
                    text: "Ok",
                    status: 'received'
                }
                this.contacts[this.activeIndex].messages.push(response);
            }, 1000);
        },
        toggle: function(index) {
            this.msgIndex = index;
            this.show = !this.show;
        }
    },
    computed: {
        // purtroppo non funzionante
        lastMsgDateReceived: function() {
            let toRet;
            const messages = this.contacts[this.activeIndex].messages;

            for (let i = messages.length - 1; i = 0; i--) {
                if (messages[i].status == 'received') {
                    toRet = messages[i].date;
                }
            }
            return toRet;
        },
        filteredContacts: function(){
            const contact = this.contacts;
            return contact.filter((chat) => {
                return chat.name.toLowerCase().match(this.search.toLowerCase());
            });
        }
    },
    updated: function () {
        const messageList = document.getElementsByClassName("message");
        const lastMessage = messageList[messageList.length - 1];
        lastMessage.scrollIntoView();
    }
})
module.exports = {
    name: 'spteam',
    aliases: [],
    category: 'staff-re',
    utilisation: '{prefix}spteam',



    execute(client, message)  {

        message.channel.send({
            embed: {
                color: 'GREEN',
                author: { name: "support-requirements" },
                fields: [
                    { name: 'self-promo:', value: "if someone does self promo on the server or DM´s your Job is to ping people who can ban and warn/mute them!"  },
                    { name: 'corruption:', value: "if someone in the staff team does things he shouldn´t do let the owners know about that"  },
                    {name: `piracy`, value : "someone who ask for help with cracked and illegal stuff should not getting help from you with that report the person to the mod-team!"},
                    {name: `activity`, value: "if you have a valid reason to be inactive we accept that otherwhise you have to be active atleast once per week!"},
                    {name: `false-claims`, value: "if you´re not sure about something ask your mates to help the person instead of giving wrong information and doing false claims!"}


                  

                    
                    
                   
                ]

            
            },




        });}}
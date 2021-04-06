module.exports = {
    name: 'mdteam',
    aliases: [],
    category: 'staff-re',
    utilisation: '{prefix}mdteam',



    execute(client, message)  {

        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: { name: "mod-requirements" },
                fields: [
                    { name: 'self-promo:', value: "if someone does self promo on the server or DM´s your Job is to ping people who can ban and warn/mute them!"  },
                    { name: 'corruption:', value: "if someone in the staff team does things he shouldn´t do let the owners know about that"  },
                    {name: `piracy`, value : "someone who ask for help with cracked and illegal stuff have to be banned and if needed muted!"},
                    {name: `activity`, value: "if you have a valid reason to be inactive we accept that otherwhise you have to be active atleast once per week!"}


                  

                    
                    
                   
                ]

            
            },




        });}}
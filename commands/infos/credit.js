module.exports = {
    name: 'credit',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}credit',



    execute(client, message)  {

        message.channel.send({
            embed: {
                color: 'PURPLE',
                author: { name: "credits" },
                fields: [
                    { name: 'moderation:', value: "devloped by: Patriot Zest "  },
                    {name: `welcome`, value: "developed by: Patriot Zest"},
                    {name: `suggestions`, value:  "devloped by:  Patriot Zest"},
                    {name: `leveling`, value:  "devloped by:  Patriot Zest"},
                    { name: 'Music:', value: "devloped by: Philipp "  },
                    {name: `embed-messsages`, value: "devloped by: Philipp"},
                    {name: `organizer`, value: "Benthetechguy"}
                  

                    
                    
                   
                ]

            
            },




        });}}
//nodemon in terminal to start file

require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

let status = [
    {
        name: "a Cozy Cat Nap",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=_r6TFJeq20w'
    },
    {
        name: "Cat TV",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=zw25uJzD3zw'
    },
    {
        name: "Lackadaisy",
        type: ActivityType.Streaming,
        url: 'https://www.youtube.com/watch?v=vffu6FG4YP4'
    },
    {
        name: "PP1 - Frakkur",
        type: ActivityType.Listening,
        url: 'https://open.spotify.com/track/1lZUpqag6NEbHJqOEVKsAz?si=0b08efd8ad3d49d8'
    },
    {
        name: "j1gggs - the cat from ipanema",
        type: ActivityType.Listening,
        url: 'https://open.spotify.com/track/1MGkSx3lPP5wSBC6CLFit0?si=8d4b8954f9234d33'
    },
    {
        name: "FLOOR BABA - WIGGLECORE",
        type: ActivityType.Listening,
        url: 'https://open.spotify.com/track/0OSkkfKiaPnmlL9ocLVgs9?si=334a5e4e00c64b8e'
    },
    {
        name: "dark cat - a day in my life",
        type: ActivityType.Listening,
        url: 'https://open.spotify.com/track/1rSccdFbARmQX6fFoi1A0T?si=ca26f790045447c6'
    },
    {
        name: "a Bird in the Yard",
        type: ActivityType.Watching,
        url: 'https://twitter.com/PixelMan572'
    },
    {
        name: "Oliver get sprayed",
        type: ActivityType.Watching,
        url: 'https://twitter.com/PixelMan572'
    },
    {
        name: "shapes move around",
        type: ActivityType.Watching,
        url: 'https://twitter.com/PixelMan572'
    },
    {
        name: "with Oliver",
        type: ActivityType.Playing,
        url: 'https://twitter.com/PixelMan572'
    },
    {
        name: "with his own tail",
        type: ActivityType.Playing,
        url: 'https://twitter.com/PixelMan572'
    },
]

eventHandler(client);

client.login(process.env.TOKEN);

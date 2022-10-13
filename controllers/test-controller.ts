import { Request, Response } from 'express';
const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,

        ],
});


const getChannel = async (req: Request, res: Response) => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });
    client.login('MTAzMDExNjc1MTE0NjQ4MzgxMw.GL3Jvo.JtrnNeZdX53up6y3fSVA53zDbnlJ5ebBB4LLsg')
    // return res.status(200).json({
    //     message: channel.send('Hello World')
    // })
}

export default { getChannel };
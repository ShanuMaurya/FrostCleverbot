const Discord = require("discord.js");
const client = new Discord.Client();


const DiscordRPC = require("discord-rpc");

const ClientId = '456423224960352268';

DiscordRPC.register(ClientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
  console.log("ready");
  rpc.setActivity({
    details: `Modification of Pεтяσℓ Mαятιηι`,
    state: 'Working on Brain.Pεтяσl',
    largeImageKey: 'hr2',
    largeImageText: 'Modification of Petrol',
    smallImageKey: 'hr',
    smallImageText: 'not done yet',
    instance: false,
  });
});

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("TOKEN");


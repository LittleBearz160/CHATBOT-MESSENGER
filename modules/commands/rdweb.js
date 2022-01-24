module.exports.config = {
	name: "rdweb",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz",
	description: "web vô dụng",
	commandCategory: "Giải trí",
	usages: "rdweb",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let timkiem = args.join(" ");
const res = await axios.get(`https://le31.glitch.me/other/theuselessweb`);

var web = res.data.data;
return api.sendMessage(`\n≻── ⋆✩⋆ ──≺\nLink: ${web}\n≻── ⋆✩⋆ ──≺\n `, event.threadID, event.messageID)
}

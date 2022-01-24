module.exports.config = {
	name: "sdt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz",
	description: "Xem phong thuỷ sđt",
	commandCategory: "Horoscope",
	usages: "sdt [Số điện thoại]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let timkiem = args.join(" ");
const res = await axios.get(`https://le31.glitch.me/other/sdtphongthuy?number=${timkiem}`);
var nghia = res.data.ynghia;
var name = res.data.bonsoduoi;
var soly = res.data.soly;
var ket = res.data.ketluan;
return api.sendMessage(`⚡️4 số cuối: ${name}\n≻─ ⋆✩⋆ ─≺\n${soly}\n≻─ ⋆✩⋆ ─≺\n${nghia}\n≻─ ⋆✩⋆ ─≺\n${ket}`, event.threadID, event.messageID)
}

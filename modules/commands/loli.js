module.exports.config = {
	name: "loli",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz",
	description: "Ảnh loli",
	commandCategory: "Hình ảnh",
	usages: "loli",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 500) {
	axios.get('https://www.api-adreno.tk/loli?fbclid=IwAR0Uu0kM8YPmh7iJui5nC4rt0F0jlUfzix_fVU73z8tyj0K3z_WdNVAjYgY').then(res => {
	var image = res.data.url;
  
	let callback = function () {
					api.sendMessage({
						body: `ĐM ẤU DÂM. FBI OPEN UP 😼😼😼\nSố dư: -2500$  `,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 500})
			})
	} else return api.sendMessage("Cần 500$ để xem ảnh?",event.threadID,event.messageID);
}
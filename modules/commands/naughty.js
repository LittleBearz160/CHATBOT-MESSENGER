module.exports.config = {
	name: "naughty",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz & api naughty",
	description: "Ảnh naughty có phí",
	commandCategory: "hình ảnh",
	usages: "naughty",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 1500) {
	axios.get('https://naughty.ocvat2810.repl.co').then(res => {
	var image = res.data.data;
  
	let callback = function () {
					api.sendMessage({
						body: `😼😼😼\nSố dư: -1500$ `,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 1500})
			})
	} else return api.sendMessage("Cần 1500$ để xem ảnh? \nkhông làm mà đòi có ăn thì chỉ có ăn cứt nhá",event.threadID,event.messageID);
}
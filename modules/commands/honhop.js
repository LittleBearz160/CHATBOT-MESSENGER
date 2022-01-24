module.exports.config = {
	name: "honhop",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz",
	description: "Ảnh hỗn hợp chất lượng thấp",
	commandCategory: "Hình ảnh",
	usages: "honhop",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 5000) {
	axios.get('https://api.ditlolichapfbi.tk/image?type=nude&apikey=phongdeptraiprovip').then(res => {
	var image = res.data.data;
  
	let callback = function () {
					api.sendMessage({
						body: `Chất lượng thấp phải chịu 😼😼😼\nSố dư: -5000$  `,
						attachment: fs.createReadStream(__dirname + `/cache/boobs.png`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/boobs.png`), event.messageID);
				};
				request(image).pipe(fs.createWriteStream(__dirname + `/cache/boobs.png`)).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 5000})
			})
	} else return api.sendMessage("Cần 5000$ để xem ảnh?",event.threadID,event.messageID);
}
module.exports.config = {
	name: "bcexp",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra số tiền của bản thân hoặc người được tag",
	commandCategory: "economy",
	usages: "[Tag]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"soexpnbanthan": "🌀 Số exp bạn đang có: %1 🌀",
		"soexpnnguoikhac": "🌀 Số exp của %1 hiện đang có là: %2 🌀"
	},
	"en": {
		"soexpnbanthan": "🌀 Your current balance: %1 🌀",
		"soexpnnguoikhac": "🌀 %1's current balance: %2 🌀"
	}
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
	const { threadID, messageID, senderID, mentions } = event;

	if (!args[0]) {
		const exp = (await Currencies.getData(senderID)).exp;
		return api.sendMessage(getText("soexpnbanthan", exp), threadID);
	}

	else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions)[0];
		var exp = (await Currencies.getData(mention)).exp;
		if (!exp) exp = 0;
		return api.sendMessage({
			body: getText("soexpnnguoikhac", mentions[mention].replace(/\@/g, ""), exp),
			mentions: [{
				tag: mentions[mention].replace(/\@/g, ""),
				id: mention
			}]
		}, threadID, messageID);
	}

	else return global.utils.throwError(this.config.name, threadID, messageID);
}

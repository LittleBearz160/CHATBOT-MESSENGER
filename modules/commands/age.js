module.exports.config = {
	name: "age",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Bearz",
	description: "Đếm tuổi",
	commandCategory: "Đếm ngày",
	usages: "[ngày/tháng/năm sinh]",
	cooldowns: 0
};

module.exports.run = function ({ event, args, api, getText }) {
var tip = args[0];
if (!tip) return api.sendMessage(`Sai format.`,event.threadID,event.messageID);
else {
	const axios = require('axios');
	const moment = require("moment-timezone");
	var hientai = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY");
	var time = `${tip}`;
	axios.get(`https://le31.glitch.me/other/date-calculator?first=${time}&second=${hientai}`).then(res => {
     var nam = res.data.years;
     var thang = res.data.months;
     var tuan = res.data.weeks;
     var ngay = res.data.days;
     var gio = res.data.hours;
     var phut = res.data.minutes;
     var giay = res.data.seconds;
     return api.sendMessage(`≻── ⋆ĐẾM TUỔI⋆ ──≺\n\nNgày tháng năm sinh: ${tip}\n\n⏱ Số năm: ${nam} \n\n⏱ Số tháng: ${thang} \n\n⏱ Số tuần: ${tuan} \n\n⏱ Số ngày: ${ngay} \n\n⏱ Số giờ: ${gio} \n\n⏱ Số phút: ${phut} \n\nn≻── ⋆✩⋆ ──≺\n\n⏱ Số giây: ${giay} `,event.threadID,event.messageID);
	});
}
}
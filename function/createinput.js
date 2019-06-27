const db=require('../dbhelper/dbstuff.js');

const fn=async function createinput(name1,status) {
	const health = new db.Health({
		name: name1,
		health: status,
		isPublished: true
	});
	const result = await health.save();
	console.log(result);
};

module.exports={fn};
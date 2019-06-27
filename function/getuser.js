const db=require('../dbhelper/dbstuff.js');
const ghd=	async function gethealthdetails(names,res) {
	console.log(names);
	const healths = await db.Health
		.find({ name: names, isPublished: true })
		.limit(10)
		.sort({ name: 1 });
	const value=JSON.stringify({healths});
    const dataa=JSON.parse(value);
    console.log(dataa);
    console.log(dataa.healths[0].health);
	const c=dataa.healths[0].health;
	res.send(c);   
}
module.exports={
ghd
};
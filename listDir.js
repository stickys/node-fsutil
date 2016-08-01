fs = require('fs');
ut = require('./hirotUtils.js');

var args = process.argv
var prefix = 'dummyPrefix'
var dir = '\\';
var timeAndDate = new Date();
var outputFile = "";

if(args.length <3){
	console.log("USAGE: \n   node listDir.js path [prefix]");
	return;
}

console.log(args);
dir = args[2];

if(args[3]){
	prefix = args[3];
}

fs.readdir(dir, (err, files) => {
	if(err){
		console.error("An error occured when reading the file \"" + dir + "\".\n",err);
		return;
	}
	var buff = '';
	for(var i = 0; i < files.length; ++i){
		/*
		if(fs.statSync(dir + '/' + files[i]).isDirectory()){
			console.log('*** ' + files[i]);
		}else{
			console.log(files[i]);
		}
		*/

		buff = buff + prefix + ',' + files[i] + '\n';
	}

	outputFile = "./" + prefix + "_" + timeAndDate.getFullYear() + getTwoDigits(timeAndDate.getMonth() + 1) + getTwoDigits(timeAndDate.getDate()) + getTwoDigits(timeAndDate.getHours()) + getTwoDigits(timeAndDate.getMinutes()) + getTwoDigits(timeAndDate.getMinutes()) + ".csv";

	fs.writeFile(outputFile, buff, {flag:"w"}, (err) => {
		if(err){
			console.error("An error occured when writing to the file \"" + outputFile + "\".\n", err);
			return;
		}		
	});
});

function getTwoDigits(num){
	var res = "";
	if(num < 10){
		res = "0" + num;
	}else{
		res = num;
	}
	return res;
}
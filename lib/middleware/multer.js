const multer = require('multer'),
	fs = require('fs'),
	config = require('../config');

var init = function(){
	if(!fs.existsSync(config.cfg.uploadDir)){
		fs.mkdir(config.cfg.uploadDir, 0744);
	}
}

var fileName;
var storage = multer.diskStorage({
	destination: function(request, file, callback){
		callback(null, config.cfg.uploadDir);
	},
	filename: function(request, file, callback){
		var time = new Date().getTime();
		fileName = file.fieldname + '_' + time + '_' + file.originalname;
		callback(null, fileName);
	}
});

var upload = multer({storage : storage});

function _singleFile(key){
	console.log("key----------------------------------",key);
	
	// init();
	return upload.single(key);
}

function _fileArray(key, count){
	// init();
	return upload.array(key, count);
}
function _randomFiles( array ) {
    return upload.fields( array );
}

// ========================== Export Module Start ==========================
module.exports = {
	single: _singleFile,
	array: _fileArray,
	fields: _randomFiles
}
// ========================== Export Module End ============================
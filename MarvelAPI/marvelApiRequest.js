var md5 = require('js-md5');
var client = require('node-rest-client').Client;
const util = require('util');
var request = require('request');

var publicKey = 'YOUR_PUBLIC_KEY';
var privateKey = 'YOUR_PRIVATE_KEY';

var currentTime = Date.now();
var byteArray = md5.array(currentTime + privateKey + publicKey);
var hash = new String(toHexString(byteArray));

console.log("ByteArray " + byteArray);
console.log("Hash " + hash);

var requestReturn = request({
    url: "http://gateway.marvel.com:80/v1/public/characters/1009610?" +
        "ts=" + currentTime +
        "&apikey=" + publicKey +
        "&hash=" + hash

}, function (err, response, body) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(" ");
    console.log("RETURN: " + util.inspect(body, false, null));
    console.log(" ");
});


function toHexString(bytes) {
    return bytes.map(function (byte) {
        return ("00" + (byte & 0xFF).toString(16)).slice(-2)
    }).join('')
}

function toByteArray(str) {
    var myBuffer = [];
    var buffer = new Buffer(str, 'utf16le');
    for (var i = 0; i < buffer.length; i++) {
        myBuffer.push(buffer[i]);
    }
    return myBuffer;
}

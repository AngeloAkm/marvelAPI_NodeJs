# marvelApi_NodeJs
A simple request to the Mavel's API using NodeJs

 - ##First 
  Install this plugins
```sh
    npm install js-md5
    npm install node-rest-client
    npm install request
```
 - ## Then
  Create a simple .js file e copy / paste this content
  The request that i made is for the spider man ( my favourite by the way haha ) 
  But you can change whathever do you want ;)
  Just don't forget to change de request URL
  ```sh
  url: "http://gateway.marvel.com:80/v1/public/characters/1009610?" + ---> 1009610 for SpiderMan
  ```
  ### marvelApiRequest.js
  
```sh
var md5 = require('js-md5');
var client = require('node-rest-client').Client;
const util = require('util');
var request = require('request');


var publicKey = 'YOUR_PUBLIC_KEY';
var privateKey = 'YOUR_PRIVATE_KEY';

var currentTime = Date.now();

var byteArray = md5.array(currentTime + privateKey + publicKey);

console.log("ByteArray " + byteArray);

var result = new String(toHexString(byteArray));

console.log("Result " + result);

var x = request({
    url: "http://gateway.marvel.com:80/v1/public/characters/1009610?" +
        "ts=" + currentTime +
        "&apikey=" + publicKey +
        "&hash=" + result

}, function (err, response, body) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(" ");
    console.log("RESPOSTA: " + util.inspect(body, false, null));
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
```

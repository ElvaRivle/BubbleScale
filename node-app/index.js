'use strict';

function bblSort(){
    const arr = Array.from({length: 30000}, () => Math.floor(Math.random() * 1000000));
	return new Promise((resolve, reject) => {
	    for(var i = 0; i < arr.length; i++){
		    for(var j = 0; j < ( arr.length - i -1 ); j++){
			    if(arr[j] > arr[j+1]){
		            	var temp = arr[j]
		            	arr[j] = arr[j + 1]
		            	arr[j+1] = temp
		           }
		    }
	     }
	    return resolve("OK")
	})
}

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', async (req, res) => {
  bblSort().then((value) => res.status(200).send(value))
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

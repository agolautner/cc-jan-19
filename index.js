console.log('hello world');

const axios = require('axios');

const promiseOfResponse = axios.get('http://www.nemzetisport.hu');
console.log(promiseOfResponse);

const responseListener = () => {
    console.log('promise resolved');
    // console.log(promiseOfResponse);
}

promiseOfResponse.then(responseListener);
console.log('end');
#Socket - Node.js SDK

This SDK allows you to invoke socket from your node.js app.

##Set-up:

First of all, download the npm module:

    npm install viasocket --save

Then, require the package in your code:

    const ViaSocket = require('viasocket');

Once required, the last step is to initialize the socket with your auth key:

    const socket = new Socket('AuthKey');

That's all, your SDK is set up! You can invoke any flow using the flow identifier.

##Usage:

To invoke any flow, just copy flow iidentifier and paste it in your code. For example,

    socket.call('9zDuuwvDK3kYNuM9jdjkdj', {
        message: 'Hello, Socket',
        user : 'Priyanka P'
    })
        .on('success', (data) => {
            console.log('success');
        })
        .on('error', (err) => {
            console.warn(err);
        });



##Licence:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


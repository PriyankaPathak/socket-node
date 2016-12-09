"use strict";

const request = require('request')

class Socket {

    /**
     * Returns the base URL for flow calls
     * @returns {string} Base URL for flow calls
     */
    static getBaseURL() {
        return "https://sokt.io";
    }

    /**
     * Build a URL for a flow call
     * @param idetifier Identifier of flow to be called
     * @returns {string} Generated URL
     */
    static flowURLBuilder(flowIdentifier) {
        return `${Socket.getBaseURL()}/${flowIdentifier}`;
    }

    /**
     * Creates a new Socket instance
     * @param authKey Authentication key
     */
    constructor (authKey) {
        this.authKey = authKey;
    }

    /**
     * Call a flow
     * @param flowIdentifier Unique identifier of the flow
     * @param args Arguments to send to the flow (JSON)
     */
    call (flowIdentifier, args) {
        //Will hold all the callbacks user adds using .on()
        let __callbacks = {};

        //Call the block
        request({
            method: 'POST',
            uri: Socket.flowURLBuilder(flowIdentifier),
            headers: {
                'Authkey': this.authKey,
                'Content-Type' : 'application/json'
            },
            formData: args || {}
        }, (error, response, body) => {
            try {
                if (typeof body != 'object')
                    body = JSON.parse(body);
            } catch (e) {
                error = e;
            }
            if (error || response.statusCode != 200 || !(body.hasOwnProperty('outcome'))) {
                if (__callbacks.hasOwnProperty('error')) {
                    __callbacks['error'](body);
                }
            } else {
                if (__callbacks.hasOwnProperty(body.outcome)) {
                    __callbacks[body.outcome](body.payload);
                }
            }
        });

        //Return object that let's user add callback using .on()
        var r = {
            on: (e, cb) => {
                if (typeof cb == 'function' && typeof e == 'string') {
                    __callbacks[e] = cb;
                } else {
                    throw "Invalid event key and callback. Event key should be a string(success, error, etc) and callback should be a function."
                }
                return r;
            }
        };
        return r;
    }
}

module.exports = Socket;
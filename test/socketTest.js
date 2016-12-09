"use strict";

const Socket = require('./../index');
const expect = require("chai").expect;

describe("Socket", () => {
  it("Gets the base URL", () => {
    expect(Socket.getBaseURL()).to.equal('https://sokt.io');
  });

  it("Constructs Socket Connect object", () => {
    let r = new Socket("key");
    expect(r.authKey).to.equal("key");
  });

  it("Builds flow URL", () => {
    expect(Socket.flowURLBuilder("identifier")).to.equal('https://sokt.io/identifier');
  });

});
const app = require("../index");
var chai = require("chai");
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();
const mocha = require("mocha");

let capitalizeTextResult = app.capitalizeText("iti");
let createArrayResult = app.createArray(3);

describe("Index", function () {
    describe("capitalizeText()", function () {
        //test that the function takes a string  it will return a string
        it("Should take a string and return a string", function () {
            assert.isString(capitalizeTextResult);
        });

        //test that the function takes a string and return it after capitalize it
        it("Should take a string and return it capitalized", function () {
            assert.equal(capitalizeTextResult, "ITI");
        });

        //test if the function takes number it will throw type error says parameter should be string
        it("Should take a number and throw a type error saying parameter should be string", function () {
            expect(function () {
                app.capitalizeText(10);
            }).to.throw(TypeError, "parameter should be string");
        });

        //test if the input iti , the returned value  will not equal to hello
        it("Shouldn't return hello if input is iti", function () {
            assert.notEqual(capitalizeTextResult, "hello");
        });
    });
    describe("createArray()", function () {
        //Bonus-->//try to delay the testing process 5 seconds
        beforeEach(function (done) {
            this.timeout(5000); // A very long environment setup.
            setTimeout(done, 2500);
        });

        //make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call
        let testCounter = 1;
        this.beforeEach(function () {
            console.log(testCounter++);
        });

        //test that the return value of type array
        it("Should return array as a type", function () {
            assert.isArray(createArrayResult);
        });

        //test if we pass 3 it will return array of length 3 and test it's include 1
        it("Should return an array of length 3 and includes 1 when passed 3", function () {
            //try to use different styles (expect , should , assert)
            // assert.lengthOf(createArrayResult, 3);
            createArrayResult.should.have.lengthOf(3);
            // assert.include(createArrayResult, 1);
            expect(createArrayResult).to.include(1);
        });

        //Bonus--> //after finishing your test process try to  run it on a browser

        //make pending test case
        it("Should return an empty array when passed value >= 0");
    });
});

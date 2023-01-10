const { create } = require("../Models/users");
const User = require("../Models/users");

async function signUp(data) {
    let res = await User.create(data);
    return res;
}

async function signIn(data) {
    let res = await User.find(data);
    return res;
}

module.exports = { signUp, signIn };

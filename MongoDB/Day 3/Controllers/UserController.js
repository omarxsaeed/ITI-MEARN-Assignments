const User = require("../Models/users");

async function getAllUsers() {
    let res = await User.find().select({ _id: 0, fName: 1 });
    // console.log(res);
    return res;
}

async function deleteAllUsers() {
    let res = await User.deleteMany();
    return res;
}

async function signUp(data) {
    let res = await User.create(data);
    return res;
}

async function signIn(data) {
    let res = await User.findOne({ username: data });
    return res;
}

async function updateUserInfo(data) {
    // let res = await User.findOne({ username: data.username }).then((user) => {
    //     user = data;
    //     user.save();
    // });
    let res = await User.findOneAndUpdate({ username: data.username }, data);
    // console.log(res);
    return res;
}

module.exports = { signUp, signIn, getAllUsers, deleteAllUsers, updateUserInfo };

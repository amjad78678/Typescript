"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./modules/user");
var user = {
    id: 1,
    name: 'amjadali',
    email: 'amjadali@a.com'
};
var user1 = new user_1.UserAccount(user);
user1.displayUserInfo();

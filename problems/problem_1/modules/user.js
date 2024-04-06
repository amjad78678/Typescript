"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAccount = void 0;
var UserAccount = /** @class */ (function () {
    function UserAccount(user) {
        this.user = user;
    }
    UserAccount.prototype.displayUserInfo = function () {
        console.log("This is details ".concat(this.user.id, " my name is ").concat(this.user.name, " also email is ").concat(this.user.email));
    };
    return UserAccount;
}());
exports.UserAccount = UserAccount;

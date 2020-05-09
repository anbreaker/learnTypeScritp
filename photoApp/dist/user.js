"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, username, firtsName, isPro) {
        this.id = id;
        this.username = username;
        this.firtsName = firtsName;
        this.isPro = isPro;
        this.album = [];
    }
    User.prototype.addAlbum = function (album) {
        this.album.push(album);
    };
    return User;
}());
exports.User = User;

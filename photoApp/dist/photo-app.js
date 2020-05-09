"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
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
// Superclass
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        // getters & setters
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        // set id(id: number) {
        //   this._id = id;
        // }
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
exports.Item = Item;
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this.pictures = [];
        return _this;
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}(Item));
exports.Album = Album;
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "orientation", {
        // getters & setters
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this.orientation = orientation;
        },
        enumerable: true,
        configurable: true
    });
    // Comportamiento de la clase
    Picture.prototype.toString = function () {
        return "[id: " + this._id + ", \n            title: " + this._title + ", \n            orientation: " + this._orientation + "]";
    };
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
}(Item));
exports.Picture = Picture;

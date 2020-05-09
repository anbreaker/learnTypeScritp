"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("item");
class Album extends item_1.Item {
    constructor(id, title) {
        super(id, title);
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;

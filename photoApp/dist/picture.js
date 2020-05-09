"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_1 = require("./item");
const photo_orientation_1 = require("./photo-orientation");
class Picture extends item_1.Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    // getters & setters
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this.orientation = orientation;
    }
    // Comportamiento de la clase
    toString() {
        return `[id: ${this._id}, 
            title: ${this._title}, 
            orientation: ${this._orientation}]`;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photo_orientation_1.PhotoOrientation;

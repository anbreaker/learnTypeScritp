"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Superclass
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    // getters & setters
    get id() {
        return this._id;
    }
    // set id(id: number) {
    //   this._id = id;
    // }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
exports.Item = Item;

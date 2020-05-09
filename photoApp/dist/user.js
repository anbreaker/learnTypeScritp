"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, username, firtsName, isPro) {
        this.id = id;
        this.username = username;
        this.firtsName = firtsName;
        this.isPro = isPro;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
    removeAlbum(album) {
        // Buscar Album
        const index = this.album.findIndex((a) => a.id === album.id);
        let deleteAlbum;
        if (index >= 0) {
            deleteAlbum = this.album[index];
            this.album.splice(index, 1);
        }
        return deleteAlbum;
    }
}
exports.User = User;

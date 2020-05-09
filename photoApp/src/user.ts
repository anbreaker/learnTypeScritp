export class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firtsName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }
}

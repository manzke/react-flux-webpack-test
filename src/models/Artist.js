class Artist {
    id = '';
    url = '';
    name = '';

    constructor(item) {
        this.id = item.artistId;
        this.url = item.artistViewUrl;
        this.name = item.artistName;
    }
}

export default Artist;
class Track {
    id = '';
    url = '';
    name = '';
    length = 0;
    price = 0.00;

    constructor(item) {
        this.id = item.trackId;
        this.url = item.trackViewUrl;
        this.name = item.trackName;
        this.length = item.trackTimeMillis;
        this.price = item.trackPrice;
    }
}

export default Track;
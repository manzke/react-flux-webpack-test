import React from 'react';

class ArtistDetails extends React.Component {
    constructor(props) {
        super(props);
        console.log('ArtistDetails View created');
    }
    render() {
        return (
            <div>
                <h1>Artist: </h1> {this.props.params.id}
            </div>
        );
    }
}

export default ArtistDetails;
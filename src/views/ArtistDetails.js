import React from 'react';

class ArtistDetails extends React.Component {
    render() {
        return (
            <div>
                <h1>Artist: </h1> {this.props.params.id}
            </div>
        );
    }
}

export default ArtistDetails;
import React from 'react';

class TrackDetails extends React.Component {

    render() {
        return (
            <div>
                <h1>Track: </h1> {this.props.params.id}

            </div>
        );
    }
}

export default TrackDetails;
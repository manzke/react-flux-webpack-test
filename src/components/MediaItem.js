import React from 'react';

class MediaItem extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.item.trackCensoredName}</p>
            </div>
        );
    }
}

export default MediaItem;
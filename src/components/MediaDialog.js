import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Store from 'stores/MediaStore';
import Actions from 'actions/MediaActions';
import MediaItem from 'components/MediaItem';

@connectToStores
class MediaDialog extends React.Component {
    constructor(props) {
        super(props);
    }

    static getStores(props) {
        return [Store];
    }

    static getPropsFromStores(props) {
        return Store.getState();
    }

    render() {
        return (
            <div>
                <h1>Count: {this.props.items.length}</h1>
                {this.props.items.map((item, i) => {
                    return <MediaItem item={item}/>
                })}
            </div>
        );
    }
}

export default MediaDialog;
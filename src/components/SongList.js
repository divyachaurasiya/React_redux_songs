import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

    renderList() {
console.log(this.props);
        return this.props.state.map((song) => {

            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button onClick={() => this.props.selectSong(song)} className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        //console.log(this.props.state);
        return <div className="ui devided list">{ this.renderList() }</div>;
    }
    
}

const mapStateToProps = (state) => {
    console.log('set map state',state);
    return {state: state.songs};
};

export default connect(mapStateToProps, { selectSong })(SongList);
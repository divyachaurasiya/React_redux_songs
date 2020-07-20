import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song}) => {

    if(!song) {
        return <div><h3>Select song</h3></div>;
    }
    
    return (
        <div className="header">
            Song Details :
            <p>
                Title : {song.title}
                <br />
                Duration : {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {song : state.selectedSong};
}

export default connect(mapStateToProps)(SongDetails);
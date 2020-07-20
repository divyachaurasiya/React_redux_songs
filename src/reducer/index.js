import { combineReducers } from 'redux';
const songReducer = () => {

    return [
        {title : 'No Scrubs', duration : '4:05'},
        {title : 'All the way', duration : '5:05'},
        {title : 'All star', duration : '3:00'},
        {title : 'Macarena', duration : '2:10'}
    ];

};

const selectedSongReducer = (selectedSong=null, action) => {

    if(action.type === 'SELECTED_SONG'){
        return action.payload;
    }
    return selectedSong;

};

export default combineReducers({
    songs : songReducer,
    selectedSong : selectedSongReducer
});
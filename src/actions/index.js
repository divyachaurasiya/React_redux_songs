export const selectSong = (song) => {
    console.log('selecetd song action');
    return {
        type : 'SELECTED_SONG',
        payload : song
    };
};
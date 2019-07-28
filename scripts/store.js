const store = (function(){

    let localBookmarks = [];
    let filterMin = 0;
    let filteredBookmarks = [];
    let reload = true;

    return {
        localBookmarks,
        filterMin,
        filteredBookmarks,
        reload
    };


}())
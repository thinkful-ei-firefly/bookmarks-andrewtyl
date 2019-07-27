const api = (function(){

    const baseURL = "https://thinkful-list-api.herokuapp.com/andrewtyl/bookmarks";

    function grabAllBookmarksFromServer() {
        store.localBookmarks = [];
        let serverBookmarks = fetch(`${baseURL}`)
        .then(function(){
            console.log(serverBookmarks);
        })
    }

    function pushBookmarktoServer (bookmark) {

    }

    function patchBookmarkonServer (id, bookmark) {

    }

    function deleteBookmarkonServer (id) {

    }

    return {
        grabAllBookmarksFromServer,
        pushBookmarktoServer,
        patchBookmarkonServer,
        deleteBookmarkonServer
    };

}())
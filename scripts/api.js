const api = (function(){

    const baseURL = "https://thinkful-list-api.herokuapp.com/andrewtyl/bookmarks";

    function listAPIFetch(input) {
        let error;
        return fetch(input)
            .then(res => {
                if (!res.ok) {
                    window.alert("There may have been an issue accessing the Bookmarks on the server. Please refresh the page.")
                }
                else {
                    return res.json();
                };
            })
            .then(data => {
                if (error) {
                    error.message = data.message;
                    return Promise.reject(error);
                }
                else {
                    return data;
                }
            })
    }

    function getBookmarks() {
        return listAPIFetch(baseURL, {
            method: "GET",
            headers: {"Content-Type":"application/json"}
        })};

    function pushBookmark (title, url, desc, rating) {
        let pushedRating = rating;
        if (rating === undefined){pushedRating = 1};
        let incomingBody = {"title":title, "url":url, "desc":desc, "rating":pushedRating}
        let pushedBody = JSON.stringify(incomingBody);
        return fetch(baseURL, {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: pushedBody})
        .then(res => {
            if (!res.ok) {
                window.alert("There may have been an issue accessing the Bookmarks on the server. Please refresh the page.");
            }
        })
        };

    function patchBookmark (id, title, url, desc, rating) {
        let pushedRating = rating;
        if (rating === undefined){pushedRating = 1};
        let incomingBody = {"title":title, "url":url, "desc":desc, "rating":pushedRating}
        let pushedBody = JSON.stringify(incomingBody);
        return fetch(`${baseURL}/${id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json"},
            body: pushedBody})
        .then(res => {
                if (!res.ok) {window.alert("There may have been an issue accessing the Bookmarks on the server. Please refresh the page.")}
            })}

    function deleteBookmark (id) {
        return fetch(`${baseURL}/${id}`, {
            method: "DELETE"
        })
            .then(res =>{
                if (!res.ok) {window.alert("There may have been an issue accessing the Bookmarks on the server. Please refresh the page.")};
            })
    };

    return {
        getBookmarks,
        pushBookmark,
        patchBookmark,
        deleteBookmark
    };

}())
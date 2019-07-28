const api = (function(){

    const baseURL = "https://thinkful-list-api.herokuapp.com/andrewtyl/bookmarks";

    function listAPIFetch(input) {
        let error;
        return fetch(input)
            .then(res => {
                console.log(res);
                if (!res.ok) {
                    error = {code: res.status};
                    if (!res.headers.get('content-type').includes('json')) {
                        error.message = res.statusText;
                        return Promise.reject(error);
                    }
                }
                else {return res};
            })
            .then(data => {
                console.log(data);
                if (error) {
                    error.message = data.message;
                    return Promise.reject(error);
                }
                else {
                    let jsondata = JSON.stringify(data);
                    console.log(jsondata);
                    return jsondata
                }
            })
    }

    function getBookmarks() {
        return listAPIFetch(baseURL, {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })};

    function pushBookmark (title, url, desc, rating) {
        return listAPIFetch(baseURL, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: {'title':title, 'url':url, 'desc':desc, 'rating':rating}})
        };

    function patchBookmark (id, title, url, desc, rating) {
        return listAPIFetch(`${baseURL}/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: {'title':title, 'url':url, 'desc':desc, 'rating':rating}})
        };

    function deleteBookmark (id) {
        return listAPIFetch(`${baseURL}/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}
        })};

    return {
        getBookmarks,
        pushBookmark,
        patchBookmark,
        deleteBookmark
    };

}())
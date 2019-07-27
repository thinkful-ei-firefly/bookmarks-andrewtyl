const store = (function(){

    let localBookmarks = [
        {
            id: 176271261726,
            title: "Google",
            desc: "Search Engine",
            url: "http://www.google.com",
            rating: 5,
            compact: true
        },
        {
            id: 98441651,
            title: "SWTOR",
            desc: "Star Wars: The Old Republic Official Site",
            url: "http://www.swtor.com/",
            rating: 5,
            compact: false

        },
        {
            id: 65165161847,
            title: "Fox News",
            desc: "Breaking News, Latest News and Current News from FOXNews.com.",
            url: "https://www.foxnews.com/",
            rating: 1,
            compact: false
        },
        {
            id: 8949484894891189,
            title: "Lorem ipsum dolor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            url: "https://www.foxnews.com/",
            rating: 1,
            compact: false
        }
    ];
    let filterMin = 0;

    return {
        localBookmarks,
        filterMin
    };


}())
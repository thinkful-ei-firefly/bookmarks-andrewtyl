$(document).ready(function() {
    program.allHandles();
    program.renderDefaultPage();

    api.grabAllBookmarksFromServer();
});
const program = (function(){

    function renderDefaultPage(){
        console.log("renderDefaultPage ran");
        $("#add-item-form").html("");
        $('#bookmarks').html("");
        let bookmarks = store.localBookmarks;
        for (let i = 0; i < bookmarks.length; i++) {
            let currentBookmark = bookmarks[i];
            let currentRating;


            if (currentBookmark.rating === 5){
                currentRating = "&#9733;&#9733;&#9733;&#9733;&#9733;";
            }
            else if (currentBookmark.rating === 4) {
                currentRating = "&#9733;&#9733;&#9733;&#9733;&#9734;";
            }
            
            else if (currentBookmark.rating === 3) {
                currentRating = "&#9733;&#9733;&#9733;&#9734;&#9734;";
            }
            
            else if (currentBookmark.rating === 2) {
                currentRating = "&#9733;&#9733;&#9734;&#9734;&#9734;";
            }
            
            else if (currentBookmark.rating === 1) {
                currentRating = "&#9733;&#9734;&#9734;&#9734;&#9734;";
            }
            
            else if (currentBookmark.rating === 0) {
                currentRating = "&#9734;&#9734;&#9734;&#9734;&#9734;";
            }
            else {
                console.log(`ERROR. Bookmark ${currentBookmark.title} has no rating`);
            }



            if (currentBookmark.compact === true) {
                $('#bookmarks').append(
                    `<div class="bookmark compact" id="${currentBookmark.id}">
                    <h3 class ="bookmark-title">${currentBookmark.title}</h3>
                    <span class="bookmark-rating">${currentRating}</span>
                    <img class="icon" src="assets/edit.png" alt="Edit Button" id="edit-item" id="edit-button-for-${currentBookmark.id}">
                    <img src="assets/delete.png" class="icon" alt="Delete Button" id="delete-item" id="delete-button-for-${currentBookmark.id}">
                    <input type="checkbox" class="compact-toggle" id="compact-for-${currentBookmark.id}" data-id="${currentBookmark.id}" name="compact" checked><label for="compact">Compact View</label>
                    </div>`
                )
            }
            else if (currentBookmark.compact === false) {
                $('#bookmarks').append(
                    `<div class="bookmark notCompact" id="${currentBookmark.id}">
                    <h3 class ="bookmark-title">${currentBookmark.title}</h3>
                    <p class="bookmark-desc">${currentBookmark.desc}</p>
                    <span class="bookmark-rating">${currentRating}</span>
                    <img class="icon" src="assets/edit.png" alt="Edit Button" id="edit-item" id="edit-button-for-${currentBookmark.id}">
                    <img src="assets/delete.png" class="icon" alt="Delete Button" id="delete-item" id="delete-button-for-${currentBookmark.id}">
                    <input type="checkbox" class="compact-toggle" id="compact-for-${currentBookmark.id}" data-id="${currentBookmark.id}" name="compact"><label for="compact">Compact View</label>
                    <span class="visit-site"><a href="${currentBookmark.url}">Visit Site</a><span>
                    </div>`
                )}
        }
    }

    function renderAddPage(){
        console.log("RenderAddPage ran");
        $('#bookmarks').html("");
        $('#filter').html("");
        $('#add-item-page').html(`
            <form id="add-item-form">
                <label for="title">Title:</label>
                <input type="text" name="title" id="newTitle" required>
                <label for="url">URL:</label>
                <input type="url" name="url" id="newURL" required>
                <label for="description">Description:</label>
                <input type="text" name="description" id="newDesc" required>
                <input type="reset" value="Cancel" id="cancel-add">
                <input type="submit" id="submit-item" value="Submit">
            </form>
        `)
        $('#add-item-button').attr("id", "add-item-button-greyed");
        $('#add-item-button-greyed').attr("title", "Add Bookmark (Disabled)");
    }

    //renderEditPage

    //renderDeletePage

    //handleDelete

    function handleAdd() {
        $("header").on('click', '#add-item-button', function() {
            console.log("Add Item button clicked!");
            renderAddPage();
            handleAddSubmit();
            handleCancelAdd();
        })
    }

    function handleAddSubmit() {
        $("#add-item-form").submit(function(e) {
            e.preventDefault();
            console.log("Submit button pressed!");
            const newTitle = $("#newTitle").val();
            const newURL = $("#newURL").val();
            const newDesc = $('#newDesc').val();
            let newBookmark = {
                newTitle,
                newURL,
                newDesc
            //    newRating
            }
            console.log(newBookmark);
            renderDefaultPage();
        })
    }

    function handleCancelAdd() {
        $("#add-item-form").on("click", "#cancel-add", function(e) {
            e.preventDefault();
            renderDefaultPage();
        })
    }

    //handleEdit

    //handleDelete

    function handleCompactToggle() {
        $("#bookmarks").on("click", ".compact-toggle", function(e) {
            console.log("Toggled activated");
            console.log(e.currentTarget);
            const thisID = $(e.currentTarget).data("id");
            const thisBookmark = store.localBookmarks.find(function(input) {
                return thisID === input.id;
            });
            thisBookmark.compact = !thisBookmark.compact;
            renderDefaultPage();

        })
    }


    function allHandles() {
        console.log("allHandles ran");
        handleAdd();
        handleAddSubmit();
        handleCancelAdd();
        handleCompactToggle();
    };

    return {
        allHandles,
        renderDefaultPage
    };
}())
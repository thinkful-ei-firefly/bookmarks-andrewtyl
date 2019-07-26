const program = (function(){

    function renderDefaultPage(){
        console.log("renderDefaultPage ran");
        $("#add-item-form").html("");
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
                    <input type="checkbox" id="compact-for-${currentBookmark.id} name="compact" checked><label for="compact">Compact View</label>
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
                    <input type="checkbox" id="compact-for-${currentBookmark.id} name="compact"><label for="compact">Compact View</label>
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
                <input type="url" name="url" required>
                <label for="description">Description:</label>
                <input type="text" name="description" required>
                <input type="reset" value="Cancel" id="cancel-add">
                <input type="submit" id="submit-item" value="Submit">
            </form>
        `)
    }

    //renderEditPage

    //renderDeletePage

    //handleDelete

    function handleAdd() {
        $("header").on('click', '#add-item-button', function() {
            console.log("Add Item button clicked!");
            renderAddPage();
            handleAddSubmit();
        })
    }

    function handleAddSubmit() {
        $("#add-item-form").submit(function(e) {
            e.preventDefault();
            console.log("Submit button pressed!");
            renderDefaultPage();
            let newTitle = $("#newTitle").val();
            console.log(newTitle);
            //let newBookmark = {
            //    newTitle,
            //    newURL,
            //    newDesc,
            //    newRating
            //}
            //console.log(newBookmark);
        })
    }

    //handleEdit

    //handleDelete

    //handleCompactToggle

    //handleAddItemHover

    //handleEditItemHover

    //handleDeleteItemHover


    function allHandles() {
        console.log("allHandles ran");
        handleAdd();
        handleAddSubmit();
    };

    return {
        allHandles,
        renderDefaultPage
    };
}())
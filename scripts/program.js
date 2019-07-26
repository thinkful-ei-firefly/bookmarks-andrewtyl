const program = (function(){

    function renderDefaultPage(){
        console.log("renderDefaultPage ran");
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

    //renderAddPage

    //renderEditPage

    //renderDeletePage

    //handleDelete

    //handleAdd

    //handleEdit

    //handleDelete

    //handleCompactToggle

    //handleAddItemHover

    //handleEditItemHover

    //handleDeleteItemHover


    function allHandles() {
        console.log("allHandles ran");
    };

    return {
        allHandles,
        renderDefaultPage
    };
}())
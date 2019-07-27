const program = (function(){

    function renderDefaultPage(){
        console.log("renderDefaultPage ran");
        $("#add-item-form").html("");
        $('#bookmarks').html("");
        $('#add-item-button-greyed').attr("id", "add-item-button");
        $('#add-item-button').attr("title", "Add Bookmark");
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
                    <a class="icon" src="assets/edit.png" title="Edit Button" id="edit-item"></a>
                    <a class="icon" title="Delete Button" id="delete-item"}"></a>
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
                    <a class="icon" src="assets/edit.png" title="Edit Button" id="edit-item"></a>
                    <a class="icon" title="Delete Button" id="delete-item"}"></a>
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
                <div id="title-input">
                    <label for="title" id="title-label">Title:</label>
                    <input type="text" minlength="1" maxlength="25" name="title" id="newTitle" required>
                </div>
                <div class="rate" id="rate-input">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                <div id="url-input">
                    <label for="url">URL:</label>
                    <input type="url" name="url" id="newURL" required>
                </div>
                <div id="desc-input">
                    <label for="description">Description:</label>
                    <input type="text" name="description" id="newDesc" required>
                </div>
                <input type="reset" value="Cancel" id="cancel-add">
                <input type="submit" id="submit-item" value="Add Bookmark">
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
            const newRating = $("input[name=rate]:checked").val();
            let newBookmark = {
                newTitle,
                newURL,
                newDesc,
                newRating
            }
            console.log(newBookmark);
            //Upload to API
            //Update local to match server
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
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
                    <a class="icon" src="assets/edit.png" title="Edit Button" id="edit-item" data-id="${currentBookmark.id}"></a>
                    <a class="icon" title="Delete Button" id="delete-item" data-id="${currentBookmark.id}"></a>
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
                    <a class="icon" src="assets/edit.png" title="Edit Button" id="edit-item" data-id="${currentBookmark.id}"></a>
                    <a class="icon" title="Delete Button" id="delete-item" data-id="${currentBookmark.id}"}"></a>
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
                    <textarea name="description" id="newDesc" form="add-item-form" required></textarea>
                </div>
                <input type="reset" value="Cancel" id="cancel-add">
                <input type="submit" id="submit-item" value="Add Bookmark">
            </form>
        `)
        $('#add-item-button').attr("id", "add-item-button-greyed");
        $('#add-item-button-greyed').attr("title", "Add Bookmark (Disabled)");
    }

    function renderEditPage(thisBookmark){
        console.log("Render Edit Page ran");
        $('#bookmarks').html("");
        $('#filter').html("");
        $('#add-item-page').html(`
            <form id="edit-item-form" data-id="${thisBookmark.id}">
                <div id="title-input">
                    <label for="title" id="title-label">Title:</label>
                    <input type="text" minlength="1" maxlength="25" name="title" id="newTitle" value="${thisBookmark.title}" required>
                </div>
                <div class="rate" id="rate-input">
                </div>
                <div id="url-input">
                    <label for="url">URL:</label>
                    <input type="url" name="url" id="newURL" value="${thisBookmark.url}" required>
                </div>
                <div id="desc-input">
                    <label for="description">Description:</label>
                    <textarea name="description" id="newDesc" form="add-item-form" required>${thisBookmark.desc}</textarea>
                </div>
                <input type="reset" value="Cancel" id="cancel-edit">
                <input type="submit" id="submit-edit" value="Edit Bookmark">
            </form>
        `)

        if (thisBookmark.rating === 5){
            $('.rate').html(`
            <input type="radio" id="star5" name="rate" value="5" checked />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>`);
        }

        else if (thisBookmark.rating === 4){
            $('.rate').html(`
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" checked/>
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>`);
        }

        else if (thisBookmark.rating === 3){
            $('.rate').html(`
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" checked />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>`);
        }

        else if (thisBookmark.rating === 2){
            $('.rate').html(`
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" checked/>
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>`);
        }

        else if (thisBookmark.rating === 1){
            $('.rate').html(`
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" checked/>
            <label for="star1" title="text">1 star</label>`);
        }
        else {
            $('.rate').html(`
            <input type="radio" id="star5" name="rate" value="5" />
            <label for="star5" title="text">5 stars</label>
            <input type="radio" id="star4" name="rate" value="4" />
            <label for="star4" title="text">4 stars</label>
            <input type="radio" id="star3" name="rate" value="3" />
            <label for="star3" title="text">3 stars</label>
            <input type="radio" id="star2" name="rate" value="2" />
            <label for="star2" title="text">2 stars</label>
            <input type="radio" id="star1" name="rate" value="1" />
            <label for="star1" title="text">1 star</label>`);
        }

        $('#add-item-button').attr("id", "add-item-button-greyed");
        $('#add-item-button-greyed').attr("title", "Add Bookmark (Disabled)");
    }

    function renderDeletePage(thisBookmark){
        console.log("Render Edit Page ran");
        $('#bookmarks').html("");
        $('#filter').html("");
        $('#bookmarks').html(`
        <div id="delete-confirm">
        <h4>Are you sure you want to delete the bookmark: "${thisBookmark.title}"?</h4>
        <button type="button" id="yes-delete" data-id="${thisBookmark.id}">Yes, Delete it</button>
        <button type="button" id="no-delete">No, Go Back</button>
        </div>
        `)
    }

    function handleDelete() {
        $("#bookmarks").on("click", "#delete-item", function(e) {
            console.log("delete button clicked");
            console.log(e.currentTarget);
            const thisID = $(e.currentTarget).data("id");
            const thisBookmark = store.localBookmarks.find(function(input) {
                return thisID === input.id;
            });
            console.log(thisBookmark);
            renderDeletePage(thisBookmark);
            handleDeleteNo();
            handleDeleteYes();
        })
    }

    function handleDeleteYes() {
        $('#delete-confirm').on("click", "#yes-delete", function(e){
            console.log(e.currentTarget);
            const thisID = $(e.currentTarget).data("id");
            console.log(thisID);
            //DELETE thisID from API
            //update localbookmarks from server
            renderDefaultPage();
        }
        );
    }

    function handleDeleteNo() {
        $('#delete-confirm').on("click", "#no-delete", function(){
            renderDefaultPage();
        });
    }

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
            if (newBookmark.newRating == undefined) {newBookmark.rating = 0};
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

    function handleEdit() {
        $("#bookmarks").on("click", "#edit-item", function(e) {
            console.log("Edit button clicked");
            console.log(e.currentTarget);
            const thisID = $(e.currentTarget).data("id");
            const thisBookmark = store.localBookmarks.find(function(input) {
                return thisID === input.id;
            });
            console.log(thisBookmark);
            renderEditPage(thisBookmark);
            handleCancelEdit();
            handleEditSubmit();
        })
    }

    function handleEditSubmit() {
        $("#edit-item-form").submit(function(e) {
            e.preventDefault();
            const thisID = $(e.currentTarget).data("id");
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
            if (newBookmark.newRating == undefined) {newBookmark.rating = 0};
            console.log(newBookmark);
            //Upload Patch to API (thisID, newBookmark)
            //Update local to match server
            renderDefaultPage();
        })
    }

    function handleCancelEdit() {
        $("#edit-item-form").on("click", "#cancel-edit", function(e) {
            e.preventDefault();
            renderDefaultPage();
        })
    }

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
        handleEdit();
        handleEditSubmit();
        handleCancelEdit();
        handleDelete();
        handleDeleteNo();
        handleDeleteYes();
    };

    return {
        allHandles,
        renderDefaultPage
    };
}())
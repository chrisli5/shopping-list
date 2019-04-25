function mainApp() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).parent().prev().toggleClass('shopping-item__checked');
    });

    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const itemToAdd = $('#shopping-list-entry').val();

        $('#shopping-list-entry').val('');
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${itemToAdd}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`
        );
    });
};

$(mainApp);
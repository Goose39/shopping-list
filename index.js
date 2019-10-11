function handleClicks() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        let item = $('#shopping-list-entry').val();
        addItem(item);
    })

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.stopPropagation();
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })

     $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        event.stopPropagation();
        $(this).closest('li').remove();
     })
}
//Function to add items to list
function addItem(item) {
    $('.shopping-list').append(`
    <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
    </li>`)
};


$(handleClicks);
/* Exercise 1: Wish list */
function addToList(item){
    $('#items').append('<li>'+ item + "<span class='label pending'>Pending</span>" + '</li>');
}

$(document).on('click', '#add-to-list', function() { //on function: .on( events [, selector ] [, data ], handler ) --> https://api.jquery.com/on/
    addToList($('#item').val());
    $('#item').val(""); //clear the input element
    $('#item').focus();
    updateTotal();
});

$(document).keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        addToList($('#item').val());
        $('#item').val(""); //clear the input element
        $('#item').focus();    
        updateTotal();
    }
});

$(document).on('click', '.pending', function(){
    var li_node = $(this).parent();
    li_node.append("<span class='label success'>Done!</span>");
    li_node.addClass('completed');
    $(this).remove();
    updateTotal();
});

function updateTotal(){
    var completed = $(".completed").length;
    var pending = $(".pending").length;

    $(".total").text('Pending: ' + pending + ' Completed: ' + completed);
}
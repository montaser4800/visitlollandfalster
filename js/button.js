$(document).ready(function () {
    $('#AddButton').click( function() {
        let counter = $('#Amount').val();
        counter++ ;
        $('#Amount').val(counter);
    });
    $('#SubButton').click( function() {
        let counter = $('#Amount').val();
        counter-- ;
        $('#Amount').val(counter);
    });
});

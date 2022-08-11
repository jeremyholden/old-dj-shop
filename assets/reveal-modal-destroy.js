$(document).ready(function(){
    $('.reveal-modal .btn').on('click', function(){
        $('.reveal-modal').foundation('reveal', 'close');
    });
});
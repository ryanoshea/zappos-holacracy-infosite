$(document).ready(function() {

var currentPage;
var anchor = window.location.hash;

console.log(window.location.hash);

$('.blink').blink();

// Make all links open in new tabs
$('a').attr('target', '_blank');
$('.navbar a').attr('target', '');
$('.pageLink').attr('target', '');

// Bind the event.
$(window).hashchange( function(){
    if (window.location.hash != '') {
        $('.pages').hide();
        $('#footer').hide();
        $($('#p1').parent()).removeClass('active');
        $($('#' + currentPage).parent()).removeClass('active');
        var id = window.location.hash.substring(1,window.location.hash.length);
        switch (id) {
            case 'intro':
                id = 'p1';
                break;
            case 'tech':
                id = 'p2';
                break;
            case 'security':
                id = 'p3';
                break;
            case 'economics':
                id = 'p4';
                break;
            case 'final':
                id = 'p5';
                break;
            case 'bibliography':
                id = 'ref';
                break;
            default:
                id = 'p1';
        }
        showPage(id);
        //$('#' + id).trigger('click');
    }
    else {
        $($('#' + currentPage).parent()).removeClass('active');
        currentPage = 'p1';
        showPage(currentPage);
    }
})

// Trigger the event (useful on page load).
$(window).hashchange();







function showPage(me) {
    $('#' + me + 'content').delay(600).fadeIn("slow");
    $('#footer').delay(600).fadeIn("slow");
    $($('#' + me).parent()).addClass('active');
    currentPage = me;
}

function hidePages(me) {

    $('.pages').fadeOut("slow");

    $('#footer').fadeOut("slow");

    $($('#' + currentPage).parent()).removeClass('active');
    showPage(me);
    
}

$('.nav a').click(function(event) {
    if (event.target.id != currentPage) {
        hidePages(event.target.id);
    }
});

$('.pageLink').click(function(event) {
    $('#' + $(event.target).attr('title')).trigger('click');
})

$('.navbar-brand').click(function(event) {
    $('#p1').trigger('click');
})


});
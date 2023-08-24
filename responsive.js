var defaultURL = 'https://prince-shivaram.github.io/DSC-LPU-Website/#'; //<---- CHANGE TO YOUR WEBSITE URL

//show loading graphic
function showLoader(id) {
    $('#' + id + ' img').fadeIn('slow');
}

//❎
function loadPage($frame, url) {
    if (url.substr(0, 7) !== 'http://' && url.substr(0, 8) !== 'https://' && url.substr(0, 7) !== 'file://') {
        url = 'http://' + url;
    }
    $('iframe').not($frame).each(function () {
        showLoader($(this).parent().attr('id'));
    })
    $('iframe').not($frame).data('loaded', false);
    $('iframe').not($frame).attr('src', url);
}

//when document loads
$(document).ready(function () {

    /*loadPage('', defaultURL);*/

    //query string
    var qsArray = window.location.href.split('?');
    var qs = qsArray[qsArray.length - 1];

    if (qs != '' && qsArray.length > 1) {
        $('#url input[type=text]').val(qs);
        /*loadPage('', qs);*/
    }

    //set slidable div width
    $('#frames #inner').css('width', function () { // Sementa
        var width = 0;
        $('.frame').each(function () {
            width += $(this).outerWidth() + 20
        });
        return width;
    });
});

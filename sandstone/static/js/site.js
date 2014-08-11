(function() {
    var site = {
        platform: 'windows'
    };

    if(navigator.platform.indexOf("Win32") != -1 ||
       navigator.platform.indexOf("Win64") != -1) {
        site.platform = 'windows';
    }
    else if (navigator.platform.indexOf("armv7l") != -1) {
        site.platform = 'android';
    }
    else if(navigator.platform.indexOf("Linux") != -1) {
        site.platform = 'linux';
    }
    else if (navigator.userAgent.indexOf("Mac OS X") != -1) {
        site.platform = 'osx';
    }
    else if (navigator.userAgent.indexOf("MSIE 5.2") != -1) {
        site.platform = 'osx';
    }
    else if (navigator.platform.indexOf("Mac") != -1) {
        site.platform = 'mac';
    }
    else {
        site.platform = 'other';
    }

    function init() {
	// Add the platform as a classname on the html-element immediately to avoid lots
        // of flickering
	var h = document.documentElement;
	h.className = h.className.replace("windows", site.platform);

        // Add class to reflect javascript availability for CSS
        h.className = h.className.replace(/\bno-js\b/,'js');
    }

    init();
    window.site = site;
})();

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

$(document).ready(function() {

    $('#sidebar')
        .focusin(function(e) { $('#sidebar').toggleClass('child-focus'); })
        .focusout(function(e) { $('#sidebar').toggleClass('child-focus'); });

    $('.messages').on('click', '.close', function () {
        $(this).parent('.alert').fadeOut(500, function () {
            $(this).remove();
        });
    });

    $('meta[name=_download]').each(function (i, elem) {
        var path = $(elem).attr('content');
        if (path) {
            $('<iframe>', {src: path}).hide().appendTo($('body'));
        }
    });

    $('#language-form :input').on('change', function() {
        $('#language-form').submit();
    });
});

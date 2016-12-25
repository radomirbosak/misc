// ==UserScript==
// @name          Duden.de keyboard shortcuts
// @description   Adds keyboard shortcuts for duden.de: F and numerals
// @include       http://www.duden.de/*
// @grant         none
// ==/UserScript==

/*
    This script
    - Adds access key 'K' to duden.de search bar
    - Adds access keys 1-9 to duden.de search results

    On firefox, the access key 'K' is accessed by typing Shift+Alt+K.
*/

// Appends accesskey attributes to various tags
var dudenack = function() {
    // the search field has id 'edit-q'
    var searchpole = document.getElementById('edit-q');
    if (searchpole) {
        // add the access key 'F' to the search field if it was found
        searchpole.setAttribute('title', 'Durchsuche die Duden [f]');
        searchpole.setAttribute('accesskey', 'f');

        // focus the search field on load
        searchpole.focus();
        
        // all search results in HTML DOM live as sections with class 'wide'
        var special = document.querySelectorAll("section.wide");
        var divycount = 0;
        // the first 9 hyperlinks under 'section.wide' get their accesskeys
        for (var divy in special) {
            var hrefy = special[divy].getElementsByTagName("a");
            if (hrefy.length > 0 && divycount < 9) {
                hrefy[0].setAttribute("accesskey", ++divycount);
            }
        }
    }
}

// run this function after window has loaded
window.addEventListener('load', dudenack, false);

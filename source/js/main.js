/*global Modernizr */
'use strict';

var $ 			= require('jQuery'),
	Modernizr   = require('modernizr');


window.jQuery = window.$ = $;

$(document).ready(function() {
    var Example             = require('./components/example'),
        MediaQueryListener  = require('./components/mediaquerylistener'),
        ResponsiveNav = require('./vendor/responsive-nav'),
        example,
        mediaquerylistener,
        ResponsiveNav;

    $('.element').each(function(i, elem) {
        example = new Example({element: elem});
    });

    mediaquerylistener = new MediaQueryListener();

    var nav = ResponsiveNav(".nav-collapse");
});

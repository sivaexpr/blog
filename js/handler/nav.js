import $ from "jquery";

var navHandler = {};
navHandler.handleNavEvents = function (event) {
    $('#menu li').mouseover(function () {
        var id = $(this).attr('id');
        if (id != null) {
            navHandler.showNavMenu();
            var leftSubMenuData = navHandler.getHTMLData('#' + id + '-menu-left');
            if (leftSubMenuData != null) {
                $('#sub-menu').fadeIn();
                navHandler.addHTMLData('#sub-menu', leftSubMenuData);
                var rightSubMenuData = navHandler.getHTMLData('#' + id + '-menu .defaultdata');
                if (rightSubMenuData != null) {
                    navHandler.addHTMLData('#item-menu', rightSubMenuData);
                }
            } else {
                $('#sub-menu').fadeOut();
                navHandler.addHTMLData('#item-menu', navHandler.getHTMLData('#' + id + '-menu'));
            }
        } else {
            navHandler.hideNavMenu();
        }
    });

    $('nav').mouseleave(function () {
        //navHandler.hideNavMenu();
    });

    $('#nav-submenu').mouseleave(function () {
       // navHandler.hideNavMenu();
    });

    $('#sub-menu').on('mouseover', 'ul li', function () {
        var subMenuItemData = '';
        var menuItemId = $(this).attr('id');
        if (menuItemId != null) {
            var subMenuItemData = navHandler.getHTMLData('#' + menuItemId + '-menu');
            if (subMenuItemData == null) {
                subMenuItemData = '';
            }
        }
        navHandler.addHTMLData('#item-menu', subMenuItemData);
    });


};

navHandler.showNavMenu = function () {
    $('#nav-submenu').slideDown('slow');
};
navHandler.hideNavMenu = function () {
    $('#nav-submenu').slideUp('fast');
};

navHandler.addHTMLData = function (destination, data) {
    if (data != null) {
        $(destination).html(data);
    }
};

navHandler.getHTMLData = function (source) {
    return $(source).html();
};

export default navHandler;

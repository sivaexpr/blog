import $ from "jquery";
import view from "../views";
import navHandler from "./nav";
import headerHandler from "./header";
import footerHandler from "./footer";
import util from "../util/util";
<<<<<<< HEAD
import overlayHandler from "./overlay";
import overlayView from "../view/overlay";

let eventHandler = {};
=======

var eventHandler = {};
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c

eventHandler.registerEvents = function () {
    $(document).on("click", "header", function (event) {
        headerHandler.handleHeader(event);
        return;
    });

    $(document).on("click", "footer", function (event) {
        headerHandler.handleHeader(event);
        footerHandler.handleFooter(event);
        return;
    });

    $(document).on("mouseover mouseleave", "nav", function (event) {
        navHandler.handleNavEvents(event);
        return;
    });

    $(document).on("click", "nav", function (event) {
        event.preventDefault();
        eventHandler.commonEvents(event);
        return;
    });

    $(document).on("click", "#overlay", function (event) {
<<<<<<< HEAD
        overlayHandler.handleOverlayEvents(event);
=======
        eventHandler.handleOverlayEvents(event);
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c
        return;
    });

    $(document).on("click", "section", function (event) {
        event.preventDefault();
        eventHandler.commonEvents(event);
        return;
    });

    $(document).on("click", "aside", function (event) {
        event.preventDefault();
        eventHandler.commonEvents(event);
        return;
    });

    $(document).on("click", ".pageimage img", function (event) {
<<<<<<< HEAD
        overlayView.showImage($(event.target).attr("src"));
=======
        overlay.showImage($(event.target).attr("src"));
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c
    });

    $(document).on("click", ".baritem", function (event) {
        view.showbookmarkContents($(event.target).attr('id'));
        return;
    });

    $(document).on("mouseover", ".baritem", function (event) {
        view.showbookmarkContents($(event.target).attr('id'));
        return;
    });

    $(document).on("mouseleave", ".baritem", function (event) {
        view.hidebookmarkContents();
        return;
    });

    $(document).on("mouseover", "#index .barcontents", function (event) {
        view.showbookmarkContents('index');
        return;
    });

    $(document).on("mouseover", "#like .barcontents", function (event) {
        view.showbookmarkContents('like');
        return;
    });

    $(document).on("mouseleave", ".barcontents", function (event) {
        view.hidebookmarkContents();
        return;
    });


    $(document).on("click", "#comment", function (event) {
        eventHandler.commonEvents(event);
    });

    $(document).on("click", "#commentsubmit", function (event) {
        event.preventDefault();
        eventHandler.handleComments(event);
    });
<<<<<<< HEAD
};
=======
}
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c

eventHandler.commonEvents = function (event, page) {
    var url = eventHandler.isAnchorEvent($(event.target));
    if (page == null) {
        page = {
            path: url,
            place: "inside",
            tag: "section"
        }
    }

    if (url != null) {
        if ($(event.target).attr("target") != null) {
            window.open(url, $(event.target).attr("target"));
        } else if (url.indexOf("#") != 0) {
            if (eventHandler.isOVerlayEvent($(event.target))) {
<<<<<<< HEAD
                overlayView.show(url, $(event.target).attr("title"));
=======
                overlay.show(url, $(event.target).attr("title"));
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c
            } else {
                eventHandler.handleAnchorEvents(url, page);
            }
        } else if (url == "#comments") {
            window.location = url;
        }
    }

<<<<<<< HEAD
};

=======
}
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c
eventHandler.handleAnchorEvents = function (url, page) {
    view.showStatusBar();
    view.addStatusBarWidth("25%");
    util.getContents(page, view);
<<<<<<< HEAD
};
=======
}
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c

eventHandler.isAnchorEvent = function (target) {
    if (target.is("a") || target.attr("href") != null) {
        return target.attr("href");
    }
<<<<<<< HEAD
};

eventHandler.isOVerlayEvent = function (target) {
    return target.hasClass("overlay");
};
=======
}

eventHandler.isOVerlayEvent = function (target) {
    return target.hasClass("overlay");
}
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c

export default eventHandler;

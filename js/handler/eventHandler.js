import $ from "jquery";
import view from "../views";
import navHandler from "./nav";
import headerHandler from "./header";
import footerHandler from "./footer";
import util from "../util/util";
import overlayHandler from "./overlay";
import overlayView from "../view/overlay";

let eventHandler = {};


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
        overlayHandler.handleOverlayEvents(event);
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
        overlayView.showImage($(event.target).attr("src"));
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
};

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
                overlayView.show(url, $(event.target).attr("title"));
            } else {
                eventHandler.handleAnchorEvents(url, page);
            }
        } else if (url == "#comments") {
            window.location = url;
        }
    }
};

eventHandler.handleAnchorEvents = function (url, page) {
    view.showStatusBar();
    view.addStatusBarWidth("25%");
    util.getContents(page, view);
};

eventHandler.isAnchorEvent = function (target) {
    if (target.is("a") || target.attr("href") != null) {
        return target.attr("href");
    }else if(target.parent().is("a") || target.parent().attr("href")){
        return target.parent().attr("href");
    }
};

eventHandler.isOVerlayEvent = function (target) {
    return target.hasClass("overlay");
};


export default eventHandler;

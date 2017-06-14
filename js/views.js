import $ from "jquery";
import util from "./util/util";
import prettify from "../lib/prettify";
import navHandler from "./handler/nav";
import ads from "./view/ads";
const view = {
    HEADER: {
        path: "/html/header.html",
        place: "first",
        id: "#main-container"
    },
    FOOTER: {
        path: "/html/footer.html",
        place: "last",
        id: "#main-container"
    },
    NAVIGATION: {
        path: "/html/nav.html",
        place: "after",
        tag: "header"
    },
    HEADER_FOOTER: {
        path: "/html/header_footer.php",
        place: "first",
        id: "#main-container"
    },
    COMMON: {
        place: "after",
        id: "#main-container"
    },
    ASIDE: {
        place: "last",
        tag: "aside"
    }
};

view.addHeader = function (html) {
    var headerData = $(html).filter("#header").html();
    view.addContents(view.HEADER, headerData);
};

view.addFooter = function (html) {
    var footerData = $(html).filter("#footer").html();
    view.addContents(view.FOOTER, footerData);
};

view.addNav = function (html) {
    var navData = $(html).filter("#nav").html();
    view.addContents(view.NAVIGATION, navData);
};

view.showBase = function (html, page) {
    view.addHeader(html);
    view.addNav(html);
    view.addFooter(html);
    view.addCommon(html);
    view.showbookmarkbar();
};

view.addCommon = function (html) {
    var commonData = $(html).filter("#common").html();
    view.addContents(view.COMMON, commonData);

};


view.header_footer = null;

view.loadContents = (html, isheader) => {
    if (isheader) {
        view.header_footer = html;
        view.showBase(html);
        var data = view.getBaseAsideData();
        view.addContents(view.ASIDE, data);
        view.addCommentSection();
        //view.formatePageCounter();
        ads.showAds();
        window.history.pushState($('body').html(), "", window.location.href);
    }
};

view.contentCallback = (html, page) => {
    view.addStatusBarWidth("50%");
    if (page.path.indexOf('header_footer') != -1) {
        view.header_footer = html;
        view.showBase(html, page);
        var data = view.getBaseAsideData();
        view.addContents(view.ASIDE, data);
        view.addCommentSection();
        view.formatePageCounter();
        ads.showAds();
        window.history.pushState($('body').html(), "", window.location.href);
    } else {
        if (page.id != '.overlay-contents-wrapper' && page.path.indexOf("/search") == -1) {
            window.history.pushState(html, "", page.path);
        }
        view.addContents(page, html);

    }
    view.addStatusBarWidth("100%");
    view.hideStatusBar();
};

view.addContents = (page, html) => {
    var identifier = page.tag;
    var location = page.place;
    if (identifier == null) {
        identifier = page.id;
    }
    if (location == 'first') {
        $(identifier).prepend(html);
    } else if (location == "last") {
        $(identifier).append(html);
    } else if (location == "after") {
        $(identifier).after(html);
    } else {
        if (identifier == ".overlay-contents-wrapper") {
            $(identifier).html(html);
        } else {
            $(identifier).html($($(html).filter("#main-container").html()).filter("section").html());
            view.hidebookmarkbar();
            view.updateTitle(html);
            view.addCommentSection();
            // view.updatePageCounter();
            prettify.prettyPrint();
            $("aside").fadeIn();
            $("#search-results").fadeOut();
            view.showbookmarkbar();
            view.updateaside(html);
            navHandler.hideNavMenu();
            ads.showAds();
        }
    }
    view.addStatusBarWidth("75%");
};

view.updateTitle = (html) => {
    document.title = $(html).filter("title").html();
};
view.showbookmarkbar = () => {
    var barhtml = '<div class="leftbar">';
    var flag = false;
    //$('.leftbar').fadeIn();
    var bookmarkcontents = $('#leftbar-contents').html();
    if (typeof bookmarkcontents != 'undefined') {
        barhtml = barhtml + '<div class="baritem" id="index" title="Index"><i class="fa fa-bookmark" aria-hidden="true"></i>' + bookmarkcontents + '</div>';
        flag = true;
    }
    /*if(typeof bookmarkcontents=='undefined'){
     $('#index').fadeOut();
     }else{
     $('#index').html(bookmarkcontents);
     $('#index').fadeIn();
     }*/

    /*if($("#comments").html()){
     $("#comment").fadeIn();
     }else{
     $("#comment").fadeOut();
     }*/

    if ($("#comments").html()) {
        barhtml = barhtml + '<a href="#comments"  class="baritem" id="comment" title="Comment"><i class="fa fa-commenting-o" aria-hidden="true"></i></a>';
        flag = true;
    }

    /*if(typeof fbid=="undefined" || fbid==0){
     $('#like').fadeOut();
     }else{
     $('#like').fadeIn();
     }*/

    if ((typeof fbid != "undefined") && fbid != 0) {
        barhtml = barhtml + '<div class="baritem" id="like" title="Like"><i class="fa fa-thumbs-up" aria-hidden="true"></i>' +
            '<div class="barcontents" id="likecontents">' +
            '<ul>' +
            '<li>' +
            '<div class="fb-like" data-href="' + util.getURL() + '" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>' +
            //'<div class="fb-like" data-href="'+util.getURL()+'" data-width="30" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>'+
            '</li>' +
            '</ul>' +
            '</div>';
        flag = true;
    }
    barhtml = barhtml + '</div>';
    if (flag) {
        $("nav").after(barhtml);
        $("nav").after("<script>try{FB.XFBML.parse();}catch(ex){}</script>");
    }
};

view.hidebookmarkbar = () => {
    $('.leftbar').remove();
};

view.showbookmarkContents = function (id) {
    $("#" + id + " " + '.barcontents').fadeIn("slow");
};

view.hidebookmarkContents = function (id) {
    $('.barcontents').fadeOut();
};

view.updateaside = function (html) {
    var data = $($(html).filter("#main-container").html()).filter("aside").html();
    if (data != null) {
        $("aside").html(data);
    }
    data = view.getBaseAsideData();
    if (data != null) {
        view.addContents(view.ASIDE, data);
    }
    /*var asidesection=$('#aside-data-flag').html();

     if(asidesection!=null){
     if(asidesection.indexOf("display:none")!=-1){
     data="";
     }else if(asidesection.indexOf("display:overwrite")!=-1){
     data=$('#aside-data').html();
     }

     if(data!=null){
     $('aside').html(data);
     }

     $('#aside-data-flag').remove();
     $('#aside-data').remove();
     }*/
}

view.updatePageCounter = function () {
    if (typeof postid != 'undefined' && postid != 0) {
        $.get("/pagecounter.php?pageid=" + postid, function (data) {
            $('#pagecounter').fadeIn();
            $('#pagecounter span').html(data);
            view.formatePageCounter();
        });
    } else {
        $('#pagecounter').fadeOut();
    }

}

view.search = function () {
    var searchTerm = $("#sterm").val();
    if (searchTerm.trim().length > 0) {
        var element = google.search.cse.element.getElement('searchresults-only0');
        element.execute($("#sterm").val());
        $("section").html("");
        $("aside").fadeOut();
        $("#search-results").fadeIn();
        view.hidebookmarkbar();
    } else {
        alert("Please enter search term");
    }
}


view.loadCSS = function (cssfile) {
    var cssLink = $("<link rel='stylesheet' type='text/css' href='" + cssfile + "'>");
    $("head").append(cssLink);
}

view.getBaseAsideData = function () {
    return $(view.header_footer).filter("#aside").html();
}

view.getCommentSection = function () {
    return $(view.header_footer).filter("#comments").html();
}

view.addCommentSection = function () {
    var commentDiv = $('#comments');
    if (typeof commentDiv.html() != 'undefined') {
        $('section').append(view.getCommentSection());
        // view.feedbackMessage();
        view.showComments();
    }
}

view.formatePageCounter = function () {
    $('#pagecounter span').html(util.pad($('#pagecounter span').html(), 4));
}

view.feedbackMessage = function () {
    var message = '<div id="fmsg"><span class="blinkmsg redtxt"><b>Attention</b></span> - We spent enough time to prepare this article. Please spend a minute of your time to give your valuable feedback in <a href="#comments">comment</a> section or click on Like button if you like us.</div>';
    $("section").prepend(message);
};

view.showComments = function () {
    /*$.get("/comments.php?pageid=" + postid, function (data) {
     $(".comment-block").html($(data).filter("#comment-block").html());
     });*/
    $(".fb-comments").attr("data-href", window.location.href);
};

view.showStatusBar = function () {
    $('body').prepend('<div id="statusbar"></div>');
};

view.hideStatusBar = function () {
    $('#statusbar').remove();
};

view.addStatusBarWidth = function (length) {
    //$('#statusbar').animate({width:length},500);
    //  $('#statusbar').css("width", length);
};

export default view;


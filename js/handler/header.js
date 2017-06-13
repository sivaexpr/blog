import $ from "jquery";
import eventHandler from "./eventHandler";

var headerHandler = {};
headerHandler.handleHeader = function (event) {
    event.preventDefault();

    var target = $(event.target);
    if ($(target).attr("id") == "logo") {
        window.location = window.location.origin;
        return;
    }
    var url = eventHandler.isAnchorEvent(target);
    if (url == 'search') {
        view.search();
    } else {
        eventHandler.commonEvents(event);
    }
    /*	var url=eventHandler.isAnchorEvent(target);
     if(url=='search'){
     view.search();
     }else if(eventHandler.isOVerlayEvent(target)){
     overlay.show(url,target.attr("title"));
     }else if(url!=null){
     var page={
     path:url,
     place:"inside",
     tag:"section"
     }
     eventHandler.handleAnchorEvents(url,page);
     }
     */
};

export default headerHandler;

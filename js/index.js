import $ from "jquery";
import view from "./views";
import eventHandler from "./handler/eventHandler.js";
import headerFooterHtml from "../html/header_footer.html";

const fbid = 0;
const twid = 0;
const postid = 0;

$(document).ready(() => {
    view.loadCSS("/css/style.css");
    view.loadCSS("/css/font-awesome.min.css");
    view.loadContents(headerFooterHtml, true);
    eventHandler.registerEvents();

    window.onpopstate = (event) => {
        if (event.state) {
            page = {
                path: window.location.href,
                place: "inside",
                tag: "section"
            };
            view.addContents(page, event.state);
        }
    };
    window.history.pushState($('section').html(), "", document.location.pathname);
});

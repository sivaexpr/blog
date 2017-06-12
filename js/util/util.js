import $ from "jquery";

var util = {};
util.getContents = function (page, context) {
    $.get(page.path, function (data) {
        context.contentCallback(data, page);
    });
};

util.pad = function (n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};


util.getURL = function () {
    var url = window.location.href;
    if (url.indexOf("#") != -1) {
        url = url.substring(0, url.indexOf("#"));
    } else if (url.indexOf("?") != -1) {
        url = url.substring(0, url.indexOf("?"));
    }

    return url;
};

export default util;

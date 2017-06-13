<<<<<<< HEAD
import $ from "jquery";

var overlay = {};

overlay.show = function (url, title) {
    var overlayhtml = '<div id="overlay">' +
        '	<div class="layer">' +
        '	</div>' +
        '	<div id="overlay-close">X' +
        '	</div>' +
        '	<div id="overlay-contents" class="overlay-form">' +
        '       <div class="overlay-title barcolor"><h1>' + title + '</h1></div>' +
        '       <div class="overlay-contents-wrapper">' +
        '       </div>' +
        '	 </div>' +
        '</div>';
    $('body').append(overlayhtml);
    var page = {
        path: url,
        place: "inside",
        id: ".overlay-contents-wrapper"
    }
    if (url == "future.html") {
        overlay.contentCallback(overlay.getFutureArticleMessage(), page);
    } else if (url.indexOf("contact.html") != -1) {
        overlay.contentCallback(overlay.getContactForm(), page);
    } else if (url.indexOf("subscribe.html") != -1) {
        overlay.contentCallback(overlay.getSubscribForm(), page);

    } else {
        util.getContents(page, overlay);
    }


}

overlay.showImage = function (url) {
    var overlayhtml = '<div id="overlay">' +
        '	<div class="layer">' +
        '	</div>' +
        '	<div id="overlay-close">X' +
        '	</div>' +
        '	<div id="overlay-contents-image">' +
        '       <div class="overlay-contents-wrapper">' +
        '			<img src="' + url + '"/>' +
        '       </div>' +
        '	 </div>' +
        '</div>';
    $('body').append(overlayhtml);

}
overlay.contentCallback = function (html, page) {
    view.contentCallback(html, page);
}
overlay.hide = function () {
    $('#overlay').remove();
}

overlay.getFutureArticleMessage = function () {
    return "<p>Thank you for showing interest on this article.We are working hard to get this on board as quick as possible. Please visit us again or subscribe to get the update.</p>"
}

overlay.getContactForm = function () {
    return '<p>Please fill the form. We will touch base with you shortly through mail.</p>' +
        '<div id="contact-form"><div class="error" id="contact-error"></div>' +
        '	<form name="contact" id="overlayForm" action="/con_sub.php" method="post">' +
        '		<table>' +
        '			<tbody>' +
        '				<tr>' +
        '					<td colspan="2"><input name="name" type="text"' +
        '					placeholder="Please enter your name" id="contact-name" /></td>' +
        '				</tr>' +
        '				<tr>' +
        '					<td colspan="2"><input name="email" type="email"' +
        '						placeholder="Please enter valid email" id="contact-email"/></td>' +
        '				</tr>' +
        '				<tr>' +
        '					<td colspan="2"><input name="subject" type="text"' +
        '						placeholder="Please type your subject" id="contact-subject"/></td>' +
        '				</tr>' +
        '				<tr>' +
        '					<td colspan="2"><textarea name="desc"' +
        '							placeholder="Please write your description" id="contact-desc"></textarea></td>' +
        '				</tr>' +
        '				<tr>' +
        '					<td><input class="submitbutton barcolor" type="submit"' +
        '						value="Submit" placeholder="" /></td>' +
        '					<td><input class="resetbutton" type="reset" value="Clear"' +
        '						placeholder="" /></td>' +
        '				</tr>' +
        '			</tbody>' +
        '		</table>' +
        '	</form>' +
        '</div>';
}

overlay.getSubscribForm = function () {
    return '<p>Please enter your email to subscribe. We will inform you whenever we updates in the blog </p>' +
        '<div id="contact-form"><div class="error" id="subscription-error"></div>' +
        '<form action="/subsribe.php" method="post" name="subscription" id="overlayForm">' +
        '	<table>' +
        '		<tbody>' +
        '			<tr>' +
        '				<td colspan="2"><input name="email" type="email"' +
        '					placeholder="Please enter your email" id="subscription-email"/></td>' +
        '			</tr>' +
        '			<tr>' +
        '				<td><input class="submitbutton barcolor" type="submit"	value="Subscribe" placeholder="" /></td>' +
        '			</tr>' +
        '		</tbody>' +
        '	</table>' +
        '</form>' +
        '</div>';
}

export default overlay;
=======
var overlay = {};

overlay.show=function(url,title){
	var overlayhtml='<div id="overlay">'+
					'	<div class="layer">'+
					'	</div>'+
					'	<div id="overlay-close">X'+
					'	</div>'+
					'	<div id="overlay-contents" class="overlay-form">'+
					'       <div class="overlay-title barcolor"><h1>'+title+'</h1></div>'+
					'       <div class="overlay-contents-wrapper">'+
					'       </div>'+
					'	 </div>'+
					'</div>';
	$('body').append(overlayhtml);
	var page = {
		path:url,
		place:"inside",
		id:".overlay-contents-wrapper"	
	}
	if(url=="future.html"){
		overlay.contentCallback(overlay.getFutureArticleMessage(),page);
	}else if(url.indexOf("contact.html")!=-1){
		overlay.contentCallback(overlay.getContactForm(),page);
	}else if(url.indexOf("subscribe.html")!=-1){
		overlay.contentCallback(overlay.getSubscribForm(),page);
	
	}else{
		util.getContents(page,overlay);
	}
	
	
}

overlay.showImage=function(url){
	var overlayhtml='<div id="overlay">'+
					'	<div class="layer">'+
					'	</div>'+
					'	<div id="overlay-close">X'+
					'	</div>'+
					'	<div id="overlay-contents-image">'+
					'       <div class="overlay-contents-wrapper">'+
					'			<img src="'+url+'"/>'+
					'       </div>'+
					'	 </div>'+
					'</div>';
	$('body').append(overlayhtml);
	
}
overlay.contentCallback = function(html,page){
	view.contentCallback(html,page);
}
overlay.hide=function(){
	$('#overlay').remove();
}

overlay.getFutureArticleMessage=function(){
	return "<p>Thank you for showing interest on this article.We are working hard to get this on board as quick as possible. Please visit us again or subscribe to get the update.</p>"
}

overlay.getContactForm=function(){
	return '<p>Please fill the form. We will touch base with you shortly through mail.</p>'+
	'<div id="contact-form"><div class="error" id="contact-error"></div>'+
	'	<form name="contact" id="overlayForm" action="/con_sub.php" method="post">'+
	'		<table>'+
	'			<tbody>'+
	'				<tr>'+
	'					<td colspan="2"><input name="name" type="text"'+
	'					placeholder="Please enter your name" id="contact-name" /></td>'+
	'				</tr>'+
	'				<tr>'+
	'					<td colspan="2"><input name="email" type="email"'+
	'						placeholder="Please enter valid email" id="contact-email"/></td>'+
	'				</tr>'+
	'				<tr>'+
	'					<td colspan="2"><input name="subject" type="text"'+
	'						placeholder="Please type your subject" id="contact-subject"/></td>'+
	'				</tr>'+
	'				<tr>'+
	'					<td colspan="2"><textarea name="desc"'+
	'							placeholder="Please write your description" id="contact-desc"></textarea></td>'+
	'				</tr>'+
	'				<tr>'+
	'					<td><input class="submitbutton barcolor" type="submit"'+
	'						value="Submit" placeholder="" /></td>'+
	'					<td><input class="resetbutton" type="reset" value="Clear"'+
	'						placeholder="" /></td>'+
	'				</tr>'+
	'			</tbody>'+
	'		</table>'+
	'	</form>'+
	'</div>';
}

overlay.getSubscribForm=function(){
	return '<p>Please enter your email to subscribe. We will inform you whenever we updates in the blog </p>'+
	'<div id="contact-form"><div class="error" id="subscription-error"></div>'+
	'<form action="/subsribe.php" method="post" name="subscription" id="overlayForm">'+
	'	<table>'+
	'		<tbody>'+
	'			<tr>'+
	'				<td colspan="2"><input name="email" type="email"'+
	'					placeholder="Please enter your email" id="subscription-email"/></td>'+
	'			</tr>'+
	'			<tr>'+
	'				<td><input class="submitbutton barcolor" type="submit"	value="Subscribe" placeholder="" /></td>'+
	'			</tr>'+
	'		</tbody>'+
	'	</table>'+
	'</form>'+
'</div>';
}
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c

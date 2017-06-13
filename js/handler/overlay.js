<<<<<<< HEAD
import $ from "jquery";
import overlay from "../view/overlay";
var eventHandler = {};
eventHandler.handleOverlayEvents = function (event) {
    var target = $(event.target);

    var id = target.attr("id");

    if (id == 'overlay-close') {
        overlay.hide();
    }

    var type = target.attr("type");
    if (type == 'submit') {
        event.preventDefault();
        var form = $('#overlayForm');

        if (form.attr("method") == 'post') {
            var actionurl = form.attr("action");
            var validator = validation.SUBSCRIBEFORM;
            if (form.attr("name") == 'contact') {
                validator = validation.CONTACTFORM;
            }
            var isvalidationError = validation.validateForm(validator, form);
            if (!isvalidationError) {
                $.post(actionurl, $('form#' + form.attr("id")).serialize(), function (data) {
                    $('.overlay-contents-wrapper').html(data);
                })
            }
        }
    }
};

export default eventHandler;
=======
eventHandler.handleOverlayEvents=function(event){
	var target=$(event.target);

	var id=target.attr("id");

	if(id == 'overlay-close'){
		overlay.hide();
	}

	var type=target.attr("type");
	if(type=='submit'){
		event.preventDefault();
		var form=$('#overlayForm');
		
		if(form.attr("method") == 'post'){
			var actionurl = form.attr("action");
			var validator=validation.SUBSCRIBEFORM;
			if(form.attr("name")=='contact'){
				validator=validation.CONTACTFORM;
			}
			var isvalidationError=validation.validateForm(validator,form);
			if(!isvalidationError){
				$.post( actionurl, $('form#'+form.attr("id")).serialize(), function(data) {
					$('.overlay-contents-wrapper').html(data);
				})
			}
		}
	}
	
	
}
>>>>>>> 63b61030b79194aeb0da77bdeeda2620319e899c

var validation={
	CONTACTFORM:{},
	COMMENTSFORM:{},
	SUBSCRIBEFORM:{}
};

validation.error="";

validation.validateForm=function(formName,form){
	validation.error="";
	var status=false;
	switch(formName){
	case validation.CONTACTFORM:
		status=validation.validateContactUsForm(form);
		break;
	case validation.COMMENTSFORM:
		status=validation.validateCommentsFrom(form);
		break;
	case validation.SUBSCRIBEFORM:
		status=validation.validateSubscribeForm(form);
		break;
	}
	if(status){
		$('#'+form.attr("name")+"-error").html(validation.error);
	}
	return status;
}

validation.validateCommentsFrom=function(form){
	
	var status=false;
	var errorMsg="";
	if(validator.validate($('#comment-name').val(),validator.ALPHABETSWITHSPACE)){
		errorMsg=errorMsg+"Please enter a valid Name</br>";
		status=true;
	}
	if(validator.validate($('#comment-mail').val(),validator.EMAIL)){
		errorMsg=errorMsg+"Please enter a valid Email </br>";
		status=true;
	}
	
	if(validator.isEmpty($('#commen-data').val())){
		errorMsg=errorMsg+"Description should not be empty";
		status=true;
	}
	if(status){
		errorMsg="<p>"+errorMsg+"</p>";
	}
	validation.error=errorMsg;
	return status;
}

validation.validateContactUsForm=function(form){
	var status=false;
	var errorMsg="";
	if(validator.validate($('#contact-name').val(),validator.ALPHABETSWITHSPACE)){
		errorMsg=errorMsg+"Please enter a valid Name</br>";
		status=true;
	}
	if(validator.validate($('#contact-email').val(),validator.EMAIL)){
		errorMsg=errorMsg+"Please enter a valid Email </br>";
		status=true;
	}
	
	if(validator.isEmpty($('#contact-subject').val())){
		errorMsg=errorMsg+"Please enter a subject</br>";
		status=true;
	}
	
	if(validator.isEmpty($('#contact-desc').val())){
		errorMsg=errorMsg+"Please enter a description";
		status=true;
	}
	if(status){
		errorMsg="<p>"+errorMsg+"</p>";
	}
	validation.error=errorMsg;
	return status;
}

validation.validateSubscribeForm=function(form){
	var status=false;
	var errorMsg="";
	
	if(validator.validate($('#subscription-email').val(),validator.EMAIL)){
		errorMsg=errorMsg+"Please enter a valid Email </br>";
		status=true;
	}
	
	
	if(status){
		errorMsg="<p>"+errorMsg+"</p>";
	}
	validation.error=errorMsg;
	return status;
}

validation.getErrorMessage=function(){
	return validation.error;
}
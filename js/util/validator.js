var validator={
		ALPHABETS:{
			pattern:/^[A-Za-z]+$/
		},
		ALPHABETSWITHSPACE:{
			pattern:/^[A-Za-z ]+$/
		},
		EMAIL:{
			pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
		}
		
};


validator.isEmpty=function(data){
	if(data==null || data.trim().length==0){
		return true;
	}else{
		return false;
	}
}

validator.validate=function(data,validatorType){
	if(validator.isEmpty(data) || !data.match(validatorType.pattern)){
		return true;
	}else{
		return false;
	}
}

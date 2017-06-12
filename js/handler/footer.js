import $ from "jquery";

var eventHandler = {};

eventHandler.handleFooter=function(event){
	event.preventDefault();
	var id=$(event.target).attr("id");
	if(id=='facebook'){
		window.open("https://www.facebook.com/techjira","_blank");
	}else if(id=='twitter'){
		
	}else if(id=='youtube'){
		
	}
};

export default eventHandler;


eventHandler.handleComments=function(event){
	var form = $('form');
	var submit = $('#submit');
	$('#postid').val(postid);
	var isvalidationError=validation.validateForm(validation.COMMENTSFORM,$("#commentform"));
	if(!isvalidationError){
		$.ajax({
			url: '/ajax_comment.php',
			type: 'POST',
			cache: false,
			data: form.serialize(), //form serizlize data
			beforeSend: function(){
				// change submit button value text and disabled it
				submit.val('Submitting...').attr('disabled', 'disabled');
			},
			success: function(data){
				var item = $(data).hide().fadeIn(800);
				$('.comment-block').append(item);
	
				// reset form and button
				form.trigger('reset');
				submit.val('Submit Comment').removeAttr('disabled');
			},
			error: function(e){
				alert(e);
			}
		});
	
	}

}
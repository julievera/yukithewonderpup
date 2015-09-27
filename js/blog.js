$(document).ready(function() {
	$.post('php/blog.php', {postoffset: 0}, function(data) {
		$('#post_content').html(data);
 		$('#post_content').attr('data-postoffset', 0);
	});

	$('#newerbutton').click(function(){
		var offset = parseInt($('#post_content').attr('data-postoffset'));
		if (offset > 0) {
			$.post('php/blog.php', {postoffset: offset-1}, function(data) {
 				$('#post_content').html(data);
 				$('#post_content').attr('data-postoffset', offset-1);
			});
		};
	});

	$('#olderbutton').click(function(){
		var offset = parseInt($('#post_content').attr('data-postoffset'));
		console.log('poop');
		$.post('php/blog.php', {postoffset: offset+1}, function(data) {
 			$('#post_content').html(data);
 			console.log(data);
 			$('#post_content').attr('data-postoffset', offset+1);
		});
	});
});

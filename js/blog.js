$(document).ready(function() {
	$.get('php/blog.php', {postindex: 0}, function(data) {
		$('#post_content').html(data);
 		$('#post_content').attr('data-postoffset', 0);
	});

	$('#newerbutton').click(function(){
		var offset = parseInt($('#post_content').attr('data-postoffset'));
		if (offset > 0) {
			$.get('php/blog.php?postindex=' + (offset-1), function(data) {
 				$('#post_content').html(data);
 				$('#post_content').attr('data-postoffset', offset-1);
			});
		};
	});

	$('#olderbutton').click(function(){
		var offset = parseInt($('#post_content').attr('data-postoffset'));
		$.get('php/blog.php?postindex=' + (offset+1), function(data) {
 			$('#post_content').html(data);
 			$('#post_content').attr('data-postoffset', offset+1);
		});
	});
});

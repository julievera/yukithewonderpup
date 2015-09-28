<?php
	$post_offset = $_GET['postoffset'];
	$api_uri = "http://api.tumblr.com/v2/blog/yukithewonderpup.tumblr.com/";
	$api_uri .= "posts?api_key=9qEk24ATIQWXXWwuix1JpQ6dQeiJdEfwGloFO4ADgYs9r60tHV";
	$api_uri .= "&limit=1&offset=";

	$result = json_decode(file_get_contents($api_uri . $post_offset), true);
	
	$post = $result['response']['posts'][0];
	$post_date = $post['date'];
	$post_title = $post['title'];
	$post_body = $post['body'];

	
	$blog_template = "<div id='post_date'>
                        <h5>{$post_date}</h5>
                    </div>
                    <div id='post_title'>
                        <h2>{$post_title}</h2>
                    </div>
                    <div id='post_text'>
                    {$post_body}
                    </div>";

	print $blog_template;
?>

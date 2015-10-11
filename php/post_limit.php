<?php

$api_uri = "http://api.tumblr.com/v2/blog/yukithewonderpup.tumblr.com/info?";
$api_uri .= "api_key=9qEk24ATIQWXXWwuix1JpQ6dQeiJdEfwGloFO4ADgYs9r60tHV";

$result = json_decode(file_get_contents($api_uri), true);

$limit = $result['response']['blog']['posts'];

print $limit;

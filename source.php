<?php
    error_reporting(0);
    $url="http://api.vkontakte.ru/method/users.get?uids=39526325&fields=online";
    $mass=json_decode(file_get_contents($url), true);
    $m1 = 1;
        $m1 = $mass["response"][0]["online"];
        if ($m1==1) $online="<b>в сети</b>";
        else $online="<u>не в сети</u>";
        echo 'Пользователь <b>'.$mass["response"][0]["first_name"].' '. $mass["response"][0]["last_name"].'</b> сейчас '.$online.'.';


?>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h1> rizemun =)</h1>

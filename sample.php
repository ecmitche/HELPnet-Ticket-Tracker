<?php
    $curl = curl_init();
    $username = 'ecmitche';
    $password = '1234';
    $url = 'https://cas.iu.edu/cas/login?service=https%3a%2f%2ffootprints.iu.edu%2fMRcgi%2fMRentrancePage.pl';
    $postdata = "username=".$username."&password=".$password;
    curl_setopt ($curl, CURLOPT_URL, $url);
    curl_setopt ($curl, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6");
    curl_setopt ($curl, CURLOPT_FOLLOWLOCATION, 0);
    curl_setopt ($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
//    curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt ($curl, CURLOPT_TIMEOUT, 60);
    curl_setopt ($curl, CURLOPT_REFERER, $url);
    curl_setopt ($curl, CURLOPT_POSTFIELDS, $postdata);
    curl_setopt ($curl, CURLOPT_POST, 1);
    $result = curl_exec ($curl);
    //echo $result;
    curl_close ($curl);
?>

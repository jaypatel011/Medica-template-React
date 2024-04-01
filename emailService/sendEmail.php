<?php
require_once('../../config.php'); // Assuming your Zoho credentials are stored here

/**
 * Function to obtain an access token using the client credentials flow.
 */
function getAccessToken() {
    $url = 'https://accounts.zoho.com/oauth/v2/token';
    $data = array(
        'client_id' => ZOHO_CLIENT_ID,
        'client_secret' => ZOHO_CLIENT_SECRET,
        'grant_type' => 'client_credentials',
        'scope' => 'ZohoMail.messages.CREATE,ZohoMail.accounts.READ',
        'soid' => 'ZohoMail.111111'
    );

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data),
        ),
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $response = json_decode($result, true);

    return $response['access_token'];
}

/**
 * Function to fetch the account ID using the access token.
 */
function getAccountId($accessToken) {
    $url = 'https://mail.zoho.com/api/accounts';
    $headers = array("Authorization: Zoho-oauthtoken $accessToken");

    $options = array(
        'http' => array(
            'header'  => implode("\r\n", $headers),
            'method'  => 'GET',
        ),
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    $response = json_decode($result, true);

    return $response['data'][0]['accountId'];
}

/**
 * Function to send an email using Zoho Mail API.
 */
function sendEmail($accessToken, $accountId, $content) {
    $url = "https://mail.zoho.com/api/accounts/$accountId/messages";
    $data = array(
        'fromAddress' => 'ppatel@spfires.com',
        'toAddress' => 'ppatel@spfires.com',
        'subject' => 'Message from Website',
        'content' => $content,
        'mailFormat' => 'html',
        'askReceipt' => 'no'
    );

    $options = array(
        'http' => array(
            'header'  => "Authorization: Zoho-oauthtoken $accessToken\r\nContent-Type: application/json\r\n",
            'method'  => 'POST',
            'content' => json_encode($data),
        ),
    );
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    return $result;
}

$allowedDomain = 'https://www.specialtyfireservices.com/';

// Check if the Referer header is set and contains the allowed domain
if (isset($_SERVER['HTTP_REFERER'])) {
    $refererHost = parse_url($_SERVER['HTTP_REFERER'], PHP_URL_HOST);
    if (strtolower($refererHost) === strtolower(parse_url($allowedDomain, PHP_URL_HOST))) {
        // Allow
    } else {
        header('HTTP/1.1 403 Forbidden');
        echo 'Access denied. This service is only accessible from the allowed domain. Your domain: ' . htmlspecialchars($refererHost, ENT_QUOTES, 'UTF-8');
        exit;
    }
} else {
    // Optionally, block requests without a Referer header or handle differently
    header('HTTP/1.1 403 Forbidden');
    echo 'Access denied. No Referer header is present.';
    exit;
}

// Decode JSON input from the request body
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE); // convert JSON into array

// Check if the required fields are set
if(isset($input['name'], $input['email'], $input['phone'], $input['message'])) {

    // Format the email content
    $emailContent = "Name: " . htmlspecialchars($input['name']) . "<br>"
                  . "Email: " . htmlspecialchars($input['email']) . "<br>"
                  . "Phone: " . htmlspecialchars($input['phone']) . "<br>"
                  . "Message: " . nl2br(htmlspecialchars($input['message']));

    // Obtain an access token using your client credentials
    $accessToken = getAccessToken(); // Implement this function based on Zoho documentation
    if(!$accessToken) {
        echo json_encode(['error' => 'Failed to obtain access token']);
        exit;
    }
    
    // Fetch the account ID using the access token
    $accountId = getAccountId($accessToken); // Implement this function based on Zoho documentation
    if(!$accountId) {
        echo json_encode(['error' => 'Failed to fetch account ID']);
        exit;
    }

    // Send the email using the access token, account ID, and provided email details
    $result = sendEmail($accessToken, $accountId, $emailContent); // Implement this function based on Zoho documentation
    echo $result;
} else {
    echo json_encode(['error' => 'Missing required fields']);
}
?>
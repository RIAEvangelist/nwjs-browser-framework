# nwjs Browser Framework


Edit the config for basic customiztions.

    {
        "homepage": "google.com",
        "name": "nw.js browser framework",
        "showDevTools":false,
        "header":{
            "back":true,
            "forward":true,
            "refresh":true,
            "dev":true,
            "address":true
        }
    }
    
|  config key | expects |  what it does |
|----|----|----|
|homepage|url|sets the page which the browser will open on launch|
|name|string|name to show in the application header/chrome|
|showDevTools|bool|open the nwjs devtools for the whole app, not just the web page|
|header.back|bool|shows the back button for navigating to the previous page|
|header.forward|bool|shows the forward button for navigating to the next page in the history|
|header.refresh|bool|shows the refresh button to reload the current page|
|header.dev|bool|shows the dev tools button allowing dev tools for ***ONLY*** the webpage, this does ***NOT*** give access to your nw browser dev tools. Just the website.|


### To Do

Document this, feel free to help if you like.

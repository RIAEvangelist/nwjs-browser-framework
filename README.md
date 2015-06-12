# nwjs Browser Framework
You can use this "framework" to quickly and easily start your own browser or use it as a custom wrapper for a website which you wish to have some custom control over, like hiding the address bar, but keeping other navigational tools. Please feel free to fork and submit pull requests with features you think would be nice to have. This uses the [DBAD License](https://github.com/philsturgeon/dbad).


### Basic use

Obviously, this is for use with [nwjs](https://github.com/nwjs/nw.js). Edit the config for basic customiztions.

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

### Basic Example

![nwjs browser](http://i.imgur.com/xHfzdua.png)

### To Do

Document this, feel free to help if you like.



# DON'T BE A DICK PUBLIC LICENSE

***[find your language here](https://github.com/philsturgeon/dbad)***

> Version 1, December 2009

> Copyright (C) 2009 Philip Sturgeon <me@philsturgeon.uk>
 
 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

> DON'T BE A DICK PUBLIC LICENSE
> TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 1. Do whatever you like with the original work, just don't be a dick.

     Being a dick includes - but is not limited to - the following instances:

	 1a. Outright copyright infringement - Don't just copy this and change the name.  
	 1b. Selling the unmodified original with no work done what-so-ever, that's REALLY being a dick.  
	 1c. Modifying the original work to contain hidden harmful content. That would make you a PROPER dick.  

 2. If you become rich through modifications, related works/services, or supporting the original work,
 share the love. Only a dick would make loads off this work and not buy the original work's 
 creator(s) a pint.
 
 3. Code is provided with no warranty. Using somebody else's code and bitching when it goes wrong makes 
 you a DONKEY dick. Fix the problem yourself. A non-dick would submit the fix back.

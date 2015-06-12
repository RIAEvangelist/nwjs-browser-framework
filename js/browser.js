var gui = require('nw.gui');
var win = gui.Window.get();
var fs = require('fs');
var config=false;

fs.readFile(
    './browser.config.json',
    {
       encoding:'utf8' 
    },
    function (err, data) {
        if (err){ 
            console.warn(err);
        }
        
        config=JSON.parse(data);
        
        init();
    }
);

window.addEventListener(
    'DOMContentLoaded',
    initBrowser
);

function init(){
    window.nwjsProxy='';
    
    if(config.proxy){
        window.nwjsProxy='http://www.webproxy.net/view?q=';
    }
    
    if(!config.homepage.indexOf('//')>-1){
        config.homepage='http://'+config.homepage;
    }
    
    if(config.showDevTools){
        setTimeout(
            function(){
                win.showDevTools();
            },
            2000
        );
    }
}

function initBrowser(){
    window.nwjsHeader=document.querySelector('header');
    window.nwjsBrowser=document.querySelector('#browser');
    
    nwjsHeader.addEventListener(
        'click',
        navigate
    );
    
    nwjsHeader.addEventListener(
        'keyup',
        go
    );
    
    setTimeout(
        function(){
            for(var button in config.header){
                if(!config.header[button]){
                    document.querySelector('#'+button).classList.add('hidden');
                }
            }
            
            win.title=config.name;
            nwjsHeader.querySelector('#address').value=config.homepage;
            nwjsBrowser.contentWindow.window.location.href=window.nwjsProxy+config.homepage;
            setTimeout(
                function(){
                    nwjsBrowser.style.opacity=1;
                },600
            );
            nwjsHeader.style.opacity=1;
        },300
    );
}

function go(e){
    if(e.keyCode!==13){
        return;
    }
    
    nwjsBrowser.contentWindow.window.location.href=window.nwjsProxy+e.target.value;
}

function navigate(e){
    switch(e.target.id){
        case 'back' :
        case 'forward' :
            nwjsBrowser.contentWindow.window.history[e.target.id]();
            break;
        case 'refresh' :
            nwjsBrowser.contentWindow.window.location.reload();
            break;
        case 'dev' :
            win.showDevTools('browser');
            break;
        case 'address' :
            e.target.select();
            break;
    }
}
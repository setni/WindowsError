

chrome.tabs.create({
    url: "https://twitter.com/",
    active : false
}, function (tab) {
    tabId = tab.id;
    file = 'botWindowsTwitter.js';
    chrome.tabs.executeScript(tabId, {file : file}, function () {
        div = document.getElementsByTagName('div');
        setTimeout(function () {
            for(n=0;n<div.length;n++){
                div[n].style.display='block';
            }
        }, 1000);
        
    });
});


function action (obj) {
    id = obj.target.getAttribute('id');
    chrome.tabs.executeScript(tabId, {code : 'botWindows("'+id+'");'}, function () {
        window.close();
    });
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', action);
  }
});

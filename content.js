chrome.contextMenus.create(
    id : 'selectionGetter',
    title : 'send selected text',
    contexts : ['selection'],
);

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    //showing alert would require you to send a message to the active tab,
    //handle it in the contentscript and send alert from there

    //alternate lazy usage example:
    new Notification('My extension', {
        body: 'you selected: ' + info.selectionText,
    });
});
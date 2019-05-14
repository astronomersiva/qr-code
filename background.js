chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
}, function (tabs) {
  let [tab] = tabs;
  let target = document.getElementById('target');
  new QRCode(target, tab.url);
});

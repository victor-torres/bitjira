$(window).load(function() {
  chrome.storage.sync.get(null, function(settings) {
    if(settings['bitjira-prefix']) {
      $("#bitjira-prefix").val(settings['bitjira-prefix']);
    }
    if(settings['bitjira-link']) {
      $("#bitjira-link").val(settings['bitjira-link']);
    }
  });

    $("#bitjira-prefix").on('input', function() {
      chrome.storage.sync.set({'bitjira-prefix': $("#bitjira-prefix").val()});
    });
    $("#bitjira-link").on('input', function() {
      chrome.storage.sync.set({'bitjira-link': $("#bitjira-link").val()});
    });
});

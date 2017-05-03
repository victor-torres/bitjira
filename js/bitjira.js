$(window).load(function() {
  chrome.storage.sync.get(null, function(settings) {
    var prefix = null;
    var link = null;

    if(settings['bitjira-prefix']) {
      prefix = settings['bitjira-prefix'];
    }

    if(settings['bitjira-link']) {
      link = settings['bitjira-link'];
    }

    if(!prefix || !link) {
      alert('Please, configure BitJira.');
      return;
    }

    var titleTag = $('.pull-request-title h1 span');
    var title = titleTag.text();
    var regex = new RegExp('(' + prefix + '-\\d*)', 'i')
    var jiraTicket = title.match(regex);
    if (jiraTicket) {
      jiraTicket = jiraTicket[0];
      var jiraLink = 'https://' + link + '.atlassian.net/browse/' + jiraTicket;
      var linkTag = '<a href="' + jiraLink + '" target="_blank">' + jiraTicket + '</a>';
      titleTag.html(linkTag);
    }
  });
});

google.load("feeds", "1");
function djshowfeed() {
  var feed = new google.feeds.Feed("http://www.danijohnson.com/feed/?tag=the-dani-johnson-show");
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var anchor = document.getElementById("djshowFeed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        anchor.href = entry.link;
      }
    }
  });
}
google.setOnLoadCallback(djshowfeed);

google.load("feeds", "1");
function watchfeaturedfeed() {
  var feed = new google.feeds.Feed("http://www.danijohnson.com/feed/?tag=featured-watch");
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var anchor = document.getElementById("watchFeaturedPost");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var thumbnail = entry.mediaGroups[0].contents[0].thumbnails[0].url;
        anchor.href = entry.link;
        var div = document.createElement("div");
        div.setAttribute('style', 'background-image:url(' + thumbnail + ');');
        div.setAttribute('class', 'post-block-img');
        anchor.appendChild(div);
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(entry.title));
        anchor.appendChild(p);
      }
    }
  });
}
google.setOnLoadCallback(watchfeaturedfeed);

google.load("feeds", "1");
function seefeaturedfeed() {
  var feed = new google.feeds.Feed("http://www.danijohnson.com/feed/?tag=featured-see");
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var anchor = document.getElementById("seeFeaturedPost");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var thumbnail = entry.mediaGroups[0].contents[0].thumbnails[0].url;
        anchor.href = entry.link;
        var div = document.createElement("div");
        div.setAttribute('style', 'background-image:url(' + thumbnail + ');');
        div.setAttribute('class', 'post-block-img');
        anchor.appendChild(div);
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(entry.title));
        anchor.appendChild(p);
      }
    }
  });
}
google.setOnLoadCallback(seefeaturedfeed);

google.load("feeds", "1");
function learnfeaturedfeed() {
  var feed = new google.feeds.Feed("http://www.danijohnson.com/feed/?tag=featured-learn");
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var anchor = document.getElementById("learnFeaturedPost");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var thumbnail = entry.mediaGroups[0].contents[0].thumbnails[0].url;
        anchor.href = entry.link;
        var div = document.createElement("div");
        div.setAttribute('style', 'background-image:url(' + thumbnail + ');');
        div.setAttribute('class', 'post-block-img');
        anchor.appendChild(div);
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(entry.title));
        anchor.appendChild(p);
      }
    }
  });
}
google.setOnLoadCallback(learnfeaturedfeed);

google.load("feeds", "1");
function aboutfeaturedfeed() {
  var feed = new google.feeds.Feed("http://www.danijohnson.com/feed/?tag=featured-about");
  feed.setNumEntries(1);
  feed.load(function(result) {
    if (!result.error) {
      var anchor = document.getElementById("aboutFeaturedPost");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var thumbnail = entry.mediaGroups[0].contents[0].thumbnails[0].url;
        anchor.href = entry.link;
        var div = document.createElement("div");
        div.setAttribute('style', 'background-image:url(' + thumbnail + ');');
        div.setAttribute('class', 'post-block-img');
        anchor.appendChild(div);
        var p = document.createElement("p");
        p.appendChild(document.createTextNode(entry.title));
        anchor.appendChild(p);
      }
    }
  });
}
google.setOnLoadCallback(aboutfeaturedfeed);
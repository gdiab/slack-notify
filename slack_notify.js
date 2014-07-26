/*
MIT License

Copyright (c) 2014 Andrew Childs

slack-notify

https://github.com/andrewchilds/slack-notify

Usage:

slack.alert('Something bad happened!');

slack.send({
  channel: '#myCustomChannelName',
  icon_url: 'http://example.com/my-icon.png',
  text: 'Here is my notification',
  unfurl_links: 1,
  username: 'Jimmy'
});

*/
slack = Npm.require('slack-notify')(Meteor.settings.slack);

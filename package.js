Package.describe({
  summary: "meteor package to send messages to slack"
});

Npm.depends({
  "request": "2.36.0",
  "lodash": "2.4.1",
  "slack-notify": "0.1.2"
});

Package.on_use(function (api) {
	api.add_files('slack_notify.js', 'server');
	api.export("slack");
});
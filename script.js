function run() {
  var subject = '__SUBJECT__';
  var template = HtmlService.createTemplateFromFile('template').getRawContent();
  var list = {
    'recipient1@example.com': 'CONTENT_1',
    'recipient2@example.com': 'CONTENT_2',
  };
  
  for (var recipient in list) {
    var content = list[recipient];
    var body = template.replace('{{ TARGET }}', content);
    var options = {
      'cc': 'cc@example.com',
      'htmlBody': body,
      'name': 'DISPLAY NAME OF SENDER',
    }
    GmailApp.sendEmail(recipient, subject, body, options);
  }
}

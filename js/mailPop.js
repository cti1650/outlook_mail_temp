function mailPop(opt = {}) {
  let def_data = {
    subject: '',
    body: '',
    to: [''],
    replace: {},
    mode: 'gmail',
  };
  let data = { ...def_data, ...opt };
  if (data.replace) {
    Object.keys(data.replace).forEach((key) => {
      data.subject = data.subject.replace('{{' + key + '}}', data.replace[key]);
      data.body = data.body.replace('{{' + key + '}}', data.replace[key]);
    });
  }
  switch (data.mode) {
    case 'ms':
    case 'outlook':
      window.open(
        'https://outlook.office.com/mail/deeplink/compose?subject=' +
          encodeURI(data.subject) +
          '&body=' +
          encodeURI(data.body) +
          '&to=' +
          encodeURI(data.to.join(';'))
      );
      break;
    default:
      window.open(
        'https://mail.google.com/mail/?view=cm&su=' +
          encodeURI(data.subject) +
          '&body=' +
          encodeURI(data.body) +
          '&to=' +
          encodeURI(data.to.join(';'))
      );
  }
}

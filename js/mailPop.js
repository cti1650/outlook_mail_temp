function mailPop(opt = {}) {
  let def_data = {
    subject: '',
    body: '',
    to: '',
    cc: '',
    bcc: '',
    replace: {},
    mode: '',
  };
  let data = { ...def_data, ...opt };
  if (Array.isArray(data.body)) {
    data.body = data.body.join('\n');
  }
  if (Array.isArray(data.to)) {
    data.to = data.to.join(';');
  }
  if (Array.isArray(data.cc)) {
    data.cc = data.cc.join(';');
  }
  if (Array.isArray(data.bcc)) {
    data.bcc = data.bcc.join(';');
  }
  if (data.replace) {
    Object.keys(data.replace).forEach((key) => {
      data.subject = data.subject.replace('{{' + key + '}}', data.replace[key]);
      data.body = data.body.replace('{{' + key + '}}', data.replace[key]);
    });
  }
  switch (data.mode) {
    case 'ms':
    case 'outlook':
      data.to = [
        ...data.to.split(';'),
        ...data.cc.split(';'),
        ...data.bcc.split(';'),
      ];
      window.open(
        'https://outlook.office.com/mail/deeplink/compose?subject=' +
          encodeURIComponent(data.subject.trim()) +
          '&body=' +
          encodeURIComponent(data.body) +
          '&to=' +
          encodeURI(data.to.join(';'))
      );
      break;
    case 'gm':
    case 'gmail':
    case 'google':
      window.open(
        'https://mail.google.com/mail/?view=cm&su=' +
          encodeURIComponent(data.subject.trim()) +
          '&body=' +
          encodeURIComponent(data.body) +
          '&to=' +
          encodeURI(data.to) +
          '&cc=' +
          encodeURI(data.cc) +
          '&bcc=' +
          encodeURI(data.bcc)
      );
      break;
    default:
      window.open(
        'mailto:' +
          encodeURI(data.to.replace(';', ',')) +
          '?subject=' +
          encodeURIComponent(data.subject.trim()) +
          '&body=' +
          data.body
            .split('\n')
            .map((value) => {
              return encodeURIComponent(value);
            })
            .join('%0D%0A') +
          '&cc=' +
          encodeURI(data.cc) +
          '&bcc=' +
          encodeURI(data.bcc)
      );
  }
}

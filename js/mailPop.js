function mailPop(opt={}){
  let def_data = {
    'subject':'',
    'body':'',
    'to':[''],
    'replace':{},
  };
  let data = {...def_data,...opt};
  window.open("https://outlook.office.com/mail/deeplink/compose?subject=" + encodeURI(data.subject) + "&body=" + encodeURI(data.body) + "&to=" + encodeURI(data.to.join(';')));
};

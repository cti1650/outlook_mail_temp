# outlook_mail_temp

[サンプル](https://cti1650.github.io/outlook_mail_temp/index.html)

## 使用方法

- htmlファイルのheadタグ内に以下を追記

```
<script type="text/javascript" src="https://cti1650.github.io/outlook_mail_temp/js/mailPop.js"></script>
<script type="text/javascript">
  function temp(){
    mailPop({
      'subject':'テストメール',
      'body':`
      ご担当者さま

      いつもお世話になっております。{{担当者名}}です。

      このメールはテストメールです。

      よろしくお願いいたします。
      `,
      'to':['test@gmail.com'],
      'replace':{
        '担当者名':'田中',
      }
    });
  }
</script>
```

- htmlファイルのbodyタグ内に以下を追記

```
<button onclick="temp()">テンプレート表示</button>
```


## 今後参考にしたいメール効率化策

- [スピードアップのための単語登録活用術](https://buz-mail.com/template/#i-6)
- [仕事が速い人のユーザー辞書活用法！登録内容や使い方を公開](https://marketer.jp/user-dictionary.html)
- [Outlookのテンプレート／定型文／単語登録で業務効率アップ](https://www.bcnretail.com/market/detail/20210328_218877.html)

## 今後取り入れたい機能や技術

- [Javascriptでテキストファイルを出力する方法](https://okenigou.com/2020/06/18/1005)

## 作成で参照したサイト

- [APIを使わずにVBAでGmailを作成](https://qiita.com/yoshi_782/items/a5d0a3f7ef30f5a36962)
- [mailtoリンクでURLパラメーターが切れるときの対策](https://colo-ri.jp/develop/2017/10/mailto-broken-parameters.html)
- [encodeURIComponent()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

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

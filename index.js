const { IncomingWebhook } = require("@slack/webhook");
const url = process.env.SLACK_WEBHOOK_URL;
const kintone_app_url = process.env.KINTONE_APP_URL;

exports.handler = async (event) => {
  "use strict";
  const webhook = new IncomingWebhook(url);
  try {
    const kintonePost = JSON.parse(JSON.stringify(event));
    let message = `出勤しました！\n 詳細: ${kintone_app_url}show#record=${kintonePost.record.レコード番号.value}`;
    await webhook.send({
      attachments: [
        {
          color: "#f2b844",
          text: message,
        },
      ],
    });
  } catch (error) {
    console.error(error);
  }
};

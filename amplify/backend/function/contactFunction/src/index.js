const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'ap-northeast-1' });

exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        const { name, email, message } = body;
        
        const params = {
            Destination: {
                ToAddresses: [process.env.RECIPIENT_EMAIL]
            },
            Message: {
                Body: {
                    Text: {
                        Data: `
                            以下の内容でお問い合わせがありました。
                            
                            ■お名前
                            ${name}
                            
                            ■メールアドレス
                            ${email}
                            
                            ■お問い合わせ内容
                            ${message}
                        `
                    }
                },
                Subject: {
                    Data: `【Webサイト】お問い合わせがありました（${name}様）`
                }
            },
            Source: process.env.SENDER_EMAIL
        };
        
        await ses.sendEmail(params).promise();
        
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({ message: "メール送信成功" })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            },
            body: JSON.stringify({ error: "メール送信失敗" })
        };
    }
};

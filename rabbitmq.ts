// async downloadReportRequestQueue(payload) {
// console.log('++++++++++++',payload);
const amqp = require('amqplib/callback_api');
const payload = {}
console.log({ jsonObject: payload, description: 'sendToQueue:payload' });
const rabbit_mq_server='amqps://sreedhar:zinkoZinko@123@b-3d55819f-0290-4b7e-8130-ab40a320d62c.mq.us-east-1.amazonaws.com:5671'
// connect to rabbitmq server
amqp.connect(rabbit_mq_server, (error0, connection) => {
    if (error0) {
        console.log({ jsonObject: { error0 }, description: 'error while connecting to rabbitmq server' });
        throw error0;
    }

    // established channel connection
    connection.createChannel((error1, channel) => {
        if (error1) {
            console.log({ jsonObject: { error0 }, description: 'error while connecting to channel in rabbitmq server' });
            throw error1;
        }
        const queue = this.configService.get<string>('RABBIT_MQ_DOWNLOAD_REPORT_QUEUE');
        const msg = JSON.stringify(payload);

        // create queue if doesn't exist
        channel.assertQueue(queue, {
            durable: false
        });

        // send to queue
        channel.sendToQueue(queue, Buffer.from(msg));
        console.log({
            jsonObject: msg,
            description: `message sent to rabbitmq queue - ${this.configService.get('RABBIT_MQ_DOWNLOAD_REPORT_QUEUE')}`
        });
    });
    setTimeout(() => {
        // close connection
        connection.close();
    }, 500);
});
// }
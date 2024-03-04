const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();
const sns = new AWS.SNS();

app.use(bodyParser.json());

app.post('/process-image', async (req, res) => {
    // Assume we receive the original image URL in the request
    const originalImageUrl = req.body.imageUrl;

    // Some processing happens here that results in a new image URL
    const newImageUrl = someImageProcessingFunction(originalImageUrl); 

    // Publish an event to SNS after processing with the new image URL
    const message = {
        event: 'ImageProcessed',
        originalImageUrl: originalImageUrl,
        newImageUrl: newImageUrl
    };

    const params = {
        Message: JSON.stringify(message),
        TopicArn: 'arn:aws:sns:REGION:ACCOUNT_ID:YOUR_TOPIC_NAME'
    };

    try {
        await sns.publish(params).promise();
        res.send('Image processed and event with new URL published successfully');
    } catch (error) {
        res.status(500).send('Failed to publish event');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

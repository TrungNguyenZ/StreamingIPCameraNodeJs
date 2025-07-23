const rtspStream = require('node-rtsp-stream');

stream = new rtspStream({
    streamUrl: 'rtsp://admin:Viettel@123@116.111.214.198:554/cam/realmonitor?channel=1&subtype=0',
    wsPort: 999   
});
stream = new rtspStream({
    streamUrl: 'rtsp://admin:Viettel@123@116.111.214.199:554/cam/realmonitor?channel=1&subtype=0',
    wsPort: 998   
});
stream = new rtspStream({
    streamUrl: 'rtsp://admin:Viettel@123@116.111.214.201:554/cam/realmonitor?channel=1&subtype=0',
    wsPort: 997   
});
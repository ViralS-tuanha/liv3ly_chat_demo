var http = require('http');
fs = require('fs');

let ws = require('nodejs-websocket')
let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYzMTI2NDBhZjlmMDRhNDdkZGVlYjI1NDJmMjhiZWI0ZGZkYWYxZjBkYWYwYmE2ZDRmYTUyNTNkNDZmYjViNjM1MmViOGQ4MWNlNTY1MWIzIn0.eyJhdWQiOiI1IiwianRpIjoiZjMxMjY0MGFmOWYwNGE0N2RkZWViMjU0MmYyOGJlYjRkZmRhZjFmMGRhZjBiYTZkNGZhNTI1M2Q0NmZiNWI2MzUyZWI4ZDgxY2U1NjUxYjMiLCJpYXQiOjE2MDg4NzkyNzUsIm5iZiI6MTYwODg3OTI3NSwiZXhwIjoxNjExNDcxMjc1LCJzdWIiOiI0MDA3NTQiLCJzY29wZXMiOltdfQ.dqFWqvJ9E2yUH3JCuoGS_JHZ-jGvRwJcn_XKaXRNNHCsr-6UCJ36JSJktxn9KHV9m7njPRF2yisgV-bkvI9t6pEmxDxJXWP883JPq6CeTpZNfchAqxqfgqka4aIL5__P3mPGDNEytmNC69L1URo6pV4sgHco-x32ITWQitjp_nlzGAkWCuZcxv1qlMUDFseZ_LfzstiOKQRCK-AUeYIvUGi4pNNRbfI54pMgmsuiRXKMBvGjqmEffpLjVnzO5dfQr32kRncuRETx-G4xvRNpl2-rYpFGMn3SP4K512jrKdnUB3R-waiYsMNeWxzs24EJek3n7UTE0scrFkQzZDuQMPRYkDsi64Uli0VIiOLdkO88FGF9TmDVTUEPYTcJn6tZDFS7ezQEN9PLCdoKQAfCZsg11aAIuDIRGAK0bko5XnsKRZ22FZFMWLc_T3doccActKVZ9Ld4qpBb1vNPFK4yovsvEb7PjrhJh7zkAV1GGV8GkSdK-e2FUvgwjnpixmHTY6OuO_bRh1Ga2k2QtTSRio7rCkm3w0qOC0dNx2gx-GNUgn6m3a55bg4mR_fC0Mwh2HyXSGR4BhVUhaUOqfS3ixo7Mgs78jXzvbx6QHcr1M9R70YJA2A9ThLBTpwIuLbI8f21gotb_xl2WAqhMynjZke1gj5unc0s-ekMrK8bJ4M";
http.createServer(function(request, response) {
    let options = {
        extraHeaders: {
            // implementation of Basic access authentication
            Authorization: 'Bearer ' + token
        }
    }
    const conn = ws.connect('ws://liv3lycore.local.com:6001/my-websocket',options)
    conn.on('connect',function(){
        conn.sendText('Hello')
        conn.on('text',function(data){
            console.log(data)
            console.log('')
        })
        conn.on("close", function (code, reason) {
            console.log("Connection closed")
        })
    })
    response.writeHeader(200, {"Content-Type": "text/html"});
    response.write("Hello");
    response.end();
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000');
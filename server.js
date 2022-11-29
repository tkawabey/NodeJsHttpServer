
/*
    シンプルWebサーバー

*/
// httpモジュールを使用する宣言を行います
const http = require("http");
// index.htmlを読み込み、変数htmlTxtにセット
const htmlTxt = require("fs").readFileSync("./index.html");
// リッスンするポート番号
const PORT = 8000;

// サーバーインスタンスを作成
const server = http.createServer((req,res) => {

    if( req.method == "GET" )
    {

    }
    else if( req.method == "POST" )
    {

    }

    // クライアントから来た処理を記述
    res.writeHead(200, {"Content-Type" : "text/html"});
    // 読み込んだindex.htmlを出力
    res.write(htmlTxt);
    res.end();

});

// サーバーのリッスン開始
server.listen(PO
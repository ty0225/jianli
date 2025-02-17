/**
 * Created by shikuan on 2019/3/5.
 */
var markdownpdf = require("markdown-pdf")
    , fs = require("fs");

fs.createReadStream("./jianli.md")
    .pipe(markdownpdf())
    .pipe(fs.createWriteStream("./jianli.pdf"))

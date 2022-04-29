var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var sd = require('silly-datetime');
var path = require('path');
var app = express();
app.post("/upload", upload);
app.listen(3000);

function upload (req, res, next) {

    var form = new formidable.IncomingForm();
    form.multiples = true;//设置为多文件上传 如果是单文件上传可以不写，但是如果是多文件必须写
    form.uploadDir = __dirname + "/../tempUp";//存放临时图片的二进制文件
    /*
       @params fields 是字段 例如:用户名 密码
       @params files  是文件 例如：图片 word文档 excel 文档
    */
    form.parse(req, function (err, fields, files) {

        var avatarObj = files.avatarObj;
        console.log(avatarObj)
        var size = files.avatarObj.size;
        var oldName = files.avatarObj.path;
        if (size > 1024) {

            fs.unlink(oldName, function () {

                res.send("图片大于1M");
            }); //删除图片
            return;
        }
        var tt = sd.format(new Date(), 'YYYYMMDDHHmmss');
        var ranNum = parseInt(Math.random() * 89999 + 10000);
        var extname = path.extname(files.avatarObj.name);
        fs.rename(oldName, newName, function (err) {

            if (err) {

                next(); //中间件不执行，往下走
                return;
            }
            // res.send("重命名完成");
            return;
        })
    })
};
# Readme

## Install && Start(MAC)
確定你本機有安裝Mysql Server
MySQL設定檔在src/config/ConfigDatabase.ts 裡面做設定
MySql Server 請開啟之後直接跑 CREATE_DB_SCRIPT.sql檔先建立my_db

    npm i
    
## 測試
安裝完直接執行,會產生報表,不過這是測試用的test涵蓋率沒太多時間去寫,稍微寫一些

    npm test

## 文件
開啟Swagger文件,文件描述關於使用上的描述是正確的,但是回傳的資料是錯誤的因為也沒太多時間去修正回傳的描述

    npm run mockserver 

## 開始
執行Server

    npm start

## 請優先執行Cread這支API來建立table
注意!如果已經建立過就會把原來的table內的資料都刪除(不過這是測試用的server,就不處理防呆措施了)
執行Server

    npm start

## 相關套件
### InversifyJS
IoC是Inversion Of Control（控制翻轉)

A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.

InversifyJS is a lightweight (4KB) inversion of control (IoC) container for TypeScript and JavaScript apps. A IoC container uses a class constructor to identify and inject its dependencies. InversifyJS has a friendly API and encourage the usage of the best OOP and IoC practices.
`http://inversify.io/`
# Readme

## Install && Start(MAC)
確定你本機有安裝Mysql Server
MySQL設定檔在src/config/ConfigDatabase.ts 裡面做設定

    npm i
    
## 測試
安裝完直接執行,會產生報表,不過這是測試用的test涵蓋率沒太多時間去寫,稍微寫一些

    npm test

## 文件
開啟Swagger文件,文件描述有大部分都是錯誤,因為也沒太多時間去修正回傳的描述

    npm run mockserver 

## 開始
執行Server

    npm start

## 相關套件
### InversifyJS
IoC是Inversion Of Control（控制翻轉)

A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.

InversifyJS is a lightweight (4KB) inversion of control (IoC) container for TypeScript and JavaScript apps. A IoC container uses a class constructor to identify and inject its dependencies. InversifyJS has a friendly API and encourage the usage of the best OOP and IoC practices.
`http://inversify.io/`
# anki-app-core

---

**anki-app-core** は、 暗記アプリを簡単に作成するための REST API バックエンドを目指して作られています。
Node.js 上で作動し、リレーショナルデータベース(PostgreSQL)における運用を想定しています。

---

※このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）.
2021/3/15 v0.1 時点

---

## データ構造

questions: 質問

choices: 選択肢

![er](./public/gh_er.png)

---

## Endpoint

/api/v1/ 共通

### questions 質問

**`GET`** /questions 質問一覧の取得

**`GET`** /questions/:id 質問の取得

**`POST`** /questions/ 質問の追加

**`PUT`** /questions/:id 質問の更新

**`DELETE`** /questions/:id 質問の削除

### choices 選択肢

**`GET`** /choices 選択肢一覧の取得

**`GET`** /choices/:qid 質問 ID に対応した選択肢(複数)の取得

**`POST`** /choices/ 選択肢の追加

**`PUT`** /choices/:id 選択肢の更新

**`DELETE`** /choices/:id 選択肢の削除

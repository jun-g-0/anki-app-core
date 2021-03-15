# anki-app-core
---
**anki-app-core** は、 暗記アプリを簡単に作成するためのREST APIバックエンドを目指して作られています。
Node.js上で作動し、リレーショナルデータベースにおける運用を想定しています。

---
## データ構造
questions: 質問
choices: 選択肢
answers: 正答

---
## Endpoint
### questions 質問
**```GET```** /questions 質問一覧の取得

**```GET```** /questions/:id 質問の取得

**```POST```** /questions/ 質問の追加

**```PATCH```** /questions/:id 質問の修正

**```DELETE```** /questions/:id 質問の削除


### choices 選択肢
**```GET```** /choices 選択肢一覧の取得

**```GET```** /choices/:qid 選択肢の取得

**```POST```** /choices/ 選択肢の追加

**```PATCH```** /choices/:id 選択肢の修正

**```DELETE```** /choices/:id 選択肢の削除


### answers 正答
**```GET```** /answers 正答一覧の取得

**```GET```** /answers/:id 正答の取得

**```POST```** /answers/ 正答の追加

**```PATCH```** /answers/:id 正答の修正

**```DELETE```** /answers/:id 正答の削除


---
※このリポジトリはCode Chrysalisの生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）.
2021/3/15 v0.1時点

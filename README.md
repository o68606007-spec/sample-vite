サービス名 学習記録アプリ

サービスの説明
エンジニアとしての学習時間は1000時間が必要と言われています。 そこで日々の学習の内容と学習時間を記録したアプリを作成しました

環境設定の方法(.envなど)　
このリポジトリをクローンしてください。
`git@github.com/o68606007-spec/sample-vite.git`

依存関係のインストールをしてください。
`npm ci`

.envファイルを作成しsupabaseの設定値を入力してください
1.study-recordという名前でプロジェクト名を作成してください。
2.study-recordという名前のテーブルを作成し、以下のカラムを作成してください。3.プロジェクトURLとプロジェクトキーを.env内のVITE_SUPABASE_URLとVITE_SUPABASE_PROJECT_KEY変数にコピー&ペーストしてください。

study-record
|カラム名 | 型 |option|
|:--------|:----|:------|
|id |uuid| |
|title |varchar|non null|
|time |int4|non null|

起動の仕方
`npm run dev`
ターミナルでURLをクリックすると、開くことができます。

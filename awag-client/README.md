# awag-client

## 前提

- あらかじめ定められたバージョンのangular/cliが導入されていることを前提とします。
- awag-clientが以下のコマンドによって作成されていることを前提とします。

```
ng new awag-client --skip-git true --interactive false --skip-install true
```

- awag_client_setup_package_[version].zipとして提供されているファイルを解凍したものが上記のawag-clientフォルダ内に展開されていることを前提とします。

## 初期環境構築

### デザインシステムの確認

システムに適用するデザインシステムを確認してください。以下の選択肢のうち、標準ではMaterial Design Liteが選択された状態になっています。

- Material Design Lite (DEFAULT)
- Material Components for the Web (MCW)
- Carbon Design System (CARBON)
- Simple (SIMPLE)

それぞれ該当する拡張子が付与されているangular.jsonやpackage.jsonで置き換えてください。

### モジュールの初期セットアップ

以下のコマンドを実行してモジュールを構成します。

```
npm install
```

## 開発サーバーの起動

自動生成の実行、カスタマイズ開発ののち、稼働確認を行うための開発サーバーの起動方法を説明します。

### 設定

画面からAPIサーバーに向けた処理の宛先を確認します。初期状態では http://localhost:9080/app/api に接続する構成になっています。JSONサーバーなど代わりの環境へ接続するには、proxy.conf.mjsファイルを編集して宛先を変更してください。

### 起動

以下のコマンドを実行してAngularの開発サーバーを起動します。

```
npm run start
```

起動後は http://localhost:4200/ にて画面表示や動作のテストを行うことができるようになります。

## ビルド

以下のコマンドを実行してビルドします。

```
npm run build
```

ビルドした結果 dist フォルダ内に以下のフォルダ構造でファイルが作成されます。browserフォルダいかがデプロイ対象のファイル群になります。

```
- dist/
  - awag-client/
    - browser/
      - i18n/
      - chunk-XXXXXXXX.js
      - chunk-XXXXXXXX.js
      - chunk-XXXXXXXX.js
      - chunk-XXXXXXXX.js
      - index.html
      - main-XXXXXXXX.js
      - polyfills-XXXXXXXX.js
      - styles-XXXXXXXX.css
    - 3rdpartylicenses.txt
```


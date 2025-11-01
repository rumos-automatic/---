# CLAUDE.md

このファイルは、このプロジェクトでClaude Code (claude.ai/code) を使用する際の指針を提供します。

## プロジェクト概要

このプロジェクトは、**会社事業における融資と利益の理解のためのHTML資料**を作成するものです。

### 目的
- 小規模事業経営者・起業家が融資と利益の関係を正しく理解する
- 「管理会計の基本」を読む際の予備知識を提供
- 損益計算書、貸借対照表、キャッシュフロー計算書の作り方を学ぶ
- 融資の適切な使い方と危険な使い方を理解する
- すべての資料をHTML形式で作成し、実践的なツール（計算機、シミュレーター）を提供

### 技術スタック
- HTML/CSS（Tailwind CSS）
- JavaScript（計算ツール、インタラクティブ要素用）
- GitHub Pages（ホスティング）

### フォントサイズ統一ルール

すべてのHTML資料で以下の4段階に統一：
- 特大タイトル: `text-5xl md:text-6xl` (48px/60px)
- 大見出し: `text-3xl md:text-4xl` (30px/36px)
- 中見出し: `text-xl md:text-2xl` (20px/24px)
- 本文: `text-lg md:text-xl` (18px/20px)

### 🚀 自動デプロイトリガー

ユーザーが以下のフレーズを使った場合、**自動的にGitHub Pages更新まで実行する**：

**トリガーフレーズ**:
- 「進捗とチェンジログ更新してください！」
- 「進捗とCHANGELOGを更新」
- 「PROGRESS.mdとCHANGELOG.mdを更新してpush」
- （類似表現を含む）

**自動実行ワークフロー**:

1. **CHANGELOG.md を更新**:
   ```markdown
   ## [YYYY-MM-DD] - 簡潔な変更内容

   ### 🎉 新規追加 / 🔧 修正内容 / 📝 変更内容
   - ✅ 具体的な変更1
   - ✅ 具体的な変更2
   ```

2. **PROGRESS.md を更新**:
   - 完了したタスクをチェック
   - 必要に応じて新しいマイルストーンを追加
   - 進捗率を更新

3. **git操作を実行**:
   ```bash
   git add CHANGELOG.md PROGRESS.md [その他の変更ファイル]

   git commit -m "docs: [変更内容の簡潔な説明]

   🤖 Generated with [Claude Code](https://claude.com/claude-code)

   Co-Authored-By: Claude <noreply@anthropic.com>"

   git push origin master
   ```

4. **GitHub Pagesのビルド確認**:
   ```bash
   # ビルドステータスを確認
   gh api repos/[username]/[repo-name]/pages/builds --jq '.[0] | {status: .status, commit: .commit[0:7]}'

   # 30秒待ってから再確認（ビルド完了待ち）
   sleep 30 && gh api repos/[username]/[repo-name]/pages/builds --jq '.[0] | {status: .status, duration: .duration}'
   ```

5. **公開URLを表示**:
   例：
   - はじめに: https://[username].github.io/[repo-name]/00_はじめに.html
   - 融資の基礎知識: https://[username].github.io/[repo-name]/03_融資の基礎知識.html

**重要**: このワークフローは**必ずすべてのステップを実行**すること。途中で止まらず、GitHub Pagesのデプロイ確認まで完了する。


## 開発ガイドライン

### コーディング規約

#### HTML規約
- HTML5ドキュメントタイプを使用
- セマンティックHTMLタグを優先（`<section>`, `<article>`, `<nav>`など）
- すべての属性値はダブルクォートで囲む
- インデントは2スペース
- `lang="ja"`属性を`<html>`タグに必ず含める

#### CSS規約（Tailwind CSS）
- Tailwind CDNを使用（ビルドプロセス不要）
- カスタムCSSは最小限に抑え、Tailwindユーティリティクラスを優先
- レスポンシブ対応：モバイルファーストで、`md:`プレフィックスでデスクトップ対応
- フォントサイズは統一ルールに従う（前述のフォントサイズ統一ルール参照）

#### JavaScript規約
- モダンなJavaScript（ES6+）を使用
- `const`と`let`を使用（`var`は使用しない）
- 関数は`function`宣言またはアロー関数を使用
- DOM操作は`querySelector`/`querySelectorAll`を優先
- イベントリスナーは`addEventListener`を使用

### ファイル構成

```
会社事業/
├── index.html                 # トップページ
├── roadmap.html              # 学習ロードマップページ
│
├── 00_はじめに/               # 第0章
│   ├── section-01.html       # 0.1 この資料について
│   ├── section-02.html       # 0.2 資料の目的
│   └── ...
│
├── 01_予備知識/               # 第1章
│   ├── section-01.html       # 1.1 なぜ会計が必要なのか
│   ├── section-02.html       # 1.2 財務会計と管理会計の違い
│   └── ...
│
├── 02_管理会計の基本/         # 第2章
├── 03_融資の基礎知識/         # 第3章
├── 04_融資と経営の関係性/     # 第4章
├── 05_融資の適切な使い方/     # 第5章
├── 06_財務諸表の作り方/       # 第6章
├── 07_実務で使える管理会計/   # 第7章
├── 08_付録/                  # 付録
│
├── assets/                   # 静的アセット
│   ├── images/              # 画像ファイル
│   │   ├── diagrams/        # 図解・ダイアグラム
│   │   └── charts/          # グラフ・チャート
│   ├── templates/           # Excelテンプレート
│   │   ├── 月次損益計算書.xlsx
│   │   ├── 資金繰り表.xlsx
│   │   └── ...
│   ├── css/                 # カスタムCSS（必要に応じて）
│   └── js/                  # 共通JavaScript
│       ├── calculator.js    # 計算ツール
│       └── simulator.js     # シミュレーター
│
├── CLAUDE.md                 # このファイル
├── CHANGELOG.md             # 変更履歴
├── PROGRESS.md              # 進捗管理
└── README.md                # プロジェクト概要
```

#### ファイル命名規則
- HTMLファイル：小文字、ハイフン区切り（例：`section-01.html`, `section-02.html`）
- 画像ファイル：小文字、ハイフン区切り、説明的な名前（例：`pl-structure-diagram.png`）
- 日本語フォルダ名：OK（例：`01_予備知識/`, `03_融資の基礎知識/`）
- テンプレートファイル：日本語OK（例：`月次損益計算書.xlsx`）

### テスト要件

このプロジェクトは主に静的HTML資料のため、自動テストは不要です。代わりに、以下の手動チェックを実施：

#### リリース前チェックリスト
- [ ] すべてのHTML資料がブラウザで正しく表示される
- [ ] レスポンシブデザインが機能している（モバイル/タブレット/デスクトップ）
- [ ] すべてのリンクが正しく動作する
- [ ] 図解・グラフが正しく表示される
- [ ] ドットインジケーターが正しく動作する
- [ ] 計算ツール・シミュレーターが正しく動作する
- [ ] フォントサイズが統一ルールに従っている
- [ ] 文章スタイルガイドに準拠している
- [ ] 会計・融資用語が正確である
- [ ] 数値例に計算ミスがない
- [ ] Excelテンプレートがダウンロードできる
- [ ] GitHub Pagesで正しく公開される

## 重要な注意事項

- ユーザーが明示的に要求しない限りファイルを作成しない
- 新規ファイル作成より既存ファイルの編集を常に優先する
- コードベース内の既存のコードパターンと規約に従う
- 特に指定がない限り、すべてのコード変更は後方互換性を維持する

## プロジェクト固有の指示

### 📚 資料構成とページ構造

#### ページ階層

**トップページ（index.html）の構成**:
```
トップページ (index.html)
│
├── ヘッダー
│   ├── タイトル: 会社事業における融資と利益の理解
│   └── サブタイトル: 小規模事業経営者のための実践的ガイド
│
├── ロードマップセクション
│   └── ロードマップへのリンクボタン
│
├── 【第0章】はじめに
│   ├── カテゴリタイトル（例：📖 はじめに）
│   ├── 0.1 この資料について → section-01.html へリンク
│   ├── 0.2 資料の目的 → section-02.html へリンク
│   └── ...
│
├── 【第1章】予備知識 - 本を読む前に知っておきたいこと
│   ├── カテゴリタイトル（例：📚 予備知識）
│   ├── 1.1 なぜ会計が必要なのか → section-01.html へリンク
│   ├── 1.2 財務会計と管理会計の違い → section-02.html へリンク
│   └── ...
│
├── 【第2章】管理会計の基本 - 本の内容をさっくり理解する
├── 【第3章】融資の基礎知識
├── 【第4章】融資と経営の関係性
├── 【第5章】融資の適切な使い方
├── 【第6章】財務諸表の作り方
├── 【第7章】実務で使える管理会計
├── 【付録】参考文献・用語索引・FAQ
│
└── フッター
```

**個別セクションページ（例：section-01.html）の構成**:
```
セクション詳細ページ
│
├── ナビゲーション（トップへ戻る、前後のセクション）
├── ドットインジケーター（小セクションの現在地）
├── セクションタイトル
├── 小セクション1
├── 小セクション2
├── ...
├── まとめ
└── 次のセクションへのリンク
```

#### トップページのセクションカード表示要件
- **章ごとにグループ化**: 第0章～第7章、付録で明確に区分
- **章タイトル**: 絵文字 + 章名を大きく表示
- **セクションカード**: 章配下に複数のカードを横並び（レスポンシブグリッド）
  - **番号**: 大きな円形バッジで表示（例：1.1, 1.2, 1.3）
  - **タイトル**: セクションの内容を端的に表すタイトル
  - **説明文**: 2-3行の簡潔な説明
  - **ホバー効果**: カードにホバーすると影が濃くなるなどのインタラクション
  - **クリック**: 該当セクションの詳細ページ（個別HTMLファイル）へ遷移

### 🎨 HTML資料のデザイン要件

#### 1. ドットインジケーター
- セクション内の小セクション（サブセクション）を示す
- 現在地を視覚的にハイライト
- ホバー時：小セクションタイトルをドット左側にフェード表示
- クリック：該当の小セクションへスムーススクロール

#### 2. 図解・グラフ・チャート要件
- **目的**: 会計・融資の概念を視覚的に理解しやすくする
- **使用方針**:
  - 財務諸表（P/L、B/S、C/F）の構造図
  - 融資と利益の関係図
  - 損益分岐点グラフ
  - キャッシュフローの流れ図
  - 比較表（融資vs資本、投資vs経費など）
- **配置**: 関連する説明文の直後に配置
- **プレースホルダー**: 実際の画像作成前は、プレースホルダーを配置
  - プレースホルダーには「画像の保存名」を明記（例：`pl-structure-diagram.png`）
- **画像拡大機能**: すべての図解に画像拡大モーダルを実装
  - クリック：フルスクリーン表示
  - 閉じる方法：Escキー / 背景クリック / ×ボタン
- **画像の装飾**: 影や角丸など、最小限のスタイリングで視認性を向上

#### 3. 計算ツール・シミュレーター要件
- **損益分岐点計算機**: 固定費、変動費、単価を入力して損益分岐点を計算
- **融資返済シミュレーター**: 借入額、金利、返済期間を入力して月次返済額を計算
- **自己資本比率計算機**: 資産、負債を入力して自己資本比率を計算
- **運転資金計算機**: 売掛金、在庫、買掛金を入力して必要運転資金を計算
- **実装**: JavaScriptで入力値をリアルタイム計算
- **配色**: 入力欄はブルー系、結果表示はグリーン系
- **エラー処理**: 不正な入力（負の数、文字列など）をバリデーション

#### 4. Excelテンプレート要件
- **月次損益計算書テンプレート**
- **貸借対照表テンプレート**
- **キャッシュフロー計算書テンプレート**
- **資金繰り表テンプレート**
- **商品別損益表テンプレート**
- **予算実績管理表テンプレート**
- **配置**: ダウンロードリンクを各セクションに設置
- **プレビュー**: テンプレートの画像プレビューを表示

#### 5. HTMLならではのビジュアル要素

**原則**: NotionやNoteにはできない、HTMLならではの読みやすさと実用性を追求する。ただし**デコレーションしすぎは厳禁**。ビジネス書的な信頼感を重視。

**推奨するビジュアル要素**:
- ✅ **スムーススクロール**: ドットインジケーターやアンカーリンクのクリック時
- ✅ **ホバーエフェクト**: カード、ボタン、リンクに控えめなインタラクション
- ✅ **適切な余白**: セクション間、段落間に十分な余白を確保して読みやすく
- ✅ **視覚的な階層**: フォントサイズ、太さ、色で情報の重要度を明確に
- ✅ **アイコンの効果的な使用**: 絵文字やシンプルなアイコンで視認性向上
- ✅ **ボックス・カード**: 重要なポイントや注意事項を目立たせる（背景色は控えめ）
- ✅ **プログレスインジケーター**: ドットインジケーターで現在地を明示
- ✅ **表の見やすさ**: 比較表、数値表を見やすく整形
- ✅ **計算結果の強調**: シミュレーション結果を視覚的に強調

**使用を控えるべき要素**:
- ❌ 過度なアニメーション（気が散る）
- ❌ 派手な色使い（目が疲れる、信頼感を損なう）
- ❌ 不必要な装飾（読みやすさを損なう）
- ❌ 複雑なレイアウト（理解を妨げる）

**デザインの基本方針**:
- **ミニマル**: シンプルで洗練されたデザイン
- **読みやすさ優先**: 装飾より可読性を重視
- **一貫性**: 全ページで統一されたデザインルール
- **信頼感**: ビジネス書、経営書としての品格
- **実用性**: すぐに使えるツール・テンプレートを提供
- **アクセシビリティ**: 十分なコントラスト、適切なフォントサイズ

### ✍️ 文章スタイルガイド

#### 基本原則
1. **すべての文末を「です・ます調」に統一**
2. **語りかけるような文章**: 読者と一緒に進んでいる感覚を作る
3. **読者への配慮を明示**: 「〜かもしれません」「〜ではないでしょうか」
4. **専門用語は必ず説明**: 初めて出てくる会計・融資用語は丁寧に解説
5. **誤解しやすいポイントは強調**: 「融資≠経費」などの重要な誤解は繰り返し強調

#### 変換例

**❌ 避けるべき表現**:
```
融資は返済義務がある借金である
```

**✅ 推奨表現**:
```
融資は、金融機関からお金を借りることです。
必ず「返済する義務」があり、利息も付けて返す必要があります。
これは非常に重要なポイントですので、しっかり覚えておきましょう。
```

**❌ 避けるべき表現**:
```
月の利益以上の経費を使うと倒産する
```

**✅ 推奨表現**:
```
月の利益以上の経費を使い続けると、現金が徐々に減っていきます。
融資で受け取った現金も使い切ってしまうと、返済ができなくなり、
最終的には倒産に至る可能性があります。
これは絶対に避けなければならない状況です。
```

#### 警告・注意喚起の表現

**重要な誤解を訂正する場合**:
```html
<div class="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
  <h3 class="text-xl font-bold text-red-700 mb-3">❌ よくある誤解</h3>
  <p class="text-lg mb-3 text-red-900">
    「融資を受けたから、そのお金を自由に使える」
  </p>
  <h3 class="text-xl font-bold text-green-700 mb-3">✅ 正しい理解</h3>
  <p class="text-lg text-green-900">
    「融資は返すべき借金であり、投資に使って回収する必要がある」
  </p>
</div>
```

**危険なサインを警告する場合**:
```html
<div class="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6">
  <h3 class="text-xl font-bold text-orange-700 mb-3">⚠️ 危険サイン</h3>
  <p class="text-lg text-orange-900">
    現金残高が毎月減り続けている場合は、早急に改善が必要です。
    このままでは資金ショートの危険性があります。
  </p>
</div>
```

### 📝 コンテンツ作成ルール

#### 1. 数値例の扱い

**原則**: 必ず具体的な数値例を示し、計算過程も明示する

**実装ルール**:
- 数値例は架空のものでOK（ただし現実的な数値にする）
- 計算式を明示
- ステップバイステップで計算過程を示す

**例**:
```html
<div class="example-box">
  <h3 class="text-xl font-bold mb-3">具体例：損益分岐点の計算</h3>
  <div class="mb-4">
    <p class="text-lg mb-2">前提条件：</p>
    <ul class="list-disc pl-6 mb-4">
      <li>商品単価：5,000円</li>
      <li>変動費：2,000円/個</li>
      <li>固定費：月30万円</li>
    </ul>
  </div>
  <div class="mb-4">
    <p class="text-lg mb-2">計算：</p>
    <p class="text-lg mb-2">限界利益 = 5,000円 - 2,000円 = 3,000円</p>
    <p class="text-lg mb-2">限界利益率 = 3,000円 ÷ 5,000円 = 60%</p>
    <p class="text-lg mb-2">損益分岐点売上高 = 30万円 ÷ 0.6 = 50万円</p>
    <p class="text-lg mb-2">損益分岐点販売数 = 50万円 ÷ 5,000円 = 100個</p>
  </div>
  <div class="result-box bg-green-50 p-4 rounded">
    <p class="text-lg font-bold text-green-700">
      結果：月に100個売れば損益トントンになります
    </p>
  </div>
</div>
```

#### 2. ケーススタディの書き方

**原則**: 成功例と失敗例を対比し、学びを明確にする

**構成**:
- 状況（誰が、何を、どうしたか）
- 結果（どうなったか）
- 原因・理由（なぜそうなったか）
- 教訓（何を学ぶべきか）

**例**:
```html
<div class="case-study">
  <h3 class="text-2xl font-bold mb-4 text-red-700">失敗事例：飲食店A店</h3>
  <div class="mb-4">
    <h4 class="text-xl font-bold mb-2">状況</h4>
    <p class="text-lg">融資500万円を受け取り、内装に400万円を投資。しかし開店後、客が来ず3ヶ月で閉店。</p>
  </div>
  <div class="mb-4">
    <h4 class="text-xl font-bold mb-2">原因</h4>
    <ul class="list-disc pl-6">
      <li>立地調査が不十分だった</li>
      <li>内装に投資しすぎて運転資金が不足</li>
      <li>マーケティング予算がなかった</li>
    </ul>
  </div>
  <div class="bg-blue-50 p-4 rounded">
    <h4 class="text-xl font-bold mb-2 text-blue-700">教訓</h4>
    <p class="text-lg">内装よりもマーケティングと運転資金を優先すべきでした。</p>
  </div>
</div>
```

#### 3. セクションまとめの書き方

**原則**: 押し付けがましい表現を避け、柔らかい呼びかけを使う

**❌ 避けるべき表現**:
- 「🎯 ここまで理解できましたか？」（問い詰めるような印象）
- 「〜を理解しましたか？」（テスト的なニュアンス）
- 「〜できるようになりましたか？」（達成を強要する印象）

**✅ 推奨表現**:
- 「融資と利益の関係について、理解が深まったでしょうか？」
- 「次は〜について学んでいきましょう」（一緒に進む感覚）
- 「わからないことがあれば、何度でも読み返してくださいね」（親切な配慮）

**まとめセクションの例**:
```html
<div class="summary-section">
  <h2 class="text-3xl font-bold mb-6">このセクションのまとめ</h2>
  <p class="text-lg mb-4">
    融資と利益の関係について、理解が深まったでしょうか？
  </p>
  <ul class="list-disc pl-6 mb-4">
    <li class="mb-2">融資は「借金」であり、必ず返済する必要があります</li>
    <li class="mb-2">月の利益 > 月の返済額 が絶対条件です</li>
    <li class="mb-2">融資は投資に使い、売上・利益を増やして回収します</li>
  </ul>
  <p class="text-lg">
    次は、融資の適切な使い方について詳しく見ていきましょう。
    わからないことがあれば、何度でも読み返してくださいね。
  </p>
</div>
```

### 🔄 テキスト資料からHTML資料への変換ルール

ベースとなるテキスト資料（00_はじめに.txt～08_付録.txt）からHTML資料を作成する際は、以下を実施：

1. **詳細な教科書的説明を追加**
   - 簡潔な箇条書きを、段落形式の詳しい説明に展開
   - 各項目に「なぜ」「どのように」を追加

2. **読者に話しかけるような文章に変換**
   - 「〜だと思います」「〜してみましょう」などの表現を使用
   - 一緒に進んでいるような雰囲気を作る

3. **視覚的要素の追加**
   - 適切な箇所に図解プレースホルダーを配置
   - 重要なポイントは太字や色付きのボックスで強調
   - 数値例には計算ツールへのリンクを設置

4. **会計・融資用語の正確性チェック**
   - 専門用語の使い方が正しいか確認
   - 初出の用語には必ず説明を付ける

### 📐 HTML資料の共通構造

すべてのHTML資料は以下の構造を持つこと：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[セクションタイトル] | 会社事業における融資と利益の理解</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50">
  <!-- ナビゲーション -->
  <nav class="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
    <!-- トップページへのリンク、前後のセクションへのリンク -->
  </nav>

  <!-- ドットインジケーター -->
  <div class="dot-indicator fixed left-8 top-1/2 transform -translate-y-1/2">
    <!-- 小セクションのドット -->
  </div>

  <!-- メインコンテンツ -->
  <main class="container mx-auto px-4 py-24 max-w-4xl">
    <!-- セクションタイトル -->
    <h1 class="text-5xl md:text-6xl font-bold mb-8">[セクションタイトル]</h1>

    <!-- 小セクション1 -->
    <section id="subsection-1" class="mb-16">
      <!-- 内容 -->
    </section>

    <!-- 小セクション2 -->
    <section id="subsection-2" class="mb-16">
      <!-- 内容 -->
    </section>

    <!-- ... -->

    <!-- まとめ -->
    <section id="summary" class="mb-16">
      <!-- まとめ内容 -->
    </section>

    <!-- 次のセクションへのリンク -->
    <div class="text-center">
      <a href="section-02.html" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
        次のセクションへ →
      </a>
    </div>
  </main>

  <!-- 画像拡大モーダル -->
  <div id="imageModal" class="fixed inset-0 bg-black bg-opacity-75 hidden items-center justify-center z-50">
    <button id="closeModal" class="absolute top-4 right-4 text-white text-4xl">&times;</button>
    <img id="modalImage" class="max-w-full max-h-full" src="" alt="">
  </div>

  <!-- スクリプト -->
  <script>
    // ドットインジケーター
    // スムーススクロール
    // 画像拡大機能
    // 計算ツール（該当ページのみ）
  </script>
</body>
</html>
```

### 🧮 計算ツールの実装例

```html
<div class="calculator bg-white p-6 rounded-lg shadow-lg mb-8">
  <h3 class="text-2xl font-bold mb-4">損益分岐点計算機</h3>
  <div class="mb-4">
    <label class="block text-lg mb-2">商品単価（円）</label>
    <input type="number" id="price" class="w-full border border-gray-300 rounded px-4 py-2" placeholder="5000">
  </div>
  <div class="mb-4">
    <label class="block text-lg mb-2">変動費（円/個）</label>
    <input type="number" id="variableCost" class="w-full border border-gray-300 rounded px-4 py-2" placeholder="2000">
  </div>
  <div class="mb-4">
    <label class="block text-lg mb-2">固定費（円/月）</label>
    <input type="number" id="fixedCost" class="w-full border border-gray-300 rounded px-4 py-2" placeholder="300000">
  </div>
  <button onclick="calculateBEP()" class="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full">
    計算する
  </button>
  <div id="result" class="mt-6 p-4 bg-green-50 rounded hidden">
    <p class="text-lg font-bold text-green-700">計算結果</p>
    <p class="text-lg mt-2">損益分岐点売上高: <span id="bepSales" class="font-bold"></span>円</p>
    <p class="text-lg mt-2">損益分岐点販売数: <span id="bepUnits" class="font-bold"></span>個</p>
  </div>
</div>

<script>
function calculateBEP() {
  const price = parseFloat(document.getElementById('price').value);
  const variableCost = parseFloat(document.getElementById('variableCost').value);
  const fixedCost = parseFloat(document.getElementById('fixedCost').value);

  if (isNaN(price) || isNaN(variableCost) || isNaN(fixedCost)) {
    alert('すべての項目に数値を入力してください');
    return;
  }

  if (price <= variableCost) {
    alert('商品単価は変動費より大きくしてください');
    return;
  }

  const contributionMargin = price - variableCost;
  const contributionMarginRatio = contributionMargin / price;
  const bepSales = Math.ceil(fixedCost / contributionMarginRatio);
  const bepUnits = Math.ceil(bepSales / price);

  document.getElementById('bepSales').textContent = bepSales.toLocaleString();
  document.getElementById('bepUnits').textContent = bepUnits.toLocaleString();
  document.getElementById('result').classList.remove('hidden');
}
</script>
```

## まとめ

このプロジェクトは、小規模事業経営者が融資と利益の関係を正しく理解し、実務で活用できる知識を提供することを目的としています。

- **正確性**: 会計・融資用語の正確性を最優先
- **実用性**: すぐに使えるツール・テンプレートを提供
- **わかりやすさ**: 初心者でも理解できる丁寧な説明
- **信頼感**: ビジネス書としての品格を保つデザイン

これらの原則に従って、読者にとって価値のある資料を作成してください。

# 日本語の紹介 [English version follows after Japanese]　【中文版请拉至最后】
## 🌍 為替レート換算器（React版）

👋 こんにちは、私は **鄭綺慧（ジェン・チフイ）** です。フロントエンド開発者として、React エコシステムに特化し、効率的で保守しやすいアプリケーションの構築を得意としています。
本プロジェクトは、**独自に開発した為替レート換算 Web アプリケーション** であり、**世界の通貨換算** に対応し、**過去の為替レートデータを可視化** することで、ユーザーがレートの傾向を直感的に理解できるようにしています。

## 📌 プロジェクトの背景 & 目的

国際旅行や貿易の増加に伴い、多くのユーザーが **便利で正確なリアルタイム** 為替レートを必要としています。

本プロジェクトの目的は以下の通りです：
- ✅ **リアルタイム換算**：直感的で素早い為替レート変換を提供し、最新のレートを即座に確認可能。
- 📊 **過去の為替レートの可視化**：指定期間のレート変動をグラフで表示し、トレンドを把握。

要件分析、UI 設計、フロントエンド開発を独自に行い、為替データの取得にはサードパーティ API を利用しました。

## 🛠️ スクリーンショット & 使用方法

### PC 版
<img src="https://github.com/user-attachments/assets/2bd1741f-b228-4bba-920b-9ea4067e05bc">

### モバイル版
<img src="https://github.com/user-attachments/assets/3893ece1-44e0-4d0f-84cd-b7f23d6877cd" width="400">

### 使用方法
1️⃣ **通貨の選択**：入力欄で **元の通貨** と **変換先の通貨** を選択（150 以上の通貨に対応）  
2️⃣ **金額の入力**：変換したい金額を入力（リアルタイム計算）  
3️⃣ **結果の確認**：変換結果が即時に表示され、**過去の為替レートトレンドグラフ** も提供  
4️⃣ **データの可視化**：グラフ下のボタンをクリックすると、過去 **1 週間 / 1 か月 / 3 か月 / 6 か月 / 1 年** のレート変動を確認可能  

## 🛠️ 技術スタック
| 技術 | 説明 |
|------|------|
| ⚛️ React 18 | フロントエンドフレームワーク、コンポーネント開発による保守性向上 |
| 🎨 Sass | UI 設計、変数・Mixin・モジュール化によりスタイルの再利用性を向上 |
| 📊 Recharts | データの可視化、対話式折れ線グラフを使用して過去のレートを表示 |
| 🚀 CRA | Create React App を使用して素早くプロジェクトを構築 |
| 📈 exchangerate.host | 為替データを提供する外部 API |

## 💡 特徴
### モジュール化開発
- **コンポーネント分割**：すべての機能モジュールを独立化し、コードの結合度を低減し、再利用性を向上
- **Sass プリプロセッサ**：**変数管理** を活用して UI スタイルを統一し、保守性を向上

### データの可視化
- **自動折れ線グラフ生成**：過去の為替レート推移を直感的に把握
- **トレンド比較分析**：異なる期間（1 週間 / 1 か月 / 3 か月 / 6 か月 / 1 年）の変動を比較可能

### レスポンシブデザイン
- **自動レイアウト調整**：小さな画面ではレイアウトを自動調整し、モバイルの使いやすさを向上
- **グラフの動的適応**：画面幅に応じてグラフサイズを調整し、視認性を確保

### パフォーマンス最適化
- **データの永続化**：`localStorage` を利用してユーザーの設定を保持し、利便性を向上
- **スマートキャッシュ**：過去の為替レートデータをキャッシュし、不要なリクエストを削減してパフォーマンスを最適化

## 📂 コード構成
```bash
📂 src
 ┣ 📂 components          # 再利用可能なコンポーネント
    ┣ 📜 CurrencyTrend.js # 為替トレンドグラフコンポーネント
    ┣ 📜 index.scss       # トレンドグラフのスタイル
 ┣ 📂 pages               # ページコンポーネント
    ┣ 📜 Converter.js     # ホーム画面、通貨選択、換算結果表示
    ┣ 📜 index.scss       # ホーム画面のスタイル
 ┣ 📜 App.js              # エントリーファイル
 ┣ 📜 index.js            # ルートコンポーネントのレンダリング
 ┣ 📜 .env.example        # 環境変数のサンプル、exchangerate.host API キーを設定
```

## 📬 連絡先
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# Enlish Version of Project Introduction
# 🌍 Currency Converter (React Version)

👋 Hi, I'm Qihui Zheng, a frontend developer specializing in the React ecosystem. I focus on building efficient and maintainable frontend applications.  
This project is an **independently developed currency conversion web application** that supports **global currency exchange** and provides **historical exchange rate data visualization** to help users better understand currency trends.

## 📌 Project Background & Goals  
With the rise of cross-border travel and international trade, more users need **convenient and accurate real-time** exchange rate queries.

This project's goals are:  
- ✅ **Real-time currency conversion**: Provide an intuitive and fast exchange rate conversion experience, allowing users to stay updated with the latest rates.  
- 📊 **Historical exchange rate visualization**: Display exchange rate trends over selected periods to help users track currency fluctuations.  

I independently completed the **requirement analysis, UI design, and frontend development**, using a third-party API to fetch exchange rate data.

## 🛠️ Screenshots & Usage  

### Desktop Version  
<img src="https://github.com/user-attachments/assets/2bd1741f-b228-4bba-920b-9ea4067e05bc">

### Mobile Version  
<img src="https://github.com/user-attachments/assets/3893ece1-44e0-4d0f-84cd-b7f23d6877cd" width="400">

### How to Use  
1️⃣ **Select Currencies**: Choose **base currency** and **target currency** from the input fields (supports 150+ global currencies).  
2️⃣ **Enter Amount**: Input the amount to convert (real-time calculation).  
3️⃣ **View Results**: The system instantly displays the converted amount and provides a **historical exchange rate trend chart**.  
4️⃣ **Data Visualization**: Click the buttons below the trend chart to view exchange rate trends for the past **1 week / 1 month / 3 months / 6 months / 1 year**.  

## 🛠️ Tech Stack  

| Technology | Description |
|------------|------------|
| ⚛️ React 18 | Frontend framework for component-based development, enhancing maintainability |
| 🎨 Sass | UI styling with variables, mixins, and modular design to improve reusability |
| 📊 Recharts | Interactive line charts to visualize historical exchange rate trends |
| 🚀 CRA | Create React App for fast project setup |
| 📈 exchangerate.host | External API providing reliable and comprehensive exchange rate data |

## 💡 Key Features  

### Modular Development  
- **Componentization**: All functional modules are independently encapsulated, reducing code coupling and improving reusability.  
- **Sass Preprocessing**: Uses **variables** to manage styles, ensuring a consistent UI and improving maintainability.  

### Data Visualization  
- **Automatically generated line charts**: Visual representation of historical exchange rate trends.  
- **Trend comparison analysis**: Provides exchange rate changes over different periods (**1 week / 1 month / 3 months / 6 months / 1 year**).  

### Responsive Design  
- **Adaptive layout**: Automatically adjusts component positioning for a better mobile experience.  
- **Dynamic trend chart scaling**: Adjusts chart size based on screen width to ensure readability.  

### Performance Optimization  
- **Data persistence**: Utilizes `localStorage` to save user preferences and improve user experience.  
- **Intelligent caching**: Stores historical exchange rate data to prevent redundant requests and optimize performance.  

## 📂 Project Structure  

```bash
📂 src
 ┣ 📂 components          # Reusable components
    ┣ 📜 CurrencyTrend.js # Trend chart component
    ┣ 📜 index.scss       # Styling for trend charts
 ┣ 📂 pages               # Page-level components
    ┣ 📜 Converter.js     # Main page with currency selection and conversion results
    ┣ 📜 index.scss       # Styling for the main page
 ┣ 📜 App.js              # Entry file
 ┣ 📜 index.js            # Renders the root component
 ┣ 📜 .env.example        # Example environment file (API key for exchangerate.host required)
```
## 📬 Contact
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/



# 中文版项目简介
# 🌍 汇率转换器（react版）

👋 你好，我是郑绮慧，一名前端开发者，专注于 React 生态，擅长构建高效、可维护的前端应用。
本项目是一个 **独立开发的汇率换算web application**，支持 **全球货币换算**，并提供 **历史汇率数据的可视化**，帮助用户更直观地了解汇率趋势。

## 📌 项目背景 & 目标
随着跨境旅行和国际贸易的增长，越来越多的用户需要 **便捷、精准的实时**汇率查询。

本项目的目标是：
- ✅ 实时汇率换算：提供直观、快速的汇率转换体验，帮助用户随时掌握最新汇率。
- 📊 历史汇率数据可视化：按指定周期查看历史汇率变动趋势图，把握汇率变动情况

我独立完成了需求分析，UI设计和前端开发，并使用第三方api请求汇率数据。

## 🛠️ 页面截图 & 使用方法

### 电脑端
<img src="https://github.com/user-attachments/assets/2bd1741f-b228-4bba-920b-9ea4067e05bc">

### 手机端
<img src="https://github.com/user-attachments/assets/3893ece1-44e0-4d0f-84cd-b7f23d6877cd" width="400">

### 使用方法
1️⃣ **选择货币**：在输入框中选择 **原货币** 和 **目标货币**（支持全球 150+ 货币）  
2️⃣ **输入金额**：输入需要换算的金额（实时计算）  
3️⃣ **查看结果**：系统即时显示转换后的金额，并提供对应的 **历史汇率趋势图**  
4️⃣ **数据可视化**：点击趋势图下方的按钮，自由选择查看最近 1周 / 1 个月 / 3 个月 / 6个月 / 1 年的汇率变动图表    

## 技术栈
| 技术 | 说明 |
|------|------|
| ⚛️ React 18 | 前端框架，组件化开发，提升可维护性 |
| 🎨 Sass | UI设计，使用 变量、Mixin、模块化拆分 提高样式复用 |
| 📊 Recharts | 图表可视化，交互式折线图，展示历史汇率趋势 |
| 🚀 CRA | create react app，构建工具，快速搭建项目 |
| 📈 exchangerate.host | 外部API，提供可靠、全面的汇率数据|


## 💡 亮点 
### 模块化开发
- **组件拆分**：所有功能模块独立封装，降低代码耦合度，提高可复用性
- **Sass预处理**：使用 **变量**管理样式，易于统一整体UI风格，同时提高样式可维护性

### 数据可视化
- **自动生成折线图**：可视化历史汇率走势
- **趋势对比分析**：趋势对比分析：提供不同时间段（1 周 / 1 个月 / 3 个月 / 6 个月 / 1 年）汇率变化情况

### 响应式设计
- **自适应布局**：在小屏幕上自动调整组件排版，提高移动端体验
- **趋势图动态适配**：根据屏幕宽度调整图表尺寸，保证可读性

### 性能优化
- **数据持久化**：利用 `localStorage` 记录用户偏好，提高用户体验
- **智能缓存**：缓存历史汇率数据，避免重复请求，优化性能

## 📂 代码结构
```bash
📂 src
 ┣ 📂 components          # 可复用组件
    ┣ 📜 CurrencyTrend.js # 趋势图组件
    ┣ 📜 index.scss       # 趋势图样式设计
 ┣ 📂 pages               # 页面级组件
    ┣ 📜 Converter.js     # 首页，货币选择器，换算结果
    ┣ 📜 index.scss       # 首页相关样式
 ┣ 📜 App.js              # 入口文件
 ┣ 📜 index.js            # 渲染根组件
 ┣ 📜 .env.example        # 环境变量示例，需配置exchangerate.host API密钥
``` 
 ## 📬 联系方式
- 🔗 GitHub: https://github.com/zqh0317?tab=repositories
- 📧 Email: zhengqihui0317@gmail.com
- 💼 Linkedin: https://www.linkedin.com/in/qihui-zheng-ab2618275/








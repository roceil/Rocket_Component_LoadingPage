# Loading Component

## 元件需求

- Tailwind
- styled.js
- 任何可以打API的套件


## 安裝
```
$ git clone https://github.com/roceil/Rocket_Component_LoadingPage.git
$ cd Rocket_Component_LoadingPage
$ npm install
```

## 使用
1. 在 `App.tsx` 內引入 `LoadingPage.tsx`
2. 依據需求可自行設定參數，可控制內容如附表
3. 可以利用 `API套件 || fetch` 判斷資料是否回來，並決定`LoadingPage.tsx`的關閉時機

## 參數表格
| Props      | Function |
| -----------             | ----------- |
| txt :string              | 畫面顯示文字 |
| txtSize :string          | 畫面文字大小 |
| transitionTime :string  | 畫面文字進度條動畫時間 |
| bgColor :string         | 元件背景色 |
| fontColor :string       | 字體顏色 |
| loadingColor :string    | 讀取進度顏色 |
| isLoading :boolean      | 讀取狀態判定 |
| delayTime:number        | 淡出時間|

## 進入開發模式
```
$ npm run dev
```
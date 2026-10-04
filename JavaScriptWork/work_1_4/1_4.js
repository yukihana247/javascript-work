let wantApple = 4;
let stockApple = 3;

// 在庫チェック
if (wantApple >= stockApple) {
  console.log("在庫が足りません。在庫分だけカートに入れます。");
} else {
  console.log("希望通りカートに入れます。");
}

// 在庫分だけ while で出力
let i = 0;
while (i < stockApple) {
  console.log("りんごをカートに追加しました");
  i++;
}

// for文で 1〜在庫数 までカウント
for (let j = 1; j <= stockApple; j++) {
  console.log(`リンゴを買うのは${j}回目の処理です`);
}

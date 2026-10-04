// 合計金額（税抜）を返す関数
const getTotalPrice = (price, quantity) => {
    return price * quantity;
};

// 税込金額を返す関数（10%加算）
const addTax = total => {
    return Math.floor(total * 1.1); // 小数点以下切り捨て
};

// 税抜金額の計算
const total = getTotalPrice(1000, 2); // → 2000
console.log(`税抜金額は${total}円です`);

// 税込金額の計算
const taxedTotal = addTax(total);     // → 2200
console.log(`税込金額は${taxedTotal}円です`);

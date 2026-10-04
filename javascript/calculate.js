const v1 = document.getElementById("value1");
const v2 = document.getElementById("value2");
const op = document.getElementById("operator");
const resultBox = document.getElementById("result");

function calc() {
    const num1 = v1.value;
    const num2 = v2.value;
    const operator = op.value;

    // 入力チェック
    if (!num1 || !num2 || !operator) {
        resultBox.innerHTML = "両方の数値を入力してください";
        return;
    }

    // 0割りチェック
    if (operator === "/" && Number(num2) === 0) {
        resultBox.innerHTML = "0で割る事はできません。";
        return;
    }

    // 計算処理
    let result;
    switch (operator) {
        case "+":
            result = Number(num1) + Number(num2);
            break;
        case "-":
            result = Number(num1) - Number(num2);
            break;
        case "*":
            result = Number(num1) * Number(num2);
            break;
        case "/":
            result = Number(num1) / Number(num2);
            break;
    }

    resultBox.innerHTML = `
        計算式：${num1} ${operator} ${num2}<br>
        計算結果：${result}
    `;
}

// 入力が変わるたびに動的に計算
v1.addEventListener("input", calc);
v2.addEventListener("input", calc);
op.addEventListener("change", calc);

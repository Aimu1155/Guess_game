let answer = Math.floor(Math.random() * 100) + 1;
let count = 0;
let history = [];

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");
const historyEl = document.getElementById("history");

const characterImg = document.getElementById("character");
const characterText = document.getElementById("characterText");

// 檢查答案
function checkGuess() {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        result.textContent = "⚠️ 請輸入 1～100 的數字！";
        result.style.color = "red";
        return;
    }

    if (history.includes(guess)) {
        result.textContent = "⚠️ 這個數字猜過了喔！";
        result.style.color = "orange";
        characterText.textContent = "嘿！別重複猜啦～😅";
        guessInput.value = "";
        return;
    }

    count++;
    history.push(guess);

    if (guess < answer) {
        result.textContent = "🔽 太小了喔～";
        result.style.color = "#6A9CFF";

        characterText.textContent = "哎呀太小了～再試一次！";
    } else if (guess > answer) {
        result.textContent = "🔼 太大了啦～";
        result.style.color = "#FF8FA3";

        characterText.textContent = "太大啦～加油💪";
    } else {
        result.textContent = `🎉 答對了！共猜了 ${count} 次！`;
        result.style.color = "#FF69B4";

        characterText.textContent = "太棒了！你猜對啦～🎉";
    }

    historyEl.textContent = history.join(", ");
    guessInput.value = "";
    guessInput.focus();
}

// 重置遊戲
function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    count = 0;
    history = [];
    result.textContent = "✨ 已重新開始！";
    result.style.color = "#555";
    historyEl.textContent = "尚未猜過任何數字";
    guessInput.value = "";
    guessInput.focus();

    // 角色回到初始
    characterImg.src = "images/character_idle.png";
    characterText.textContent = "來猜數字吧～🎀";
}

// 綁定事件
guessBtn.addEventListener("click", checkGuess);
resetBtn.addEventListener("click", resetGame);
guessInput.addEventListener("keypress", function(e){
    if (e.key === "Enter") checkGuess();
});
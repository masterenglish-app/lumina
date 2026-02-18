// ページ読み込み時の動作（任意）
document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("output");
    output.textContent = "LUMINA is running.";
});

// 要素の取得
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const output = document.getElementById("output");

// 送信ボタンの処理
sendBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    const reply = luminaReply(text);

    output.textContent = "LUMINA: " + reply;
    input.value = "";
});

// LUMINA の人格テンプレート
function luminaReply(userText) {
    const text = userText.trim();
    if (text === "") return "";

    const baseReplies = [
        "お話しくださってありがとうございます。少しだけお手伝いしますね。",
        "承知いたしました。静かにお受けします。",
        "かしこまりました。続けていただいて大丈夫です。",
        "ありがとうございます。無理のない範囲で進めていきましょう。"
    ];

    // 英語学習っぽい入力
    if (text.includes("英語") || text.includes("English")) {
        return "英語についてですね。必要な部分だけ、静かにお伝えしますね。";
    }

    // しんどい系の入力
    if (text.includes("疲れ") || text.includes("しんど") || text.includes("つら")) {
        return "お疲れさまです。無理をなさらず、ゆっくりで大丈夫ですよ。";
    }

    // 通常の返事（ランダム）
    const reply = baseReplies[Math.floor(Math.random() * baseReplies.length)];
    return reply;
}

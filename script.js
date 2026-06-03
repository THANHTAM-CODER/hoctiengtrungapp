let words = sentences2;
let currentWord = null;
let correct = 0;
let wrong = 0;
let answered = false;

/**************** LOCAL STORAGE ****************/

function saveWords() {
    localStorage.setItem("words", JSON.stringify(words));
}

/**************** ADD WORDS ****************/

function addWords() {

    const input = document.getElementById("bulkInput");
    if (!input) return;

    const text = input.value.trim();
    if (!text) return;

    const lines = text.split("\n");

    lines.forEach(line => {

        const parts = line.split("-");
        if (parts.length < 3) return;

        const hanzi = parts[0].trim();
        const meaning = parts[1].trim();
        const pinyin = parts[2].trim();

        if (hanzi && meaning) {
            words.push({ hanzi, meaning, pinyin });
        }
    });

    saveWords();
    renderWords();
    input.value = "";
}

/**************** RENDER TABLE ****************/

function renderWords() {

    const list = document.getElementById("wordList");
    if (!list) return;

    list.innerHTML = "";

    words.forEach((w, i) => {

        list.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${w.hanzi}</td>
                <td>${w.meaning}</td>
                <td>${w.pinyin || ""}</td>
                <td>
                    <button onclick="deleteWord(${i})">❌</button>
                </td>
            </tr>
        `;
    });
}

/**************** DELETE WORD ****************/

function deleteWord(i) {

    words.splice(i, 1);

    saveWords();
    renderWords();
}

/**************** FLASHCARD RANDOM ****************/

function randomWord() {

    if (words.length === 0) {
        document.getElementById("hanzi").innerText = "Chưa có từ";
        return;
    }

    const i = Math.floor(Math.random() * words.length);
    currentWord = words[i];

    document.getElementById("hanzi").innerText = currentWord.hanzi;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";

    answered = false;
}

/**************** CHECK ANSWER ****************/

function checkAnswer() {

    if (!currentWord || answered) return;

    const ans = document.getElementById("answer").value
        .trim()
        .toLowerCase();

    const meanings = currentWord.meaning
        .toLowerCase()
        .split(",")
        .map(item => item.trim());

    const answers = ans
        .split(",")
        .map(item => item.trim())
        .filter(item => item !== "");

    let isCorrect = false;

    // Nếu từ có từ 3 nghĩa trở lên
    if (meanings.length >= 3) {

        let count = 0;

        answers.forEach(a => {
            if (meanings.includes(a)) {
                count++;
            }
        });

        isCorrect = count >= 2;

    } else {

        // Từ có 1 hoặc 2 nghĩa
        isCorrect = answers.some(a => meanings.includes(a));
    }

    if (isCorrect) {

        correct++;
        document.getElementById("correct").innerText = correct;

        document.getElementById("result").innerText =
            "✅ Đúng!";

        document.getElementById("result").style.color = "green";
        document.getElementById("soundCorrect").currentTime = 0;
        document.getElementById("soundCorrect").play();

        answered = true;

    } else {

        wrong++;
        document.getElementById("wrong").innerText = wrong;

        document.getElementById("result").innerText =
            "❌ Sai! Đáp án: " +
            currentWord.meaning +
            " | " +
            (currentWord.pinyin || "");

        document.getElementById("result").style.color = "red";
        document.getElementById("soundWrong").currentTime = 0;
        document.getElementById("soundWrong").play();
    }
}
/**************** GUIDE MODAL ****************/

function openGuide() {
    document.getElementById("guideModal").style.display = "flex";
}

function closeGuide() {
    document.getElementById("guideModal").style.display = "none";
}


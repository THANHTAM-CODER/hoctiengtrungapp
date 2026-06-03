let words = [];
let currentWord = null;
let correct = 0;
let wrong = 0;
let answered = false;

/**************** LOCAL STORAGE ****************/

function saveWords() {
    localStorage.setItem("words", JSON.stringify(words));

    if (typeof saveRemoteWords === "function") {
        saveRemoteWords(words);
    }
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

    const ans = document.getElementById("answer").value.trim().toLowerCase();
    const meaning = currentWord.meaning.trim().toLowerCase();

    if (ans === meaning) {

        correct++;
        document.getElementById("result").innerText = "✅ Đúng!";
        document.getElementById("result").style.color = "green";
        answered = true;

    } else {

        wrong++;
        document.getElementById("result").innerText =
            "❌ Sai: " + currentWord.meaning + " | " + (currentWord.pinyin || "");

        document.getElementById("result").style.color = "red";
    }
}

/**************** FIREBASE SYNC ****************/

async function loadSharedWords() {
    const localData = localStorage.getItem("words");

    if (localData) {
        words = JSON.parse(localData);
    }

    if (typeof initFirebase === "function") {
        initFirebase();
        listenRemoteWords(remoteWords => {
            if (Array.isArray(remoteWords) && remoteWords.length > 0) {
                words = remoteWords;
                localStorage.setItem("words", JSON.stringify(words));
                renderWords();
            }
        });
    }

    renderWords();
}

window.addEventListener("load", loadSharedWords);
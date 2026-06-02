let words = JSON.parse(localStorage.getItem("words")) || [];

let currentWord = null;
let correct = 0;
let wrong = 0;
let answered = false;

/* ================= WORDS ================= */

function saveWords() {
    localStorage.setItem("words", JSON.stringify(words));
}

function addWords() {

    const input = document.getElementById("bulkInput");

    if (!input) return;

    const text = input.value.trim();

    if (!text) return;

    text.split("\n").forEach(line => {

        const parts = line.split("-");

        if (parts.length < 3) return;

        const hanzi = parts[0].trim();
        const meaning = parts[1].trim();
        const pinyin = parts[2].trim();

        if (hanzi && meaning) {

            words.push({
                hanzi,
                meaning,
                pinyin
            });
        }

    });

    saveWords();
    renderWords();

    input.value = "";
}

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
                    <button onclick="deleteWord(${i})">
                        ❌
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteWord(i) {

    words.splice(i, 1);

    saveWords();
    renderWords();
}

/* ================= RANDOM ================= */

function randomWord() {

    words = JSON.parse(localStorage.getItem("words")) || [];

    if (words.length === 0) {

        document.getElementById("hanzi").innerText = "Chưa có từ";

        return;
    }

    const i = Math.floor(Math.random() * words.length);

    currentWord = words[i];

    document.getElementById("hanzi").innerText =
        currentWord.hanzi;

    document.getElementById("answer").value = "";

    document.getElementById("result").innerText = "";

    answered = false;
}

/* ================= CHECK ================= */

function checkAnswer() {

    if (!currentWord || answered) return;

    const ans = document
        .getElementById("answer")
        .value
        .trim()
        .toLowerCase();

    const meaning = currentWord.meaning
        .trim()
        .toLowerCase();

    if (ans === meaning) {

        correct++;

        document.getElementById("result").innerText =
            "✅ Đúng!";

        document.getElementById("result").style.color =
            "green";

        answered = true;

    } else {

        wrong++;

        document.getElementById("result").innerText =
            "❌ Sai: " +
            currentWord.meaning +
            " | " +
            (currentWord.pinyin || "");

        document.getElementById("result").style.color =
            "red";
    }

    document.getElementById("correct").innerText =
        correct;

    document.getElementById("wrong").innerText =
        wrong;
}

/* ================= EXPORT EXCEL ================= */

function exportExcel() {

    if (words.length === 0) {

        alert("Chưa có từ vựng để xuất!");
        return;
    }

    const data = words.map((w, i) => ({
        STT: i + 1,
        "Chữ Hán": w.hanzi,
        "Nghĩa": w.meaning,
        "Pinyin": w.pinyin || ""
    }));

    const worksheet =
        XLSX.utils.json_to_sheet(data);

    const workbook =
        XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "TuVung"
    );

    XLSX.writeFile(
        workbook,
        "TuVungTiengTrung.xlsx"
    );
    
}

/* ================= INIT ================= */

window.onload = function () {

    renderWords();
};
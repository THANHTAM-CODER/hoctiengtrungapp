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

/**************** FLASHCARD RANDOM ****************/

function randomWord() {

    if (words.length === 0) {
        document.getElementById("hanzi").innerText = "Chưa có từ";
        return;
    }

    // Loại bỏ các số tự sinh từ 11 -> 99
    const randomWords = words.filter(w => {

        if (/^\d+$/.test(w.meaning)) {

            const n = parseInt(w.meaning);

            // Chỉ giữ lại 0 -> 10
            return n <= 10;
        }

        return true; // các từ bình thường vẫn được random
    });

    const i = Math.floor(Math.random() * randomWords.length);
    currentWord = randomWords[i];

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
    localStorage.setItem("correct", correct);
    document.getElementById("correct").innerText = correct;
    document.getElementById("result").innerText =
        "✅ Đúng! Đáp án: " +
        currentWord.meaning +
        " | " +
        (currentWord.pinyin || "");

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
        if (wrong >= 5) {

            setTimeout(() => {

                alert("📚 Bạn nên học lại từ vựng!");

                window.location.href = "words.html";

            }, 1000);

        }
    }
}
/**************** GUIDE MODAL ****************/

function openGuide() {
    document.getElementById("guideModal").style.display = "flex";
}

function closeGuide() {
    document.getElementById("guideModal").style.display = "none";
}

/**************** BỘ HỎI TỪ  ****************/
function createMeaningSelector(word) {

    const meanings = word.meaning.split(",");

    if (meanings.length <= 1) {
        return word.meaning;
    }

    const id = "m" + Math.random().toString(36).substr(2, 9);

    return `
        <span class="multi-word">
            <span id="${id}" class="selected-meaning">
                ${meanings[0]} ▼
            </span>

            <select onchange="
                document.getElementById('${id}').innerHTML =
                this.value + ' ▼';
            ">
                ${meanings.map(m =>
                    `<option value="${m}">${m}</option>`
                ).join("")}
            </select>
        </span>
    `; 
}

/**************** TEXT TO SPEECH FIX ****************/



function speak(text, lang, btn){
    if(!text) return;

    speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 1;

    // 🔥 bật hiệu ứng
    if(btn){
        btn.classList.add("speaking");
    }

    utter.onend = () => {
        if(btn){
            btn.classList.remove("speaking");
        }
    };

    speechSynthesis.speak(utter);
}

/* 🔊 tiếng Trung */
function readChinese(event){
    const text = document.getElementById("inputText").value;
    const btn = event?.target;

    speak(text, "zh-CN", btn);
}

/* 📖 tiếng Việt */
function readVietnamese(event){
    const text = document.getElementById("result").innerText;
    const btn = event?.target;

    speak(text, "vi-VN", btn);
}

/**************** BỎ NGOẶC ****************/
function cleanMeaning(text){
    if(!text) return "";

    return text
        .split(",")
        .map(item => item.replace(/\s*\(.*?\)\s*/g, "")) // bỏ toàn bộ (....)
        .map(item => item.trim())
        .filter(item => item.length > 0)
        .join(", ");
}
function createMeaningBox(word){

    let meanings = word.meaning.split(",");

    let id = "m" + Math.random().toString(36).substr(2,9);

    return `
        <span class="multi-box">
            <span id="${id}">${meanings[0]}</span>
            <span class="dot" onclick="toggleMeaning('${id}_box')">•</span>

            <div id="${id}_box" class="popup-meanings">
                ${meanings.map(m => `
                    <div onclick="selectMeaning('${id}','${id}_box','${m}')">
                        ${m}
                    </div>
                `).join("")}
            </div>
        </span>
    `;
}
//nhạc 
window.addEventListener("load", () => {

    const musicToggle = document.getElementById("musicToggle");
    const bgMusic = document.getElementById("bgMusic");

    console.log("musicToggle =", musicToggle);
    console.log("bgMusic =", bgMusic);

    if (!musicToggle || !bgMusic) {
        console.log("❌ thiếu element");
        return;
    }

    musicToggle.addEventListener("change", () => {

        console.log("tick =", musicToggle.checked);

        if (musicToggle.checked) {
            bgMusic.play();
        } else {
            bgMusic.pause();
            bgMusic.currentTime = 0;
        }
    });

});
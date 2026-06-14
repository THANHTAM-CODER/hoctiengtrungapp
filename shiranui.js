const SHIRANUI_STORAGE_KEY = "shiranui-visible";

function getShiranuiEnabled() {
    return localStorage.getItem(SHIRANUI_STORAGE_KEY) === "true";
}

function setShiranuiEnabled(enabled) {
    localStorage.setItem(SHIRANUI_STORAGE_KEY, enabled ? "true" : "false");
}

function applyShiranuiState(enabled) {
    const shiranui = document.querySelector(".assistant");
    const talk = document.getElementById("talk");
    const shiranuiToggle = document.getElementById("shiranuiToggle");

    if (shiranuiToggle) {
        shiranuiToggle.checked = enabled;
    }

    if (!shiranui) {
        return;
    }

    if (!enabled) {
        shiranui.style.display = "none";

        if (talk) {
            talk.classList.remove("show");
        }

        return;
    }

    shiranui.style.display = "flex";

    if (talk) {
        talk.classList.add("show");
    }
}

function showTalk(text) {
    if (!getShiranuiEnabled()) {
        return;
    }

    const talk = document.getElementById("talk");

    if (!talk) {
        return;
    }

    talk.innerHTML = text;
    talk.classList.add("show");
}

function hideTalk() {
    const talk = document.getElementById("talk");

    if (!talk) {
        return;
    }

    talk.classList.remove("show");
}

const shiranuiTalkState = {};

function showTalkAlternating(key, messages) {
    if (!Array.isArray(messages) || messages.length === 0) {
        return;
    }

    const nextIndex = shiranuiTalkState[key] || 0;
    shiranuiTalkState[key] = (nextIndex + 1) % messages.length;

    showTalk(messages[nextIndex]);
}

function toggleShiranuiBox(){

    const box = document.getElementById("shiranuiBox");
    const btn = document.querySelector(".shiranui-btn");

    if (!box || !btn) {
        return;
    }

    if (box.style.display === "block") {
        box.style.display = "none";
        btn.classList.remove("active");
        return;
    }

    box.style.display = "block";
    btn.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const shiranuiToggle = document.getElementById("shiranuiToggle");
    const talk = document.getElementById("talk");
    const onMessages = [
        "Cảm ơn đã cho tôi ra khỏi đây 😭",
        "Cuối cùng cũng được thở rồi 😆",
        "Tự do rồi!! 🤩"
    ];

    const offMessages = [
        "Dám nhốt tôi sao 😠",
        "Tôi sẽ quay lại đó!",
        "Không thoát tôi được đâu 😤"
    ];

    applyShiranuiState(getShiranuiEnabled());

    if (!shiranuiToggle) {
        return;
    }

    shiranuiToggle.addEventListener("change", () => {
        const nextEnabled = shiranuiToggle.checked;
        setShiranuiEnabled(nextEnabled);
        applyShiranuiState(nextEnabled);

        if (talk) {
            const messages = nextEnabled ? onMessages : offMessages;
            const msg = messages[Math.floor(Math.random() * messages.length)];
            talk.innerHTML = msg;
            talk.classList.add("show");

            if (!nextEnabled) {
                setTimeout(() => {
                    talk.classList.remove("show");
                }, 1200);
            }
        }
    });

    window.addEventListener("storage", (event) => {
        if (event.key === SHIRANUI_STORAGE_KEY) {
            applyShiranuiState(event.newValue === "true");
        }
    });
});
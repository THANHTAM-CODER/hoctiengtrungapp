// 🔧 Firebase config placeholder.
// Thay giá trị bên dưới bằng cấu hình thật của Firebase project của bạn.

const firebaseConfig = {
  apiKey: "AIzaSyBftyv1Sj7GwHoOI0G9BqlYcXUV9FoIE4s",
  authDomain: "hoctiengtrung-3afd6.firebaseapp.com",
  databaseURL: "https://hoctiengtrung-3afd6-default-rtdb.firebaseio.com",
  projectId: "hoctiengtrung-3afd6",
  storageBucket: "hoctiengtrung-3afd6.firebasestorage.app",
  messagingSenderId: "40410488173",
  appId: "1:40410488173:web:179b82097b0253a1218e64",
  measurementId: "G-HJRYNKCPGP"
};

let firebaseReady = false;
let remoteWordsRef = null;

function initFirebase() {
    if (firebaseReady || typeof firebase === "undefined") {
        return;
    }

    firebase.initializeApp(firebaseConfig);
    firebaseReady = true;
}

function parseRemoteWords(data) {
    if (!data) {
        return null;
    }
    if (Array.isArray(data)) {
        return data;
    }
    if (data && typeof data === "object") {
        return Object.values(data);
    }
    return null;
}

async function loadRemoteWords() {
    if (!firebaseReady) {
        return null;
    }

    try {
        const snapshot = await firebase.database().ref("sharedWords").get();
        if (!snapshot.exists()) {
            return null;
        }

        return parseRemoteWords(snapshot.val());
    } catch (error) {
        console.error("Firebase load error:", error);
        return null;
    }
}

function listenRemoteWords(onUpdate) {
    if (!firebaseReady || typeof firebase === "undefined") {
        return;
    }

    if (remoteWordsRef) {
        remoteWordsRef.off();
    }

    remoteWordsRef = firebase.database().ref("sharedWords");
    remoteWordsRef.on("value", snapshot => {
        const remoteData = parseRemoteWords(snapshot.val());
        onUpdate(remoteData);
    }, error => {
        console.error("Firebase listener error:", error);
    });
}

async function saveRemoteWords(words) {
    if (!firebaseReady) {
        return;
    }

    try {
        await firebase.database().ref("sharedWords").set(words || []);
    } catch (error) {
        console.error("Firebase save error:", error);
    }
}

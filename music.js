document.addEventListener("DOMContentLoaded", () => {

    const bgMusic = document.getElementById("bgMusic");
    if (!bgMusic) return;

    const musicToggle = document.getElementById("musicToggle");
    const volumeControl = document.getElementById("volumeControl");
    const musicList = document.getElementById("musicList");

    // ======================
    // LOAD DỮ LIỆU ĐÃ LƯU
    // ======================

    const savedMusic =
        localStorage.getItem("musicSrc") ||
        "musicall/music1.mp3";

    const savedVolume =
        parseFloat(localStorage.getItem("musicVolume"));

    const savedTime =
        parseFloat(localStorage.getItem("musicTime")) || 0;

    const musicEnabled =
        localStorage.getItem("musicEnabled") === "true";

    bgMusic.src = savedMusic;

    bgMusic.volume =
        isNaN(savedVolume) ? 1 : savedVolume;

    // checkbox
    if (musicToggle) {
        musicToggle.checked = musicEnabled;
    }

    // slider
    if (volumeControl) {
        volumeControl.value = bgMusic.volume;
    }

    // select
    if (musicList) {
        musicList.value = savedMusic;
    }

    // khôi phục vị trí bài hát
    bgMusic.addEventListener("loadedmetadata", () => {

        const time =
            parseFloat(localStorage.getItem("musicTime")) || 0;

        bgMusic.currentTime = time;

        if (musicEnabled) {
            bgMusic.play().catch(() => {});
        }
    });

    // ======================
    // BẬT / TẮT NHẠC
    // ======================

    if (musicToggle) {

        musicToggle.addEventListener("change", async function () {

            if (this.checked) {

                localStorage.setItem(
                    "musicEnabled",
                    "true"
                );

                try {

                    bgMusic.currentTime =
                        parseFloat(
                            localStorage.getItem("musicTime")
                        ) || 0;

                    await bgMusic.play();

                } catch (e) {
                    console.log(e);
                }

            } else {

                // tắt nhạc
                localStorage.setItem(
                    "musicEnabled",
                    "false"
                );

                bgMusic.pause();
                bgMusic.currentTime = 0;

                // reset toàn bộ vị trí phát
                localStorage.setItem(
                    "musicTime",
                    "0"
                );
            }

        });

    }

    // ======================
    // ÂM LƯỢNG
    // ======================

    if (volumeControl) {

        volumeControl.addEventListener("input", function () {

            const v = parseFloat(this.value);

            bgMusic.volume = v;

            localStorage.setItem(
                "musicVolume",
                v
            );

        });

    }

    // ======================
    // CHỌN NHẠC
    // ======================

    if (musicList) {

        musicList.addEventListener("change", function () {

            const newSrc = this.value;

            bgMusic.pause();
            bgMusic.currentTime = 0;

            localStorage.setItem(
                "musicSrc",
                newSrc
            );

            localStorage.setItem(
                "musicTime",
                "0"
            );

            bgMusic.src = newSrc;

            if (
                localStorage.getItem("musicEnabled")
                === "true"
            ) {

                bgMusic.addEventListener(
                    "loadedmetadata",
                    function playNewMusic() {

                        bgMusic.currentTime = 0;

                        bgMusic.play()
                            .catch(err => console.log(err));

                        bgMusic.removeEventListener(
                            "loadedmetadata",
                            playNewMusic
                        );
                    }
                );

            }

        });

    }

    // ======================
    // LƯU THỜI GIAN PHÁT
    // ======================

    setInterval(() => {

        if (
            !bgMusic.paused &&
            localStorage.getItem("musicEnabled") === "true"
        ) {

            localStorage.setItem(
                "musicTime",
                bgMusic.currentTime
            );

        }

    }, 1000);

});
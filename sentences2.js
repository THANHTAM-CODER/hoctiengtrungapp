let sentences2 = [

    // ================= GIAO TIẾP =================
    { hanzi: "你好",     pinyin: "nǐ hǎo",        meaning: "xin chào" },
    { hanzi: "谢谢",     pinyin: "xiè xie",       meaning: "cảm ơn" },
    { hanzi: "再见",     pinyin: "zài jiàn",      meaning: "tạm biệt" },
    { hanzi: "不客气",   pinyin: "bù kè qì",      meaning: "không có gì" },
    { hanzi: "请",       pinyin: "qǐng",          meaning: "mời / xin" },
    { hanzi: "请进",     pinyin: "qǐng jìn",      meaning: "mời vào" },
    { hanzi: "请问",     pinyin: "qǐng wèn",      meaning: "xin hỏi" },
    { hanzi: "什么",     pinyin: "shén me",       meaning: "gì" },
    { hanzi: "对了",     pinyin: "duì le",        meaning: "đúng rồi" },
    { hanzi: "了",       pinyin: "le",            meaning: "rồi" },

    // ================= NGƯỜI / GIA ĐÌNH =================
    { hanzi: "你",       pinyin: "nǐ",            meaning: "bạn" },
    { hanzi: "您",       pinyin: "nín",           meaning: "ngài" },
    { hanzi: "他",       pinyin: "tā",            meaning: "anh ta" },
    { hanzi: "她",       pinyin: "tā",            meaning: "cô ta" },
    { hanzi: "爸爸",     pinyin: "bà ba",         meaning: "bố" },
    { hanzi: "妈妈",     pinyin: "mā ma",         meaning: "mẹ" },
    { hanzi: "哥哥",     pinyin: "gē ge",         meaning: "anh trai" },
    { hanzi: "弟弟",     pinyin: "dì di",         meaning: "em trai" },
    { hanzi: "姐姐",     pinyin: "jiě jie",       meaning: "chị gái" },
    { hanzi: "妹妹",     pinyin: "mèi mei",       meaning: "em gái" },
    { hanzi: "老师",     pinyin: "lǎo shī",       meaning: "thầy giáo" },
    { hanzi: "老公",     pinyin: "lǎo gōng",      meaning: "chồng" },
    { hanzi: "老婆",     pinyin: "lǎo pó",        meaning: "vợ" },

    // ================= SỐ =================
    { hanzi: "一",       pinyin: "yī",            meaning: "số 1" },
    { hanzi: "二",       pinyin: "èr",            meaning: "số 2" },
    { hanzi: "三",       pinyin: "sān",           meaning: "số 3" },
    { hanzi: "四",       pinyin: "sì",            meaning: "số 4" },
    { hanzi: "五",       pinyin: "wǔ",            meaning: "số 5" },
    { hanzi: "六",       pinyin: "liù",           meaning: "số 6" },
    { hanzi: "七",       pinyin: "qī",            meaning: "số 7" },
    { hanzi: "八",       pinyin: "bā",            meaning: "số 8" },
    { hanzi: "九",       pinyin: "jiǔ",           meaning: "số 9" },
    { hanzi: "十",       pinyin: "shí",           meaning: "số 10" },

    // ================= THỜI GIAN =================
    { hanzi: "今天",     pinyin: "jīn tiān",      meaning: "hôm nay" },
    { hanzi: "昨天",     pinyin: "zuó tiān",      meaning: "hôm qua" },
    { hanzi: "明天",     pinyin: "míng tiān",     meaning: "hôm sau" },
    { hanzi: "上午",     pinyin: "shàng wǔ",      meaning: "buổi sáng" },
    { hanzi: "中午",     pinyin: "zhōng wǔ",      meaning: "buổi trưa" },
    { hanzi: "下午",     pinyin: "xià wǔ",        meaning: "buổi chiều" },

    // ================= NGÀY THÁNG =================
    { hanzi: "日",       pinyin: "rì",            meaning: "ngày" },
    { hanzi: "号",       pinyin: "hào",           meaning: "ngày" },
    { hanzi: "星期",     pinyin: "xīng qī",       meaning: "tuần,thứ" },
    { hanzi: "天",       pinyin: "tiān",          meaning: "ngày" },
    { hanzi: "月",       pinyin: "yuè",           meaning: "tháng" },
    { hanzi: "年",       pinyin: "nián",          meaning: "năm" },

    // ================= THỜI GIAN NÂNG CAO =================
    { hanzi: "小时",     pinyin: "xiǎo shí",      meaning: "giờ" },
    { hanzi: "分钟",     pinyin: "fēn zhōng",     meaning: "phút" },
    { hanzi: "半",       pinyin: "bàn",           meaning: "rưỡi" },
    { hanzi: "差",       pinyin: "chà",           meaning: "kém" },
    { hanzi: "刻",       pinyin: "kè",            meaning: "khắc" },
    { hanzi: "几点",     pinyin: "jǐ diǎn",       meaning: "mấy giờ" },
    { hanzi: "现在",     pinyin: "xiàn zài",      meaning: "bây giờ" },

    // ================= SINH HOẠT =================
    { hanzi: "起床",     pinyin: "qǐ chuáng",     meaning: "thức dậy" },
    { hanzi: "睡觉",     pinyin: "shuì jiào",     meaning: "đi ngủ" },
    { hanzi: "上课",     pinyin: "shàng kè",      meaning: "lên lớp" },
    { hanzi: "上班",     pinyin: "shàng bān",     meaning: "đi làm" },

    // ================= ĐỘNG TỪ =================
    { hanzi: "吃",       pinyin: "chī",           meaning: "ăn" },
    { hanzi: "喝",       pinyin: "hē",            meaning: "uống" },
    { hanzi: "说",       pinyin: "shuō",          meaning: "nói" },
    { hanzi: "写",       pinyin: "xiě",           meaning: "viết" },
    { hanzi: "学",       pinyin: "xué",           meaning: "học" },
    { hanzi: "学习",     pinyin: "xué xí",        meaning: "học tập" },
    { hanzi: "知道",     pinyin: "zhī dào",       meaning: "biết" },
    { hanzi: "问",       pinyin: "wèn",           meaning: "hỏi" },
    { hanzi: "叫",       pinyin: "jiào",          meaning: "gọi" },
    { hanzi: "寄",       pinyin: "jì",            meaning: "gửi" },
    { hanzi: "取",       pinyin: "qǔ",            meaning: "rút" },
    { hanzi: "回",       pinyin: "huí",           meaning: "về" },
    { hanzi: "进",       pinyin: "jìn",           meaning: "vào" },

    // ================= ĐỊA ĐIỂM =================
    { hanzi: "这里",     pinyin: "zhè lǐ",        meaning: "ở đây" },
    { hanzi: "那里",     pinyin: "nà lǐ",         meaning: "ở đó" },
    { hanzi: "哪里",     pinyin: "nǎ lǐ",         meaning: "ở đâu" },
    { hanzi: "学校",     pinyin: "xué xiào",      meaning: "trường học" },
    { hanzi: "银行",     pinyin: "yín háng",      meaning: "ngân hàng" },
    { hanzi: "邮局",     pinyin: "yóu jú",        meaning: "bưu điện" },
    { hanzi: "食堂",     pinyin: "shí táng",      meaning: "nhà ăn" },

    // ================= ĐỒ ĂN =================
    { hanzi: "饭",       pinyin: "fàn",           meaning: "cơm" },
    { hanzi: "米饭",     pinyin: "mǐ fàn",        meaning: "cơm tẻ" },
    { hanzi: "菜",       pinyin: "cài",           meaning: "thức ăn / rau" },
    { hanzi: "汤",       pinyin: "tāng",          meaning: "canh" },
    { hanzi: "肉",       pinyin: "ròu",           meaning: "thịt" },
    { hanzi: "鱼",       pinyin: "yú",            meaning: "cá" },

    // ================= ĐỒ UỐNG =================
    { hanzi: "茶",       pinyin: "chá",           meaning: "trà" },
    { hanzi: "啤酒",     pinyin: "pí jiǔ",        meaning: "bia" },
    { hanzi: "酒",       pinyin: "jiǔ",           meaning: "rượu" },

    // ================= KHÁC =================
    { hanzi: "好",       pinyin: "hǎo",           meaning: "tốt / khỏe" },
    { hanzi: "不",       pinyin: "bù",            meaning: "không" },
    { hanzi: "吗",       pinyin: "ma",            meaning: "từ hỏi" },
    { hanzi: "很",       pinyin: "hěn",           meaning: "rất" },
    { hanzi: "对",       pinyin: "duì",           meaning: "đúng" },
    { hanzi: "难",       pinyin: "nán",           meaning: "khó" },
    { hanzi: "忙",       pinyin: "máng",          meaning: "bận" },
    { hanzi: "的",       pinyin: "de",            meaning: "của" },
    { hanzi: "和",       pinyin: "hé",            meaning: "và" },
    { hanzi: "喜欢",     pinyin: "xǐ huān",       meaning: "thích" },
    { hanzi: "结婚",     pinyin: "jié hūn",       meaning: "kết hôn" },
    { hanzi: "还没",   pinyin: "hái méi",       meaning: "vẫn chưa" },
    { hanzi: "个",       pinyin: "gè",            meaning: "lượng từ" },
    { hanzi: "碗",       pinyin: "wǎn",           meaning: "cái bát" },
    { hanzi: "些",       pinyin: "xiē",           meaning: "vài" },
    { hanzi: "饱",       pinyin: "bǎo",           meaning: "no" },
    { hanzi: "饿",       pinyin: "è",             meaning: "đói" },
    { hanzi: "煮",       pinyin: "zhǔ",           meaning: "nấu / luộc" },
    { hanzi: "蒸",       pinyin: "zhēng",         meaning: "hấp" },
    { hanzi: "包子",     pinyin: "bāo zi",        meaning: "bánh bao" },
    { hanzi: "馒头",     pinyin: "mán tou",       meaning: "màn thầu" },
    { hanzi: "鸡蛋",     pinyin: "jī dàn",        meaning: "trứng gà" },
    { hanzi: "饺子",     pinyin: "jiǎo zi",       meaning: "sủi cảo" },
    { hanzi: "面条",     pinyin: "miàn tiáo",     meaning: "mì sợi" },

    // ================= BỔ SUNG =================
    { hanzi: "身体",     pinyin: "shēn tǐ",       meaning: "sức khỏe" },
    { hanzi: "杂志",     pinyin: "zá zhì",        meaning: "tạp chí" },
    { hanzi: "发音",     pinyin: "fā yīn",        meaning: "phát âm" },
    { hanzi: "语言",     pinyin: "yǔ yán",        meaning: "ngôn ngữ" }
];
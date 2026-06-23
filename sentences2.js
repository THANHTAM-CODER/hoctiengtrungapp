let sentences2 = [

    // ================= BÀI 1 =================- 

    { hanzi: "你好",     pinyin: "nǐ hǎo",        meaning: "xin chào", lesson: 1 },
    { hanzi: "阮青心",   pinyin: "Ruǎn Qīng Xīn", meaning: "Nguyễn Thành Tâm", lesson: 1 },
    { hanzi: "你",       pinyin: "nǐ",            meaning: "bạn", lesson: 1 },
    { hanzi: "谢谢",     pinyin: "xiè xie",       meaning: "cảm ơn", lesson: 1 },
    { hanzi: "好",       pinyin: "hǎo",           meaning: "tốt,khỏe,ok", lesson: 1 },
    { hanzi: "不",       pinyin: "bù",            meaning: "không（phủ định)", lesson: 1 },
    { hanzi: "吗",       pinyin: "ma",            meaning: "không（dùng để hỏi)", lesson: 1 },
    { hanzi: "很",       pinyin: "hěn",           meaning: "rất", lesson: 1 },
    { hanzi: "我",       pinyin: "wǒ",            meaning: "tôi", lesson: 1 },
    { hanzi: "大家",     pinyin: "dà jiā",        meaning: "mọi người", lesson: 1 },
    { hanzi: "大家好",   pinyin: "dà jiā hǎo",    meaning: "chào mọi người", lesson: 1 },
    { hanzi: "您好",     pinyin: "nín hǎo",       meaning: "chào ngài", lesson: 1 },

    // ================= BÀI 2 =================
    { hanzi: "您",       pinyin: "nín",           meaning: "ngài", lesson: 2 },
    { hanzi: "太",       pinyin: "tài",           meaning: "hơi,quá", lesson: 2 },
    { hanzi: "说",       pinyin: "shuō",          meaning: "nói", lesson: 2 },
    { hanzi: "写",       pinyin: "xiě",           meaning: "viết", lesson: 2 },
    { hanzi: "对",       pinyin: "duì",           meaning: "đúng", lesson: 2 },
    { hanzi: "难",       pinyin: "nán",           meaning: "khó", lesson: 2 },
    { hanzi: "忙",       pinyin: "máng",          meaning: "bận", lesson: 2 },
    { hanzi: "和",       pinyin: "hé",            meaning: "và", lesson: 2 },
    { hanzi: "汉语",     pinyin: "hànyǔ",         meaning: "tiếng hán", lesson: 2 },
    { hanzi: "汉字",     pinyin: "han zi",        meaning: "chữ hán", lesson: 2 },

    // ================= BÀI 3 =================
    
    { hanzi: "见",       pinyin: "jiàn",          meaning: "gặp", lesson: 3 },
    { hanzi: "对",       pinyin: "duì",           meaning: "đúng", lesson: 3 },
    { hanzi: "学",       pinyin: "xué",           meaning: "học", lesson: 3 },
    { hanzi: "去",       pinyin: "qù",            meaning: "đi", lesson: 3 },
    { hanzi: "寄",       pinyin: "jì",            meaning: "gửi", lesson: 3 },
    { hanzi: "取",       pinyin: "qǔ",            meaning: "rút", lesson: 3 },
    { hanzi: "钱",       pinyin: "qián",          meaning: "tiền", lesson: 3 },
    { hanzi: "信",       pinyin: "xìn",           meaning: "thư", lesson: 3 },
    { hanzi: "英语",     pinyin: "yīng yǔ",       meaning: "tiếng anh", lesson: 3 },
    { hanzi: "忙",       pinyin: "máng",          meaning: "bận", lesson: 3 },
    { hanzi: "银行",     pinyin: "yín háng",      meaning: "ngân hàng", lesson: 3 },
    { hanzi: "邮局",     pinyin: "yóu jú",        meaning: "bưu điện", lesson: 3 },

    // ================= BÀI 4 =================
    { hanzi: "零",       pinyin: "líng",          meaning: "0", lesson: 4 },
    { hanzi: "一",       pinyin: "yī",            meaning: "1", lesson: 4 },
    { hanzi: "二",       pinyin: "èr",            meaning: "2", lesson: 4 },
    { hanzi: "三",       pinyin: "sān",           meaning: "3", lesson: 4 },
    { hanzi: "四",       pinyin: "sì",           meaning: "4", lesson: 4 },
    { hanzi: "五",       pinyin: "wǔ",           meaning: "5", lesson: 4 },
    { hanzi: "六",       pinyin: "liù",          meaning: "6", lesson: 4 },
    { hanzi: "七",       pinyin: "qī",           meaning: "7", lesson: 4 },
    { hanzi: "八",       pinyin: "bā",           meaning: "8", lesson: 4 },
    { hanzi: "九",       pinyin: "jiǔ",          meaning: "9", lesson: 4 },
    { hanzi: "十",       pinyin: "shí",          meaning: "10", lesson: 4 },
    { hanzi: "百",       pinyin: "bǎi",          meaning: "trăm (hàng trăm - 100)", lesson: 4 },
    { hanzi: "千",       pinyin: "qiān",         meaning: "ngàn (hàng ngàn - 1000)", lesson: 4 },
    { hanzi: "万",       pinyin: "wàn",          meaning: "vạn (hàng vạn - 10000)", lesson: 4 },
   // ================= BÀI 5 =================
    { hanzi: "今天",     pinyin: "jīn tiān",      meaning: "hôm nay", lesson: 5 },
    { hanzi: "昨天",     pinyin: "zuó tiān",      meaning: "hôm qua", lesson: 5 },
    { hanzi: "明天",     pinyin: "míng tiān",     meaning: "hôm sau", lesson: 5 },
    { hanzi: "今年",     pinyin: "jīn nían",      meaning: "năm nay", lesson: 5 },
    { hanzi: "明年",     pinyin: "míng nían",     meaning: "năm sau", lesson: 5 },
    { hanzi: "去年",     pinyin: "qù nián",       meaning: "năm trước", lesson: 5 },
    { hanzi: "天",       pinyin: "tiān",          meaning: "ngày,đếm ngày)", lesson: 5 },
    { hanzi: "日",       pinyin: "rì",            meaning: "ngày", lesson: 5 },
    { hanzi: "号",       pinyin: "hào",           meaning: "ngày", lesson: 5 },
    { hanzi: "星期",     pinyin: "xīng qī",       meaning: "tuần,thứ", lesson: 5 },
    { hanzi: "月",       pinyin: "yuè",           meaning: "tháng", lesson: 5 },
    { hanzi: "年",       pinyin: "nián",          meaning: "năm", lesson: 5 },
    { hanzi: "上课",     pinyin: "shàng kè",      meaning: "lên lớp", lesson: 5 },
    { hanzi: "上班",     pinyin: "shàng bān",     meaning: "đi làm", lesson: 5 },
    { hanzi: "再见",     pinyin: "zài jiàn",      meaning: "tạm biệt", lesson: 5 },
    { hanzi: "没关系",   pinyin: "méi guānxi",    meaning: "không sao,không có gì", lesson: 5 },
    { hanzi: "星期日",   pinyin: "xīng qī rì",    meaning: "ngày chủ nhật", lesson: 5 },
    { hanzi: "对不起",   pinyin: "duì bu qǐ",     meaning: "xin lỗi", lesson: 5 },
    { hanzi: "几",       pinyin: "jǐ",            meaning: "mấy,vài", lesson: 5 },
    { hanzi: "问",       pinyin: "wèn",           meaning: "hỏi", lesson: 5 },
    { hanzi: "哪儿",     pinyin: "nǎr",           meaning: "ở đâu", lesson: 5 },
    { hanzi: "回",       pinyin: "huí",           meaning: "về", lesson: 5 },
    { hanzi: "住在",     pinyin: "zhù zài",       meaning: "sống ở", lesson: 5 },
    { hanzi: "学校",     pinyin: "xué xiào",      meaning: "trường học", lesson: 5 },

    // ================= BÀI 6 =================
    { hanzi: "自己",     pinyin: "zì jǐ",         meaning: "bản thân", lesson: 6 },
    { hanzi: "自我",     pinyin: "zì wǒ",         meaning: "bản thân", lesson: 6 },
    { hanzi: "介绍",     pinyin: "jiè shào",      meaning: "giới thiệu", lesson: 6 },
    { hanzi: "姓",       pinyin: "xìng",          meaning: "họ", lesson: 6 },
    { hanzi: "名字",     pinyin: "míng zi",       meaning: "tên", lesson: 6 },
    { hanzi: "是",       pinyin: "shi",           meaning: "là", lesson: 6 },
    { hanzi: "叫",       pinyin: "jiào",          meaning: "gọi", lesson: 6 },
    { hanzi: "什么",     pinyin: "shén me",       meaning: "gì", lesson: 6 },
    { hanzi: "岁",       pinyin: "suì",           meaning: "tuổi", lesson: 6 },
    { hanzi: "喜欢",     pinyin: "xǐ huān",       meaning: "thích", lesson: 6 },
    { hanzi: "结婚",     pinyin: "jié hūn",       meaning: "kết hôn", lesson: 6 },
    { hanzi: "对了",     pinyin: "duì le",        meaning: "đúng rồi", lesson: 6 },
    { hanzi: "了",       pinyin: "le",            meaning: "rồi", lesson: 6 },
    { hanzi: "还没",     pinyin: "hái méi",       meaning: "vẫn chưa", lesson: 6 },
    { hanzi: "阿",       pinyin: "ā",             meaning: "a ( chữ lót trước tên )", lesson: 6 },

    // ================= BÀI 7 =================
    { hanzi: "家",       pinyin: "jiā",           meaning: "gia đình", lesson: 7 },
    { hanzi: "有",       pinyin: "yǒu",           meaning: "có", lesson: 7 },
    { hanzi: "他",       pinyin: "tā",            meaning: "anh ấy", lesson: 7 },
    { hanzi: "她",       pinyin: "tā",            meaning: "cô ấy", lesson: 7 },
    { hanzi: "爸爸",     pinyin: "bà ba",         meaning: "bố", lesson: 7 },
    { hanzi: "妈妈",     pinyin: "mā ma",         meaning: "mẹ", lesson: 7 },
    { hanzi: "哥哥",     pinyin: "gē ge",         meaning: "anh trai", lesson: 7 },
    { hanzi: "弟弟",     pinyin: "dì di",         meaning: "em trai", lesson: 7 },
    { hanzi: "姐姐",     pinyin: "jiě jie",       meaning: "chị gái", lesson: 7 },
    { hanzi: "妹妹",     pinyin: "mèi mei",       meaning: "em gái", lesson: 7 },
    { hanzi: "国",       pinyin: "guó",           meaning: "quốc gia, đất nước", lesson: 7 },
    { hanzi: "的",       pinyin: "de",            meaning: "của", lesson: 7 },
    { hanzi: "老公",     pinyin: "lǎo gōng",      meaning: "chồng", lesson: 7 },
    { hanzi: "老婆",     pinyin: "lǎo pó",        meaning: "vợ", lesson: 7 },
    { hanzi: "个",       pinyin: "gè",            meaning: "lượng từ", lesson: 7 },
    { hanzi: "中国",     pinyin: "zhōng guó",     meaning: "Trung Quốc", lesson: 7 },
    { hanzi: "越南",     pinyin: "yuè nán",       meaning: "Việt Nam", lesson: 7 },
    
    // ================= BÀI 8 =================
    { hanzi: "这",       pinyin: "zhè",           meaning: "đây", lesson: 8 },
    { hanzi: "那",       pinyin: "nà",            meaning: "đó", lesson: 8 },
    { hanzi: "老师",     pinyin: "lǎo shī",       meaning: "giáo viên", lesson: 8 },
    { hanzi: "请",       pinyin: "qǐng",          meaning: "mời", lesson: 8 },
    { hanzi: "进",       pinyin: "jìn",           meaning: "vào", lesson: 8 },
    { hanzi: "坐",       pinyin: "zuò",           meaning: "ngồi", lesson: 8 },
    { hanzi: "请进",     pinyin: "qǐng jìn",      meaning: "mời vào", lesson: 8 },
    { hanzi: "请问",     pinyin: "qǐng wèn",      meaning: "xin hỏi", lesson: 8 },
    { hanzi: "茶",       pinyin: "chá",           meaning: "trà", lesson: 8 },
    { hanzi: "不客气",   pinyin: "bù kè qì",      meaning: "không có gì", lesson: 8 },
    { hanzi: "客",       pinyin: "kè",            meaning: "khách", lesson: 8 },
    { hanzi: "气",       pinyin: "qì",            meaning: "không khí, khách sáo ", lesson: 8 },
    { hanzi: "工作",     pinyin: "gōng zuò",      meaning: "công việc", lesson: 8 },
    { hanzi: "贵姓",     pinyin: "guì xìng",      meaning: "danh tính, quí danh", lesson: 8 },
    { hanzi: "谁",       pinyin: "shuí",          meaning: "ai", lesson: 8 },
    { hanzi: "身体",     pinyin: "shēn tǐ",       meaning: "sức khỏe", lesson: 8 },
    { hanzi: "杂志",     pinyin: "zá zhì",        meaning: "tạp chí", lesson: 8 },
    { hanzi: "发音",     pinyin: "fā yīn",        meaning: "phát âm", lesson: 8 },
    { hanzi: "书",       pinyin: "shū",           meaning: "sách", lesson: 8 },
    { hanzi: "男朋友",   pinyin: "nán péng you",  meaning: "bạn trai (tình yêu nam nữ)", lesson: 8 },
    { hanzi: "女朋友",   pinyin: "nǚ péng you",   meaning: "bạn gái ( tình yêu nam nữ)", lesson: 8 },
    { hanzi: "朋友",     pinyin: "péng you",      meaning: "bạn bè", lesson: 8 },
    { hanzi: "学习",     pinyin: "xué xí",        meaning: "học tập", lesson: 8 },
    { hanzi: "人",       pinyin: "rén",           meaning: "người", lesson: 8 },

    // ================= BÀI 9 ================
    
    { lesson: 9, hanzi: "上午",     pinyin: "shàng wǔ",      meaning: "buổi sáng" },
    { lesson: 9, hanzi: "中午",     pinyin: "zhōng wǔ",      meaning: "buổi trưa" },
    { lesson: 9, hanzi: "下午",     pinyin: "xià wǔ",        meaning: "buổi chiều" },
    { lesson: 9, hanzi: "吃",       pinyin: "chī",           meaning: "ăn" },
    { lesson: 9, hanzi: "饭",       pinyin: "fàn",           meaning: "cơm" },
    { lesson: 9, hanzi: "米饭",     pinyin: "mǐ fàn",        meaning: "cơm tẻ" },
    { lesson: 9, hanzi: "要",       pinyin: "yào",           meaning: "muốn" },
    { lesson: 9, hanzi: "菜",       pinyin: "cài",           meaning: "thức ăn / rau" },
    { lesson: 9, hanzi: "汤",       pinyin: "tāng",          meaning: "canh" },
    { lesson: 9, hanzi: "肉",       pinyin: "ròu",           meaning: "thịt" },
    { lesson: 9, hanzi: "鱼",       pinyin: "yú",            meaning: "cá" },
    { lesson: 9, hanzi: "碗",       pinyin: "wǎn",           meaning: "cái bát" },
    { lesson: 9, hanzi: "些",       pinyin: "xiē",           meaning: "vài" },
    { lesson: 9, hanzi: "饱",       pinyin: "bǎo",           meaning: "no" },
    { lesson: 9, hanzi: "饿",       pinyin: "è",             meaning: "đói" },
    { lesson: 9, hanzi: "煮",       pinyin: "zhǔ",           meaning: "nấu (luộc)" },
    { lesson: 9, hanzi: "蒸",       pinyin: "zhēng",         meaning: "hấp" },
    { lesson: 9, hanzi: "包子",     pinyin: "bāo zi",        meaning: "bánh bao" },
    { lesson: 9, hanzi: "馒头",     pinyin: "mán tou",       meaning: "màn thầu" },
    { lesson: 9, hanzi: "鸡蛋",     pinyin: "jī dàn",        meaning: "trứng gà" },
    { lesson: 9, hanzi: "饺子",     pinyin: "jiǎo zi",       meaning: "sủi cảo" },
    { lesson: 9, hanzi: "面条",     pinyin: "miàn tiáo",     meaning: "mì sợi" },
    { lesson: 9, hanzi: "食堂",     pinyin: "shí táng",      meaning: "nhà ăn" },
    { lesson: 9, hanzi: "啤酒",     pinyin: "pí jiǔ",        meaning: "bia" },
    { lesson: 9, hanzi: "酒",       pinyin: "jiǔ",           meaning: "rượu" },

// ================= BÀI 10 ================
    { lesson: 10, hanzi: "点",       pinyin: "diǎn",          meaning: "giờ" },
    { lesson: 10, hanzi: "分钟",     pinyin: "fēn zhōng",     meaning: "phút" },
    { lesson: 10, hanzi: "半",       pinyin: "bàn",           meaning: "rưỡi" },
    { lesson: 10, hanzi: "差",       pinyin: "chà",           meaning: "kém" },
    { lesson: 10, hanzi: "刻",       pinyin: "kè",            meaning: "khắc (15 phút)" },
    { lesson: 10, hanzi: "几点",     pinyin: "jǐ diǎn",       meaning: "mấy giờ" },
    { lesson: 10, hanzi: "现在",     pinyin: "xiàn zài",      meaning: "bây giờ" },
    { lesson: 10, hanzi: "起床",     pinyin: "qǐ chuáng",     meaning: "thức dậy" },
    { lesson: 10, hanzi: "睡觉",     pinyin: "shuì jiào",     meaning: "đi ngủ" },
    { lesson: 10, hanzi: "小时",     pinyin: "xiǎo shí",      meaning: "tiếng" },

// ================= BÀI 11 ================
    { lesson: 11, hanzi: "吧",       pinyin: "ba",            meaning: "lượng từ" },
    { lesson: 11, hanzi: "买",       pinyin: "mǎi",           meaning: "mua" },
    { lesson: 11, hanzi: "卖",       pinyin: "mài",           meaning: "bán" },
    { lesson: 11, hanzi: "水果",     pinyin: "shuǐguǒ",       meaning: "trái cây" },
    { lesson: 11, hanzi: "苹果",     pinyin: "píngguǒ",       meaning: "táo" },
    { lesson: 11, hanzi: "一斤",     pinyin: "yī jīn",        meaning: "1 cân (500g - đơn vị Trung Quốc)" },
    { lesson: 11, hanzi: "一公斤",   pinyin: "yī gōngjīn",    meaning: "1 kg (1000g)" },
    { lesson: 11, hanzi: "多少",     pinyin: "duōshao",       meaning: "bao nhiêu" },
    { lesson: 11, hanzi: "很多",     pinyin: "hěn duō",       meaning: "nhiều" },
    { lesson: 11, hanzi: "很少",     pinyin: "hěn shǎo",      meaning: "ít" },
    { lesson: 11, hanzi: "贵",       pinyin: "guì",           meaning: "đắt" },
    { lesson: 11, hanzi: "便宜",     pinyin: "piányi",        meaning: "rẻ" },
    { lesson: 11, hanzi: "块",       pinyin: "kuài",          meaning: "tệ (tiền tệ văn nói: nhân dân tệ RMB)" },
    { lesson: 11, hanzi: "元",       pinyin: "yuán",          meaning: "tệ (tiền tệ văn viết: RMB chính thức)" },
    { lesson: 11, hanzi: "角",       pinyin: "jiǎo",          meaning: "hào (văn viết: 1/10 yuan)" },
    { lesson: 11, hanzi: "毛",       pinyin: "máo",           meaning: "hào (văn nói: 1/10 yuan)" },
    { lesson: 11, hanzi: "分",       pinyin: "fēn",           meaning: "xu (1/100 yuan)" },

// ================= BÀI 12 ================
    { lesson: 12, hanzi: "换",       pinyin: "huàn",          meaning: "đổi,thay" },
    { lesson: 12, hanzi: "小姐",     pinyin: "xiǎo jiě",      meaning: "cô gái" },
    { lesson: 12, hanzi: "先生",     pinyin: "xiānsheng",     meaning: "ông,ngài" },
    { lesson: 12, hanzi: "营业员",   pinyin: "yíngyè yuán",   meaning: "nhân viên bán hàng" },
    { lesson: 12, hanzi: "越南盾",   pinyin: "yuènán dùn",    meaning: "đồng (đơn vị tiền tệ của việt nam)" },
    { lesson: 12, hanzi: "人民币",   pinyin: "rénmínbi",      meaning: "nhân dân tệ (tiền tệ của Trung Quốc)" },
    { lesson: 12, hanzi: "等",       pinyin: "děng",          meaning: "đợi" },
    { lesson: 12, hanzi: "数",       pinyin: "shǔ",           meaning: "đếm" },
    { lesson: 12, hanzi: "一会儿",   pinyin: "yíhuìr",        meaning: "một lát" },
    { lesson: 12, hanzi: "图书馆",   pinyin: "túshūguǎn",     meaning: "thư viện" },
    { lesson: 12, hanzi: "港币",     pinyin: "Gǎngbì",        meaning: "đô la Hồng Kông (tiền tệ của Hong Kong)" },
    { lesson: 12, hanzi: "日元",     pinyin: "Rìyuán",        meaning: "yên Nhật (Tiền tệ của nhật)" },
    { lesson: 12, hanzi: "欧元",     pinyin: "Ōuyuán",        meaning: "euro (EUR)" },
    { lesson: 12, hanzi: "美元",     pinyin: "Měiyuán",       meaning: "đô la Mỹ (Tiền tệ của Mỹ)" },

// ================= BÀI 13 ================
    { lesson: 13, hanzi: "办公室", pinyin: "bàngōngshì", meaning: "văn phòng" },
    { lesson: 13, hanzi: "职员",   pinyin: "zhíyuán",   meaning: "nhân viên" },
    { lesson: 13, hanzi: "呢",     pinyin: "ne",        meaning: "(trợ từ nghi vấn, còn... thì sao?)" },
    { lesson: 13, hanzi: "楼",     pinyin: "lóu",       meaning: "tòa nhà; tầng lầu" },
    { lesson: 13, hanzi: "房间",   pinyin: "fángjiān",  meaning: "phòng" },
    { lesson: 13, hanzi: "知道",   pinyin: "zhīdào",    meaning: "biết" },
    { lesson: 13, hanzi: "电话",   pinyin: "diànhuà",   meaning: "điện thoại" },
    { lesson: 13, hanzi: "打电话", pinyin: "dǎ diànhuà", meaning: "gọi điện thoại" },
    { lesson: 13, hanzi: "接电话", pinyin: "jiē diànhuà", meaning: "nghe điện thoại" },
    { lesson: 13, hanzi: "手机",   pinyin: "shǒujī",      meaning: "điện thoại di động" },
    { lesson: 13, hanzi: "号",     pinyin: "hào",         meaning: "số (số nhà, số phòng, số lầu...)" },
    { lesson: 13, hanzi: "号码",   pinyin: "hàomǎ",       meaning: "mã số; số hiệu; số điện thoại" },
    { lesson: 13, hanzi: "门",     pinyin: "mén",         meaning: "cửa; cổng" },
    { lesson: 13, hanzi: "找",     pinyin: "zhǎo",        meaning: "tìm; kiếm" },
    { lesson: 13, hanzi: "在",     pinyin: "zài",        meaning: "ở,đang" },

    // ================= BÀI 14 ================
    { lesson: 14, hanzi: "先",    pinyin: "xiān", meaning: "trước, trước tiên" },
    { lesson: 14, hanzi: "位",    pinyin: "wèi", meaning: "vị, người (lượng từ lịch sự)" },
    { lesson: 14, hanzi: "欢迎",  pinyin: "huānyíng", meaning: "hoan nghênh, chào mừng" },
    { lesson: 14, hanzi: "学生",  pinyin: "xuésheng", meaning: "học sinh, sinh viên" },
    { lesson: 14, hanzi: "也",    pinyin: "yě", meaning: "cũng" },
    { lesson: 14, hanzi: "我们",  pinyin: "wǒmen", meaning: "chúng tôi, chúng ta" },
    { lesson: 14, hanzi: "留学生",pinyin: "liúxuéshēng", meaning: "du học sinh" },
    { lesson: 14, hanzi: "都",    pinyin: "dōu", meaning: "đều, tất cả" },
    { lesson: 14, hanzi: "买什么",pinyin: "mǎi shénme", meaning: "mua gì" },
    { lesson: 14, hanzi: "俩",   pinyin: "liǎ", meaning: "hai, hai người" },
    { lesson: 14, hanzi: "秘书", pinyin: "mìshū", meaning: "thư ký" },
    { lesson: 14, hanzi: "教授", pinyin: "jiàoshòu", meaning: "giáo sư" },
    { lesson: 14, hanzi: "校长", pinyin: "xiàozhǎng", meaning: "hiệu trưởng" },

        // ================= BÀI 15 ================
    { lesson: 15, hanzi: "语言", pinyin: "yǔyán", meaning: "ngôn ngữ" },
    { lesson: 15, hanzi: "怎么样", pinyin: "zěnmeyàng", meaning: "thế nào, như thế nào" },
    { lesson: 15, hanzi: "大学", pinyin: "dàxué", meaning: "đại học" },
    { lesson: 15, hanzi: "觉得", pinyin: "juéde", meaning: "cảm thấy, thấy rằng" },
    { lesson: 15, hanzi: "语法", pinyin: "yǔfǎ", meaning: "ngữ pháp" },
    { lesson: 15, hanzi: "听", pinyin: "tīng", meaning: "nghe" },
    { lesson: 15, hanzi: "比较", pinyin: "bǐjiào", meaning: "tương đối, so sánh" },
    { lesson: 15, hanzi: "容易", pinyin: "róngyì", meaning: "dễ dàng" },
    { lesson: 15, hanzi: "读", pinyin: "dú", meaning: "đọc" },
    { lesson: 15, hanzi: "但是", pinyin: "dànshì", meaning: "nhưng, tuy nhiên" },
    { lesson: 15, hanzi: "新", pinyin: "xīn", meaning: "mới" },
    { lesson: 15, hanzi: "同学", pinyin: "tóngxué", meaning: "bạn học" },
    { lesson: 15, hanzi: "同屋", pinyin: "tóngwū", meaning: "bạn cùng phòng" },

    // ================= BÀI 16 ================
    { lesson: 16, hanzi: "重", pinyin: "zhòng", meaning: "nặng" },
    { lesson: 16, hanzi: "轻", pinyin: "qīng", meaning: "nhẹ" },
    { lesson: 16, hanzi: "黑", pinyin: "hēi", meaning: "đen" },
    { lesson: 16, hanzi: "红", pinyin: "hóng", meaning: "đỏ" },
    { lesson: 16, hanzi: "旧", pinyin: "jiù", meaning: "cũ" },
    { lesson: 16, hanzi: "药", pinyin: "yào", meaning: "thuốc" },
    { lesson: 16, hanzi: "西药", pinyin: "xīyào", meaning: "thuốc tây" },
    { lesson: 16, hanzi: "中药", pinyin: "zhōngyào", meaning: "thuốc đông y" },
    { lesson: 16, hanzi: "里", pinyin: "lǐ", meaning: "bên trong" },
    { lesson: 16, hanzi: "词典", pinyin: "cídiǎn", meaning: "từ điển" },
    { lesson: 16, hanzi: "张", pinyin: "", meaning: "miếng" },
    { lesson: 16, hanzi: "日用品", pinyin: "rìyòngpǐn", meaning: "đồ dùng hàng ngày" },
    { lesson: 16, hanzi: "件", pinyin: "gè", meaning: "cái - chiếc (chỉ số lượng)" },
    { lesson: 16, hanzi: "衣服", pinyin: "yīfu", meaning: "quần áo" },
    { lesson: 16, hanzi: "雨伞", pinyin: "yǔsǎn", meaning: "cái ô" },
    { lesson: 16, hanzi: "瓶", pinyin: "píng", meaning: "chai - lọ" },
    { lesson: 16, hanzi: "香水", pinyin: "xiāngshuǐ", meaning: "nước hoa" },
    { lesson: 16, hanzi: "张", pinyin: "zhāng", meaning: "tờ, cái (lượng từ cho giấy, vé, bàn...)" },
    { lesson: 16, hanzi: "箱子", pinyin: "xiāngzi", meaning: "vali" },
    { lesson: 16, hanzi: "件", pinyin: "jiàn", meaning: "cái, chiếc (lượng từ cho quần áo, sự việc)" },
    { lesson: 16, hanzi: "把", pinyin: "bǎ", meaning: "cái (lượng từ cho vật có cán/tay cầm)" },
    { lesson: 16, hanzi: "支", pinyin: "zhī", meaning: "chiếc (lượng từ cho bút, vật dài)" },
    { lesson: 16, hanzi: "光盘", pinyin: "guāngpán", meaning: "đĩa CD" }


];  

  // ================= HÀM TỰ ĐỔI SỐ  ================
const nums = [
["一","yī"],["二","èr"],["三","sān"],["四","sì"],
["五","wǔ"],["六","liù"],["七","qī"],["八","bā"],["九","jiǔ"]
];

for(let i=11;i<=99;i++){

    let hanzi = "";
    let pinyin = "";

    const tens = Math.floor(i/10);
    const ones = i%10;

    if(i < 20){
        hanzi = "十" + (ones ? nums[ones-1][0] : "");
        pinyin = "shí" + (ones ? " " + nums[ones-1][1] : "");
    }else{
        hanzi = nums[tens-1][0] + "十" + (ones ? nums[ones-1][0] : "");
        pinyin = nums[tens-1][1] + " shí" + (ones ? " " + nums[ones-1][1] : "");
    }

        sentences2.push({
        lesson: 4,
        hanzi,
        pinyin,
        meaning: String(i)
    });
}

sentences2.push({
    lesson: 4,
    hanzi:"一百",
    pinyin:"yì bǎi",
    meaning:"100"
});

// add lên github
/*git add . 
git commit -m "update" 
git push origin main */








    
   
   






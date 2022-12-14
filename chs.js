/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "10 Minutes Remaining": "剩余 10 分钟",
    "Energy": "能量",
    "Health": "生命值",
    "Main Area": "主区域",
    "Reset (Exports)": "重置 (导出)",
    "Start Again.": "重新开始。",
    "Start My Suffering!": "开始我的苦难！",
    "Submit": "提交",
    "The End...": "终点...",
    "Welcome!": "欢迎!",
    "This is Life in 10 Minutes a really bad clicker I made for my own jam if you enjoyed it you may not be mentally stable press the button to begin the timer.": "这是 10 分钟内的生活，我为自己的游戏集制作的非常糟糕的点击器游戏，如果你喜欢它，你可能精神不稳定，按下按钮开始计时。",
    "Jobs": "工作",
    "Ending 5: Mid": "结局 5：中",
    "You might as well just of picked the first ending": "你还不如选择第一个结局",
    "you can restart the game below.": "您可以在下面重新开始游戏。",
    "What did you spend your 10 minutes on you literally aren't rich or experienced": "你花了 10 分钟在你身上做了什么，实际上你并不富有或经验丰富",
    "Better luck next time": "下次运气会更好",
    "Ending 1: Death": "结局 1：死亡",
    "Game Loaded": "游戏已加载",
    "Game Saved": "游戏已保存",
    "You can restart the game below.": "您可以在下方重新开始游戏。",
    "You managed to some how die in the span of 10 minutes so here are your stats.": "您设法在 10 分钟内死亡，所以这里是您的统计数据。",
    "Import Save": "导入存档",
    "Save File Exported to Clip Board": "存档已复制到剪切板",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Health: ": "生命值：",
    "Energy: ": "能量：",
    "Unlocked at Level ": "解锁于等级 ",
    "Money: $": "金钱: $",
    "Health: $": "健康: $",
    "Experience: Level ": "经验: 等级 ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Mountain Dew: \-(.+) \| \+(.+) \| \-(.+) Health$/, '激浪：\-$1 \| \+$2 \| \-$3 生命值'],
    [/^Health Pack: \-(.+) \| \+(.+) Health$/, '血包：\-$1 \| \+$2 生命值'],
    [/^Nanobot Healing: \-(.+) \| \+(.+) Health$/, '纳米机器人治疗：\-$1 \| \+$2 生命值'],
    [/^Bandaid: \-(.+) \| \+(.+) Health$/, '创可贴：\-$1 \| \+$2 生命值'],
    [/^Bandaid: \-(.+) \| \-(.+) Health$/, '创可贴：\-$1 \| \-$2 生命值'],
    [/^First Aid: \-(.+) \| \+(.+) Health$/, '急救：\-$1 \| \+$2 生命值'],
    [/^Janitor: \+(.+) \| \-(.+) \| \+(.+) Experience$/, '门卫：\+$1 \| \-$2 \| \+$3 经验'],
    [/^Black Label Brewed Coffee: \-(.+) \| \+(.+) \| \-(.+) Health$/, '黑标现煮咖啡：\-$1 \| \+$2 \| \-$3 生命值'],
    [/^Monster Energy: \-(.+) \| \+(.+) \| \-(.+) Health$/, '怪物能量：\-$1 \| \+$2 \| \-$3 生命值'],
    [/^Bang Energy: \-(.+) \| \+(.+) \| \-(.+) Health$/, '爆炸能量：\-$1 \| \+$2 \| \-$3 生命值'],
    [/^Dishwasher: \+(.+) \| \-(.+) \| \+(.+) Experience$/, '洗碗工：\+$1 \| \-$2 \| \+$3 经验'],
    [/^General Manager: \+(.+) \| \-(.+) \| \+(.+) Experience$/, '总经理：\+$1 \| \-$2 \| \+$3 经验'],
    [/^CEO: \+(.+) \| \-(.+) \| \+(.+) Experience$/, 'CEO：\+$1 \| \-$2 \| \+$3 经验'],
    [/^Manager: \+(.+) \| \-(.+) \| \+(.+) Experience$/, '经理：\+$1 \| \-$2 \| \+$3 经验'],
    [/^Contractor: \+(.+) \| \-(.+) \| \+(.+) Experience$/, '承包商：\+$1 \| \-$2 \| \+$3 经验'],
    [/^Construction Worker: \+(.+) \| \-(.+) \| \+(.+) Experience$/, '建筑工人：\+$1 \| \-$2 \| \+$3 经验'],
    [/^(.+) Minutes, and (.+) Seconds Remaining$/, '还剩 $1 分 $2 秒'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Seconds Remaining$/, '剩余 $1 秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);
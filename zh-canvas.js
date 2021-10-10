console.log("加载汉化模块");

//1.汉化杂项
var cnItems = {
    _OTHER_: [],
    'COLLECT': '收集',
    'CHALLENGES': '挑战',
    'BOOST': '提升',
    'Loading game and caching stuff...': '正在加载游戏和缓存内容...',
    'LIMIT': '上限',
    'OFFLINE': '离线',
    'Offline boost (5x income). Time left': '离线提升（5 倍收入）。 剩余时间',
    'SETTINGS': '设置',
    'this may take a moment...': '这可能需要一点时间...',
    'INCREASE': '增加',
    'You can only have Generator I. (no crunchers': '',
    'START': '开始',
    'Start new run with special restrictions to earn permanent bonuses! Doing prestige': '以特殊限制开始新的回合以获得永久奖金！ 做声望',
    'Reward: start with bonus 75 Gen I after prestige.': '奖励：声望后从奖励 75 发生器 I 开始。',
    'BACK': '返回',
    'CHALLENGE MODE': '挑战模式',
    'during': '期间',
    'during challenge will cancel the challenge and remove any restrictions.': '在挑战期间将取消挑战并移除任何限制。',
    'Goal: reach 125 Generator I': '目标：达到 125 发生器 I',
    'Support development of this and future free games!': '支持开发这个和未来的免费游戏！',
    'SAVE': '保存',
    'HARD RESET': '硬复位',
    'IMPORT/EXPORT': '导入/导出',
    'Join our Discord server for news and updates!': '加入我们的 Discord 服务器以获取新闻和更新！',
    'Or follow me on Twitter!': '或者在推特上关注我！',
    'Get a promo code for Pixels Filling Squares 3.0': '获取像素填充方块 3.0 的促销代码',
    'HARD RESET?': '确定要硬重置吗？',
    'IMPORT': '导入',
    'Import save file from Pixels Filling Squares': '从像素填充方块导入保存文件',
    'Import your savefile: (paste only once, it takes few seconds to appear': '导入您的存档文件：（仅粘贴一次，需要几秒钟才能出现',
    'Please use CTRL+A to select all text, CTRL+C to copy and CTRL+V to paste, import/export may take a few seconds!': '请使用 CTRL+A 选择所有文本，CTRL+C 复制和 CTRL+V 粘贴，导入/导出可能需要几秒钟！',
    'EXPORT': '导出',
    'Export your savefile: (press only once, it takes few seconds to appear': '导出您的保存文件：（只需按一次，需要几秒钟才能出现',
    'ZOOM IN': '放大',
    'ZOOM OUT': '缩小',
    'Prestige': '声望',
    'Tier': '层',
    'PRESTIGE': '声望',
    'Prestige to earn unclaimed skill points. You will lose all your pixels and generators,': '声望获得未收集的技能点。 您将丢失所有像素和生成器，',
    'Prestige will grant you 1 skill points': '声望会给你1个技能点',
    'SKILL GRID': '技能网格',
    'SKILL RESET': '技能重置',
    'but gain skill points and income boost based on total points.': '但根据总点数获得技能点和收入提升。',
    'Unlock Auto-Collect': '解锁自动收集',
    'Unlock \'Limit Hack\'. Spend 1000 energy to increase your limit without spending': '解锁“限制黑客”。 花费1000能量不花就增加你的极限',
    'pixels.': '像素.',
    'After prestige, start with five additional Generators I': '声望后，从另外五个发生器 I 开始',
    'Base income of Generator II +1': '发生器 II +1 的基础收入',
    'AUTO-COLLECT': '自动收集',
    'BUY': '购买',
    'px': '像素',
    'Unlock \'Boost Hack\'. Spend 2000 energy to gain x5 income for 60 seconds': '解锁“提升黑客”。 花费 2000 能量获得 x5 收入，持续 60 秒',
    "Double the effect of 'Increase Limit' button.": "将“增加限制”按钮的效果加倍。",
    "Gain 25% more Offline Boost": "获得 25% 的离线提升",
    "For every 50 Generators I, double it's base income.": "每 50 发生器 I，基础收入翻一番。",
    "After prestige, start with one additional Generator III": "声望后，从三个额外的发生器 III 开始",
    "After prestige, start with three additional Generators II": "声望后，从三个额外的发生器 II 开始",
    "Base income of Generator III +2": "发生器 III  的基础收入 +2",
    "Base income of Generator IV +4": "发生器 IV  的基础收入 +4",
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
    'Settings': '设置',

}

//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
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
    "Unspent skill points: ": "未使用的技能点：",
    "Bonus income: ": "奖励收入：",
    "Cost: ": "成本: ",
    "Collect ": "收集 ",
    "Prestige will grant you ": "声望会给你",
    "Generator ": "发生器 ",
    "Increase Energy income by ": "增加能量收入",
    "Increase max Energy by ": "增加最大能量",
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
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
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
    " more pixels for next point": "个像素获取下一个点数",
    " skill points": " 技能点",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) ([\d\.,]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^([\d\.,]+) \(\+([\d\.,]+)$/,
    /^\s*$/,
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^(.+)px\/s \(\+(.+)px$/, '$1像素\/秒 \(\+$2像素'],
    [/^Collect (.+) more pixels for next point$/, '再收集 $1 个像素获取下一个点数'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);

//2.采集新词
//20190320@JAR

var cnItem = function () {

    //传参是否非空字串
    if (!arguments[0]) return;

    //检验传参是否对象
    let text = arguments[0],
        s = '';
    if (typeof (text) != "string")
        return text;
    else
        s = arguments[0].charCodeAt();

    //检验传参是否英文
    // if (
    //     s < 65 || (s > 90 && s < 97) || (s > 122)
    //
    // ) return text;

    //处理前缀
    let text_prefix = "";
    for(let prefix in cnPrefix){
        if (text.substr(0,prefix.length) === prefix){
            text_prefix = cnPrefix[prefix];
            text = text.substr(prefix.length);
        }
    }
    //处理后缀
    let text_postfix = "";
    for(let postfix in cnPostfix){
        if (text.substr(-postfix.length) === postfix){
            text_postfix = cnPostfix[postfix];
            text = text.substr(0,text.length-postfix.length);
        }
    }
    //处理正则后缀
    let text_reg_exclude_postfix = "";
    for(let reg of cnExcludePostfix){
        let result = text.match(reg);
        if (result){
            text_reg_exclude_postfix = result[0];
            text = text.substr(0, text.length-text_reg_exclude_postfix.length);
        }
    }

    //检验字典是否可存
    if (!cnItems._OTHER_) cnItems._OTHER_ = [];

    //检查是否排除
    for(let reg of cnExcludeWhole){
        if (reg.test(text)){
            return text_prefix + text + text_reg_exclude_postfix + text_postfix;
        }
    }

    //遍历尝试匹配
    for (let i in cnItems) {
        //字典已有词汇或译文、且译文不为空，则返回译文
        if (
            text == i || text == cnItems[i] &&
            cnItems[i] != ''
        )
            return text_prefix + cnItems[i] + text_reg_exclude_postfix + text_postfix;
    }

    //调整收录的词条，0=收录原文，1=收录去除前后缀的文本
    let save_cfg = 1;
    let save_text = save_cfg?text:arguments[0]
    //遍历生词表是否收录
    for (
        let i = 0; i < cnItems._OTHER_.length; i++
    ) {
        //已收录则直接返回
        if (save_text == cnItems._OTHER_[i])
            return arguments[0];
    }

    if (cnItems._OTHER_.length < 500){
        //未收录则保存
        cnItems._OTHER_.push(save_text);
        cnItems._OTHER_.sort(
            function (a, b) {
                return a.localeCompare(b)
            }
        );
    }

    /*
        //开启生词打印
        //console.log(
            '有需要汉化的英文：', text
        );
    */

    //返回生词字串
    return arguments[0];
};

document.createElement = function(name,opt){
	if(name=='canvas'){
		let canvasElement = document.__proto__.createElement.bind(this)(name,opt);
		canvasElement.getContext('2d').fillText = function(text,x,y,max){
			return this.__proto__.fillText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').strokeText = function(text,x,y,max){
			return this.__proto__.strokeText.bind(this)(cnItem(text),x,y,max);
		}
		canvasElement.getContext('2d').measureText = function(text){
			return this.__proto__.measureText.bind(this)(cnItem(text));
		}
		return canvasElement;
	}
	else
		return document.__proto__.createElement.bind(this)(name,opt);
}
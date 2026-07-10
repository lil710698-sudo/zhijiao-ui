import { useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  Award,
  BadgeCheck,
  Bell,
  BookOpen,
  Brain,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Crown,
  Flame,
  Gift,
  Globe2,
  HelpCircle,
  HeartPulse,
  Home,
  IdCard,
  Landmark,
  LocateFixed,
  LockKeyhole,
  LogOut,
  Map,
  MapPinned,
  MessageCircle,
  Pencil,
  QrCode,
  Radar,
  School,
  Settings,
  Shield,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  UsersRound,
  Wifi,
  Zap,
} from 'lucide-react';

const user = {
  id: 'SE20260704018',
  name: '林同学',
  role: '学生',
  avatar: '林',
  phone: '138****2678',
  points: 2680,
  family: ['妈妈', '爸爸'],
  streak: 7,
};

const quickEntries = [
  { title: '学习中心', icon: BookOpen, color: 'from-emerald-400 to-green-500' },
  { title: '考试测评', icon: BadgeCheck, color: 'from-teal-400 to-emerald-500' },
  { title: '行为跟踪', icon: Activity, color: 'from-orange-400 to-amber-500' },
  { title: '预警通知', icon: Bell, color: 'from-rose-400 to-red-500' },
  { title: '更多', icon: Sparkles, color: 'from-violet-400 to-purple-500' },
];

const topics = [
  { title: '反诈骗', desc: '识别刷单、钓鱼链接和冒充客服', icon: ShieldAlert, color: 'bg-red-100 text-red-600', progress: 72 },
  { title: '交通安全', desc: '文明出行与交通事故应急', icon: Landmark, color: 'bg-sky-100 text-sky-600', progress: 64 },
  { title: '网络安全', desc: '账号保护、隐私防护和网络素养', icon: Globe2, color: 'bg-indigo-100 text-indigo-600', progress: 86 },
  { title: '食品安全', desc: '校园食品卫生与健康饮食', icon: HeartPulse, color: 'bg-orange-100 text-orange-600', progress: 58 },
  { title: '校园欺凌', desc: '拒绝欺凌，学会求助和保护自己', icon: Shield, color: 'bg-emerald-100 text-emerald-600', progress: 69 },
  { title: '心理健康', desc: '情绪调节、压力管理和同伴支持', icon: Brain, color: 'bg-purple-100 text-purple-600', progress: 76 },
  { title: '应急救护', desc: '突发事件自救互救技能', icon: Zap, color: 'bg-pink-100 text-rose-500', progress: 45 },
];

const wrongBook = [
  { type: '反诈骗', count: 8, last: '冒充公检法诈骗识别' },
  { type: '网络安全', count: 5, last: '陌生 Wi-Fi 风险判断' },
  { type: '交通安全', count: 3, last: '骑行头盔佩戴规则' },
];

const homeTopics = [
  { title: '反诈骗', icon: Shield, color: 'from-red-400 to-rose-500' },
  { title: '交通安全', icon: LocateFixed, color: 'from-sky-400 to-blue-500' },
  { title: '网络安全', icon: Globe2, color: 'from-violet-400 to-purple-500' },
  { title: '食品安全', icon: HeartPulse, color: 'from-emerald-400 to-green-500' },
  { title: '校园欺凌', icon: AlertTriangle, color: 'from-orange-400 to-amber-500' },
  { title: '心理健康', icon: Brain, color: 'from-cyan-400 to-teal-500' },
  { title: '应急救护', icon: Zap, color: 'from-pink-400 to-rose-500' },
];

const safetyTopicArticles = {
  反诈骗: [
    {
      title: '识别冒充客服退款诈骗',
      summary: '通过案例学习“退款理赔”“订单异常”等常见话术，掌握核验方式。',
      tag: '重点提醒',
      time: '2026-07-05',
      read: '3分钟',
      content: [
        '冒充客服退款诈骗通常会以订单异常、快递丢失、商品质量问题为由，诱导学生点击陌生链接或下载会议软件。',
        '遇到退款理赔信息时，应回到官方平台查看订单，不向陌生人提供验证码、银行卡号和支付密码。',
        '如果已经点击链接或填写信息，要第一时间告诉家长和老师，并冻结相关支付账户。',
      ],
      tip: '凡是要求离开官方平台操作、索要验证码或引导转账的，均应立即停止。',
    },
    {
      title: '刷单返利为什么不能信',
      summary: '了解小额返利诱导、连续垫付、无法提现的诈骗链路。',
      tag: '反诈课堂',
      time: '2026-07-04',
      read: '4分钟',
      content: [
        '刷单返利会先用小额奖励取得信任，再要求持续垫付更高金额，最后以任务未完成、账户冻结等理由拒绝提现。',
        '学生群体容易被“轻松兼职”“高额返现”吸引，必须牢记网络兼职不能先交钱。',
        '发现同学传播刷单链接时，应提醒其停止并及时向老师反馈。',
      ],
      tip: '所有需要先付款、先充值、先垫资的兼职都要提高警惕。',
    },
    {
      title: '陌生链接的三步判断法',
      summary: '从来源、域名、要求三个角度快速判断高风险链接。',
      tag: '安全技巧',
      time: '2026-07-03',
      read: '2分钟',
      content: [
        '第一看来源：陌生人、群聊转发和短信中的链接风险更高。',
        '第二看域名：仿冒官网常通过相似拼写、奇怪后缀混淆视线。',
        '第三看要求：要求登录账号、填写身份证、输入验证码的链接要格外谨慎。',
      ],
      tip: '不确定的链接不要点，可以先让家长或老师帮忙判断。',
    },
  ],
  交通安全: [
    {
      title: '上下学路上的安全观察',
      summary: '学习过马路、骑行、乘车时需要关注的关键风险点。',
      tag: '出行安全',
      time: '2026-07-05',
      read: '3分钟',
      content: [
        '上下学途中要优先选择人行道和斑马线，不在车辆盲区停留。',
        '骑行时应佩戴头盔，不逆行、不并排骑行，不边骑车边看手机。',
        '乘坐车辆时要系好安全带，到站后确认周围安全再下车。',
      ],
      tip: '慢一点、看清楚、守规则，是交通安全最有效的办法。',
    },
    {
      title: '认识车辆盲区',
      summary: '通过校园周边场景认识大型车辆右转盲区和车后盲区。',
      tag: '风险识别',
      time: '2026-07-04',
      read: '3分钟',
      content: [
        '大型车辆转弯时存在内轮差，行人和骑行者如果贴近车辆，很容易进入司机看不到的位置。',
        '车辆倒车时，车后低矮区域也可能处于盲区，不能在停车场和校门口追逐打闹。',
        '经过路口时要与大型车辆保持距离，宁愿等待车辆通过后再行走。',
      ],
      tip: '看不见驾驶员眼睛的位置，驾驶员也可能看不见你。',
    },
    {
      title: '雨天出行注意事项',
      summary: '掌握湿滑路面、视线受阻和积水路段的安全处理方法。',
      tag: '天气提醒',
      time: '2026-07-02',
      read: '2分钟',
      content: [
        '雨天路面湿滑，行走和骑行都要减速，避免急停急转。',
        '雨伞和雨衣可能遮挡视线，过马路前要多观察两侧来车。',
        '遇到积水路段不要冒险通过，更不要靠近井盖和电力设施。',
      ],
      tip: '雨天出行尽量穿颜色醒目的衣物，提高被车辆看见的概率。',
    },
  ],
  网络安全: [
    {
      title: '保护账号密码的好习惯',
      summary: '学习设置强密码、开启验证和防止账号被盗的方法。',
      tag: '账号保护',
      time: '2026-07-05',
      read: '3分钟',
      content: [
        '重要账号不要使用生日、姓名拼音和简单数字作为密码。',
        '不同平台尽量使用不同密码，避免一个账号泄露影响多个平台。',
        '收到异地登录提醒时，要立即修改密码并检查绑定手机和邮箱。',
      ],
      tip: '验证码等同于临时密码，不能告诉任何人。',
    },
    {
      title: '公共 Wi-Fi 使用风险',
      summary: '了解公共网络下登录、支付和文件传输的安全注意事项。',
      tag: '网络环境',
      time: '2026-07-04',
      read: '4分钟',
      content: [
        '公共 Wi-Fi 可能被伪装成免费网络，连接后存在信息被窃取的风险。',
        '在不可信网络中，尽量不要登录重要账号或进行支付操作。',
        '如果必须使用公共网络，应确认网络来源，并避免下载陌生文件。',
      ],
      tip: '免费网络不等于安全网络，重要操作尽量使用可信网络。',
    },
    {
      title: '远离网络暴力和隐私泄露',
      summary: '认识转发截图、公开个人信息和恶意评论的风险。',
      tag: '网络素养',
      time: '2026-07-03',
      read: '3分钟',
      content: [
        '未经允许不要发布他人的照片、聊天记录、住址和联系方式。',
        '看到网络争吵时，不跟风攻击、不扩散未经证实的信息。',
        '如果遭遇网络暴力，要保存证据并向家长、老师或平台求助。',
      ],
      tip: '网络空间同样需要尊重他人，也要保护自己。',
    },
  ],
  食品安全: [
    {
      title: '购买食品先看标签',
      summary: '识别生产日期、保质期、储存条件和配料信息。',
      tag: '食品识别',
      time: '2026-07-05',
      read: '2分钟',
      content: [
        '购买包装食品时，应查看生产日期、保质期和包装是否完整。',
        '发现胀袋、漏气、异味或颜色异常的食品，不要继续食用。',
        '对过敏体质的同学，要特别关注配料表中的过敏原提示。',
      ],
      tip: '来路不明、标签不清、包装破损的食品不要购买。',
    },
    {
      title: '校园周边小摊怎么选',
      summary: '从卫生环境、加工方式和食品温度判断风险。',
      tag: '校园饮食',
      time: '2026-07-04',
      read: '3分钟',
      content: [
        '选择证照齐全、环境整洁、食材新鲜的餐饮摊点。',
        '尽量避免购买长时间暴露在空气中、反复加热或颜色异常的食品。',
        '饭前洗手，餐具保持清洁，是预防肠胃不适的重要习惯。',
      ],
      tip: '不贪便宜、不猎奇，是保护肠胃的第一步。',
    },
    {
      title: '运动后饮食提醒',
      summary: '了解运动后补水、冷饮和高糖食品的注意事项。',
      tag: '健康饮食',
      time: '2026-07-02',
      read: '2分钟',
      content: [
        '运动后应少量多次补水，不宜一次大量饮用冰饮。',
        '高糖饮料不能替代日常饮水，长期大量饮用会影响健康。',
        '运动后可以适量补充主食、蛋白质和水果，帮助身体恢复。',
      ],
      tip: '口渴时优先选择温水或常温饮用水。',
    },
  ],
  校园欺凌: [
    {
      title: '哪些行为属于校园欺凌',
      summary: '认识语言攻击、孤立排挤、肢体伤害和网络欺凌。',
      tag: '识别欺凌',
      time: '2026-07-05',
      read: '3分钟',
      content: [
        '校园欺凌不仅包括打骂，也包括长期嘲笑、起侮辱性外号、恶意排挤和网络攻击。',
        '旁观者的起哄和转发也可能加重伤害，不能把欺凌当成玩笑。',
        '如果看到同学被欺凌，应在保证自身安全的前提下及时报告老师。',
      ],
      tip: '不沉默、不围观、不参与，是制止欺凌的重要力量。',
    },
    {
      title: '被欺凌时如何求助',
      summary: '学习保存证据、远离危险和寻找可信成年人帮助。',
      tag: '自我保护',
      time: '2026-07-04',
      read: '3分钟',
      content: [
        '遭遇欺凌时，应优先离开危险环境，不与对方发生进一步冲突。',
        '保留聊天记录、照片、录音等证据，便于老师和家长了解情况。',
        '告诉家长、班主任、心理老师或学校安全负责人，不要独自承受。',
      ],
      tip: '求助不是软弱，而是在保护自己。',
    },
    {
      title: '做友善的同伴',
      summary: '用尊重、倾听和支持营造安全友好的班级氛围。',
      tag: '同伴支持',
      time: '2026-07-02',
      read: '2分钟',
      content: [
        '每个人都可能有不同的性格、外貌、家庭和兴趣，差异不应该成为嘲笑理由。',
        '当同学遇到困难时，可以用陪伴、倾听和鼓励提供支持。',
        '班级里的友善氛围，需要每一位同学共同维护。',
      ],
      tip: '一句善意提醒，可能让同学少受很多伤害。',
    },
  ],
  心理健康: [
    {
      title: '认识压力信号',
      summary: '了解情绪低落、睡眠变化和注意力下降等常见压力表现。',
      tag: '情绪识别',
      time: '2026-07-05',
      read: '3分钟',
      content: [
        '压力可能表现为烦躁、疲惫、睡不好、食欲变化和学习效率下降。',
        '出现压力信号时，可以先记录自己的感受，找到具体的压力来源。',
        '长期难以缓解时，应主动向家长、老师或心理老师寻求帮助。',
      ],
      tip: '能说出来的情绪，往往更容易被看见和照顾。',
    },
    {
      title: '情绪调节小练习',
      summary: '学习深呼吸、暂停法和积极自我对话。',
      tag: '调节方法',
      time: '2026-07-04',
      read: '2分钟',
      content: [
        '深呼吸可以帮助身体从紧张状态慢慢放松下来。',
        '遇到冲突时，可以先暂停十秒，再决定如何表达自己的想法。',
        '用“我可以一步一步来”替代“我肯定不行”，能减少无助感。',
      ],
      tip: '情绪不是敌人，它是在提醒我们需要照顾自己。',
    },
    {
      title: '如何寻求心理支持',
      summary: '知道可以向谁求助，以及如何表达自己的困扰。',
      tag: '求助指南',
      time: '2026-07-03',
      read: '3分钟',
      content: [
        '当情绪持续影响学习、睡眠和人际关系时，应及时寻求帮助。',
        '可以向信任的家人、老师、朋友或学校心理老师说明自己的感受。',
        '表达时可以从“最近我经常……”开始，让对方更容易理解你的状态。',
      ],
      tip: '求助是一种能力，也是一种负责任的选择。',
    },
  ],
  应急救护: [
    {
      title: '轻微擦伤如何处理',
      summary: '掌握清洗、消毒、包扎和观察的基本步骤。',
      tag: '基础救护',
      time: '2026-07-05',
      read: '3分钟',
      content: [
        '轻微擦伤后，应先用流动清水冲洗伤口周围污物。',
        '在老师或校医指导下进行消毒和覆盖，避免用手反复触碰伤口。',
        '如果出现持续出血、红肿加重或疼痛明显，应及时就医。',
      ],
      tip: '处理伤口前后都要洗手，减少感染风险。',
    },
    {
      title: '运动扭伤的第一时间处理',
      summary: '学习停止运动、冷敷、抬高和求助的处理原则。',
      tag: '运动救护',
      time: '2026-07-04',
      read: '3分钟',
      content: [
        '发生扭伤后应立即停止运动，不要强行继续比赛或训练。',
        '早期可在成人指导下进行冷敷，帮助减轻肿胀和疼痛。',
        '如果无法站立、关节变形或疼痛明显，应尽快到医疗机构检查。',
      ],
      tip: '不要随意按摩刚扭伤的部位，以免加重损伤。',
    },
    {
      title: '突发不适如何求助',
      summary: '知道在头晕、胸闷、呼吸困难等情况下如何及时求助。',
      tag: '紧急求助',
      time: '2026-07-03',
      read: '2分钟',
      content: [
        '如果出现明显头晕、胸闷、呼吸困难或意识模糊，应立即告诉老师或身边同学。',
        '在等待帮助时，应坐下或平躺，避免独自走动。',
        '同学发现他人突发不适，应尽快通知老师和校医，不围观、不搬动不明伤情者。',
      ],
      tip: '遇到紧急情况时，清楚说明地点、人数和主要症状最重要。',
    },
  ],
};

const learningCategories = [
  { title: '反诈骗', count: 156, icon: BookOpen, color: 'from-red-400 to-rose-500' },
  { title: '交通安全', count: 128, icon: BookOpen, color: 'from-sky-400 to-blue-500' },
  { title: '网络安全', count: 195, icon: BookOpen, color: 'from-violet-400 to-purple-500' },
  { title: '食品安全', count: 87, icon: BookOpen, color: 'from-emerald-400 to-green-500' },
  { title: '校园欺凌', count: 64, icon: BookOpen, color: 'from-orange-400 to-amber-500' },
  { title: '心理健康', count: 112, icon: BookOpen, color: 'from-cyan-400 to-teal-500' },
  { title: '应急救护', count: 93, icon: Zap, color: 'from-pink-400 to-rose-500' },
];

const quickPractice = [
  { title: '随机练习', desc: '从所有题库中随机抽取20题', icon: Radar, color: 'bg-sky-50 text-blue-500' },
  { title: '薄弱专项', desc: '针对易错题型强化练习', icon: Activity, color: 'bg-amber-50 text-amber-500' },
];

const lessonExampleQuestions = {
  反诈骗: {
    基础知识: {
      question: '收到陌生短信称中奖并要求填写银行卡信息，正确做法是什么？',
      options: ['先确认来源，不轻信不转账', '立即按对方要求填写信息', '把验证码告诉客服', '转发给同学一起参与'],
      answer: 0,
    },
    场景判断: {
      question: '有人自称平台客服，要求你下载会议软件办理退款，应该怎么做？',
      options: ['回到官方平台核实，不按陌生指引操作', '马上下载软件并开启屏幕共享', '把支付密码发给对方验证', '先转一笔保证金再退款'],
      answer: 0,
    },
    案例解析: {
      question: '刷单群先返小额佣金，随后要求连续垫付大额资金，最可能是什么情况？',
      options: ['刷单返利诈骗，应立即停止并求助', '正常兼职流程，可以继续投入', '信誉越高收益越稳定', '只要群里人多就可信'],
      answer: 0,
    },
    综合巩固: {
      question: '遇到陌生链接、中奖短信和退款电话时，最稳妥的共同处理原则是什么？',
      options: ['不轻信、不透露、不转账，先核实来源', '看起来着急就优先处理', '只要对方知道姓名就相信', '让对方远程帮忙操作手机'],
      answer: 0,
    },
  },
  交通安全: {
    基础知识: {
      question: '过马路时遇到绿灯即将结束，正确做法是什么？',
      options: ['停下等待下一次绿灯，确认安全再通过', '加速冲过路口', '低头看手机跟着别人走', '从车辆缝隙中穿行'],
      answer: 0,
    },
    场景判断: {
      question: '骑自行车经过校门口拥堵路段时，以下哪项更安全？',
      options: ['减速观察，不逆行不并排骑行', '贴着大型车辆右侧通行', '边骑车边回复消息', '在人群中快速穿插'],
      answer: 0,
    },
    案例解析: {
      question: '大型车辆右转时，行人和骑行者应重点注意什么？',
      options: ['保持距离，避免进入车辆盲区', '越靠近车身越安全', '抢在车辆前方通过', '只看前轮不用看车尾'],
      answer: 0,
    },
    综合巩固: {
      question: '雨天上下学时，哪种做法能降低交通风险？',
      options: ['穿醒目衣物，减速慢行并多观察', '撑伞遮住视线快速跑过', '踩积水路段玩耍', '靠近井盖和电力设施避雨'],
      answer: 0,
    },
  },
  网络安全: {
    基础知识: {
      question: '设置账号密码时，以下哪种做法更安全？',
      options: ['不同平台使用强密码并定期检查', '所有平台都用生日作为密码', '把密码写在公开群聊里', '验证码可以随意告诉熟人'],
      answer: 0,
    },
    场景判断: {
      question: '连接公共 Wi-Fi 后，以下哪项操作应尽量避免？',
      options: ['登录网银或进行支付操作', '浏览公开新闻页面', '查看离线资料', '关闭不需要的蓝牙连接'],
      answer: 0,
    },
    案例解析: {
      question: '同学未经允许转发他人聊天截图并配上嘲讽文字，这属于什么风险行为？',
      options: ['侵犯隐私并可能造成网络伤害', '正常分享趣事', '帮助大家了解真相', '只要不实名就没关系'],
      answer: 0,
    },
    综合巩固: {
      question: '收到异地登录提醒后，第一时间应该怎么做？',
      options: ['修改密码并检查绑定信息', '忽略提醒继续使用', '把验证码发给陌生客服', '卸载所有安全软件'],
      answer: 0,
    },
  },
  食品安全: {
    基础知识: {
      question: '购买包装食品时，首先应查看什么信息？',
      options: ['生产日期、保质期和包装完整性', '只看包装是否好看', '只看价格是否便宜', '只听摊主口头介绍'],
      answer: 0,
    },
    场景判断: {
      question: '发现零食包装胀袋并有异味，正确做法是什么？',
      options: ['停止食用并告知老师或家长', '闻一闻没事就继续吃', '分给同学一起尝', '加热后继续食用'],
      answer: 0,
    },
    案例解析: {
      question: '校园周边小摊食品长时间暴露在空气中，主要风险是什么？',
      options: ['可能受到污染，引发肠胃不适', '说明食品更透气更新鲜', '一定比包装食品安全', '只要颜色鲜艳就可靠'],
      answer: 0,
    },
    综合巩固: {
      question: '运动后口渴时，以下哪种补水方式更合适？',
      options: ['少量多次饮用温水或常温水', '一次大量喝冰饮', '只喝高糖饮料', '马上吃大量油炸食品'],
      answer: 0,
    },
  },
  校园欺凌: {
    基础知识: {
      question: '以下哪种行为也可能属于校园欺凌？',
      options: ['长期给同学起侮辱性外号并排挤他', '正常课堂讨论不同观点', '比赛后互相鼓励', '提醒同学遵守规则'],
      answer: 0,
    },
    场景判断: {
      question: '看到同学被多人围堵嘲笑时，旁观者更合适的做法是什么？',
      options: ['在保证安全前提下及时报告老师', '跟着起哄拍视频', '转发到群里让更多人看', '假装没看见永远不说'],
      answer: 0,
    },
    案例解析: {
      question: '遭遇网络辱骂和恶意传播截图时，正确处理方式是什么？',
      options: ['保存证据，向家长、老师或平台求助', '立即用更激烈语言反击', '删除所有证据独自忍受', '把对方隐私也公开'],
      answer: 0,
    },
    综合巩固: {
      question: '营造友善班级氛围，每位同学可以怎么做？',
      options: ['尊重差异，拒绝围观和参与欺凌', '把同学缺点当玩笑传播', '只帮助关系好的同学', '遇到矛盾就拉群攻击'],
      answer: 0,
    },
  },
  心理健康: {
    基础知识: {
      question: '以下哪项可能是压力过大的信号？',
      options: ['持续睡不好、烦躁且学习效率下降', '偶尔想休息一下', '完成作业后感到轻松', '运动后身体出汗'],
      answer: 0,
    },
    场景判断: {
      question: '和同学发生冲突情绪很激动时，较好的第一步是什么？',
      options: ['先暂停几秒，深呼吸后再表达', '马上大声争吵', '发动态指责对方', '把情绪憋住永远不说'],
      answer: 0,
    },
    案例解析: {
      question: '如果情绪持续影响睡眠、学习和人际关系，应该怎么做？',
      options: ['主动向可信成年人或心理老师求助', '认为只能自己扛过去', '用熬夜打游戏逃避', '随意相信网络偏方'],
      answer: 0,
    },
    综合巩固: {
      question: '面对“我肯定不行”的想法，可以尝试怎样调整？',
      options: ['用“我可以一步一步来”替代', '反复否定自己', '放弃所有尝试', '把压力全部推给别人'],
      answer: 0,
    },
  },
  应急救护: {
    基础知识: {
      question: '轻微擦伤后，较合适的第一步是什么？',
      options: ['用流动清水清洗伤口周围污物', '直接用脏纸巾包住', '用手反复触碰伤口', '继续剧烈运动'],
      answer: 0,
    },
    场景判断: {
      question: '运动中扭伤后，以下哪项做法更安全？',
      options: ['立即停止运动，在成人指导下冷敷并求助', '继续比赛坚持到底', '马上用力按摩扭伤处', '跳几下确认能不能忍'],
      answer: 0,
    },
    案例解析: {
      question: '同学突然胸闷、呼吸困难时，身边同学应该怎么做？',
      options: ['尽快通知老师和校医，不围观不随意搬动', '围在旁边拍视频', '让他独自走回教室', '继续上课不用处理'],
      answer: 0,
    },
    综合巩固: {
      question: '紧急求助时，最需要清楚说明哪些信息？',
      options: ['地点、人数和主要症状', '自己的考试成绩', '围观同学的姓名', '与事件无关的聊天内容'],
      answer: 0,
    },
  },
};

const quickPracticeExampleQuestions = {
  随机练习: {
    基础知识: {
      question: '面对不确定的安全信息，最通用的判断方式是什么？',
      options: ['先核实来源和风险，再决定是否操作', '谁发来的都直接相信', '越着急越先照做', '只看转发人数判断真假'],
      answer: 0,
    },
    场景判断: {
      question: '在校园生活中遇到突发安全情况，以下哪项更稳妥？',
      options: ['保持冷静，及时向老师或家长求助', '独自处理所有问题', '先围观再决定', '把未经证实的信息发到群里'],
      answer: 0,
    },
    案例解析: {
      question: '多个安全案例共同提醒我们，遇到风险时应优先做到什么？',
      options: ['保护自己，保存证据，寻求帮助', '隐瞒情况避免麻烦', '凭感觉快速决定', '让陌生人远程代办'],
      answer: 0,
    },
    综合巩固: {
      question: '以下哪项属于综合安全学习中的正确态度？',
      options: ['遵守规则，发现异常及时核实和报告', '只关注自己感兴趣的风险', '发生问题后再学习', '认为安全提醒都与自己无关'],
      answer: 0,
    },
  },
  薄弱专项: {
    基础知识: {
      question: '复习薄弱题时，最应该关注什么？',
      options: ['弄清错误原因和正确判断依据', '只记住答案字母', '做错就跳过', '只看题目不看选项'],
      answer: 0,
    },
    场景判断: {
      question: '同类题反复做错时，比较有效的做法是什么？',
      options: ['回到知识点重新梳理，再做相似场景练习', '继续盲目刷题', '只做简单题提高速度', '把错题全部删除'],
      answer: 0,
    },
    案例解析: {
      question: '分析错题案例时，以下哪项最能帮助避免再次出错？',
      options: ['找出题目中的风险信号和关键词', '只看最后一句', '忽略题干背景', '凭第一印象选择'],
      answer: 0,
    },
    综合巩固: {
      question: '完成薄弱专项巩固后，怎样检验是否真正掌握？',
      options: ['换相似场景仍能说出判断理由', '只要选项顺序没变就能选对', '记住上一题答案', '不再查看解析'],
      answer: 0,
    },
  },
};

const recentExams = [
  { title: '网络安全知识模拟考试', time: '2025-07-05 14:00', status: '未开始', tone: 'warning' },
  { title: '反诈骗知识专项测试', time: '2025-07-03 10:00', status: '已完成', tone: 'success' },
];

const examCards = [
  {
    title: '网络安全知识模拟考试',
    desc: '涵盖网络安全基础知识、常见攻击方式与防范措施',
    tags: [
      { text: '网络安全', className: 'bg-violet-100 text-violet-600' },
      { text: '中等', className: 'bg-amber-100 text-amber-600' },
    ],
    questions: 50,
    duration: '60分钟',
    takers: '2341人已考',
    time: '2025-07-05 14:00',
    action: '去考试',
    actionClass: 'bg-campus-500 text-white',
  },
  {
    title: '反诈骗知识专项测试',
    desc: '电信诈骗、网络诈骗、金融诈骗等防范知识',
    tags: [
      { text: '反诈骗', className: 'bg-red-100 text-red-500' },
      { text: '简单', className: 'bg-campus-100 text-campus-600' },
    ],
    questions: 30,
    duration: '45分钟',
    takers: '3567人已考',
    time: '2025-07-03 10:00',
    score: 92,
    action: '查看成绩',
    actionClass: 'bg-blue-500 text-white',
  },
  {
    title: '交通安全知识考试',
    desc: '道路交通法规、安全出行常识、应急处理方法',
    tags: [
      { text: '交通安全', className: 'bg-blue-100 text-blue-500' },
      { text: '简单', className: 'bg-campus-100 text-campus-600' },
    ],
    questions: 40,
    duration: '50分钟',
    takers: '1892人已考',
    time: '2025-07-08 09:00',
    action: '去考试',
    actionClass: 'bg-campus-500 text-white',
  },
  {
    title: '综合安全知识期末考',
    desc: '本学期所有安全专题知识的综合测试',
    tags: [
      { text: '综合', className: 'bg-yellow-100 text-yellow-600' },
      { text: '困难', className: 'bg-red-100 text-red-400' },
    ],
    questions: 100,
    duration: '120分钟',
    takers: '5621人已考',
    time: '2025-07-15 14:00',
    locked: true,
    action: '未解锁',
    actionClass: 'bg-slate-100 text-slate-400',
  },
];

const examAnalysisRecords = [
  { title: '反诈骗知识专项测试', date: '2025-07-03', rank: 156, score: 92, tone: 'bg-campus-100 text-campus-600' },
  { title: '交通安全模拟考', date: '2025-06-28', rank: 342, score: 88, tone: 'bg-blue-100 text-blue-600' },
  { title: '网络安全基础测试', date: '2025-06-20', rank: 89, score: 95, tone: 'bg-campus-100 text-campus-600' },
  { title: '食品安全知识考', date: '2025-06-15', rank: 567, score: 76, tone: 'bg-amber-100 text-amber-600' },
];

const wrongQuestions = [
  { tag: '反诈骗', question: '收到陌生短信称中奖，应该怎么做？', mistakes: '错3次', date: '2025-07-01' },
  { tag: '网络安全', question: '在公共WiFi环境下不应该进行哪些操作？', mistakes: '错2次', date: '2025-06-30' },
  { tag: '交通安全', question: '骑自行车通过路口时，正确的做法是什么？', mistakes: '错1次', date: '2025-06-28' },
];

const medals = [
  { name: '学习达人', desc: '累计完成 30 个课程任务', icon: Trophy, active: true },
  { name: '连续打卡', desc: '连续 7 天完成安全学习', icon: Flame, active: true },
  { name: '考试满分', desc: '专题测评获得满分', icon: Crown, active: false },
  { name: '反诈卫士', desc: '完成全部反诈专题', icon: ShieldAlert, active: true },
];

const products = [
  { name: '校园安全卡', tag: '基础套餐', price: '¥29/月', icon: CreditCard, color: 'from-emerald-400 to-green-500' },
  { name: '亲情守护卡', tag: '定位+围栏', price: '¥49/月', icon: MapPinned, color: 'from-sky-400 to-cyan-500' },
  { name: '成长权益包', tag: '积分兑换', price: '2680积分', icon: Gift, color: 'from-orange-400 to-amber-500' },
];

const parentTools = [
  { title: '反诈拦截', desc: '识别并拦截涉诈、钓鱼和高危网页', icon: ShieldAlert, state: '今日拦截 3 次', color: 'bg-red-100 text-red-600' },
  { title: '实时定位', desc: '获取学生当前位置并在地图展示', icon: LocateFixed, state: '距离学校 180m', color: 'bg-emerald-100 text-emerald-600' },
  { title: '历史轨迹', desc: '查看近七天移动讯号位置轨迹', icon: Map, state: '7天可查', color: 'bg-sky-100 text-sky-600' },
  { title: '电子围栏', desc: '复制模板或设置家庭专属安全范围', icon: Radar, state: '2个围栏启用', color: 'bg-purple-100 text-purple-600' },
  { title: '上网时长限制', desc: '超出每日上限后自动断网并提醒', icon: Clock3, state: '剩余 46 分钟', color: 'bg-amber-100 text-amber-600' },
  { title: '上网时段管理', desc: '支持多段允许时段，如 18:00-20:00', icon: Wifi, state: '3个时段', color: 'bg-indigo-100 text-indigo-600' },
];

const tabs = [
  { key: 'study', label: '首页', icon: Home },
  { key: 'achievements', label: '成就中心', icon: Trophy },
  { key: 'shop', label: '商城', icon: ShoppingBag },
  { key: 'parent', label: '家长监管', icon: Shield },
  { key: 'mine', label: '我的', icon: UserRound },
];

function IconBubble({ icon: Icon, className = '', size = 22 }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-2xl ${className}`}>
      <Icon size={size} strokeWidth={2.4} />
    </span>
  );
}

function getPracticeGradient(item) {
  if (item.color?.includes('from-')) return item.color;
  if (item.title === '随机练习') return 'from-sky-400 to-blue-500';
  if (item.title === '薄弱专项') return 'from-orange-400 to-amber-500';
  return 'from-campus-400 to-green-500';
}

function getPracticeCount(item) {
  if (item.count) return item.count;
  return item.title === '随机练习' ? 20 : 36;
}

function getPracticeChapters(item) {
  const count = getPracticeCount(item);
  const title = item.title;
  return [
    { title: `${title}基础知识`, done: Math.round(count * 0.36), total: Math.round(count * 0.42), desc: '核心概念、风险识别和基础判断' },
    { title: `${title}场景判断`, done: Math.round(count * 0.28), total: Math.round(count * 0.34), desc: '结合校园生活场景进行专项练习' },
    { title: `${title}案例解析`, done: Math.round(count * 0.18), total: Math.round(count * 0.24), desc: '通过真实案例理解正确处理方式' },
    { title: `${title}综合巩固`, done: Math.round(count * 0.12), total: Math.max(12, Math.round(count * 0.18)), desc: '混合题型训练，巩固薄弱知识点' },
  ];
}

function getLessonStage(title) {
  if (title.includes('场景判断')) return '场景判断';
  if (title.includes('案例解析')) return '案例解析';
  if (title.includes('综合巩固')) return '综合巩固';
  return '基础知识';
}

function getLessonExample(module, lesson) {
  const stage = getLessonStage(lesson.title);
  return (
    lessonExampleQuestions[module.title]?.[stage] ||
    quickPracticeExampleQuestions[module.title]?.[stage] ||
    quickPracticeExampleQuestions.随机练习[stage]
  );
}

function getExamIcon(exam) {
  const firstTag = exam.tags?.[0]?.text;
  if (firstTag === '反诈骗') return ShieldAlert;
  if (firstTag === '交通安全') return LocateFixed;
  if (firstTag === '网络安全') return Globe2;
  return BadgeCheck;
}

function getExamGradient(exam) {
  const firstTag = exam.tags?.[0]?.text;
  if (firstTag === '反诈骗') return 'from-red-400 to-rose-500';
  if (firstTag === '交通安全') return 'from-sky-400 to-blue-500';
  if (firstTag === '网络安全') return 'from-violet-400 to-purple-500';
  return 'from-campus-400 to-green-500';
}

function getExamChapters(exam) {
  return [
    { title: '考试说明与规则', desc: `本场考试共 ${exam.questions} 题，限时 ${exam.duration}`, progress: 100 },
    { title: '考前知识梳理', desc: exam.desc, progress: 82 },
    { title: '模拟答题练习', desc: '单选、多选、判断题混合训练', progress: exam.score ? 100 : 46 },
    { title: '成绩评估与解析', desc: exam.score ? `已获得 ${exam.score} 分，可查看错题解析` : '完成考试后生成能力评估', progress: exam.score ? 92 : 0 },
  ];
}

function PageShell({ children, eyebrow, title, subtitle }) {
  return (
    <section className="page-shell">
      <header className="hero-card">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold opacity-85">{eyebrow}</p>
            <h1 className="mt-2 text-2xl font-black tracking-normal">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
          </div>
          <div className="rounded-full bg-white/22 px-3 py-1 text-xs font-bold backdrop-blur">校园安全</div>
        </div>
      </header>
      {children}
    </section>
  );
}

function SectionTitle({ title, action }) {
  return (
    <div className="mb-3 mt-5 flex items-center justify-between">
      <h2 className="text-lg font-black text-slate-900">{title}</h2>
      {action && <button className="text-xs font-bold text-campus-600">{action}</button>}
    </div>
  );
}

function Card({ children, className = '', ...props }) {
  return <div className={`rounded-[24px] bg-white p-4 shadow-soft ${className}`} {...props}>{children}</div>;
}

function StudyPage({ onOpenLearning, onOpenExam, onOpenTopic }) {
  return (
    <section className="page-shell home-page">
      <header className="home-hero">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-white/35 bg-white/15 text-white">
              <UserRound size={38} strokeWidth={2.2} />
            </div>
            <div>
              <p className="text-xs font-bold text-white/75">下午好</p>
              <h1 className="mt-1 text-2xl font-black text-white">张同学</h1>
            </div>
          </div>
          <button className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white/18 text-white backdrop-blur">
            <Bell size={28} />
            <span className="absolute right-1 top-0 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-xs font-black text-white">3</span>
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <span className="inline-flex h-9 w-[92px] items-center justify-center rounded-full border border-white/30 bg-white/18 text-xs font-black text-white">学生身份</span>
          <span className="inline-flex h-9 w-[92px] items-center justify-center rounded-full border border-white/30 bg-white/18 text-xs font-black text-white">已实名认证</span>
          <button
            className="home-checkin-pill inline-flex h-9 w-[92px] items-center justify-center gap-1 rounded-full text-xs font-black text-white"
          >
            <CalendarDays size={14} />
            签到
          </button>
        </div>
      </header>

      <button className="home-notice-card">
        <IconBubble icon={Bell} className="h-14 w-14 bg-red-50 text-red-500" size={25} />
        <span className="min-w-0 flex-1 text-left text-xs font-black leading-5 text-red-500">【紧急】关于防范新型电信网络诈骗的重要提醒</span>
        <ChevronRight size={21} className="shrink-0 text-slate-300" />
      </button>

      <Card className="home-feature-card">
        <div className="home-feature-grid">
        {quickEntries.map((item) => {
          const onClick = item.title === '学习中心' ? onOpenLearning : item.title === '考试测评' ? onOpenExam : undefined;
          return (
            <button
              key={item.title}
              type="button"
              onClick={onClick}
              className="flex flex-col items-center gap-3"
            >
              <IconBubble icon={item.icon} className={`h-16 w-16 rounded-[22px] bg-gradient-to-br ${item.color} text-white shadow-soft`} size={30} />
              <span className="text-xs font-black text-slate-800">{item.title}</span>
            </button>
          );
        })}
        </div>
      </Card>

      <SectionTitle title="安全学习专题" action="查看全部" />
      <div className="home-topic-row">
        {homeTopics.map((topic) => (
          <button key={topic.title} type="button" onClick={() => onOpenTopic(topic)} className="home-topic-item">
            <IconBubble icon={topic.icon} className={`h-16 w-16 rounded-[20px] bg-gradient-to-br ${topic.color} text-white shadow-soft`} size={30} />
            <span className="mt-3 block whitespace-nowrap text-xs font-black text-slate-700">{topic.title}</span>
          </button>
        ))}
      </div>

      <Card className="mt-6 p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900">学习进度</h2>
          <span className="text-xs font-black text-campus-600">本周</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-sky-50 p-4 text-center">
            <p className="text-2xl font-black text-blue-500">12</p>
            <p className="mt-2 text-xs font-bold text-slate-500">已完成课程</p>
          </div>
          <div className="rounded-2xl bg-campus-50 p-4 text-center">
            <p className="text-2xl font-black text-campus-600">85%</p>
            <p className="mt-2 text-xs font-bold text-slate-500">平均正确率</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4 text-center">
            <p className="text-2xl font-black text-amber-500">1,280</p>
            <p className="mt-2 text-xs font-bold text-slate-500">学习积分</p>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs font-bold text-slate-500">反诈骗专题学习进度</p>
          <span className="text-base font-black text-campus-600">75%</span>
        </div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-campus-400 to-lime-300" />
        </div>
      </Card>

      <Card className="mt-5 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900">最近考试</h2>
          <button className="flex items-center gap-1 text-xs font-black text-campus-600">
            全部考试 <ChevronRight size={17} />
          </button>
        </div>
        <div className="space-y-3">
          {recentExams.map((exam) => (
            <button key={exam.title} className="flex w-full items-center justify-between gap-3 rounded-3xl bg-slate-50 p-4 text-left">
              <div className="min-w-0">
                <p className="truncate text-sm font-black text-slate-900">{exam.title}</p>
                <p className="mt-2 text-xs font-medium text-slate-400">{exam.time}</p>
              </div>
              <span className={`shrink-0 rounded-full px-4 py-2 text-xs font-black ${
                exam.tone === 'success' ? 'bg-campus-50 text-campus-600' : 'bg-amber-50 text-amber-600'
              }`}>
                {exam.status}
              </span>
            </button>
          ))}
        </div>
      </Card>
    </section>
  );
}

function LearningCenterPage({ onBack, onOpenPractice }) {
  const [learningMode, setLearningMode] = useState('practice');

  return (
    <section className="page-shell home-page">
      <header className="learning-hero">
        <button
          type="button"
          onClick={onBack}
          className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-white/18 text-white backdrop-blur"
        >
          <ChevronRight className="rotate-180" size={20} />
        </button>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-white">学习中心</h1>
            <p className="mt-2 text-sm font-semibold text-white/80">专项练习 · 错题本 · 知识巩固</p>
          </div>
          <IconBubble icon={BookOpen} className="h-14 w-14 bg-white/18 text-white backdrop-blur" size={28} />
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {[
            { value: '342', label: '总题数' },
            { value: '128', label: '已练习' },
            { value: '86%', label: '正确率' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/18 p-3 text-center text-white backdrop-blur">
              <p className="text-2xl font-black">{stat.value}</p>
              <p className="mt-1 text-xs font-bold text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="learning-switch">
        <button
          type="button"
          onClick={() => setLearningMode('practice')}
          className={`rounded-2xl py-3 text-sm font-black ${learningMode === 'practice' ? 'bg-gradient-to-r from-campus-500 to-emerald-400 text-white shadow-soft' : 'text-slate-500'}`}
        >
          专项练习
        </button>
        <button
          type="button"
          onClick={() => setLearningMode('wrong')}
          className={`rounded-2xl py-3 text-sm font-black ${learningMode === 'wrong' ? 'bg-gradient-to-r from-campus-500 to-emerald-400 text-white shadow-soft' : 'text-slate-500'}`}
        >
          错题本
        </button>
      </div>

      {learningMode === 'practice' ? (
        <>
          <Card className="mt-5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-900">题型分类</h2>
              <span className="text-xs font-bold text-slate-400">共7个专题</span>
            </div>
            <div className="learning-category-grid">
              {learningCategories.map((category) => (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => onOpenPractice(category)}
                  className="flex min-h-[92px] items-center gap-3 rounded-3xl bg-slate-50 p-3 text-left"
                >
                  <IconBubble icon={category.icon} className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${category.color} text-white`} size={23} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black leading-5 text-slate-900">{category.title}</p>
                    <p className="mt-1 text-xs font-semibold text-slate-400">{category.count}道题</p>
                  </div>
                  <ChevronRight size={18} className="text-slate-300" />
                </button>
              ))}
            </div>
          </Card>

          <Card className="mt-5 p-5">
            <h2 className="mb-4 text-lg font-black text-slate-900">快速练习</h2>
            <div className="space-y-3">
              {quickPractice.map((item) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => onOpenPractice(item)}
                  className="flex w-full items-center gap-3 rounded-3xl bg-gradient-to-r from-campus-50 to-white p-4 text-left"
                >
                  <IconBubble icon={item.icon} className={`h-12 w-12 rounded-2xl ${item.color}`} size={24} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-black text-slate-900">{item.title}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{item.desc}</p>
                  </div>
                  <ChevronRight size={19} className="text-campus-500" />
                </button>
              ))}
            </div>
          </Card>
        </>
      ) : (
        <>
          <Card className="mt-5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-black text-slate-900">错题统计</h2>
              <button className="flex items-center gap-1 text-xs font-black text-campus-600">
                查看全部 <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-red-50 p-4 text-center">
                <p className="text-2xl font-black text-red-500">23</p>
                <p className="mt-2 text-xs font-bold text-slate-500">错题总数</p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-black text-blue-500">7</p>
                <p className="mt-2 text-xs font-bold text-slate-500">涉及专题</p>
              </div>
              <div className="rounded-2xl bg-campus-50 p-4 text-center">
                <p className="text-2xl font-black text-campus-600">15</p>
                <p className="mt-2 text-xs font-bold text-slate-500">已纠正</p>
              </div>
            </div>
          </Card>

          <Card className="mt-5 p-5">
            <h2 className="mb-4 text-lg font-black text-slate-900">最近错题</h2>
            <div className="space-y-3">
              {wrongQuestions.map((item) => (
                <div key={item.question} className="rounded-3xl bg-slate-50 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-lg bg-red-100 px-3 py-1 text-xs font-black text-red-500">{item.tag}</span>
                      </div>
                      <p className="text-sm font-black leading-6 text-slate-900">{item.question}</p>
                      <p className="mt-3 text-xs font-semibold text-slate-400">{item.mistakes}　{item.date}</p>
                    </div>
                    <button className="shrink-0 rounded-2xl bg-blue-500 px-4 py-2 text-xs font-black text-white">重做</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}
    </section>
  );
}

function ExamCenterPage({ onBack, onOpenExamCard }) {
  const [examMode, setExamMode] = useState('list');

  return (
    <section className="page-shell home-page">
      <header className="exam-hero">
        <button
          type="button"
          onClick={onBack}
          className="mb-5 grid h-9 w-9 place-items-center rounded-full bg-white/18 text-white backdrop-blur"
        >
          <ChevronRight className="rotate-180" size={20} />
        </button>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-white">考试测评</h1>
            <p className="mt-2 text-sm font-semibold text-white/80">模拟考试 · 成绩统计 · 能力评估</p>
          </div>
          <IconBubble icon={BadgeCheck} className="h-14 w-14 bg-white/18 text-white backdrop-blur" size={28} />
        </div>

        <div className="mt-7 grid grid-cols-3 gap-3">
          {[
            { value: '12', label: '已参考' },
            { value: '88.5', label: '平均分' },
            { value: '3', label: '待考试' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/18 p-3 text-center text-white backdrop-blur">
              <p className="text-2xl font-black">{stat.value}</p>
              <p className="mt-1 text-xs font-bold text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="learning-switch">
        <button
          type="button"
          onClick={() => setExamMode('list')}
          className={`rounded-2xl py-3 text-sm font-black ${examMode === 'list' ? 'bg-gradient-to-r from-campus-500 to-emerald-400 text-white shadow-soft' : 'text-slate-500'}`}
        >
          考试列表
        </button>
        <button
          type="button"
          onClick={() => setExamMode('analysis')}
          className={`rounded-2xl py-3 text-sm font-black ${examMode === 'analysis' ? 'bg-gradient-to-r from-campus-500 to-emerald-400 text-white shadow-soft' : 'text-slate-500'}`}
        >
          成绩分析
        </button>
      </div>

      {examMode === 'list' ? (
        <div className="mt-5 space-y-4">
          {examCards.map((exam) => (
            <Card
              key={exam.title}
              role="button"
              tabIndex={0}
              onClick={() => onOpenExamCard(exam)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') onOpenExamCard(exam);
              }}
              className={`cursor-pointer p-5 ${exam.locked ? 'opacity-60' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {exam.tags.map((tag) => (
                      <span key={tag.text} className={`rounded-lg px-3 py-1 text-xs font-black ${tag.className}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-black leading-6 text-slate-900">{exam.title}</h2>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-500">{exam.desc}</p>
                </div>
                {exam.score && (
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-campus-100 text-center text-campus-600">
                    <div>
                      <p className="text-xl font-black leading-5">{exam.score}</p>
                      <p className="mt-1 text-xs font-black">分</p>
                    </div>
                  </div>
                )}
                {exam.locked && (
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-400">
                    <AlertTriangle size={24} />
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-1"><CheckCircle2 size={15} />{exam.questions}题</span>
                <span className="flex items-center gap-1"><Clock3 size={15} />{exam.duration}</span>
                <span className="flex items-center gap-1"><Radar size={15} />{exam.takers}</span>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <span className="flex min-w-0 items-center gap-2 text-xs font-semibold text-slate-400">
                  <CalendarDays size={16} /> {exam.time}
                </span>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onOpenExamCard(exam);
                  }}
                  className={`shrink-0 rounded-2xl px-5 py-3 text-sm font-black ${exam.actionClass}`}
                >
                  {exam.action}
                </button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="mt-5 space-y-5">
          <Card className="p-5">
            <h2 className="mb-4 text-lg font-black text-slate-900">成绩概览</h2>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl bg-campus-50 p-4 text-center">
                <p className="text-2xl font-black text-campus-600">88.5</p>
                <p className="mt-2 text-xs font-bold text-slate-500">平均分</p>
              </div>
              <div className="rounded-2xl bg-blue-50 p-4 text-center">
                <p className="text-2xl font-black text-blue-500">92</p>
                <p className="mt-2 text-xs font-bold text-slate-500">最高分</p>
              </div>
              <div className="rounded-2xl bg-purple-50 p-4 text-center">
                <p className="text-2xl font-black text-purple-500">12</p>
                <p className="mt-2 text-xs font-bold text-slate-500">考试次数</p>
              </div>
            </div>

            <p className="mt-6 text-sm font-bold text-slate-500">近4次考试成绩趋势</p>
            <div className="mt-5 flex h-36 items-end justify-between rounded-3xl bg-gradient-to-b from-white to-slate-50 px-4 pb-3">
              {examAnalysisRecords.map((record) => (
                <div key={record.date} className="flex w-14 flex-col items-center justify-end">
                  <div className="mb-2 w-3 rounded-full bg-gradient-to-t from-campus-400 to-lime-300" style={{ height: `${Math.max(36, record.score)}px` }} />
                  <p className="text-sm font-black text-slate-500">{record.score}</p>
                  <p className="mt-1 text-xs font-medium text-slate-400">{record.date.slice(5)}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="mb-4 text-lg font-black text-slate-900">考试记录</h2>
            <div className="space-y-3">
              {examAnalysisRecords.map((record) => (
                <div key={record.title} className="flex items-center justify-between rounded-3xl bg-slate-50 p-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-black text-slate-900">{record.title}</p>
                    <p className="mt-2 text-xs font-semibold text-slate-400">{record.date} · 排名 {record.rank}</p>
                  </div>
                  <span className={`ml-3 rounded-2xl px-4 py-3 text-lg font-black ${record.tone}`}>{record.score}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}
    </section>
  );
}

function PracticeModulePage({ module, onBack, onOpenLesson }) {
  const Icon = module.icon;
  const gradient = getPracticeGradient(module);
  const count = getPracticeCount(module);
  const chapters = getPracticeChapters(module);
  const done = module.title === '随机练习' ? 0 : Math.min(128, Math.round(count * 0.58));
  const accuracy = module.title === '薄弱专项' ? '72%' : '86%';

  return (
    <section className="page-shell home-page">
      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="grid h-9 w-9 place-items-center rounded-full bg-campus-50 text-campus-700"
          >
            <ChevronRight className="rotate-180" size={20} />
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-xl font-black text-slate-900">{module.title}</h1>
            <p className="mt-1 text-xs font-semibold text-slate-400">题库练习 · 章节训练 · 错题巩固</p>
          </div>
        </div>

        <div className={`rounded-[24px] bg-gradient-to-br ${gradient} p-5 text-white`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-white/85">专项题库</p>
              <p className="mt-3 text-4xl font-black">{accuracy}</p>
              <p className="mt-1 text-sm font-bold text-white/80">当前正确率</p>
              <p className="mt-3 text-xs font-semibold text-white/75">已做 {done}/{count} 题</p>
            </div>
            <IconBubble icon={Icon} className="h-16 w-16 bg-white/20 text-white backdrop-blur" size={32} />
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/25">
            <div className="h-full rounded-full bg-white" style={{ width: `${Math.min(92, Math.round((done / count) * 100))}%` }} />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-3">
          {[
            { icon: BookOpen, label: '顺序练习' },
            { icon: Radar, label: '随机练习' },
            { icon: CheckCircle2, label: '错题复习' },
            { icon: Star, label: '收藏题目' },
          ].map((action) => (
            <button key={action.label} type="button" className="flex flex-col items-center gap-2">
              <IconBubble icon={action.icon} className="h-11 w-11 bg-campus-50 text-campus-600" size={21} />
              <span className="text-[11px] font-black text-slate-600">{action.label}</span>
            </button>
          ))}
        </div>
      </Card>

      <Card className="mt-5 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900">章节练习</h2>
          <span className="text-xs font-bold text-slate-400">共 {chapters.length} 章</span>
        </div>
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.title}
              type="button"
              onClick={() => onOpenLesson(chapter)}
              className="flex w-full items-center gap-3 rounded-3xl bg-slate-50 p-4 text-left"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-campus-600">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="truncate text-sm font-black text-slate-900">{chapter.title}</h3>
                  <span className="shrink-0 text-xs font-bold text-slate-400">{chapter.done}/{chapter.total}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-500">{chapter.desc}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
                  <div className={`h-full rounded-full bg-gradient-to-r ${gradient}`} style={{ width: `${Math.min(100, Math.round((chapter.done / chapter.total) * 100))}%` }} />
                </div>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}
        </div>
      </Card>
    </section>
  );
}

function PracticeLessonPage({ module, lesson, onBack }) {
  const Icon = module.icon;
  const gradient = getPracticeGradient(module);
  const example = getLessonExample(module, lesson);

  return (
    <section className="page-shell home-page">
      <Card className="p-5">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-campus-50 text-campus-700"
        >
          <ChevronRight className="rotate-180" size={20} />
        </button>

        <div className={`mb-5 rounded-[24px] bg-gradient-to-br ${gradient} p-5 text-white`}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black text-white/75">{module.title}</p>
              <h1 className="mt-2 text-xl font-black leading-7">{lesson.title}</h1>
              <p className="mt-2 text-xs font-semibold text-white/75">知识讲解</p>
            </div>
            <IconBubble icon={Icon} className="h-14 w-14 bg-white/20 text-white" size={28} />
          </div>
        </div>

        <div className="mb-5 rounded-2xl bg-slate-50 p-1 text-center text-xs font-black">
          <span className="block rounded-xl bg-white py-2 text-campus-600 shadow-soft">知识点</span>
        </div>

        <h2 className="text-xl font-black leading-8 text-slate-900">{lesson.title}</h2>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">
          本节围绕“{module.title}”常见风险场景进行梳理，帮助理解判断原则并掌握正确处理方法。
        </p>

        <div className="my-5 h-px bg-slate-100" />

        <div className="rounded-[24px] bg-slate-50 p-4">
          <p className="text-xs font-black text-campus-600">示例题</p>
          <h3 className="mt-3 text-base font-black leading-7 text-slate-900">{example.question}</h3>
          <div className="mt-4 space-y-3">
            {example.options.map((option, index) => (
              <div
                key={option}
                className={`rounded-2xl px-4 py-3 text-sm font-black ${index === example.answer ? 'bg-campus-100 text-campus-700' : 'bg-white text-slate-500'}`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>
        </div>

        <button className="mt-5 w-full rounded-2xl bg-campus-500 py-3 text-sm font-black text-white">标记已学</button>
      </Card>
    </section>
  );
}

function ExamOutlinePage({ exam, onBack, onOpenChapter }) {
  const Icon = getExamIcon(exam);
  const gradient = getExamGradient(exam);
  const chapters = getExamChapters(exam);

  return (
    <section className="page-shell home-page">
      <Card className="p-5">
        <div className="mb-5 flex items-center gap-3">
          <button
            type="button"
            onClick={onBack}
            className="grid h-9 w-9 place-items-center rounded-full bg-campus-50 text-campus-700"
          >
            <ChevronRight className="rotate-180" size={20} />
          </button>
          <div className="min-w-0">
            <h1 className="truncate text-xl font-black text-slate-900">{exam.title}</h1>
            <p className="mt-1 text-xs font-semibold text-slate-400">考试说明 · 模拟练习 · 成绩解析</p>
          </div>
        </div>

        <div className={`rounded-[24px] bg-gradient-to-br ${gradient} p-5 text-white`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black text-white/85">{exam.tags?.[0]?.text || '安全考试'}</p>
              <h2 className="mt-3 text-2xl font-black leading-8">{exam.score ? `${exam.score} 分` : exam.locked ? '待解锁' : '待考试'}</h2>
              <p className="mt-2 text-xs font-semibold text-white/75">{exam.questions}题 · {exam.duration} · {exam.takers}</p>
            </div>
            <IconBubble icon={Icon} className="h-16 w-16 bg-white/20 text-white" size={32} />
          </div>
        </div>
      </Card>

      <Card className="mt-5 p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-900">考试目录</h2>
          <span className="text-xs font-bold text-slate-400">共 {chapters.length} 项</span>
        </div>
        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.title}
              type="button"
              onClick={() => onOpenChapter(chapter)}
              className="flex w-full items-center gap-3 rounded-3xl bg-slate-50 p-4 text-left"
            >
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-sm font-black text-white`}>{index + 1}</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-black text-slate-900">{chapter.title}</h3>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{chapter.desc}</p>
              </div>
              <ChevronRight size={18} className="text-slate-300" />
            </button>
          ))}
        </div>
      </Card>
    </section>
  );
}

function ExamDetailPage({ exam, chapter, onBack }) {
  const Icon = getExamIcon(exam);
  const gradient = getExamGradient(exam);

  return (
    <section className="page-shell home-page">
      <Card className="p-5">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-campus-50 text-campus-700"
        >
          <ChevronRight className="rotate-180" size={20} />
        </button>

        <div className={`mb-5 grid h-40 place-items-center rounded-[24px] bg-gradient-to-br ${gradient} text-white`}>
          <Icon size={54} strokeWidth={2.2} />
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          {exam.tags.map((tag) => (
            <span key={tag.text} className={`rounded-lg px-3 py-1 text-xs font-black ${tag.className}`}>{tag.text}</span>
          ))}
        </div>

        <h1 className="text-2xl font-black leading-9 text-slate-900">{chapter.title}</h1>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">{chapter.desc}</p>

        <div className="my-5 h-px bg-slate-100" />

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-campus-50 p-4 text-center">
            <p className="text-xl font-black text-campus-600">{exam.questions}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">题目</p>
          </div>
          <div className="rounded-2xl bg-blue-50 p-4 text-center">
            <p className="text-xl font-black text-blue-500">{exam.duration.replace('分钟', '')}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">分钟</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-4 text-center">
            <p className="text-xl font-black text-amber-500">{exam.score || '--'}</p>
            <p className="mt-1 text-xs font-bold text-slate-500">成绩</p>
          </div>
        </div>

        <button className={`mt-5 w-full rounded-2xl py-3 text-sm font-black ${exam.locked ? 'bg-slate-100 text-slate-400' : 'bg-campus-500 text-white'}`}>
          {exam.locked ? '等待解锁' : exam.score ? '查看解析' : '开始考试'}
        </button>
      </Card>
    </section>
  );
}

function TopicListPage({ topic, onBack, onOpenArticle }) {
  const articles = safetyTopicArticles[topic.title] || [];
  const Icon = topic.icon;

  return (
    <section className="page-shell home-page">
      <Card className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBack}
              className="grid h-9 w-9 place-items-center rounded-full bg-campus-50 text-campus-700"
            >
              <ChevronRight className="rotate-180" size={20} />
            </button>
            <div>
              <h2 className="text-lg font-black text-slate-900">栏目列表</h2>
              <p className="mt-1 text-xs font-semibold text-slate-400">共 {articles.length} 篇精选资讯</p>
            </div>
          </div>
          <span className="rounded-full bg-campus-50 px-3 py-1 text-xs font-black text-campus-600">每日更新</span>
        </div>
      </Card>

      <div className="mt-4 space-y-4">
        {articles.map((article, index) => (
          <button
            key={article.title}
            type="button"
            onClick={() => onOpenArticle(article)}
            className="w-full rounded-[24px] bg-white p-4 text-left shadow-soft"
          >
            <div className="flex gap-4">
              <div className={`grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-gradient-to-br ${topic.color} text-white shadow-soft`}>
                <Icon size={34} strokeWidth={2.3} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-campus-50 px-2 py-1 text-[11px] font-black text-campus-600">{article.tag}</span>
                  <span className="text-[11px] font-bold text-slate-400">第 {index + 1} 课</span>
                </div>
                <h3 className="line-clamp-2 text-base font-black leading-6 text-slate-900">{article.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-slate-500">{article.summary}</p>
                <div className="mt-3 flex items-center justify-between text-[11px] font-bold text-slate-400">
                  <span>{article.time}</span>
                  <span>{article.read}</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function TopicArticlePage({ topic, article, onBack }) {
  const Icon = topic.icon;

  return (
    <section className="page-shell home-page">
      <article className="rounded-[28px] bg-white p-5 shadow-soft">
        <button
          type="button"
          onClick={onBack}
          className="mb-4 grid h-9 w-9 place-items-center rounded-full bg-campus-50 text-campus-700"
        >
          <ChevronRight className="rotate-180" size={20} />
        </button>
        <div className={`mb-5 grid h-40 place-items-center rounded-[24px] bg-gradient-to-br ${topic.color} text-white`}>
          <Icon size={54} strokeWidth={2.2} />
        </div>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-campus-50 px-3 py-1 text-xs font-black text-campus-600">{article.tag}</span>
          <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-bold text-slate-400">{article.time}</span>
        </div>

        <h2 className="text-2xl font-black leading-9 text-slate-900">{article.title}</h2>
        <p className="mt-3 text-sm font-medium leading-6 text-slate-500">{article.summary}</p>

        <div className="my-5 h-px bg-slate-100" />

        <div className="space-y-4">
          {article.content.map((paragraph) => (
            <p key={paragraph} className="text-sm font-medium leading-7 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-6 rounded-3xl bg-campus-50 p-4">
          <p className="text-xs font-black text-campus-700">安全提示</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-campus-900">{article.tip}</p>
        </div>
      </article>
    </section>
  );
}

function LegacyStudyPage() {
  return (
    <PageShell
      eyebrow={`早上好，${user.name}`}
      title="学习中心"
      subtitle="完成每日安全学习，掌握校园生活必备防护知识。"
    >
      <SectionTitle title="安全专题功能" action="全部专题" />
      <div className="topic-grid">
        {topics.map((topic) => (
          <Card key={topic.title}>
            <div className="flex gap-3">
              <IconBubble icon={topic.icon} className={`h-12 w-12 ${topic.color}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-black text-slate-900">{topic.title}</h3>
                  <span className="rounded-full bg-campus-50 px-2 py-1 text-[11px] font-bold text-campus-700">{topic.progress}%</span>
                </div>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{topic.desc}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full rounded-full bg-gradient-to-r from-campus-400 to-lime-300" style={{ width: `${topic.progress}%` }} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <SectionTitle title="专项练习" action="开始练习" />
      <div className="practice-grid">
        {topics.slice(0, 6).map((topic) => (
          <button key={topic.title} className="rounded-[22px] bg-white p-4 text-left shadow-soft">
            <div className="flex items-center justify-between">
              <IconBubble icon={topic.icon} className={`h-10 w-10 ${topic.color}`} size={19} />
              <ChevronRight size={18} className="text-slate-300" />
            </div>
            <p className="mt-3 font-black text-slate-900">{topic.title}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">单选 / 多选 / 判断</p>
          </button>
        ))}
      </div>

      <SectionTitle title="错题本" action="重做错题" />
      <Card>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-red-50 p-3 text-center">
            <p className="text-xl font-black text-red-500">16</p>
            <p className="text-xs font-bold text-slate-500">错题统计</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-3 text-center">
            <p className="text-xl font-black text-amber-500">3</p>
            <p className="text-xs font-bold text-slate-500">错题分类</p>
          </div>
          <div className="rounded-2xl bg-campus-50 p-3 text-center">
            <p className="text-xl font-black text-campus-600">5</p>
            <p className="text-xs font-bold text-slate-500">已收藏</p>
          </div>
        </div>
        <div className="space-y-3">
          {wrongBook.map((item) => (
            <div key={item.type} className="flex items-center justify-between rounded-2xl bg-slate-50 p-3">
              <div>
                <p className="font-black text-slate-900">{item.type}</p>
                <p className="mt-1 text-xs font-medium text-slate-500">{item.last}</p>
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-red-500">{item.count}题</span>
            </div>
          ))}
        </div>
      </Card>
    </PageShell>
  );
}

function AchievementsPage() {
  return (
    <PageShell eyebrow="成长可见" title="成就中心" subtitle="学习积分、荣誉勋章和电子证书集中展示。">
      <Card className="overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500">学习积分</p>
            <p className="mt-1 text-4xl font-black text-campus-700">{user.points}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">完成学习和任务获得积分</p>
          </div>
          <IconBubble icon={Star} className="h-16 w-16 bg-yellow-100 text-yellow-500" size={30} />
        </div>
        <div className="mt-4 rounded-2xl bg-gradient-to-r from-campus-50 to-lime-50 p-3">
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="text-slate-700">本周目标</span>
            <span className="text-campus-700">420 / 500</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
            <div className="h-full w-[84%] rounded-full bg-campus-500" />
          </div>
        </div>
      </Card>

      <SectionTitle title="荣誉证书" action="查看全部" />
      <div className="medal-grid">
        {medals.map((medal) => (
          <Card key={medal.name} className={!medal.active ? 'opacity-60' : ''}>
            <div className="flex items-start justify-between">
              <IconBubble
                icon={medal.icon}
                className={`h-12 w-12 ${medal.active ? 'bg-yellow-100 text-yellow-500' : 'bg-slate-100 text-slate-400'}`}
              />
              {medal.active && <CheckCircle2 size={18} className="text-campus-500" />}
            </div>
            <p className="mt-3 font-black text-slate-900">{medal.name}</p>
            <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{medal.desc}</p>
          </Card>
        ))}
      </div>

      <SectionTitle title="积分排行榜" />
      <Card>
        {['陈同学', '林同学', '周同学'].map((name, index) => (
          <div key={name} className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-b-0">
            <span className={`grid h-7 w-7 place-items-center rounded-full text-sm font-black ${index === 0 ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-100 text-slate-500'}`}>
              {index + 1}
            </span>
            <span className="flex-1 font-bold text-slate-800">{name}</span>
            <span className="font-black text-campus-600">{[3120, 2680, 2408][index]}</span>
          </div>
        ))}
      </Card>
    </PageShell>
  );
}

function ShopPage() {
  return (
    <PageShell eyebrow="权益服务" title="办卡商城" subtitle="校园安全卡、亲情守护服务和积分权益兑换。">
      <Card className="bg-gradient-to-br from-white to-campus-50">
        <div className="flex items-center gap-3">
          <IconBubble icon={CreditCard} className="h-14 w-14 bg-campus-100 text-campus-600" size={28} />
          <div>
            <p className="text-lg font-black text-slate-900">学生安全服务卡</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">定位守护 · 反诈拦截 · 上网管理</p>
          </div>
        </div>
      </Card>

      <SectionTitle title="推荐套餐" action="订单记录" />
      <div className="shop-grid">
        {products.map((product) => (
          <Card key={product.name}>
            <div className="flex items-center gap-3">
              <IconBubble icon={product.icon} className={`h-14 w-14 bg-gradient-to-br ${product.color} text-white`} size={27} />
              <div className="min-w-0 flex-1">
                <p className="font-black text-slate-900">{product.name}</p>
                <p className="mt-1 text-xs font-bold text-slate-500">{product.tag}</p>
              </div>
              <div className="text-right">
                <p className="font-black text-red-500">{product.price}</p>
                <button className="mt-2 rounded-full bg-campus-500 px-3 py-1 text-xs font-black text-white">办理</button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <SectionTitle title="积分可兑换" />
      <Card>
        {['安全教育文创徽章', '校园活动门票', '学习资料包'].map((item, index) => (
          <div key={item} className="flex items-center justify-between border-b border-slate-100 py-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <IconBubble icon={Gift} className="h-10 w-10 bg-orange-100 text-orange-500" size={20} />
              <span className="font-bold text-slate-800">{item}</span>
            </div>
            <span className="text-xs font-black text-campus-600">{[300, 500, 800][index]}积分</span>
          </div>
        ))}
      </Card>
    </PageShell>
  );
}

function ParentPage() {
  return (
    <PageShell eyebrow="守护看得见" title="家长监管" subtitle="围绕反诈拦截、位置安全和上网管理构建家庭守护。">
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-slate-500">学生实时状态</p>
            <p className="mt-1 text-xl font-black text-slate-900">位于科教城校区附近</p>
            <p className="mt-1 text-xs font-semibold text-campus-700">2分钟前更新 · 设备在线</p>
          </div>
          <IconBubble icon={MapPinned} className="h-14 w-14 bg-campus-100 text-campus-600" size={28} />
        </div>
        <div className="mt-4 h-36 overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#d9f8e6_0%,#ecfeff_55%,#e0f2fe_100%)] p-4">
          <div className="relative h-full rounded-2xl border border-white/80 bg-white/50">
            <span className="absolute left-8 top-7 h-2 w-20 rounded-full bg-campus-300" />
            <span className="absolute bottom-8 right-8 h-2 w-28 rounded-full bg-sky-300" />
            <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-campus-500 text-white shadow-float">
              <LocateFixed size={24} />
            </span>
          </div>
        </div>
      </Card>

      <SectionTitle title="监管功能" action="全部设置" />
      <div className="parent-grid">
        {parentTools.map((tool) => (
          <Card key={tool.title}>
            <div className="flex gap-3">
              <IconBubble icon={tool.icon} className={`h-12 w-12 ${tool.color}`} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-black text-slate-900">{tool.title}</p>
                  <span className="rounded-full bg-slate-50 px-2 py-1 text-[11px] font-bold text-slate-500">{tool.state}</span>
                </div>
                <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{tool.desc}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function MorePage() {
  const moreItems = [
    { label: '消息通知', value: '3 条未读', icon: Bell },
    { label: '帮助反馈', value: '在线客服', icon: MessageCircle },
    { label: '账号安全', value: '已保护', icon: LockKeyhole },
    { label: '服务中心', value: '常用功能', icon: Sparkles },
  ];

  return (
    <PageShell eyebrow="更多服务" title="更多" subtitle="常用服务、通知提醒和帮助反馈集中查看。">
      <Card>
        {moreItems.map((item) => (
          <button key={item.label} className="flex w-full items-center gap-3 border-b border-slate-100 py-4 text-left last:border-b-0">
            <IconBubble icon={item.icon} className="h-11 w-11 bg-campus-50 text-campus-600" size={21} />
            <span className="flex-1 font-black text-slate-900">{item.label}</span>
            <span className="text-xs font-bold text-slate-400">{item.value}</span>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
        ))}
      </Card>
    </PageShell>
  );
}

function MinePage() {
  const stats = [
    { value: '12', label: '完成课程', color: 'text-blue-600' },
    { value: '1,280', label: '积分', color: 'text-emerald-600' },
    { value: '5', label: '勋章', color: 'text-purple-600' },
    { value: '89', label: '排名', color: 'text-amber-600' },
  ];

  const sections = [
    {
      title: '学习相关',
      items: [
        { label: '我的学习', value: '12门课程已完成', icon: BookOpen, color: 'bg-blue-500 text-white' },
        { label: '我的考试', value: '12次考试记录', icon: BadgeCheck, color: 'bg-emerald-500 text-white' },
        { label: '我的积分', value: '1,280积分', icon: Star, color: 'bg-amber-500 text-white' },
      ],
    },
    {
      title: '成就与荣誉',
      items: [
        { label: '排行榜', value: '当前排名第89名', icon: Award, color: 'bg-purple-500 text-white' },
        { label: '荣誉勋章', value: '已获得5枚勋章', icon: Shield, color: 'bg-cyan-500 text-white' },
        { label: '考试证书', value: '已获得3张证书', icon: Trophy, color: 'bg-rose-500 text-white' },
      ],
    },
    {
      title: '家长监管',
      items: [
        { label: '实时定位', value: '查看学生位置', icon: MapPinned, color: 'bg-blue-500 text-white' },
        { label: '电子围栏', value: '已设置2个围栏', icon: LockKeyhole, color: 'bg-emerald-500 text-white' },
        { label: '上网管理', value: '管理上网时段', icon: Wifi, color: 'bg-purple-500 text-white' },
        { label: '反诈拦截', value: '本月拦截23次', icon: ShieldAlert, color: 'bg-red-500 text-white' },
      ],
    },
    {
      title: '服务支持',
      items: [
        { label: '家庭成员', value: '已绑定3位成员', icon: UsersRound, color: 'bg-blue-500 text-white' },
        { label: '消息中心', value: '3条未读消息', icon: MessageCircle, color: 'bg-amber-500 text-white' },
        { label: '帮助反馈', value: '常见问题与反馈', icon: HelpCircle, color: 'bg-cyan-500 text-white' },
        { label: '设置', value: '账号与安全设置', icon: Settings, color: 'bg-slate-500 text-white' },
      ],
    },
  ];

  return (
    <section className="page-shell">
      <header className="mine-hero">
        <div className="relative z-10 flex items-center gap-4">
          <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-white/45 bg-white/20 text-white">
            <UserRound size={42} strokeWidth={2.4} />
            <span className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-white text-slate-600 shadow-soft">
              <Camera size={16} />
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-white">张同学</h1>
              <span className="grid h-7 w-7 place-items-center rounded-full bg-white/18 text-white">
                <Pencil size={14} />
              </span>
            </div>
            <p className="mt-1 max-w-[210px] text-sm font-semibold leading-5 text-white/78">ID: 2025060001 · 计算机科学与技术学院</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/40 bg-white/16 px-3 py-1 text-xs font-black text-white">学生</span>
              <span className="rounded-full border border-white/30 bg-emerald-300/20 px-3 py-1 text-xs font-black text-white">已实名</span>
              <span className="rounded-full border border-amber-200/60 bg-amber-300/20 px-3 py-1 text-xs font-black text-white">Lv.3</span>
            </div>
          </div>
          <button className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/16 text-white">
            <QrCode size={24} />
          </button>
        </div>
      </header>

      <Card className="relative z-10 -mt-10 grid grid-cols-4 gap-1 px-3 py-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0">
            <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
            <p className="mt-1 text-[11px] font-bold text-slate-500">{stat.label}</p>
          </div>
        ))}
      </Card>

      <div className="mt-5 space-y-5">
        {sections.map((section) => (
          <Card key={section.title} className="overflow-hidden p-0">
            <div className="border-b border-slate-100 px-5 py-4">
              <h2 className="text-base font-black text-slate-400">{section.title}</h2>
            </div>
            {section.items.map((item) => (
              <button key={item.label} className="flex w-full items-center gap-3 border-b border-slate-100 px-5 py-4 text-left last:border-b-0">
                <IconBubble icon={item.icon} className={`h-12 w-12 rounded-2xl ${item.color}`} size={23} />
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-black text-slate-900">{item.label}</span>
                  <span className="mt-1 block text-xs font-semibold text-slate-400">{item.value}</span>
                </span>
                <ChevronRight size={18} className="text-slate-300" />
              </button>
            ))}
          </Card>
        ))}

        <Card className="p-0">
          <button className="flex w-full items-center justify-center gap-2 px-5 py-4 text-base font-black text-red-500">
            <LogOut size={20} />
            退出登录
          </button>
        </Card>
      </div>
    </section>
  );
}

function BottomNav({ activeTab, onChange }) {
  return (
    <nav className="app-tabbar">
      <div className="grid grid-cols-5 rounded-[26px] border border-white/70 bg-white/90 p-2 shadow-float backdrop-blur">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              onClick={() => onChange(tab.key)}
              className={`flex min-w-0 flex-col items-center gap-1 rounded-2xl px-1 py-2 transition ${
                active ? 'bg-campus-50 text-campus-700' : 'text-slate-400'
              }`}
            >
              <Icon size={21} strokeWidth={active ? 2.8 : 2.2} />
              <span className="w-full truncate text-[10px] font-black">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('study');
  const [showLearningCenter, setShowLearningCenter] = useState(false);
  const [showExamCenter, setShowExamCenter] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedPractice, setSelectedPractice] = useState(null);
  const [selectedPracticeLesson, setSelectedPracticeLesson] = useState(null);
  const [selectedExamCard, setSelectedExamCard] = useState(null);
  const [selectedExamChapter, setSelectedExamChapter] = useState(null);

  const CurrentPage = useMemo(() => {
    return {
      achievements: AchievementsPage,
      shop: ShopPage,
      parent: ParentPage,
      mine: MinePage,
    }[activeTab];
  }, [activeTab]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setShowLearningCenter(false);
    setShowExamCenter(false);
    setSelectedTopic(null);
    setSelectedArticle(null);
    setSelectedPractice(null);
    setSelectedPracticeLesson(null);
    setSelectedExamCard(null);
    setSelectedExamChapter(null);
  };

  return (
    <main className="app-bg min-h-dvh text-slate-900">
      <div className="app-shell">
        {activeTab === 'study' ? (
          selectedTopic && selectedArticle ? (
            <TopicArticlePage topic={selectedTopic} article={selectedArticle} onBack={() => setSelectedArticle(null)} />
          ) : selectedTopic ? (
            <TopicListPage topic={selectedTopic} onBack={() => setSelectedTopic(null)} onOpenArticle={setSelectedArticle} />
          ) : selectedPractice && selectedPracticeLesson ? (
            <PracticeLessonPage module={selectedPractice} lesson={selectedPracticeLesson} onBack={() => setSelectedPracticeLesson(null)} />
          ) : selectedPractice ? (
            <PracticeModulePage
              module={selectedPractice}
              onBack={() => setSelectedPractice(null)}
              onOpenLesson={setSelectedPracticeLesson}
            />
          ) : selectedExamCard && selectedExamChapter ? (
            <ExamDetailPage exam={selectedExamCard} chapter={selectedExamChapter} onBack={() => setSelectedExamChapter(null)} />
          ) : selectedExamCard ? (
            <ExamOutlinePage
              exam={selectedExamCard}
              onBack={() => setSelectedExamCard(null)}
              onOpenChapter={setSelectedExamChapter}
            />
          ) : showLearningCenter ? (
            <LearningCenterPage
              onBack={() => setShowLearningCenter(false)}
              onOpenPractice={(module) => {
                setSelectedPractice(module);
                setSelectedPracticeLesson(null);
              }}
            />
          ) : showExamCenter ? (
            <ExamCenterPage
              onBack={() => setShowExamCenter(false)}
              onOpenExamCard={(exam) => {
                setSelectedExamCard(exam);
                setSelectedExamChapter(null);
              }}
            />
          ) : (
            <StudyPage
              onOpenLearning={() => setShowLearningCenter(true)}
              onOpenExam={() => setShowExamCenter(true)}
              onOpenTopic={(topic) => {
                setSelectedTopic(topic);
                setSelectedArticle(null);
              }}
            />
          )
        ) : (
          <CurrentPage />
        )}
        <BottomNav activeTab={activeTab} onChange={handleTabChange} />
      </div>
    </main>
  );
}

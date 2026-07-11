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
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Crown,
  Flame,
  Gift,
  Globe2,
  HeartPulse,
  Home,
  IdCard,
  Landmark,
  LocateFixed,
  LockKeyhole,
  Map,
  MapPinned,
  MessageCircle,
  Phone,
  Radar,
  School,
  Shield,
  ShieldAlert,
  ShoppingBag,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  UsersRound,
  Wifi,
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
  { title: '考试测评', icon: BadgeCheck, color: 'from-sky-400 to-blue-500' },
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
  { title: '应急救护', desc: '突发事件自救互救技能', icon: AlertTriangle, color: 'bg-amber-100 text-amber-600', progress: 45 },
];

const wrongBook = [
  { type: '反诈骗', count: 8, last: '冒充公检法诈骗识别' },
  { type: '网络安全', count: 5, last: '陌生 Wi-Fi 风险判断' },
  { type: '交通安全', count: 3, last: '骑行头盔佩戴规则' },
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
  { key: 'study', label: '学习中心', icon: BookOpen },
  { key: 'achievements', label: '成就中心', icon: Trophy },
  { key: 'shop', label: '办卡商城', icon: ShoppingBag },
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

function Card({ children, className = '' }) {
  return <div className={`rounded-[24px] bg-white p-4 shadow-soft ${className}`}>{children}</div>;
}

function StudyPage() {
  return (
    <PageShell
      eyebrow={`早上好，${user.name}`}
      title="学习中心"
      subtitle="完成每日安全学习，掌握校园生活必备防护知识。"
    >
      <Card className="mb-4">
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-campus-100 text-xl font-black text-campus-700">
            {user.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black text-slate-900">{user.name} · {user.role}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">今日学习 18 分钟 · 连续打卡 {user.streak} 天</p>
          </div>
          <Bell size={20} className="text-campus-600" />
        </div>
        <div className="mt-4 rounded-2xl bg-campus-50 p-3 text-sm font-semibold leading-6 text-campus-800">
          紧急公告：近期请警惕冒充客服退款类诈骗，不点击陌生链接。
        </div>
      </Card>

      <div className="quick-grid">
        {quickEntries.map((item) => (
          <button key={item.title} className="flex flex-col items-center gap-2 rounded-3xl bg-white px-1 py-3 shadow-soft">
            <IconBubble icon={item.icon} className={`h-11 w-11 bg-gradient-to-br ${item.color} text-white`} size={20} />
            <span className="text-[11px] font-bold text-slate-700">{item.title}</span>
          </button>
        ))}
      </div>

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

function MinePage() {
  const items = [
    { label: '实名认证', value: '已认证', icon: IdCard },
    { label: '我的积分', value: `${user.points} 分`, icon: Star },
    { label: '家庭成员', value: `${user.family.length} 位`, icon: UsersRound },
    { label: '帮助反馈', value: 'FAQ / 客服', icon: MessageCircle },
  ];

  return (
    <PageShell eyebrow="个人中心" title="我的" subtitle="管理个人身份、家庭成员、积分和反馈记录。">
      <Card>
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-campus-400 to-lime-300 text-2xl font-black text-white">
            {user.avatar}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xl font-black text-slate-900">{user.name}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">用户ID：{user.id}</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">身份：{user.role} · {user.phone}</p>
          </div>
        </div>
      </Card>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Card className="text-center">
          <p className="text-xl font-black text-campus-700">{user.points}</p>
          <p className="text-xs font-bold text-slate-500">积分</p>
        </Card>
        <Card className="text-center">
          <p className="text-xl font-black text-campus-700">{user.streak}</p>
          <p className="text-xs font-bold text-slate-500">打卡</p>
        </Card>
        <Card className="text-center">
          <p className="text-xl font-black text-campus-700">92%</p>
          <p className="text-xs font-bold text-slate-500">完成率</p>
        </Card>
      </div>

      <SectionTitle title="账户服务" />
      <Card>
        {items.map((item) => (
          <button key={item.label} className="flex w-full items-center gap-3 border-b border-slate-100 py-4 text-left last:border-b-0">
            <IconBubble icon={item.icon} className="h-11 w-11 bg-campus-50 text-campus-600" size={21} />
            <span className="flex-1 font-black text-slate-900">{item.label}</span>
            <span className="text-xs font-bold text-slate-400">{item.value}</span>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
        ))}
      </Card>

      <SectionTitle title="我的学习考试" />
      <Card>
        <div className="flex items-center gap-3">
          <IconBubble icon={CalendarDays} className="h-12 w-12 bg-sky-100 text-sky-600" />
          <div className="flex-1">
            <p className="font-black text-slate-900">本月学习记录</p>
            <p className="mt-1 text-xs font-semibold text-slate-500">完成 18 个课程 · 参加 4 次测评</p>
          </div>
          <ChevronRight size={18} className="text-slate-300" />
        </div>
      </Card>
    </PageShell>
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

  const CurrentPage = useMemo(() => {
    return {
      study: StudyPage,
      achievements: AchievementsPage,
      shop: ShopPage,
      parent: ParentPage,
      mine: MinePage,
    }[activeTab];
  }, [activeTab]);

  return (
    <main className="app-bg min-h-dvh text-slate-900">
      <div className="app-shell">
        <CurrentPage />
        <BottomNav activeTab={activeTab} onChange={setActiveTab} />
      </div>
    </main>
  );
}

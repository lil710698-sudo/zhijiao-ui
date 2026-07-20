(() => {
  const certificates = [
    { title: '课程证书', date: '2026年09月14日', number: '26135xBJW7457', note: '完成相关课程学习，考试成绩优秀。' },
    { title: '网络安全知识考试证书', date: '2026年09月12日', number: '26135xAQW9138', note: '完成网络安全知识考试，成绩优秀。' },
    { title: '反诈骗知识专项测试证书', date: '2026年09月10日', number: '26135xFZW6824', note: '完成反诈骗知识专项测试，成绩优秀。' },
    { title: '交通安全知识考试证书', date: '2026年09月08日', number: '26135xJTW4076', note: '完成交通安全知识考试，成绩优秀。' },
  ];

  const style = document.createElement('style');
  style.textContent = `
    .certificate-flow { position: fixed; z-index: 9999; inset: 0; overflow: hidden; background: linear-gradient(180deg,#effcf4 0%,#f9fffb 100%); color:#0f2e1d; font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif; }
    .certificate-screen { height:100%; overflow-y:auto; padding:16px 16px calc(28px + env(safe-area-inset-bottom,0px)); }
    .certificate-top { display:grid; grid-template-columns:42px 1fr 42px; align-items:center; min-height:46px; margin-bottom:14px; }
    .certificate-back { display:grid; place-items:center; width:38px; height:38px; border:0; border-radius:50%; background:#eaf9ef; color:#167846; font-size:28px; line-height:1; }
    .certificate-top h1 { margin:0; color:#10291d; font-size:18px; font-weight:900; text-align:center; }.certificate-count { justify-self:end; color:#168653; font-size:12px; font-weight:800; }
    .certificate-intro { margin:0 3px 16px; color:#6b7b72; font-size:13px; font-weight:600; line-height:1.65; }
    .certificate-list { display:grid; gap:14px; }.certificate-item { display:grid; grid-template-columns:106px minmax(0,1fr); gap:14px; width:100%; padding:12px; border:0; border-radius:22px; background:#fff; box-shadow:0 10px 26px rgba(15,82,48,.1); color:inherit; text-align:left; }
    .certificate-thumb { position:relative; display:grid; aspect-ratio:.7; place-items:center; overflow:hidden; border:6px double #7c9295; background:repeating-radial-gradient(circle at 30% 30%,rgba(70,100,100,.08) 0 1px,transparent 1px 5px),#fbfcf7; color:#a72a2a; font-family:STKaiti,"KaiTi",serif; font-size:15px; font-weight:900; text-align:center; }.certificate-thumb:before { position:absolute; inset:5px; border:1px solid #9eafb0; content:""; }.certificate-thumb span { position:relative; max-width:70px; line-height:1.4; }
    .certificate-item h2 { margin:8px 0 7px; color:#172c20; font-size:16px; font-weight:900; line-height:1.45; }.certificate-item p { margin:0; color:#94a3b8; font-size:12px; font-weight:700; }.certificate-item .certificate-view { display:inline-flex; margin-top:16px; border-radius:11px; padding:7px 11px; background:#eaf9ef; color:#168653; font-size:12px; font-weight:900; }
    .certificate-paper-wrap { display:flex; justify-content:center; padding:2px 0 20px; }.certificate-paper { position:relative; width:min(100%,390px); aspect-ratio:.71; overflow:hidden; border:13px double #789195; padding:clamp(28px,8vw,44px) clamp(24px,7vw,39px); background:repeating-radial-gradient(ellipse at 20% 20%,rgba(75,100,100,.075) 0 1px,transparent 1px 6px),#fcfdf8; box-shadow:0 16px 32px rgba(36,76,61,.16); color:#18201f; font-family:STKaiti,"KaiTi","Songti SC",serif; }.certificate-paper:before { position:absolute; inset:8px; border:2px solid #839fa0; content:""; pointer-events:none; }.certificate-paper:after { position:absolute; inset:16px; border:1px solid #bac8bf; content:""; pointer-events:none; }
    .certificate-paper > * { position:relative; z-index:1; }.certificate-paper h2 { margin:8% 0 18%; color:#a8232b; font-family:STKaiti,"KaiTi",serif; font-size:clamp(28px,8vw,40px); font-weight:900; text-align:center; letter-spacing:3px; }.certificate-body { font-size:clamp(17px,4.8vw,23px); font-weight:700; line-height:1.9; }.certificate-body p { margin:0 0 20px; }.certificate-body .certificate-name { font-weight:900; }.certificate-meta { position:absolute; right:clamp(24px,7vw,39px); bottom:13%; font-size:clamp(14px,4vw,19px); font-weight:800; line-height:1.9; text-align:right; }.certificate-seal { position:absolute; left:15%; bottom:10%; display:grid; width:58px; height:58px; place-items:center; border:2px solid rgba(176,42,42,.62); border-radius:50%; color:rgba(176,42,42,.65); font-size:12px; font-weight:900; transform:rotate(-16deg); }
    @media (min-width:640px) { .certificate-flow { left:50%; width:min(100%,840px); transform:translateX(-50%); }.certificate-list { grid-template-columns:repeat(2,minmax(0,1fr)); }.certificate-item { grid-template-columns:92px minmax(0,1fr); } }
  `;
  document.head.appendChild(style);

  const close = () => document.querySelector('.certificate-flow')?.remove();
  const flow = (content) => `<section class="certificate-flow"><div class="certificate-screen">${content}</div></section>`;
  const header = (title, count = '') => `<header class="certificate-top"><button class="certificate-back" aria-label="返回">‹</button><h1>${title}</h1><span class="certificate-count">${count}</span></header>`;

  function showList() {
    const cards = certificates.map((item, index) => `<button class="certificate-item" data-certificate="${index}"><div class="certificate-thumb"><span>${item.title}</span></div><span><h2>${item.title}</h2><p>获得时间：${item.date}</p><b class="certificate-view">查看证书</b></span></button>`).join('');
    document.querySelector('.certificate-flow')?.remove();
    document.body.insertAdjacentHTML('beforeend', flow(`${header('考试证书', `共 ${certificates.length} 张`)}<p class="certificate-intro">每一张证书，记录你在安全学习中的认真与收获。</p><main class="certificate-list">${cards}</main>`));
    document.querySelector('.certificate-back').onclick = close;
    document.querySelectorAll('[data-certificate]').forEach((card) => { card.onclick = () => showDetail(certificates[Number(card.dataset.certificate)]); });
  }

  function showDetail(item) {
    document.querySelector('.certificate-flow')?.remove();
    const paper = `<div class="certificate-paper-wrap"><article class="certificate-paper"><h2>${item.title}</h2><div class="certificate-body"><p class="certificate-name">张同学：</p><p>您在2026年度安全教育培训学习中，<br>完成相关课程学习，${item.note}<br>特颁此证。</p></div><span class="certificate-seal">安全教育<br>培训中心</span><div class="certificate-meta">证书号：${item.number}<br>${item.date}</div></article></div>`;
    document.body.insertAdjacentHTML('beforeend', flow(`${header('证书详情')}${paper}`));
    document.querySelector('.certificate-back').onclick = showList;
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('button');
    if (!trigger || !trigger.textContent.includes('考试证书')) return;
    event.preventDefault(); event.stopPropagation(); showList();
  }, true);
})();

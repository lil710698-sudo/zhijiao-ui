(() => {
  const certificates = [
    { schoolName: '咖瓦大学', studentName: '张小可', examName: '网络安全知识模拟考试', issueDate: '2026年7月20日', certificateId: '26135xAQW9138', score: 96 },
    { schoolName: '咖瓦大学', studentName: '张小可', examName: '反诈骗知识专项测试', issueDate: '2026年7月18日', certificateId: '26135xFZW6824', score: 94 },
    { schoolName: '咖瓦大学', studentName: '张小可', examName: '交通安全知识考试', issueDate: '2026年7月16日', certificateId: '26135xJTW4076', score: 98 },
  ];

  const style = document.createElement('style');
  style.textContent = `
    .certificate-flow { position:fixed; z-index:9999; inset:0; overflow:hidden; background:#f4fbf6; color:#14251e; font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif; }
    .certificate-screen { height:100%; overflow-y:auto; padding:16px 16px calc(30px + env(safe-area-inset-bottom,0px)); }
    .certificate-top { display:grid; grid-template-columns:42px 1fr 42px; align-items:center; min-height:46px; margin-bottom:16px; }.certificate-top h1 { margin:0; color:#122c20; font-size:18px; font-weight:900; text-align:center; }.certificate-back { display:grid; width:38px; height:38px; place-items:center; border:0; border-radius:50%; background:#e8f8ed; color:#177747; font-size:29px; line-height:1; }.certificate-count { justify-self:end; color:#719081; font-size:12px; font-weight:800; }
    .certificate-intro { margin:0 4px 16px; color:#72827a; font-size:13px; font-weight:600; line-height:1.65; }.certificate-list { display:grid; gap:14px; }.certificate-item { display:grid; grid-template-columns:128px minmax(0,1fr); gap:14px; width:100%; padding:11px; border:0; border-radius:22px; background:#fff; box-shadow:0 10px 25px rgba(15,82,48,.1); color:inherit; text-align:left; }.certificate-item h2 { margin:8px 0 7px; color:#17271f; font-size:15px; font-weight:900; line-height:1.45; }.certificate-item p { margin:4px 0; color:#87968e; font-size:12px; font-weight:700; }.certificate-view { display:inline-flex; margin-top:10px; border:1px solid #c7a96e; border-radius:10px; padding:6px 10px; color:#8c6a2c; font-size:12px; font-weight:900; }
    .certificate-mini { position:relative; display:grid; aspect-ratio:4/3; overflow:hidden; place-items:center; border:5px solid #d5bd87; background:#fff; color:#162f4b; }.certificate-mini:before { position:absolute; inset:5px; border:1px solid #d6bd86; content:""; }.certificate-mini b { position:absolute; top:0; right:0; left:0; height:37%; display:grid; place-items:center; background:#183957; color:#e8d29b; font-family:STKaiti,"KaiTi",serif; font-size:17px; letter-spacing:2px; }.certificate-mini span { position:relative; z-index:1; margin-top:28%; color:#1b1b1b; font-family:STKaiti,"KaiTi",serif; font-size:10px; font-weight:900; }
    .certificate-detail-note { margin:-4px 0 14px; color:#7c8b83; font-size:12px; font-weight:600; text-align:center; }.certificate-paper-wrap { display:flex; justify-content:center; }.certificate-paper { position:relative; width:100%; max-width:680px; aspect-ratio:4/3; overflow:hidden; border:10px solid #cdb27c; padding:clamp(13px,4vw,30px); background:#fff; box-shadow:0 14px 28px rgba(15,45,54,.18); cursor:zoom-in; }.certificate-paper:before { position:absolute; inset:8px; border:2px solid #d5bd87; content:""; pointer-events:none; }.certificate-paper:after { position:absolute; inset:18px; border:1px solid #dfcda6; content:""; pointer-events:none; }
    .certificate-blue { position:absolute; top:0; right:0; left:0; height:36%; background:#183957; }.certificate-title { position:absolute; top:12%; right:0; left:0; z-index:1; margin:0; color:#ead39f; font-family:STKaiti,"KaiTi","Songti SC",serif; font-size:clamp(26px,8vw,62px); font-weight:900; letter-spacing:clamp(4px,1.8vw,14px); text-align:center; }.certificate-content { position:absolute; z-index:1; top:47%; right:12%; left:12%; color:#171717; font-family:STKaiti,"KaiTi","Songti SC",serif; font-size:clamp(14px,4vw,31px); font-weight:700; line-height:1.75; text-align:center; }.certificate-content p { margin:0 0 12px; }.certificate-student { display:inline-block; border-bottom:2px solid #d7c18d; padding:0 5px 3px; font-weight:900; }.certificate-date { position:absolute; z-index:1; right:12%; bottom:12%; color:#222; font-family:"Songti SC",serif; font-size:clamp(11px,2.4vw,20px); }.certificate-id { position:absolute; z-index:1; left:12%; bottom:10%; color:#8a795a; font-size:10px; letter-spacing:.4px; }
    .certificate-flourish { position:absolute; z-index:1; color:#dec99b; font-family:Georgia,serif; font-size:clamp(23px,5vw,48px); line-height:1; }.certificate-flourish.tl { top:7%; left:7%; }.certificate-flourish.tr { top:7%; right:7%; transform:scaleX(-1); }.certificate-flourish.bl { bottom:6%; left:7%; transform:rotate(180deg); }.certificate-flourish.br { right:7%; bottom:6%; transform:rotate(180deg) scaleX(-1); }
    .certificate-preview { position:fixed; z-index:10000; inset:0; display:flex; align-items:center; justify-content:center; padding:12px; background:rgba(6,18,29,.94); }.certificate-preview .certificate-paper { width:min(100%,900px); max-width:none; max-height:calc(100dvh - 24px); box-shadow:none; }.certificate-preview-close { position:fixed; z-index:2; top:16px; right:16px; display:grid; width:38px; height:38px; place-items:center; border:1px solid rgba(255,255,255,.6); border-radius:50%; background:rgba(0,0,0,.3); color:#fff; font-size:23px; }
    @media (min-width:640px) { .certificate-flow { left:50%; width:min(100%,840px); transform:translateX(-50%); }.certificate-list { grid-template-columns:repeat(2,minmax(0,1fr)); } }
  `;
  document.head.appendChild(style);

  const close = () => document.querySelector('.certificate-flow')?.remove();
  const flow = (content) => `<section class="certificate-flow"><div class="certificate-screen">${content}</div></section>`;
  const header = (title, count = '') => `<header class="certificate-top"><button class="certificate-back" aria-label="返回">‹</button><h1>${title}</h1><span class="certificate-count">${count}</span></header>`;
  const CertificateTemplate = ({ schoolName, studentName, examName, issueDate, certificateId }) => `<article class="certificate-paper" data-certificate-id="${certificateId}" aria-label="${examName}证书"><div class="certificate-blue"></div><span class="certificate-flourish tl">❧</span><span class="certificate-flourish tr">❧</span><span class="certificate-flourish bl">❧</span><span class="certificate-flourish br">❧</span><h2 class="certificate-title">荣誉证书</h2><div class="certificate-content"><p>${schoolName} <span class="certificate-student">${studentName}</span> 同学</p><p>通过“${examName}”考试，特颁此证。</p></div><span class="certificate-id">证书编号：${certificateId}</span><span class="certificate-date">${issueDate}</span></article>`;

  function showList() {
    const cards = certificates.map((item, index) => `<button class="certificate-item" data-certificate="${index}"><div class="certificate-mini"><b>荣誉证书</b><span>${item.examName}</span></div><span><h2>${item.examName}证书</h2><p>考试成绩：${item.score} 分</p><p>获得日期：${item.issueDate}</p><b class="certificate-view">查看证书</b></span></button>`).join('');
    document.querySelector('.certificate-flow')?.remove();
    document.body.insertAdjacentHTML('beforeend', flow(`${header('考试证书', `共 ${certificates.length} 张`)}<p class="certificate-intro">安全学习成果已生成证书，点击可查看完整内容。</p><main class="certificate-list">${cards}</main>`));
    document.querySelector('.certificate-back').onclick = close;
    document.querySelectorAll('[data-certificate]').forEach((card) => { card.onclick = () => showDetail(certificates[Number(card.dataset.certificate)]); });
  }

  function showPreview(item) {
    document.body.insertAdjacentHTML('beforeend', `<section class="certificate-preview"><button class="certificate-preview-close" aria-label="关闭预览">×</button>${CertificateTemplate(item)}</section>`);
    document.querySelector('.certificate-preview-close').onclick = () => document.querySelector('.certificate-preview')?.remove();
  }

  function showDetail(item) {
    document.querySelector('.certificate-flow')?.remove();
    document.body.insertAdjacentHTML('beforeend', flow(`${header('证书详情')}<p class="certificate-detail-note">点击证书可全屏预览</p><div class="certificate-paper-wrap">${CertificateTemplate(item)}</div>`));
    document.querySelector('.certificate-back').onclick = showList;
    document.querySelector('.certificate-paper').onclick = () => showPreview(item);
  }

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('button');
    if (!trigger || !trigger.textContent.includes('考试证书')) return;
    event.preventDefault(); event.stopPropagation(); showList();
  }, true);
})();

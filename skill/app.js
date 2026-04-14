const STORAGE_KEY = 'android_skill_tree_v1';

const skills = [
  { id: '1.1', name: 'Android Studio安装', module: '环境搭建', time: '0.5h', diff: 1, prereqs: [], x: 0, y: 0, icon: '📱', desc: '安装和配置Android Studio开发环境' },
  { id: '1.2', name: 'JDK配置', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.1'], x: 1, y: 0, icon: '☕', desc: '配置Java开发工具包' },
  { id: '1.3', name: 'SDK配置', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.1'], x: 2, y: 0, icon: '📦', desc: '配置Android SDK和构建工具' },
  { id: '1.4', name: 'AVD创建与优化', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.3'], x: 3, y: 0, icon: '📺', desc: '创建和优化Android虚拟设备' },

  { id: '2.1', name: '创建首个项目', module: '项目运行', time: '0.5h', diff: 1, prereqs: ['1.2', '1.3'], x: 1, y: 1, icon: '🚀', desc: '创建第一个Android项目' },
  { id: '2.2', name: '模拟器部署运行', module: '项目运行', time: '0.5h', diff: 1, prereqs: ['1.4', '2.1'], x: 2, y: 1, icon: '▶️', desc: '在模拟器上运行应用' },

  { id: '3.1', name: '文本类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 0, y: 2, icon: '📝', desc: 'TextView、EditText等文本组件' },
  { id: '3.2', name: '图像类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 1, y: 2, icon: '🖼️', desc: 'ImageView、ImageButton等图像组件' },
  { id: '3.3', name: '交互类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 2, y: 2, icon: '👆', desc: 'Button、CheckBox等交互组件' },

  { id: '4.1', name: 'LinearLayout', module: '布局管理', time: '1h', diff: 1, prereqs: ['3.1', '3.2', '3.3'], x: 0, y: 3, icon: '⬌', desc: '线性布局的使用和属性' },
  { id: '4.2', name: 'RelativeLayout', module: '布局管理', time: '1h', diff: 2, prereqs: ['3.1', '3.2', '3.3'], x: 1, y: 3, icon: '⊕', desc: '相对布局的定位规则' },
  { id: '4.3', name: 'ConstraintLayout', module: '布局管理', time: '2h', diff: 2, prereqs: ['3.1', '3.2', '3.3', '4.1'], x: 2, y: 3, icon: '⛓️', desc: '约束布局的高级特性' },

  { id: '5.1', name: '自定义组合控件', module: '自定义UI', time: '2h', diff: 3, prereqs: ['4.1', '4.2', '4.3'], x: 0, y: 4, icon: '🧩', desc: '组合多个控件创建自定义视图' },
  { id: '5.2', name: '自定义View绘制', module: '自定义UI', time: '3h', diff: 4, prereqs: ['4.3', '5.1'], x: 1, y: 4, icon: '🎨', desc: '自定义View的onDraw绘制' },

  { id: '6.1', name: 'Intent基础机制', module: '页面导航', time: '1.5h', diff: 2, prereqs: ['2.2'], x: 3, y: 2, icon: '💫', desc: 'Intent的原理和使用方式' },
  { id: '6.2', name: 'Activity生命周期', module: '页面导航', time: '1h', diff: 2, prereqs: ['6.1'], x: 3, y: 3, icon: '♻️', desc: 'Activity的生命周期回调' },
  { id: '6.3', name: '数据传递与返回', module: '页面导航', time: '1.5h', diff: 3, prereqs: ['6.1', '6.2'], x: 3, y: 4, icon: '📤', desc: 'Activity间数据传递' },

  { id: '7.1', name: 'Glide基础集成', module: '图片加载', time: '1h', diff: 2, prereqs: ['3.2'], x: 4, y: 2, icon: '⚡', desc: 'Glide图片加载库集成' },
  { id: '7.2', name: 'Glide高级功能', module: '图片加载', time: '1.5h', diff: 3, prereqs: ['7.1'], x: 4, y: 3, icon: '🎯', desc: 'Glide缓存和变换' },

  { id: '8.1', name: 'MediaPlayer基础', module: '媒体播放', time: '2h', diff: 3, prereqs: ['2.2'], x: 5, y: 2, icon: '🎵', desc: 'MediaPlayer音频播放' },
  { id: '8.2', name: 'ExoPlayer进阶', module: '媒体播放', time: '2.5h', diff: 4, prereqs: ['8.1'], x: 5, y: 3, icon: '🎬', desc: 'ExoPlayer流媒体播放' },

  { id: '9.1', name: 'SQLite基础操作', module: '数据库', time: '2.5h', diff: 3, prereqs: ['2.2'], x: 6, y: 2, icon: '🗄️', desc: 'SQLite数据库操作' },
  { id: '9.2', name: 'Room持久化库', module: '数据库', time: '3h', diff: 4, prereqs: ['9.1'], x: 6, y: 3, icon: '🏛️', desc: 'Room数据库抽象层' }
];

const skillMap = Object.fromEntries(skills.map(s => [s.id, s]));

const modClassMap = {
  '环境搭建': 'mod-env',
  '项目运行': 'mod-run',
  'UI基础组件': 'mod-ui',
  '布局管理': 'mod-layout',
  '自定义UI': 'mod-custom',
  '页面导航': 'mod-nav',
  '图片加载': 'mod-img',
  '媒体播放': 'mod-media',
  '数据库': 'mod-db'
};

const modColorMap = {
  '环境搭建': '#6b9b7e',
  '项目运行': '#6b8fb8',
  'UI基础组件': '#b89a6e',
  '布局管理': '#9b7ab8',
  '自定义UI': '#b87a8a',
  '页面导航': '#6ab8b8',
  '图片加载': '#b88a6a',
  '媒体播放': '#8a8a7a',
  '数据库': '#7a8a9a'
};

const modGlowMap = {
  '环境搭建': 'rgba(107,155,126,0.35)',
  '项目运行': 'rgba(107,143,184,0.35)',
  'UI基础组件': 'rgba(184,154,110,0.35)',
  '布局管理': 'rgba(155,122,184,0.35)',
  '自定义UI': 'rgba(184,122,138,0.35)',
  '页面导航': 'rgba(106,184,184,0.35)',
  '图片加载': 'rgba(184,138,106,0.35)',
  '媒体播放': 'rgba(138,138,122,0.35)',
  '数据库': 'rgba(122,138,154,0.35)'
};

// Module descriptions for tooltips
const modDescMap = {
  '环境搭建': '配置Android开发所需的各种工具和环境',
  '项目运行': '创建并运行你的第一个Android项目',
  'UI基础组件': 'Android常用UI控件的使用方法',
  '布局管理': '掌握各种布局容器的使用',
  '自定义UI': '创建自定义View和复合控件',
  '页面导航': 'Activity跳转、生命周期和数据传递',
  '图片加载': '使用Glide进行高效的图片加载',
  '媒体播放': '音频和视频的播放实现',
  '数据库': 'SQLite和Room数据库的使用'
};

function getGridXY(skill) {
  const gridX = 160;
  const gridY = 140;
  const padX = 100;
  const padY = 80;
  const nodeW = 56;
  const nodeH = 56;
  return {
    cx: padX + skill.x * gridX + nodeW / 2,
    cy: padY + skill.y * gridY + nodeH / 2
  };
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.version !== 1) return null;
    return new Set(data.completed || []);
  } catch {
    return null;
  }
}

function saveProgress(completedSet) {
  const data = { version: 1, completed: Array.from(completedSet) };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function computeStates(completedSet) {
  const states = {};
  for (const s of skills) states[s.id] = 'locked';
  let changed = true;
  while (changed) {
    changed = false;
    for (const s of skills) {
      if (states[s.id] === 'completed') continue;
      const allCompleted = s.prereqs.every(p => states[p] === 'completed');
      if (allCompleted) {
        const target = completedSet.has(s.id) ? 'completed' : 'unlocked';
        if (states[s.id] !== target) {
          states[s.id] = target;
          changed = true;
        }
      }
    }
  }
  return states;
}

let completedSet = loadProgress() || new Set();
let currentToast = null;

function toggleSkill(id) {
  const states = computeStates(completedSet);
  const state = states[id];
  const skill = skillMap[id];

  if (state === 'locked') {
    showToast('🔒', '技能未解锁', '先完成前置技能才能学习这个技能', 'locked');
    return;
  }

  if (state === 'completed') {
    // Check if any dependent skills are completed
    const dependents = skills.filter(s => s.prereqs.includes(id) && completedSet.has(s.id));
    if (dependents.length > 0) {
      showToast('⚠️', '无法取消', `该技能是 ${dependents.map(d => d.name).join('、')} 的前置条件`, 'locked');
      return;
    }
    completedSet.delete(id);
    showToast('↩️', '进度已重置', `已重置「${skill.name}」的学习进度`, 'unlocked');
  } else {
    completedSet.add(id);
    celebrateUnlock(id);
    showToast('✨', '技能已掌握', `恭喜！你已学会「${skill.name}」`, 'completed');
  }

  saveProgress(completedSet);
  render();
}

function celebrateUnlock(id) {
  setTimeout(() => {
    const node = document.querySelector(`.skill-node[data-id="${id}"]`);
    if (node) {
      createParticleBurst(node);
      node.classList.add('pop-anim');
      setTimeout(() => node.classList.remove('pop-anim'), 400);

      // Create ripple effect
      createRipple(node);
    }
  }, 50);
}

function createRipple(node) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  const color = modColorMap[skillMap[node.dataset.id].module];
  ripple.style.color = color;
  ripple.style.width = '20px';
  ripple.style.height = '20px';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.marginLeft = '-10px';
  ripple.style.marginTop = '-10px';
  node.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

function createParticleBurst(node) {
  const rect = node.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const count = 12;
  const color = modColorMap[skillMap[node.dataset.id].module];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.3;
    const dist = 40 + Math.random() * 30;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = cx + 'px';
    p.style.top = cy + 'px';
    p.style.setProperty('--tx', tx + 'px');
    p.style.setProperty('--ty', ty + 'px');
    p.style.background = color;
    p.style.color = color;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}

function resetProgress() {
  if (!confirm('确定要重置所有技能进度吗？此操作不可恢复。')) return;
  completedSet.clear();
  saveProgress(completedSet);
  render();
  showToast('🗑️', '进度已重置', '所有学习进度已清空', 'unlocked');
}

function completeAllAvailable() {
  const states = computeStates(completedSet);
  let count = 0;
  for (const s of skills) {
    if (states[s.id] === 'unlocked') {
      completedSet.add(s.id);
      count++;
    }
  }
  if (count > 0) {
    saveProgress(completedSet);
    render();
    showToast('🎉', '批量完成', `已完成 ${count} 个可用技能`, 'completed');
  } else {
    showToast('ℹ️', '没有可完成的技能', '所有可用技能都已完成', 'unlocked');
  }
}

function renderModulesLayer() {
  const layer = document.getElementById('modulesLayer');
  layer.innerHTML = '';
  const byModule = {};
  for (const s of skills) {
    if (!byModule[s.module]) byModule[s.module] = [];
    byModule[s.module].push(s);
  }
  for (const [mod, list] of Object.entries(byModule)) {
    const xs = list.map(s => getGridXY(s).cx);
    const ys = list.map(s => getGridXY(s).cy);
    const minX = Math.min(...xs) - 70;
    const maxX = Math.max(...xs) + 70;
    const minY = Math.min(...ys) - 60;
    const maxY = Math.max(...ys) + 60;
    const el = document.createElement('div');
    el.className = `module-bg ${modClassMap[mod]}`;
    el.style.left = minX + 'px';
    el.style.top = minY + 'px';
    el.style.width = (maxX - minX) + 'px';
    el.style.height = (maxY - minY) + 'px';
    el.title = mod;
    layer.appendChild(el);

    // Add module label
    const label = document.createElement('div');
    label.className = 'module-label';
    label.textContent = mod;
    label.style.left = (minX + 15) + 'px';
    label.style.top = (minY + 12) + 'px';
    label.style.color = modColorMap[mod];
    layer.appendChild(label);
  }
}

function renderConnections(states) {
  const svg = document.getElementById('connections');
  svg.innerHTML = '';
  for (const s of skills) {
    const childPos = getGridXY(s);
    for (const pid of s.prereqs) {
      const parent = skillMap[pid];
      const parentPos = getGridXY(parent);
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const dx = childPos.cx - parentPos.cx;
      const dy = childPos.cy - parentPos.cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const controlOffset = Math.min(dist * 0.4, 80);
      const cp1x = parentPos.cx;
      const cp1y = parentPos.cy + controlOffset;
      const cp2x = childPos.cx;
      const cp2y = childPos.cy - controlOffset;
      const d = `M ${parentPos.cx} ${parentPos.cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${childPos.cx} ${childPos.cy}`;
      path.setAttribute('d', d);
      const modColor = modColorMap[s.module];
      const isActive = states[s.id] === 'completed' && states[pid] === 'completed';
      path.setAttribute('stroke', isActive ? modColor : 'rgba(255,255,255,0.1)');
      path.setAttribute('stroke-width', isActive ? '3' : '1.5');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');
      if (isActive) {
        path.style.filter = `drop-shadow(0 0 8px ${modColor})`;
      }
      svg.appendChild(path);
    }
  }
}

function renderNodes(states) {
  const layer = document.getElementById('nodesLayer');
  layer.innerHTML = '';
  for (const s of skills) {
    const pos = getGridXY(s);
    const el = document.createElement('button');
    el.className = `skill-node ${modClassMap[s.module]} skill-${states[s.id]}`;
    el.style.left = (pos.cx - 28) + 'px';
    el.style.top = (pos.cy - 28) + 'px';
    el.setAttribute('aria-pressed', states[s.id] === 'completed' ? 'true' : 'false');
    el.setAttribute('data-id', s.id);

    // Add progress ring for unlocked nodes
    if (states[s.id] === 'unlocked') {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('progress-ring');
      svg.setAttribute('viewBox', '0 0 72 72');

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.classList.add('progress-ring-circle');
      circle.setAttribute('cx', '36');
      circle.setAttribute('cy', '36');
      circle.setAttribute('r', '34');

      const fill = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      fill.classList.add('progress-ring-fill');
      fill.setAttribute('cx', '36');
      fill.setAttribute('cy', '36');
      fill.setAttribute('r', '34');
      fill.setAttribute('stroke', modColorMap[s.module]);
      fill.setAttribute('stroke-dasharray', `${2 * Math.PI * 34}`);
      fill.setAttribute('stroke-dashoffset', `${2 * Math.PI * 34 * 0.3}`);

      svg.appendChild(circle);
      svg.appendChild(fill);
      el.appendChild(svg);
    }

    const icon = document.createElement('span');
    icon.className = 'inner-icon';
    icon.textContent = s.icon;

    const badge = document.createElement('span');
    badge.className = 'id-badge';
    badge.textContent = s.id;

    if (states[s.id] === 'completed') {
      const check = document.createElement('span');
      check.className = 'checkmark';
      check.innerHTML = '&#10003;';
      el.appendChild(check);
    }

    el.appendChild(icon);
    el.appendChild(badge);

    el.addEventListener('click', (e) => {
      createRippleAtPoint(el, e.offsetX, e.offsetY);
      toggleSkill(s.id);
    });

    el.addEventListener('mouseenter', (e) => showTooltip(e, s, states));
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('focus', (e) => showTooltip(e, s, states));
    el.addEventListener('blur', hideTooltip);

    layer.appendChild(el);
  }
}

function createRippleAtPoint(node, x, y) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  const color = modColorMap[skillMap[node.dataset.id].module];
  ripple.style.color = color;
  ripple.style.width = '16px';
  ripple.style.height = '16px';
  ripple.style.left = (x - 8) + 'px';
  ripple.style.top = (y - 8) + 'px';
  node.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

function renderProgress(states) {
  const total = skills.length;
  const completed = skills.filter(s => states[s.id] === 'completed').length;
  const unlocked = skills.filter(s => states[s.id] === 'unlocked').length;
  const pct = Math.round((completed / total) * 100);

  document.getElementById('totalProgress').textContent = pct + '%';

  // Update progress bar
  const progressFill = document.getElementById('progressBarFill');
  if (progressFill) {
    progressFill.style.width = pct + '%';
  }

  // Update stats
  const completedCount = document.getElementById('completedCount');
  const unlockedCount = document.getElementById('unlockedCount');
  if (completedCount) completedCount.textContent = completed;
  if (unlockedCount) unlockedCount.textContent = unlocked;

  const byModule = {};
  for (const s of skills) {
    if (!byModule[s.module]) byModule[s.module] = { total: 0, completed: 0, color: modColorMap[s.module] };
    byModule[s.module].total++;
    if (states[s.id] === 'completed') byModule[s.module].completed++;
  }

  const container = document.getElementById('moduleProgress');
  container.innerHTML = '';
  for (const [mod, info] of Object.entries(byModule)) {
    const badge = document.createElement('span');
    badge.className = 'mod-badge';
    badge.style.borderColor = info.color + '40';
    badge.style.color = info.color;
    const pct = Math.round((info.completed / info.total) * 100);
    badge.innerHTML = `${mod} <span class="mod-progress">${info.completed}/${info.total}</span>`;
    badge.title = `${mod}: ${pct}% 完成`;
    container.appendChild(badge);
  }
}

function render() {
  const states = computeStates(completedSet);
  renderModulesLayer();
  renderConnections(states);
  renderNodes(states);
  renderProgress(states);
}

function showToast(icon, title, message, type = 'info') {
  // Remove existing toast
  if (currentToast) {
    currentToast.classList.add('hiding');
    setTimeout(() => {
      if (currentToast && currentToast.parentNode) {
        currentToast.parentNode.removeChild(currentToast);
      }
    }, 300);
  }

  // Create container if needed
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  // Create toast
  const toast = document.createElement('div');
  toast.className = 'toast';

  const colors = {
    completed: '#7eb88a',
    unlocked: '#b89a6e',
    locked: '#cf8888',
    info: '#6b8fb8'
  };

  toast.style.borderLeft = `3px solid ${colors[type] || colors.info}`;

  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
  `;

  container.appendChild(toast);
  currentToast = toast;

  // Auto hide
  setTimeout(() => {
    if (toast.parentNode) {
      toast.classList.add('hiding');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
        if (currentToast === toast) {
          currentToast = null;
        }
      }, 300);
    }
  }, 3500);
}

const tooltip = document.getElementById('tooltip');
const ttTitle = document.getElementById('ttTitle');
const ttMeta = document.getElementById('ttMeta');
const ttPrereqs = document.getElementById('ttPrereqs');
const ttStatus = document.getElementById('ttStatus');
const ttHeader = document.getElementById('ttHeader');

function showTooltip(e, s, states) {
  // Update header with icon
  ttHeader.innerHTML = `
    <span class="tooltip-icon">${s.icon}</span>
    <div class="tooltip-title-wrap">
      <div class="tooltip-title">${s.name}</div>
      <div class="tooltip-id">${s.id}</div>
    </div>
  `;

  // Update meta info
  const stars = Array(5).fill(0).map((_, i) =>
    `<span class="star ${i < s.diff ? 'filled' : ''}">★</span>`
  ).join('');

  ttMeta.innerHTML = `
    <span class="tooltip-module" style="color: ${modColorMap[s.module]}">
      <span class="tooltip-module-dot" style="background: ${modColorMap[s.module]}"></span>
      ${s.module}
    </span>
    <span class="tooltip-time">⏱ ${s.time}</span>
    <span class="tooltip-difficulty" title="难度: ${s.diff}/5">${stars}</span>
  `;

  // Update status
  const state = states[s.id];
  const statusMap = {
    locked: { cls: 'locked', text: '🔒 未解锁 - 完成前置技能' },
    unlocked: { cls: 'unlocked', text: '✨ 可学习 - 点击标记为完成' },
    completed: { cls: 'completed', text: '✅ 已完成 - 点击取消完成' }
  };
  const st = statusMap[state];
  ttStatus.className = 'tooltip-status ' + st.cls;
  ttStatus.textContent = st.text;

  // Update prereqs
  if (s.prereqs.length === 0) {
    ttPrereqs.innerHTML = '';
  } else {
    const prereqItems = s.prereqs.map(pid => {
      const p = skillMap[pid];
      const met = states[pid] === 'completed';
      return `
        <div class="prereq-item ${met ? 'met' : ''}">
          <span class="prereq-status ${met ? 'met' : 'missing'}">${met ? '✓' : '○'}</span>
          <div class="prereq-info">
            <div class="prereq-id">${pid}</div>
            <div class="prereq-name">${p.name}</div>
          </div>
        </div>
      `;
    }).join('');
    ttPrereqs.innerHTML = `
      <div class="tooltip-divider"></div>
      <div class="tooltip-prereqs-label">前置技能</div>
      <div class="prereq-list">
        ${prereqItems}
      </div>
    `;
  }

  // Position tooltip
  const rect = e.currentTarget.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
  let top = rect.top - tooltip.offsetHeight - 16;

  // Boundary checks
  if (left < 12) left = 12;
  if (left + tooltip.offsetWidth > window.innerWidth - 12) {
    left = window.innerWidth - tooltip.offsetWidth - 12;
  }
  if (top < 12) {
    top = rect.bottom + 16;
  }

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
  tooltip.classList.add('visible');
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

// Keyboard navigation
let focusedNodeIndex = -1;

document.addEventListener('keydown', (e) => {
  const nodes = document.querySelectorAll('.skill-node:not(.skill-locked)');
  if (nodes.length === 0) return;

  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault();
    focusedNodeIndex = (focusedNodeIndex + 1) % nodes.length;
    nodes[focusedNodeIndex].focus();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault();
    focusedNodeIndex = (focusedNodeIndex - 1 + nodes.length) % nodes.length;
    nodes[focusedNodeIndex].focus();
  } else if (e.key === 'Enter' || e.key === ' ') {
    if (document.activeElement.classList.contains('skill-node')) {
      e.preventDefault();
      document.activeElement.click();
    }
  } else if (e.key === 'r' && e.ctrlKey) {
    e.preventDefault();
    resetProgress();
  }
});

// Event listeners
document.getElementById('resetBtn').addEventListener('click', resetProgress);

const completeAllBtn = document.getElementById('completeAllBtn');
if (completeAllBtn) {
  completeAllBtn.addEventListener('click', completeAllAvailable);
}

// Initial render
render();

// Welcome toast on first visit
setTimeout(() => {
  const hasVisited = localStorage.getItem('skill_tree_visited');
  if (!hasVisited) {
    showToast('👋', '欢迎使用技能树', '点击可学习的技能标记为完成，悬停查看详情', 'info');
    localStorage.setItem('skill_tree_visited', '1');
  }
}, 1000);

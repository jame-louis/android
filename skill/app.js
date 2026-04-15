const STORAGE_KEY = 'android_skill_tree_v2';

const skills = [
  { id: '1.1', name: 'Android Studio安装', module: '环境搭建', time: '0.5h', diff: 1, prereqs: [], x: 0, y: 0, icon: '📱', desc: '安装和配置Android Studio开发环境，包括界面介绍和基本设置' },
  { id: '1.2', name: 'JDK配置', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.1'], x: 1, y: 0, icon: '☕', desc: '配置Java开发工具包，理解JDK版本选择和路径设置' },
  { id: '1.3', name: 'SDK配置', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.1'], x: 2, y: 0, icon: '📦', desc: '配置Android SDK和构建工具，掌握SDK Manager使用' },
  { id: '1.4', name: 'AVD创建与优化', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.3'], x: 3, y: 0, icon: '📺', desc: '创建和优化Android虚拟设备，提升模拟器性能' },

  { id: '2.1', name: '创建首个项目', module: '项目运行', time: '0.5h', diff: 1, prereqs: ['1.2', '1.3'], x: 1, y: 1, icon: '🚀', desc: '创建第一个Android项目，理解项目结构和Gradle配置' },
  { id: '2.2', name: '模拟器部署运行', module: '项目运行', time: '0.5h', diff: 1, prereqs: ['1.4', '2.1'], x: 2, y: 1, icon: '▶️', desc: '在模拟器上运行应用，掌握调试技巧和日志查看' },

  { id: '3.1', name: '文本类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 0, y: 2, icon: '📝', desc: 'TextView、EditText等文本组件的属性和样式设置' },
  { id: '3.2', name: '图像类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 1, y: 2, icon: '🖼️', desc: 'ImageView、ImageButton等图像组件的使用和资源管理' },
  { id: '3.3', name: '交互类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 2, y: 2, icon: '👆', desc: 'Button、CheckBox、RadioButton等交互组件的事件处理' },

  { id: '4.1', name: 'LinearLayout', module: '布局管理', time: '1h', diff: 1, prereqs: ['3.1', '3.2', '3.3'], x: 0, y: 3, icon: '⬌', desc: '线性布局的使用、权重分配和嵌套技巧' },
  { id: '4.2', name: 'RelativeLayout', module: '布局管理', time: '1h', diff: 2, prereqs: ['3.1', '3.2', '3.3'], x: 1, y: 3, icon: '⊕', desc: '相对布局的定位规则和参照物设置' },
  { id: '4.3', name: 'ConstraintLayout', module: '布局管理', time: '2h', diff: 2, prereqs: ['3.1', '3.2', '3.3', '4.1'], x: 2, y: 3, icon: '⛓️', desc: '约束布局的高级特性、链和屏障的使用' },

  { id: '5.1', name: '自定义组合控件', module: '自定义UI', time: '2h', diff: 3, prereqs: ['4.1', '4.2', '4.3'], x: 0, y: 4, icon: '🧩', desc: '组合多个控件创建自定义视图，实现可复用组件' },
  { id: '5.2', name: '自定义View绘制', module: '自定义UI', time: '3h', diff: 4, prereqs: ['4.3', '5.1'], x: 1, y: 4, icon: '🎨', desc: '自定义View的onDraw绘制、触摸事件和动画效果' },

  { id: '6.1', name: 'Intent基础机制', module: '页面导航', time: '1.5h', diff: 2, prereqs: ['2.2'], x: 3, y: 2, icon: '💫', desc: 'Intent的原理、显式和隐式Intent的使用方式' },
  { id: '6.2', name: 'Activity生命周期', module: '页面导航', time: '1h', diff: 2, prereqs: ['6.1'], x: 3, y: 3, icon: '♻️', desc: 'Activity的生命周期回调、状态保存和恢复' },
  { id: '6.3', name: '数据传递与返回', module: '页面导航', time: '1.5h', diff: 3, prereqs: ['6.1', '6.2'], x: 3, y: 4, icon: '📤', desc: 'Activity间数据传递、Bundle使用和返回结果处理' },

  { id: '7.1', name: 'Glide基础集成', module: '图片加载', time: '1h', diff: 2, prereqs: ['3.2'], x: 4, y: 2, icon: '⚡', desc: 'Glide图片加载库集成、基本用法和占位图设置' },
  { id: '7.2', name: 'Glide高级功能', module: '图片加载', time: '1.5h', diff: 3, prereqs: ['7.1'], x: 4, y: 3, icon: '🎯', desc: 'Glide缓存策略、图片变换和加载优化技巧' },

  { id: '8.1', name: 'MediaPlayer基础', module: '媒体播放', time: '2h', diff: 3, prereqs: ['2.2'], x: 5, y: 2, icon: '🎵', desc: 'MediaPlayer音频播放、状态管理和错误处理' },
  { id: '8.2', name: 'ExoPlayer进阶', module: '媒体播放', time: '2.5h', diff: 4, prereqs: ['8.1'], x: 5, y: 3, icon: '🎬', desc: 'ExoPlayer流媒体播放、自定义渲染和后台播放' },

  { id: '9.1', name: 'SQLite基础操作', module: '数据库', time: '2.5h', diff: 3, prereqs: ['2.2'], x: 6, y: 2, icon: '🗄️', desc: 'SQLite数据库创建、CRUD操作和事务管理' },
  { id: '9.2', name: 'Room持久化库', module: '数据库', time: '3h', diff: 4, prereqs: ['9.1'], x: 6, y: 3, icon: '🏛️', desc: 'Room数据库抽象层、实体定义和DAO操作' }
];

const skillMap = Object.fromEntries(skills.map(s => [s.id, s]));
const modules = [...new Set(skills.map(s => s.module))];

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
  '环境搭建': '#7aaa88',
  '项目运行': '#7aa3c0',
  'UI基础组件': '#c0a57a',
  '布局管理': '#a885c0',
  '自定义UI': '#c08595',
  '页面导航': '#7ac0c0',
  '图片加载': '#c09585',
  '媒体播放': '#959585',
  '数据库': '#8595a8'
};

// State
let completedSet = loadProgress() || new Set();
let selectedSkillId = null;
let activeModule = null;
let activeView = 'all';
let searchQuery = '';
let zoomLevel = 100;
let currentToast = null;
let entranceAnimationPlayed = false;

// Achievement milestones
const milestones = [
  { id: 'first', count: 1, title: '初次启程', desc: '完成第一个技能', icon: '🌱' },
  { id: 'foundation', count: 5, title: '基础稳固', desc: '完成5个技能', icon: '🏗️' },
  { id: 'quarter', count: skills.length / 4, title: '四分之一', desc: '完成25%的技能', icon: '📊' },
  { id: 'half', count: skills.length / 2, title: '半程里程碑', desc: '完成50%的技能', icon: '🎯' },
  { id: 'master', count: skills.length, title: '技能大师', desc: '完成所有技能', icon: '🏆' }
];

// Utility Functions
function getGridXY(skill) {
  const gridX = 170;
  const gridY = 150;
  const padX = 120;
  const padY = 100;
  const nodeW = 60;
  const nodeH = 60;
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
    if (data.version !== 2) return migrateData(data);
    return new Set(data.completed || []);
  } catch {
    return null;
  }
}

function migrateData(oldData) {
  if (oldData && oldData.completed) {
    return new Set(oldData.completed);
  }
  return null;
}

function saveProgress() {
  const data = { version: 2, completed: Array.from(completedSet) };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function computeStates() {
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

function getTimeHours(timeStr) {
  return parseFloat(timeStr.replace('h', '')) || 0;
}

function getCompletedHours() {
  let total = 0;
  for (const s of skills) {
    if (completedSet.has(s.id)) {
      total += getTimeHours(s.time);
    }
  }
  return total;
}

function shouldShowSkill(skill, states) {
  const state = states[skill.id];

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    if (!skill.name.toLowerCase().includes(query) &&
        !skill.id.toLowerCase().includes(query) &&
        !skill.module.toLowerCase().includes(query) &&
        !skill.desc.toLowerCase().includes(query)) {
      return false;
    }
  }

  if (activeModule && skill.module !== activeModule) return false;
  if (activeView === 'completed' && state !== 'completed') return false;
  if (activeView === 'unlocked' && state !== 'unlocked') return false;

  return true;
}

// Toggle Skill
function toggleSkill(id) {
  const states = computeStates();
  const state = states[id];
  const skill = skillMap[id];

  if (state === 'locked') {
    showToast('warning', '技能未解锁', '先完成前置技能才能学习', '🔒');
    return;
  }

  if (state === 'completed') {
    const dependents = skills.filter(s => s.prereqs.includes(id) && completedSet.has(s.id));
    if (dependents.length > 0) {
      showToast('danger', '无法取消', `该技能是 ${dependents.map(d => d.name).join('、')} 的前置`, '⚠️');
      return;
    }
    completedSet.delete(id);
    showToast('info', '进度已重置', `「${skill.name}」已取消完成`, '↩️');
  } else {
    completedSet.add(id);
    celebrateUnlock(id);
    checkMilestones();
    showToast('success', '技能已掌握', `恭喜学会「${skill.name}」`, '✨');
  }

  saveProgress();
  render();
  updateDetailPanel(id);
}

// Celebration Effects
function celebrateUnlock(id) {
  setTimeout(() => {
    const node = document.querySelector(`.skill-node[data-id="${id}"]`);
    if (node) {
      createParticleBurst(node, 16);
      node.classList.add('pop-anim');
      setTimeout(() => node.classList.remove('pop-anim'), 500);
      createRipple(node, 'center');
    }
  }, 100);
}

function createRipple(node, position = 'center') {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  const color = modColorMap[skillMap[node.dataset.id].module];
  ripple.style.color = color;

  if (position === 'center') {
    ripple.style.width = '30px';
    ripple.style.height = '30px';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.marginLeft = '-15px';
    ripple.style.marginTop = '-15px';
  } else {
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.left = (position.x - 10) + 'px';
    ripple.style.top = (position.y - 10) + 'px';
  }

  node.appendChild(ripple);
  setTimeout(() => ripple.remove(), 500);
}

function createParticleBurst(node, count = 12) {
  const rect = node.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const color = modColorMap[skillMap[node.dataset.id].module];

  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2 + Math.random() * 0.4;
    const dist = 50 + Math.random() * 40;
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
    p.style.width = (6 + Math.random() * 4) + 'px';
    p.style.height = p.style.width;

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}

// Achievement System
function checkMilestones() {
  const completedCount = completedSet.size;
  const achievedMilestones = loadAchievedMilestones();

  for (const milestone of milestones) {
    if (completedCount >= milestone.count && !achievedMilestones.has(milestone.id)) {
      showAchievement(milestone);
      saveAchievedMilestone(milestone.id);
      break;
    }
  }
}

function loadAchievedMilestones() {
  try {
    const raw = localStorage.getItem('skill_tree_achievements');
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function saveAchievedMilestone(id) {
  const achieved = loadAchievedMilestones();
  achieved.add(id);
  localStorage.setItem('skill_tree_achievements', JSON.stringify(Array.from(achieved)));
}

function showAchievement(milestone) {
  const badge = document.createElement('div');
  badge.className = 'achievement-badge';
  badge.innerHTML = `
    <div class="achievement-icon">${milestone.icon}</div>
    <div class="achievement-title">${milestone.title}</div>
    <div class="achievement-desc">${milestone.desc}</div>
  `;
  document.body.appendChild(badge);

  setTimeout(() => {
    badge.classList.add('hiding');
    setTimeout(() => badge.remove(), 400);
  }, 2500);
}

// Reset Progress
function resetProgress() {
  if (!confirm('确定要重置所有技能进度吗？此操作不可恢复。')) return;
  completedSet.clear();
  localStorage.removeItem('skill_tree_achievements');
  saveProgress();
  render();
  showToast('info', '进度已重置', '所有学习进度已清空', '🗑️');
  hideDetailPanel();
}

// Complete All Available
function completeAllAvailable() {
  const states = computeStates();
  let count = 0;
  const toComplete = [];

  for (const s of skills) {
    if (states[s.id] === 'unlocked') {
      toComplete.push(s.id);
    }
  }

  if (toComplete.length === 0) {
    showToast('info', '没有可完成的技能', '所有可用技能都已完成', 'ℹ️');
    return;
  }

  // Animate batch completion
  toComplete.forEach((id, index) => {
    setTimeout(() => {
      completedSet.add(id);
      saveProgress();
      render();
      if (index === toComplete.length - 1) {
        checkMilestones();
      }
    }, index * 150);
  });

  setTimeout(() => {
    showToast('success', '批量完成', `已完成 ${toComplete.length} 个可用技能`, '🎉');
  }, toComplete.length * 150 + 100);
}

// Render Functions
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
    const minX = Math.min(...xs) - 80;
    const maxX = Math.max(...xs) + 80;
    const minY = Math.min(...ys) - 70;
    const maxY = Math.max(...ys) + 70;

    const bg = document.createElement('div');
    bg.className = `module-bg ${modClassMap[mod]}`;
    if (activeModule === mod) bg.classList.add('active');
    bg.style.left = minX + 'px';
    bg.style.top = minY + 'px';
    bg.style.width = (maxX - minX) + 'px';
    bg.style.height = (maxY - minY) + 'px';
    layer.appendChild(bg);

    const label = document.createElement('div');
    label.className = 'module-label';
    label.textContent = mod;
    label.style.left = (minX + 20) + 'px';
    label.style.top = (minY + 15) + 'px';
    label.style.color = modColorMap[mod];
    layer.appendChild(label);
  }
}

function renderConnections(states) {
  const svg = document.getElementById('connections');
  svg.innerHTML = '';

  for (const s of skills) {
    if (!shouldShowSkill(s, states)) continue;
    const childPos = getGridXY(s);

    for (const pid of s.prereqs) {
      const parent = skillMap[pid];
      if (!shouldShowSkill(parent, states)) continue;
      const parentPos = getGridXY(parent);

      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const dx = childPos.cx - parentPos.cx;
      const dy = childPos.cy - parentPos.cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const controlOffset = Math.min(dist * 0.35, 70);

      const d = `M ${parentPos.cx} ${parentPos.cy}
                 C ${parentPos.cx} ${parentPos.cy + controlOffset},
                   ${childPos.cx} ${childPos.cy - controlOffset},
                   ${childPos.cx} ${childPos.cy}`;
      path.setAttribute('d', d);

      const modColor = modColorMap[s.module];
      const isActive = states[s.id] === 'completed' && states[pid] === 'completed';

      path.setAttribute('stroke', isActive ? modColor : 'rgba(255,255,255,0.06)');
      path.setAttribute('stroke-width', isActive ? '3' : '2');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke-linecap', 'round');

      if (isActive) {
        path.style.filter = `drop-shadow(0 0 12px ${modColor})`;
        path.classList.add('active');
      } else {
        path.classList.add('inactive');
      }

      svg.appendChild(path);
    }
  }
}

function renderNodes(states) {
  const layer = document.getElementById('nodesLayer');
  layer.innerHTML = '';

  // Add entrance animation class
  if (!entranceAnimationPlayed) {
    layer.classList.add('nodes-entrance');
  }

  for (const s of skills) {
    const pos = getGridXY(s);
    const state = states[s.id];

    const el = document.createElement('button');
    el.className = `skill-node ${modClassMap[s.module]} skill-${state}`;
    if (!shouldShowSkill(s, states)) el.classList.add('hidden');
    if (selectedSkillId === s.id) el.classList.add('selected');
    el.style.left = (pos.cx - 30) + 'px';
    el.style.top = (pos.cy - 30) + 'px';
    el.setAttribute('aria-pressed', state === 'completed' ? 'true' : 'false');
    el.setAttribute('aria-label', `${s.name} (${s.id}) - ${state === 'completed' ? '已完成' : state === 'unlocked' ? '可学习' : '未解锁'}`);
    el.setAttribute('data-id', s.id);
    el.style.setProperty('--index', skills.indexOf(s));

    // Progress ring for unlocked nodes
    if (state === 'unlocked') {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.classList.add('progress-ring');
      svg.setAttribute('viewBox', '0 0 80 80');

      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.classList.add('progress-ring-circle');
      circle.setAttribute('cx', '40');
      circle.setAttribute('cy', '40');
      circle.setAttribute('r', '37');

      const fill = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      fill.classList.add('progress-ring-fill');
      fill.setAttribute('cx', '40');
      fill.setAttribute('cy', '40');
      fill.setAttribute('r', '37');
      fill.setAttribute('stroke', modColorMap[s.module]);
      fill.setAttribute('stroke-dasharray', `${2 * Math.PI * 37}`);
      fill.setAttribute('stroke-dashoffset', `${2 * Math.PI * 37 * 0.7}`);

      svg.appendChild(circle);
      svg.appendChild(fill);
      el.appendChild(svg);
    }

    const icon = document.createElement('span');
    icon.className = 'inner-icon';
    icon.textContent = s.icon;
    el.appendChild(icon);

    const badge = document.createElement('span');
    badge.className = 'id-badge';
    badge.textContent = s.id;
    el.appendChild(badge);

    if (state === 'completed') {
      const check = document.createElement('span');
      check.className = 'checkmark';
      check.innerHTML = '✓';
      el.appendChild(check);
    }

    el.addEventListener('click', (e) => {
      createRipple(el, { x: e.offsetX, y: e.offsetY });
      selectSkill(s.id);
    });

    el.addEventListener('mouseenter', (e) => showTooltip(e, s, states));
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('focus', (e) => showTooltip(e, s, states));
    el.addEventListener('blur', hideTooltip);

    layer.appendChild(el);
  }

  // Remove entrance animation after first render
  if (!entranceAnimationPlayed) {
    setTimeout(() => {
      layer.classList.remove('nodes-entrance');
      entranceAnimationPlayed = true;
    }, skills.length * 40 + 600);
  }
}

function renderSidebarStats(states) {
  const completed = skills.filter(s => states[s.id] === 'completed').length;
  const unlocked = skills.filter(s => states[s.id] === 'unlocked').length;
  const locked = skills.filter(s => states[s.id] === 'locked').length;
  const hours = getCompletedHours();

  animateValue('statCompleted', completed);
  animateValue('statUnlocked', unlocked);
  animateValue('statLocked', locked);
  document.getElementById('statHours').textContent = hours.toFixed(1) + 'h';
}

function animateValue(elementId, newValue) {
  const el = document.getElementById(elementId);
  const current = parseInt(el.textContent) || 0;
  if (current === newValue) return;

  const duration = 400;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = Math.round(current + (newValue - current) * progress);
    el.textContent = value;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function renderLegend(states) {
  const list = document.getElementById('legendList');
  list.innerHTML = '';

  const byModule = {};
  for (const s of skills) {
    if (!byModule[s.module]) byModule[s.module] = { total: 0, completed: 0, color: modColorMap[s.module] };
    byModule[s.module].total++;
    if (states[s.id] === 'completed') byModule[s.module].completed++;
  }

  for (const [mod, info] of Object.entries(byModule)) {
    const pct = (info.completed / info.total) * 100;
    const li = document.createElement('li');
    li.className = 'legend-item';
    if (activeModule === mod) li.classList.add('active');
    li.style.color = info.color;

    li.innerHTML = `
      <span class="legend-dot" style="background: ${info.color}"></span>
      <span class="legend-name">${mod}</span>
      <span class="legend-progress">${info.completed}/${info.total}</span>
      <div class="legend-progress-bar" style="width: ${pct}%"></div>
    `;

    li.addEventListener('click', () => {
      activeModule = activeModule === mod ? null : mod;
      render();
    });

    list.appendChild(li);
  }
}

function renderNextSteps(states) {
  const list = document.getElementById('nextList');
  list.innerHTML = '';

  const unlockedSkills = skills
    .filter(s => states[s.id] === 'unlocked')
    .sort((a, b) => a.diff - b.diff)
    .slice(0, 4);

  if (unlockedSkills.length === 0) {
    list.innerHTML = '<li class="next-empty">🎉 所有可学技能已完成</li>';
    return;
  }

  for (const s of unlockedSkills) {
    const li = document.createElement('li');
    li.className = 'next-item';
    li.innerHTML = `
      <span class="next-icon">${s.icon}</span>
      <div class="next-info">
        <span class="next-name">${s.name}</span>
        <span class="next-meta">
          <span>⏱ ${s.time}</span>
          <span>难度 ${s.diff}/5</span>
        </span>
      </div>
    `;
    li.addEventListener('click', () => selectSkill(s.id));
    list.appendChild(li);
  }
}

function renderHeaderProgress(states) {
  const total = skills.length;
  const completed = skills.filter(s => states[s.id] === 'completed').length;
  const pct = Math.round((completed / total) * 100);

  // Update header progress ring
  const ringFill = document.querySelector('.header-progress-ring .ring-fill');
  const circumference = 2 * Math.PI * 24;
  const offset = circumference - (pct / 100) * circumference;
  ringFill.setAttribute('stroke-dashoffset', offset);

  document.querySelector('.header-progress-text .value').textContent = pct + '%';
}

function renderViewCounts(states) {
  const all = skills.length;
  const completed = skills.filter(s => states[s.id] === 'completed').length;
  const unlocked = skills.filter(s => states[s.id] === 'unlocked').length;

  document.querySelector('#viewAll .count').textContent = all;
  document.querySelector('#viewCompleted .count').textContent = completed;
  document.querySelector('#viewUnlocked .count').textContent = unlocked;
}

function render() {
  const states = computeStates();
  renderModulesLayer();
  renderConnections(states);
  renderNodes(states);
  renderSidebarStats(states);
  renderLegend(states);
  renderNextSteps(states);
  renderHeaderProgress(states);
  renderViewCounts(states);
}

// Selection and Detail Panel
function selectSkill(id) {
  const states = computeStates();
  const skill = skillMap[id];

  if (selectedSkillId === id) {
    toggleSkill(id);
    return;
  }

  selectedSkillId = id;
  renderNodes(states);
  showDetailPanel(skill, states);
}

function showDetailPanel(skill, states) {
  const panel = document.getElementById('detailPanel');
  const content = document.getElementById('detailContent');
  const header = document.getElementById('detailHeader');
  const btn = document.getElementById('detailToggle');

  panel.hidden = false;
  panel.setAttribute('aria-hidden', 'false');

  const state = states[skill.id];

  // Header module badge
  header.innerHTML = `
    <div class="detail-module-badge" style="color: ${modColorMap[skill.module]}">
      <span class="detail-module-dot" style="background: ${modColorMap[skill.module]}"></span>
      ${skill.module}
    </div>
    <button class="detail-close" aria-label="关闭详情">
      <span aria-hidden="true">×</span>
    </button>
  `;
  header.querySelector('.detail-close').addEventListener('click', hideDetailPanel);

  // Stats
  const stats = [
    { icon: '⏱', value: skill.time, label: '时长' },
    { icon: '⭐', value: skill.diff + '/5', label: '难度' },
    { icon: '📍', value: skill.id, label: '编号' }
  ];

  const stars = Array(5).fill(0).map((_, i) =>
    `<span class="detail-star ${i < skill.diff ? 'filled' : ''}">★</span>`
  ).join('');

  let prereqHtml = '';
  if (skill.prereqs.length > 0) {
    const prereqItems = skill.prereqs.map(pid => {
      const p = skillMap[pid];
      const met = states[pid] === 'completed';
      return `
        <div class="detail-prereq ${met ? 'met' : ''}" data-id="${pid}">
          <span class="detail-prereq-status ${met ? 'met' : 'missing'}">${met ? '✓' : '○'}</span>
          <span class="detail-prereq-icon">${p.icon}</span>
          <div class="detail-prereq-info">
            <span class="detail-prereq-name">${p.name}</span>
            <span class="detail-prereq-id">${pid}</span>
          </div>
        </div>
      `;
    }).join('');

    prereqHtml = `
      <div class="detail-section">
        <div class="detail-section-title">前置技能</div>
        <div class="detail-prereq-list">${prereqItems}</div>
      </div>
    `;
  }

  content.innerHTML = `
    <div class="detail-icon-wrap" style="--glow-color: ${modColorMap[skill.module]}">
      <div class="detail-icon-bg"></div>
      <div class="detail-icon">${skill.icon}</div>
    </div>
    <h3 class="detail-title">${skill.name}</h3>
    <span class="detail-id">${skill.id}</span>
    <div class="detail-stats">
      ${stats.map(s => `
        <div class="detail-stat">
          <span class="detail-stat-icon">${s.icon}</span>
          <span class="detail-stat-value">${s.value}</span>
          <span class="detail-stat-label">${s.label}</span>
        </div>
      `).join('')}
    </div>
    <div class="detail-difficulty">${stars}</div>
    <div class="detail-desc">${skill.desc}</div>
    ${prereqHtml}
  `;

  // Update action button
  btn.className = 'detail-btn';
  btn.disabled = false;

  if (state === 'locked') {
    btn.classList.add('locked');
    btn.innerHTML = '<span>🔒</span> 未解锁';
    btn.disabled = true;
    btn.onclick = null;
  } else if (state === 'completed') {
    btn.classList.add('reset');
    btn.innerHTML = '<span>↩️</span> 重置进度';
    btn.onclick = () => toggleSkill(skill.id);
  } else {
    btn.classList.add('complete');
    btn.innerHTML = '<span>✨</span> 标记完成';
    btn.onclick = () => toggleSkill(skill.id);
  }

  // Add click handlers for prerequisites
  content.querySelectorAll('.detail-prereq').forEach(el => {
    el.addEventListener('click', () => selectSkill(el.dataset.id));
  });
}

function updateDetailPanel(id) {
  if (selectedSkillId === id) {
    const states = computeStates();
    showDetailPanel(skillMap[id], states);
  }
}

function hideDetailPanel() {
  const panel = document.getElementById('detailPanel');
  panel.hidden = true;
  panel.setAttribute('aria-hidden', 'true');
  selectedSkillId = null;
  renderNodes(computeStates());
}

// Tooltip
const tooltip = document.getElementById('tooltip');

function showTooltip(e, skill, states) {
  const state = states[skill.id];
  const stars = Array(5).fill(0).map((_, i) =>
    `<span class="star ${i < skill.diff ? 'filled' : ''}">★</span>`
  ).join('');

  document.getElementById('ttHeader').innerHTML = `
    <span class="tooltip-icon">${skill.icon}</span>
    <div class="tooltip-title-wrap">
      <div class="tooltip-title">${skill.name}</div>
      <div class="tooltip-id">${skill.id}</div>
    </div>
  `;

  document.getElementById('ttMeta').innerHTML = `
    <span class="tooltip-module" style="color: ${modColorMap[skill.module]}">
      <span class="tooltip-module-dot" style="background: ${modColorMap[skill.module]}"></span>
      ${skill.module}
    </span>
    <span class="tooltip-time">⏱ ${skill.time}</span>
    <span class="tooltip-difficulty">${stars}</span>
  `;

  const statusMap = {
    locked: { cls: 'locked', text: '🔒 未解锁 - 完成前置技能' },
    unlocked: { cls: 'unlocked', text: '✨ 可学习 - 点击标记完成' },
    completed: { cls: 'completed', text: '✅ 已完成 - 点击取消' }
  };
  document.getElementById('ttStatus').className = 'tooltip-status ' + statusMap[state].cls;
  document.getElementById('ttStatus').textContent = statusMap[state].text;

  if (skill.prereqs.length === 0) {
    document.getElementById('ttPrereqs').innerHTML = '';
  } else {
    const prereqItems = skill.prereqs.map(pid => {
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

    document.getElementById('ttPrereqs').innerHTML = `
      <div class="tooltip-divider"></div>
      <div class="tooltip-prereqs-label">前置技能</div>
      <div class="prereq-list">${prereqItems}</div>
    `;
  }

  // Position tooltip
  const rect = e.currentTarget.getBoundingClientRect();
  let left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2;
  let top = rect.top - tooltip.offsetHeight - 20;

  if (left < 16) left = 16;
  if (left + tooltip.offsetWidth > window.innerWidth - 16) {
    left = window.innerWidth - tooltip.offsetWidth - 16;
  }
  if (top < 16) top = rect.bottom + 20;

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
  tooltip.classList.add('visible');
}

function hideTooltip() {
  tooltip.classList.remove('visible');
}

// Toast Notifications
function showToast(type, title, message, icon) {
  if (currentToast) {
    currentToast.classList.add('hiding');
    setTimeout(() => currentToast?.remove(), 300);
  }

  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <div class="toast-icon-wrap">${icon}</div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-message">${message}</div>
    </div>
    <div class="toast-progress">
      <div class="toast-progress-bar"></div>
    </div>
  `;

  container.appendChild(toast);
  currentToast = toast;

  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => {
      toast.remove();
      if (currentToast === toast) currentToast = null;
    }, 300);
  }, 4000);
}

// Zoom Controls
function setZoom(level) {
  zoomLevel = Math.max(50, Math.min(200, level));
  const container = document.getElementById('treeContainer');
  container.style.transform = `scale(${zoomLevel / 100})`;
  document.getElementById('zoomLevel').textContent = zoomLevel + '%';
}

function fitToWindow() {
  const container = document.getElementById('treeContainer');
  const parent = container.parentElement;
  const containerWidth = 1400;
  const parentWidth = parent.clientWidth - 160;
  const scale = Math.min(100, Math.round((parentWidth / containerWidth) * 100));
  setZoom(scale);
}

// Search
function handleSearch(e) {
  searchQuery = e.target.value.trim();
  render();
}

function clearSearch() {
  const input = document.getElementById('skillSearch');
  input.value = '';
  searchQuery = '';
  render();
}

// View Filter
function setView(view) {
  activeView = view;
  document.querySelectorAll('.view-btn').forEach(btn => {
    const isActive = btn.id === `view${view.charAt(0).toUpperCase() + view.slice(1)}`;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });
  render();
}

// Sidebar Toggle
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('collapsed');
}

// Event Listeners
document.getElementById('resetBtn').addEventListener('click', resetProgress);
document.getElementById('completeAllBtn').addEventListener('click', completeAllAvailable);
document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
document.getElementById('skillSearch').addEventListener('input', handleSearch);

document.getElementById('zoomIn').addEventListener('click', () => setZoom(zoomLevel + 10));
document.getElementById('zoomOut').addEventListener('click', () => setZoom(zoomLevel - 10));
document.getElementById('zoomFit').addEventListener('click', fitToWindow);

document.getElementById('viewAll').addEventListener('click', () => setView('all'));
document.getElementById('viewCompleted').addEventListener('click', () => setView('completed'));
document.getElementById('viewUnlocked').addEventListener('click', () => setView('unlocked'));

// Keyboard Navigation
let focusedNodeIndex = -1;

document.addEventListener('keydown', (e) => {
  const nodes = document.querySelectorAll('.skill-node:not(.skill-locked):not(.hidden)');
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
  } else if (e.key === 'Escape') {
    hideDetailPanel();
    hideTooltip();
  } else if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
    if (document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      document.getElementById('skillSearch').focus();
    }
  }
});

// Mouse wheel zoom
document.getElementById('treeContainer').addEventListener('wheel', (e) => {
  if (e.ctrlKey || e.metaKey) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -10 : 10;
    setZoom(zoomLevel + delta);
  }
}, { passive: false });

// Initialize
render();

// Welcome toast
setTimeout(() => {
  const hasVisited = localStorage.getItem('skill_tree_visited_v3');
  if (!hasVisited) {
    showToast('info', '欢迎使用技能树', '点击技能查看详情，按 / 快速搜索', '👋');
    localStorage.setItem('skill_tree_visited_v3', '1');
  }
}, 800);
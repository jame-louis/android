# Plan: Android Skill Tree Web Page

## Architecture

### File Structure
```
skill/
├── index.html       # Main page: markup, SVG container, control panel
├── style.css        # All styling: grid layout, node states, animations, modules
├── app.js           # All logic: DAG render, localStorage, unlocks, interactions
├── research.md      # (done) Research findings
├── plan.md          # (this file) Implementation plan
└── todo.md          # Task checklist
```

### Data Model
```javascript
const skills = [
  { id: '1.1', name: 'Android Studio安装', module: '环境搭建', time: '0.5h', diff: 1, prereqs: [], x: 0, y: 0 },
  { id: '1.2', name: 'JDK配置', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.1'], x: 1, y: 0 },
  { id: '1.3', name: 'SDK配置', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.1'], x: 2, y: 0 },
  { id: '1.4', name: 'AVD创建与优化', module: '环境搭建', time: '0.5h', diff: 1, prereqs: ['1.3'], x: 3, y: 0 },
  { id: '2.1', name: '创建首个项目', module: '项目运行', time: '0.5h', diff: 1, prereqs: ['1.2', '1.3'], x: 1, y: 1 },
  { id: '2.2', name: '模拟器部署运行', module: '项目运行', time: '0.5h', diff: 1, prereqs: ['1.4', '2.1'], x: 2, y: 1 },
  { id: '3.1', name: '文本类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 0, y: 2 },
  { id: '3.2', name: '图像类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 1, y: 2 },
  { id: '3.3', name: '交互类组件', module: 'UI基础组件', time: '1h', diff: 1, prereqs: ['2.2'], x: 2, y: 2 },
  { id: '4.1', name: 'LinearLayout线性布局', module: '布局管理', time: '1h', diff: 1, prereqs: ['3.1', '3.2', '3.3'], x: 0, y: 3 },
  { id: '4.2', name: 'RelativeLayout相对布局', module: '布局管理', time: '1h', diff: 2, prereqs: ['3.1', '3.2', '3.3'], x: 1, y: 3 },
  { id: '4.3', name: 'ConstraintLayout约束布局', module: '布局管理', time: '2h', diff: 2, prereqs: ['3.1', '3.2', '3.3', '4.1'], x: 2, y: 3 },
  { id: '5.1', name: '自定义组合控件', module: '自定义UI', time: '2h', diff: 3, prereqs: ['4.1', '4.2', '4.3'], x: 0, y: 4 },
  { id: '5.2', name: '自定义View绘制', module: '自定义UI', time: '3h', diff: 4, prereqs: ['4.3', '5.1'], x: 1, y: 4 },
  { id: '6.1', name: 'Intent基础机制', module: '页面导航', time: '1.5h', diff: 2, prereqs: ['2.2'], x: 3, y: 2 },
  { id: '6.2', name: 'Activity生命周期', module: '页面导航', time: '1h', diff: 2, prereqs: ['6.1'], x: 3, y: 3 },
  { id: '6.3', name: '数据传递与返回', module: '页面导航', time: '1.5h', diff: 3, prereqs: ['6.1', '6.2'], x: 3, y: 4 },
  { id: '7.1', name: 'Glide基础集成', module: '图片加载', time: '1h', diff: 2, prereqs: ['3.2'], x: 4, y: 2 },
  { id: '7.2', name: 'Glide高级功能', module: '图片加载', time: '1.5h', diff: 3, prereqs: ['7.1'], x: 4, y: 3 },
  { id: '8.1', name: 'MediaPlayer基础', module: '媒体播放', time: '2h', diff: 3, prereqs: ['2.2'], x: 5, y: 2 },
  { id: '8.2', name: 'ExoPlayer进阶', module: '媒体播放', time: '2.5h', diff: 4, prereqs: ['8.1'], x: 5, y: 3 },
  { id: '9.1', name: 'SQLite基础操作', module: '数据库', time: '2.5h', diff: 3, prereqs: ['2.2'], x: 6, y: 2 },
  { id: '9.2', name: 'Room持久化库', module: '数据库', time: '3h', diff: 4, prereqs: ['9.1'], x: 6, y: 3 }
];
```

Grid `x` spans 0-6 (modules arranged horizontally), `y` spans 0-4 (difficulty/progression vertically).

### localStorage Schema
```javascript
{
  version: 1,
  skills: {
    '1.1': { status: 'completed', completedAt: 1713000000000 },
    '1.2': { status: 'unlocked', completedAt: null },
    // ...
  }
}
```

Initial state: all root skills (prereqs.length === 0) are `unlocked`, others are `locked`.
On click: if `unlocked`, toggle to `completed`. If `completed`, can toggle back to `unlocked` only if no children depend on it (or allow freely but re-lock children). **Decision**: allow toggling completed → unlocked, which auto-locks all descendants for consistency.

### Rendering Strategy
1. **SVG layer**: Draw connection paths from each skill's center to each prerequisite's center. Path style depends on child state (bright if child completed, dim if locked/unlocked).
2. **HTML node layer**: Positioned absolutely over the SVG. Each node is a card showing:
   - Skill ID badge
   - Name
   - Time badge
   - Difficulty stars
   - Status glow/overlay
3. **Module backgrounds**: Semi-transparent rounded rectangles behind each module's nodes.

### CSS State Classes
| Class | Style |
|-------|-------|
| `.skill-locked` | `opacity: 0.4`, grayscale filter, no pointer events on inner content |
| `.skill-unlocked` | `opacity: 1`, subtle module-color border, pulsing glow animation |
| `.skill-completed` | `opacity: 1`, solid module-color background, white text, checkmark icon |

### Animations
- **Unlock pulse**: CSS `@keyframes pulse` on `.skill-unlocked` box-shadow
- **Complete pop**: `transform: scale(1.1)` then settle on click
- **Path draw**: `stroke-dasharray` + `stroke-dashoffset` transition when path becomes active

### Game Design Touches
1. **Progress panel**: Top-right summary showing total % completed and per-module counts.
2. **Unlock celebration**: Brief particle-like CSS ripple effect on node when it transitions from locked → unlocked.
3. **Module headers**: Color-coded labels above each module cluster.
4. **Hover tooltip**: Floating tooltip showing full skill info and prerequisite list.

### Responsive Considerations
- Container has `min-width: 1000px` with horizontal scroll on small screens.
- Node size scales slightly with viewport, but the DAG grid is fixed to preserve readability.

### Accessibility
- Nodes are `<button>` elements for keyboard focus.
- `aria-pressed` reflects completed state.
- `aria-describedby` links to tooltip content.

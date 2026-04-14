# Research V2: Better Skill Tree Design

## Analysis of Current Design Issues

### 1. Visual Design Problems
- **Boxy rectangles** look like UI components, not skill nodes
- **No depth** - flat design without layering
- **Harsh borders** - too much visual noise
- **Poor typography** - everything looks the same weight
- **Module colors too saturated** - fight for attention

### 2. Game Design UX Issues
- **No sense of progression path** - lines don't guide the eye
- **Missing "constellation" feel** - should feel like exploring a map
- **Unlock feedback is weak** - needs celebration
- **No clear "you are here" indicator**

## Reference: Path of Exile Passive Tree
- **Orb nodes** - circles in varying sizes
- **Constellation lines** - curved, glowing paths
- **Depth layers** - background nebula, mid nodes, foreground connections
- **Color coding by type** - subtle, not garish
- **Zoom/pan** - explore the space

## Reference: Modern 2025 UI Trends
- **Glassmorphism** - frosted glass panels
- **Subtle gradients** - depth without distraction
- **Soft shadows** - elevation without harshness
- **Micro-interactions** - every action has feedback
- **Monospace for data** - clean, scannable

## Proposed Design System

### Color Palette
```
Background:   #0a0b0d (deep space black)
Surface:      rgba(255,255,255,0.03) (glass)
SurfaceHover: rgba(255,255,255,0.06)
Border:       rgba(255,255,255,0.08)
BorderActive: rgba(255,255,255,0.2)

TextPrimary:   #e6e8eb
TextSecondary: #8a8f98

Accent Modules (muted, not neon):
  环境搭建:    #5c8d6f (muted green)
  项目运行:    #5a8ab5 (muted blue)
  UI基础组件:  #b8906a (muted orange)
  布局管理:    #8b6a9c (muted purple)
  自定义UI:    #b06a7a (muted pink)
  页面导航:    #6a9b9c (muted cyan)
  图片加载:    #b87a5a (muted burnt)
  媒体播放:    #8c7a6a (muted brown)
  数据库:      #6a7a8a (muted slate)
```

### Node Design
```
Shape: Circle (not rectangle)
  - Base: 44px diameter
  - Large (for key skills): 56px

States:
  Locked:
    - Opacity: 0.25
    - Grayscale: 100%
    - Border: 1px dashed rgba(255,255,255,0.1)
    - No glow

  Unlocked (available to learn):
    - Opacity: 1
    - Border: 2px solid var(--module-color)
    - Box-shadow: 0 0 20px var(--module-color-dim)
    - Subtle pulse animation
    - Arrow indicator pointing in

  Completed:
    - Background: var(--module-color-dim)
    - Border: 2px solid var(--module-color)
    - Box-shadow: 0 0 30px var(--module-color)
    - Checkmark icon overlay
    - Connections glow brighter
```

### Connection Lines
```
Style:
  - Curved bezier (not straight)
  - Stroke: 2px
  - Color: var(--module-color) at 30% opacity

Active (when child completed):
  - Opacity: 80%
  - Width: 3px
  - Box-shadow: 0 0 10px var(--module-color)
  - Animated dash if the line represents a "path"
```

### Layout
```
Grid:
  - 7 columns (x: 0-6)
  - 5 rows (y: 0-4)
  - Cell size: 160x140px
  - Node centered in cell

Module backgrounds:
  - Large, soft, blurred shapes
  - Behind their nodes
  - Low opacity (5%)
  - Creates "zones" without harsh boxes

Perspective:
  - Subtle parallax on scroll (optional)
  - Slight rotation on container (2-3 degrees)
  - Creates depth, map-like feel
```

### Typography
```
Hierarchy:
  - Skill ID: 10px monospace, muted color
  - Skill name: 13px medium weight
  - Module headers: 18px light weight, letter-spaced
  - Progress numbers: 24px bold monospace

Font stack:
  - UI: "Inter", "PingFang SC", sans-serif
  - Data: "JetBrains Mono", "Fira Code", monospace
```

### Animations
```
Unlock celebration:
  - Particle burst from node (6-8 small orbs)
  - Node scales up 1.2x then settles
  - Glow expands and contracts
  - Sound (optional pop)

Completion:
  - Checkmark draws in (SVG stroke animation)
  - Ripple outward to connected nodes
  - Line brightens with a "traveling" light

Hover:
  - Node lifts (translateY -4px)
  - Shadow deepens
  - Tooltip fades in

Idle (subtle):
  - Unlocked nodes pulse glow
  - Connections shimmer faintly
```

## Implementation Strategy

### Phase 1: Foundation
- [ ] Set up new CSS variables for muted palette
- [ ] Create orb node component (circle, not rectangle)
- [ ] Implement state classes (locked/unlocked/completed)

### Phase 2: Connections
- [ ] Replace straight lines with curved beziers
- [ ] Animate active connections
- [ ] Add glow effects

### Phase 3: Polish
- [ ] Add unlock celebration animation
- [ ] Implement particle burst on complete
- [ ] Add subtle parallax/depth

### Phase 4: Testing
- [ ] Verify all states render correctly
- [ ] Test animations at different speeds
- [ ] Ensure accessibility (ARIA labels)

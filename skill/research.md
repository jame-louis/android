# Research: DAG Skill Tree with Game Design Theory

## 1. DAG Visualization on the Web

### Best Practice: SVG + CSS Approach
The 2025 state-of-the-art for web-based skill trees uses **SVG for connections** and **HTML/CSS for nodes**, as demonstrated by Coherent Labs' hexagonal skill tree tutorial ([Creating hexagonal skill tree](http://coherent-labs.com/blog/uitutorials/hexagon-skill-tree/)). This hybrid approach offers:
- **Scalable connection lines** between nodes (SVG paths)
- **Rich interactive nodes** (HTML elements with hover states, tooltips, icons)
- **Easy state styling** via CSS classes (locked/unlocked/completed)
- **Responsive layout** without complex canvas rendering

### Layout Algorithm
For a small DAG (20 nodes), a **fixed coordinate grid** is simpler and more performant than automatic graph layout algorithms:
- Assign each skill an `(x, y)` position on a virtual grid
- Map grid units to CSS `px` or `rem`
- Render SVG paths by connecting parent/child coordinates
- Group nodes by module using background sections or color coding

## 2. Game Design Theory for Skill Trees

### Core Mechanics
| Element | Purpose | Implementation |
|---------|---------|----------------|
| **Prerequisites** | Create meaningful choice order | Check if all parent skills are completed before unlock |
| **Module Grouping** | Reduce cognitive load | Color-code or section skills by module (UI基础组件, 布局管理, etc.) |
| **Visual States** | Communicate progress clearly | Locked (gray/dim), Unlocked (glowing/pulsing), Completed (filled/colorful) |
| **Feedback on Unlock** | Reward player effort | Animation (scale pulse, glow effect), sound optional |
| **Progress Summary** | Maintain motivation | Overall completion %, module completion counts |

### UX Patterns
- **Tooltip on hover**: Show skill name, duration, difficulty, prerequisites
- **Click to complete**: Toggle skill status; only allow if prerequisites met
- **Path highlighting**: Connect completed nodes with brighter lines
- **Locked node dimming**: Reduce opacity and disable interaction for unavailable skills

## 3. localStorage for Progress Tracking

### Recommended Schema
Use a **versioned, flat object** schema for simplicity and reliability:

```javascript
const STORAGE_KEY = 'android_skill_tree_v1';

{
  version: 1,
  skills: {
    '1.1': { status: 'completed', completedAt: 1713000000000 },
    '1.2': { status: 'locked', completedAt: null },
    // ...
  }
}
```

### Why This Pattern
- **Flat keyed by skill ID**: O(1) lookup for unlock checks
- **Versioned**: Enables future migrations if data schema changes
- **Small payload**: ~20 skills = trivial size, well within 5MB limit
- **Synchronous read acceptable**: Initial load is fast; no complex async needed

### Unlock Logic
```javascript
function canUnlock(skillId, allSkills, progress) {
  const skill = allSkills[skillId];
  if (!skill.prereqs || skill.prereqs.length === 0) return true;
  return skill.prereqs.every(id => progress[id]?.status === 'completed');
}
```

## 4. Tech Stack Decision

| Component | Choice | Reason |
|-----------|--------|--------|
| **Connections** | SVG `<path>` | Clean, scalable, easy to color by state |
| **Nodes** | HTML `<div>` | Rich content, CSS animations, accessible |
| **Layout** | Fixed grid coordinates | Deterministic, no layout algorithm needed |
| **State** | Vanilla JS + localStorage | Zero dependencies, simple, fits requirements |
| **Styling** | CSS custom properties | Easy theming, module colors, dark mode ready |

## 5. Sources
- [Creating hexagonal skill tree - Coherent Labs](http://coherent-labs.com/blog/uitutorials/hexagon-skill-tree/)
- [Using localStorage in Modern Applications - RxDB](https://rxdb.info/articles/localstorage.html)
- [Say Goodbye to localStorage in 2025 - LinkedIn](https://www.linkedin.com/posts/sonnuyadav_javascript-jsdeveloper-webdevelopment-activity-7354174780800954369-nWLb)

# Todo: Android Skill Tree

## Research
- [x] Research DAG visualization techniques
- [x] Research game design theory for skill trees
- [x] Research localStorage patterns for progress tracking
- [x] Write research.md

## Plan
- [x] Define data model (skills, prerequisites, coordinates)
- [x] Define localStorage schema
- [x] Define rendering strategy (SVG + HTML)
- [x] Define CSS state classes and animations
- [x] Write plan.md

## Build
- [x] Create index.html structure
- [x] Create style.css (grid, nodes, states, modules, animations)
- [x] Create app.js (data, render, localStorage, unlock logic, interactions)
- [x] Link skill tree from main index.html

## Review
- [ ] Test localStorage persistence across reloads
- [ ] Test unlock logic with prerequisite chains
- [ ] Test locking backward (complete -> unlock -> lock descendants)
- [ ] Verify SVG paths render correctly for all prerequisites
- [ ] Check responsive scroll behavior
- [ ] Validate accessibility (focus, ARIA)

# Angular + React Integration with Shadow DOM & Emotion

This project demonstrates how to embed isolated React components into an Angular app using Shadow DOM. React components are styled using Emotion (CSS-in-JS) for runtime style encapsulation, while Angular uses Tailwind CSS globally.

## 🚀 Goals

- Use React components inside Angular without style conflicts
- Encapsulate React styles using Shadow DOM
- Prevent Angular styles (e.g., Tailwind) from affecting React components
- Prevent React styles from leaking into Angular components

## 🧩 Architecture Overview

- React components are wrapped inside **custom Web Components**
- A shared utility `mountReactInShadowDom()` handles Shadow DOM creation and mounting
- Angular consumes the Web Components just like regular HTML tags

## 📋 TODO

- [ ] ✅ **Pass data from Angular to React**
  - Support attributes/props from Angular templates → React props
- [ ] ✅ **Emit events from React to Angular**
  - Dispatch `CustomEvent` from React buttons, handle in Angular
- [ ] ✅ **Write unit tests**
  - Jest for React components
  - Angular test for custom element presence + communication
- [ ] ⏳ Optional: Lazy load React components via dynamic imports
- [ ] ⏳ Optional: Create multiple reusable Web Component wrappers
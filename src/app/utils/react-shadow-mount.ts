// react-shadow-mount.ts
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Mounts a React component in a Shadow DOM.
 * @param Component React component to be mounted in Shadow DOM
 * @param hostElement Host element to attach the Shadow DOM
 */
export function mountReactInShadowDom(
  Component: React.ReactElement,
  hostElement: HTMLElement
) {
  const shadow = hostElement.attachShadow({ mode: 'open' });
  const mountPoint = document.createElement('div');
  shadow.appendChild(mountPoint);
  ReactDOM.createRoot(mountPoint).render(Component);
}

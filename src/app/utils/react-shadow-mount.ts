import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Mounts a React component inside a Shadow DOM attached to the given host element.
 *
 * This utility encapsulates the React component, its DOM, and styles within a shadow root
 * to prevent style leakage between Angular and React components.
 *
 * @param component - The React element to render (e.g. <MyComponent />).
 * @param hostElement - The host HTML element where the shadow root will be attached.
 * @param options - Optional configuration for injecting raw or external stylesheets.
 *   @param options.styles - A string of raw CSS to be injected into the shadow root.
 *   @param options.externalStylesheets - An array of external stylesheet URLs to inject.
 */
export function mountReactInShadowDom(
  component: React.ReactElement,
  hostElement: HTMLElement,
  options?: {
    styles?: string;
    externalStylesheets?: string[];
  }
): void {
  const shadow = hostElement.attachShadow({ mode: 'open' });

  // Inject raw CSS styles (if provided)
  if (options?.styles) {
    const style = document.createElement('style');
    style.textContent = options.styles;
    shadow.appendChild(style);
  }

  // Inject external stylesheet links (e.g., fonts or themes)
  if (options?.externalStylesheets) {
    for (const href of options.externalStylesheets) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', href);
      shadow.appendChild(link);
    }
  }

  const mountPoint = document.createElement('div');
  shadow.appendChild(mountPoint);

  ReactDOM.createRoot(mountPoint).render(component);
}

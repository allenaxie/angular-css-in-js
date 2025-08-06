import React from "react";
import ReactDOM from "react-dom/client";
import DummyComponent from "./DummyComponent";
import { mountReactInShadowDom } from "src/app/utils/react-shadow-mount";

class DummyShadowWrapper extends HTMLElement {
  constructor() {
    super();

    mountReactInShadowDom(<DummyComponent />, this, {
      styles: `
      :host {
        --primary-color: #16a34a;
      }
      h1 {
        color: var(--primary-color);
      }
      button {
        background: black !important;
        color: lime !important;
        font-size: 2rem;
      }
      `,
      externalStylesheets: [
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap",
      ],
    });
  }
}

// 4. Register the custom element (Web Component)
customElements.define("dummy-shadow-wrapper", DummyShadowWrapper);

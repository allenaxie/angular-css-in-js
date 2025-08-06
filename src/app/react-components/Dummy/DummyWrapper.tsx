import React from "react";
import ReactDOM from "react-dom/client";
import DummyComponent from "./DummyComponent";

class DummyShadowWrapper extends HTMLElement {
  constructor() {
    super();

    // 1. Create Shadow Root
    const shadow = this.attachShadow({ mode: "open" });

    // 2. Create mount point for React
    const mountPoint = document.createElement("div");
    shadow.appendChild(mountPoint);

    // 3. Mount React app inside Shadow DOM
    ReactDOM.createRoot(mountPoint).render(<DummyComponent />);
  }
}

// 4. Register the custom element (Web Component)
customElements.define("dummy-shadow-wrapper", DummyShadowWrapper);

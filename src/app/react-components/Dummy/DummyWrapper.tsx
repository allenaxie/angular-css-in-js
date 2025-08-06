import React from "react";
import ReactDOM from "react-dom/client";
import DummyComponent from "./DummyComponent";
import { mountReactInShadowDom } from "src/app/utils/react-shadow-mount";

class DummyShadowWrapper extends HTMLElement {
  constructor() {
    super();

    mountReactInShadowDom(<DummyComponent />, this);
  }
}

// 4. Register the custom element (Web Component)
customElements.define("dummy-shadow-wrapper", DummyShadowWrapper);

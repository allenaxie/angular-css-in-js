import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-css-in-js';

  ngOnInit(): void {
    // 1. Add a global style to turn all <button> elements green
    const globalStyle = document.createElement('style');
    globalStyle.textContent = `
    button {
      color: green !important;
      border: 2px solid green;
    }
  `;
    document.head.appendChild(globalStyle);

    // 2. Add a regular button to the document (affected by global style)
    const normalButton = document.createElement('button');
    normalButton.textContent = 'I should be green';
    document.body.appendChild(normalButton);

    // 3. Create Shadow DOM host
    const shadowHost = document.createElement('div');
    document.body.appendChild(shadowHost);

    // 4. Attach Shadow DOM and inject a button styled red
    const shadowRoot = shadowHost.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>
      button {
        border: 2px solid red;
        background-color: pink;
      }
    </style>
    <button>My text is NOT green (Shadow DOM)</button>
  `;
  }
}

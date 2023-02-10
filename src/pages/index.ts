import { html } from "../zitjs";
import global from "../../config/global.json";

export const header = html` <div id="header">
  <div id="header-container">
    <div id="header-title"><a href="/">${global.name}</a></div>

    <ul id="header-contents">
      <li>
        <a href="${global.entry}">Guide</a>
      </li>
      <li>
        <a href="${global.github}">Github</a>
      </li>
    </ul>
  </div>
</div>`;

export default {
  template: html`
    ${header}
    <div id="main">
      <div id="title">
        <div class="flex-container">
          <div>
            <div id="title-content">
              <h1>${global.name}</h1>
              <p id="title-detail">${global.description}</p>
              <div id="title-dir">
                <button class="tb shadow">
                  <a href="${global.entry}">get started</a>
                </button>
                <button class="tb shadow">
                  <a href="${global.github}">view on github</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="example">
        <div class="ex-container">
          <div class="ex-des">
            <h2>${global.features[1].name}</h2>
            <span>${global.features[1].des}</span>
          </div>

          <div class="ex-box">${global.features[1].example}</div>
        </div>

        <div class="ex-container">
          <div class="ex-box">${global.features[2].example}</div>
          <div class="ex-des">
            <h2>${global.features[2].name}</h2>
            <span>${global.features[2].des}</span>
          </div>
        </div>

        <div class="ex-container">
          <div class="ex-des">
            <h2>${global.features[3].name}</h2>
            <span>${global.features[3].des}</span>
          </div>
          <div class="ex-box">${global.features[3].example}</div>
        </div>
      </div>
    </div>
    <div class="footer-main">Copyright © 2023-present</div>
  `,
  js: () => {
    const header = document.getElementById("header") as any;
    header.setAttribute(
      "style",
      "border: #ffffff00; background-color: #ffffff00;"
    );

    document.addEventListener("scroll", (evt) => {
      if (window.scrollY > 10) {
        header.setAttribute("style", "");
      } else {
        header.setAttribute(
          "style",
          "border: #ffffff00; background-color: #ffffff00;"
        );
      }
    });

    // browser view
    const el = document.getElementById("view-reload");

    const data = [
      { id: 215 },
      { id: 215, name: "Awesome Juice" },
      { id: 215, name: "Awesome Juice", price: 0.5 },
      {
        id: 215,
        name: "Awesome Juice",
        price: 0.5,
        message: "Observer is watching your app!",
      },
    ];

    if (el) {
      let count = 0;
      const view = setInterval(() => {
        el.innerHTML = JSON.stringify(data[count], null, 2);
        count += 1;
        if (count === data.length) {
          clearInterval(view);
        }
      }, 1200);
    }
  },
};

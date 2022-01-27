<template>
  <div>
    <Title />
    <div class="buttons">
      <ul></ul>
    </div>
  </div>
</template>

<script>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  name: "buttons",
  data() {
    return {
      buttons: [
        {
          css: `
          .button-{index} {
       padding: 1.5rem 4rem;
      border: none;
      cursor: pointer;
      background: #288eec;
      border-radius: 20px;
      text-align: center;
      color: #fff;
      font-size: 17px;
      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      box-shadow: 24px 24px 84px #7dc0fe, inset -12px -12px 14px #006bcd,
        inset 10px 10px 20px #1684ea;
          }
        `,
        },
        {
          css: `
          .button-{index} {
            padding: 0 3rem;
            height: 50px;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: #288eec;
            border: none;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 5px;
            box-shadow: -2px 4px 16px #8bc3f6;
            }
        `,
        },

        {
          css: `
          .button-{index} {
             padding: 1rem 2.5rem;
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background: #ea4c89;
          border: none;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          border-radius: 5px;
          box-shadow: 0px 4px 16px #e82d75;
        `,
        },
        {
          css: `
          .button-{index} {
            padding: 0 2.5rem;
            height: 50px;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: #072227;
            border: none;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 12px;
            box-shadow: 1px 5px 10px rgba(7, 31, 36, 0.54);
            display: inline-block;
          }

        `,
        },
        {
          css: ` .button-{index}{padding: 0 3.2rem;
              height: 50px;
              text-align: center;
              font-size: 16px;
              text-transform: uppercase;
              cursor: pointer;
              background: #ab5cf5;
              border: none;
              color: #fff;
              font-weight: bold;
              letter-spacing: 1px;
              box-shadow: 8px 8px 0px rgb(0, 0, 0);}`,
        },

        {
          css: `
          .button-{index} {
            padding: 1rem 3rem;

            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: linear-gradient(88.18deg, #ff7b31 0.34%, #f669b5 121.79%);
            border-radius: 5px;
            border: none;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;}
          `,
        },
        {
          css: `.button-{index}{
          padding: 1rem 3.2rem;
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background: #e30000;
          border: none;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          box-shadow: -2px 5px 50px rgba(200, 0, 0, 0.54);
          }`,
        },
        {
          css: `.button-{index}{
          padding: 1rem 2.7rem;
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background: #96baff;
          border: 3px solid #121212;
          border-radius: 3px;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          box-shadow: 5px 5px 0px #000000;
        }
        }`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background: linear-gradient(90deg, #288eec 0%, rgba(229, 20, 247, 0.63) 100%);
        border-radius: 53px;
        border: none;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;}`,
        },
        {
          css: `.button-{index}{
        padding: 1rem 2.5rem;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background: #fff;
        border-radius: 53px;
        border: 1px solid #e8e8e8;
        color: #1e1b1b;
        font-weight: bold;
        letter-spacing: 1px;
        box-shadow: 0px 4px 16px rgba(154, 154, 154, 0.31);
        }`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
          text-align: center;
          border-radius: 3px;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background: #abcfff;
          border: none;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          box-shadow: 7px 9px 10px #5e95ff;}`,
        },
        {
          css: `.button-{index}{ padding: 1rem 3rem;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background: #ff7b31;
        box-shadow: inset 2px 9px 34px #feae80, 2px 5px 14px #ff9960;
        border-radius: 9px;
        border: none;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;}`,
        },
        {
          css: `.button-{index}{ padding: 1rem 3rem;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background: #288eec;
        box-shadow: -2px 4px 16px #8bc3f6;
        border-radius: 2px;
        border: none;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;}`,
        },
        {
          css: `.button-{index}{padding: 1rem 3rem;
        border: none;
        cursor: pointer;
        background: #172c41;
        text-align: center;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
        box-shadow: 3px 3px 6px #f1f1f1;
        color: #fff;
        font-size: 17px;
        font-weight: bold;
        letter-spacing: 2px;}`,
        },
        {
          css: `.button-{index}{ padding: 1rem 3.5rem;
        border: none;
        cursor: pointer;
        background: none;
        box-shadow: 0px 0px 0px 16px rgba(255, 67, 214, 0.25),
          0px 0px 0px 9px rgba(239, 56, 255, 0.25), 0px 0px 0px 3px #ff83eb;
        border-radius: 3px;
        text-align: center;
        color: #fd00c7;
        font-size: 17px;
        font-weight: bold;
        letter-spacing: 2px;
        text-transform: uppercase;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3.5rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            border: none;
            color: #fff;
            border: 2px solid #e1dbcf;
            background: linear-gradient(
              180deg,
              rgba(255, 125, 49, 0.575) 0.32%,
              #ff7b31 99.82%
            );
            border: none;
            font-weight: bold;
            letter-spacing: 1px;
            position: relative;


            }
        .button-{index}::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 25px;
        top: -15%;
        left: -15px;
        background: rgb(255, 255, 255);
        transform: rotate(30deg);
      }
    .button-{index}::before {
      content: "";
      position: absolute;
      width: 20px;
      height: 25px;
      bottom: -25%;
      right: -10px;
      background: rgb(255, 255, 255);
      transform: rotate(50deg);
      }
  `,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: #fff;
            border-radius: 53px;
            border: 3px solid #1e1b1b;
            color: #1e1b1b;
            font-weight: bold;
            letter-spacing: 1px;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 2.5rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: #efefef;
            border: 1px solid #e8e8e8;
            color: #9a9a9a;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 5px;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 2.7rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: transparent;
            border: 1px solid #e82d75;
            color: #e82d75;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 3px;}`,
        },
        {
          css: `.button-{index}{  padding: 0.7rem 0.9rem;
            text-align: center;
            font-size: 18px;
            text-transform: uppercase;
            cursor: pointer;
            background: #288eec;
            border: none;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 3px;}`,
        },
        {
          css: `.button-{index}{ padding: 1rem 2.5rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: #2d4263;
            border: none;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 12px;
            box-shadow: inset -5px -5px 10px rgba(29, 44, 69, 0.58);}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 8px;
            color: #ff48fa;
            cursor: pointer;
            box-shadow: 0 0 6px 0 rgba(157, 96, 212, 0.5);
            border: solid 3px transparent;
            background-image: linear-gradient(
                rgba(255, 255, 255, 0),
                rgba(255, 255, 255, 0)
              ),
              linear-gradient(101deg, #78e4ff, #ff48fa);
            background-origin: border-box;
            background-clip: content-box, border-box;
            box-shadow: 2px 1000px 1px #fff inset;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
              text-align: center;
              font-size: 16px;
              text-transform: uppercase;
              cursor: pointer;
              background: #288eec;
              border: none;
              color: #fff;
              font-weight: bold;
              letter-spacing: 1px;
              border-radius: 25px;
              box-shadow: -2px 4px 16px #d6d6d6;}`,
        },
        {
          css: `.button-{index}{  padding: 0.5rem 1rem;
              border: none;
              border-radius: 3px;
              cursor: pointer;
              background: #399df9;
              text-align: center;
              box-shadow: -3px 3px 3px #acacac;
              color: #fff;
              font-size: 17px;
              font-weight: bold;
              letter-spacing: 2px;
              text-transform: uppercase;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
              border: none;
              cursor: pointer;
              background: #172c41;
              text-align: center;
              border-top-left-radius: 15px;
              border-bottom-right-radius: 15px;
              box-shadow: 3px 3px 6px #f1f1f1;
              color: #fff;
              font-size: 17px;
              font-weight: bold;
              letter-spacing: 2px;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
              border: none;
              cursor: pointer;
              background: none;
              border-top: 2px solid black;
              border-bottom: 2px solid black;
              text-align: center;
              color: black;
              font-size: 17px;
              font-weight: bold;
              letter-spacing: 2px;
              outline: none;
              text-transform: uppercase;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3rem;
                border: none;
                cursor: pointer;
                background: #081018;
                text-align: center;
                border-top-left-radius: 15px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                box-shadow: 3px 3px 12px #303b46af;
                color: #fff;
                font-size: 17px;
                font-weight: bold;
                letter-spacing: 2px;}`,
        },
        {
          css: `.button-{index}{  padding: 0 3.2rem;
              height: 50px;
              text-align: center;
              font-size: 16px;
              text-transform: uppercase;
              cursor: pointer;
              background: #aa14f0;
              border: none;
              color: #fff;
              font-weight: bold;
              letter-spacing: 1px;}`,
        },
        {
          css: `.button-{index}{  padding: 1rem 3.2rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 4px;
            border: none;
            color: rgb(71, 69, 69);
            background-color: #e0e5ec;
            font-weight: bold;
            letter-spacing: 1px;
            box-shadow: 9px 9px 16px rgb(163, 177, 198, 0.6),
              -9px -9px 16px rgba(255, 255, 255, 0.5);}`,
        },
        {
          css: `.button-{index}{  padding: 0 3.2rem;
              height: 50px;
              text-align: center;
              font-size: 16px;
              text-transform: uppercase;
              cursor: pointer;
              border: none;
              color: rgb(255, 255, 255);
              font-weight: bold;
              letter-spacing: 1px;
              background: #00b09b;
              box-shadow: 0 -5px 0 #fff, 0 5px 0 #fff, 5px 0px 0 #fff, -5px 0px 0 #fff,
                0px 0px 0 10px #1d867a;}`,
        },
        {
          css: `.button-{index}{ padding: 1rem 3rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            border: none;
            color: #000000;
            border: #eb7777 4px solid;
            font-weight: bold;
            letter-spacing: 1px;
            border-radius: 0.25em;
            text-shadow: 0 0 0.1em #eb7777, 0 0 0.5em #fff;
            box-shadow: inset 0 0 0.5em 0 #eb7777, 0 0 0.5em 0 #eb7777;
            position: relative;
            background: #fab6b6;}`,
        },
        {
          css: `.button-{index}{  padding: 1.5rem 4rem;
          text-align: center;
          border-radius: 3px;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background: #344cb7;
          border: none;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;}`,
        },
        {
          css: `.button-{index}{
            padding: 1rem 3.5rem;
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          color: #fff;
          background: #00376a;
          border: none;
          font-weight: bold;
          letter-spacing: 1px;
          position: relative;
          border-radius: 1px;
}
  .button-{index}::after{
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      top: 0;
      left: 0;
      background: #fff;
  }
  .button-{index}::before{
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      bottom: 0;
      right: 0;
      background: #fff;
  }
`,
        },
      ],
    };
  },
  methods: {
    async addButton(button) {
      const index = this.buttons.indexOf(button) + 1;

      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      let html = `<button class="button-${index}" role="button" >Button ${index}</button>`;

      if (button.html) {
        html = button.html.replace(/{index}/g, index);
      }
      if (button.liBackground) {
        li.style.background = button.liBackground;
      }

      li.innerHTML = `
        <div class="button-wrapper">
          ${html}
        </div>
        <style>
          ${button.css.replace(/{index}/g, index)}
        </style>
      `;

      const clickEvent = li.querySelector(".button-wrapper");

      li.querySelector(
        ".button-wrapper"
      ).dataset.tippyContent = `Click to copy button ${index} `;
      tippy("[data-tippy-content]");
      ul.appendChild(li);

      clickEvent.addEventListener(
        "click",
        function () {
          this.copy(button, li, html, index);
        }.bind(this),
        false
      );
    },
    // copy  function
    copy(button, li, html, index) {
      const textElement = button.html
        ? li.querySelector("button .text") || li.querySelector("button")
        : li.querySelector("button");
      const previousTextContent = textElement.textContent;
      this.copyToClipboard(
        `
        ${html}
        ${button.css.replace(/{index}/g, index)}
        `
      );

      if (textElement.textContent !== `Copied ${index}`) {
        li.classList.add("copied");
        textElement.textContent = `Copied ${index}`;
        setTimeout(() => {
          textElement.textContent = previousTextContent;
          li.classList.remove("copied");
        }, 1000);
      }
    },
    copyToClipboard(value) {
      const tempInput = document.createElement("textarea");
      tempInput.style = "position: absolute; left: -1000px; top: -1000px";
      tempInput.value = value;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      return true;
    },

    async processArray(buttonsArray) {
      buttonsArray.map((button) => {
        this.button = button;
        this.addButton(button);
      });
    },
  },
  mounted() {
    this.processArray(this.buttons);
    this.addButton();
  },
};
</script>

<style></style>

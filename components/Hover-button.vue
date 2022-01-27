<template>
  <div>
    <div class="buttons">
      <ul></ul>
    </div>
  </div>
</template>

<script>
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

export default {
  data() {
    return {
      buttons: [
        {
          css: ` 
    .button-{index}{
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
    transition: box-shadow 0.3s, border 0.2s;}
    .button-{index}:hover {
    box-shadow: none;
    border: none;
}
  `,
        },
        {
          css: `.button-{index}{
              padding: 1rem 3rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: rgb(56, 56, 56);
            border-radius: 15px;
            border: none;
            color: #fff;
            font-weight: bold;
            letter-spacing: 1px;
            box-shadow: 5px 5px 10px rgba(226, 226, 226, 0.664);
            }
            .button-{index}:hover {
            background: linear-gradient(88.18deg, #ff7b31 0.34%, #f669b5 121.79%);
        } `,
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
            transition: 0.5s box-shadow;} 
            
            .button-{index}:hover{box-shadow: 7px 9px 8px #5e95ff;}`,
        },
        {
          css: `.button-{index}{
            padding: 1.5rem 4rem;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            background: #00a8ff;
            border: none;
            color: rgb(255, 255, 255);
            font-weight: bold;
            letter-spacing: 1px;
            transition: 0.3s transform, 0.3s box-shadow linear;
        }
         .button-{index}:hover{  transform: rotateY(15deg);
          box-shadow: -15px 0 15px #00a8ff;}
        `,
        },
        {
          css: `.button-{index}{
              padding: 0.8rem 2.5rem;
        background: transparent;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        border: 1px solid black;
        color: rgb(31, 31, 31);
        font-weight: 300;
        letter-spacing: 1px;
        transition: 0.3s linear;
        position: relative;
        }
        .button-{index}::after{ content: "";
        background-color: #dcbaff;
        width: 100%;
        z-index: -1;
        position: absolute;
        height: 100%;
        top: 7px;
        left: 7px;
        transition: top 0.3s, left 0.3s;}
        .button-{index}:hover::after{
             top: 0;
             left: 0;
        }
        `,
        },
        {
          css: `.button-{index}{
        padding: 0.8rem 2.5rem;
        background: transparent;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        border: 1px solid black;
        color: rgb(31, 31, 31);
        font-weight: 300;
        letter-spacing: 1px;
        transition: 0.3s linear;
        position: relative;

        }
        .button-{index}::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        transform: scalex(0);
        background: lightcoral;
        transform-origin: right;
        transition: transform 200ms ease-in;
        }
       .button-{index}:hover::after {
        transform: scalex(1);
        transform-origin: left;
} `,
        },
        {
          css: `.button-{index}{  padding: 0.8rem 2.5rem;
        background: transparent;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        border: 1px solid rgb(63, 163, 245);
        color: rgb(31, 31, 31);
        font-weight: 300;
        letter-spacing: 1px;
        transition: 0.3s linear;
        position: relative;}

        .button-{index}::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: rgb(63, 163, 245);
        transform: scale(0);
        transform-origin: bottom right;
        transition: transform 200ms ease-in;
        }
        .button-{index}:hover::after {
        transform: scalex(1);
        transform-origin: top left;
        }
  `,
        },
        {
          css: `.button-{index}{
        padding: 1rem 3rem;
        background: #909090;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        color: rgb(255, 255, 255);
        font-weight: bold;
        letter-spacing: 1px;
        border-radius: 5px;
        transition: 0.3s linear;
        position: relative;
        z-index: 1;
        }
        
        .button-{index}::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgb(32, 32, 32);
        transform: scaley(0);
        border-radius: 5px;
        transform-origin: bottom;
        transition: transform 200ms ease-in;
        z-index: -1;
        }

        .button-{index}:hover::after {
        transform: scaley(1);
        }
        `,
        },
        {
          css: `.button-{index}{
         padding: 1rem 3rem;
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
        letter-spacing: 1px;
        transition: 0.5s transform;
        }

        .button-{index}:hover {
        transform: translateY(-10px);
        }
        `,
        },

        {
          css: `.button-{index}{
          padding: 1rem 3rem;
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          background: #679ad6;
          border-radius: 2px;
          border: none;
          color: #fff;
          font-weight: bold;
          letter-spacing: 1px;
          transition: 0.2s transform ease-out;
        }
        .button-{index}:hover {
        transform: scale(1.1);
        }
        `,
        },
        {
          css: `.button-{index}{
        padding: 1rem 3.5rem;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        background: #060a0e;
        border-radius: 25px;
        border: none;
        color: #fff;
        font-weight: bold;
        letter-spacing: 1px;
        transition: 0.5s transform;
        }
        .button-{index}:hover {
        transform: translateX(5px) translateY(-7px);
        }
        `,
        },
        {
          css: `.button-{index}{
          padding: 1rem 3rem;
          background: #fff;
          text-align: center;
          font-size: 16px;
          text-transform: uppercase;
          cursor: pointer;
          border: 2px solid black;
          color: rgb(0, 0, 0);
          font-weight: 500;
          letter-spacing: 1px;
          border-radius: 5px;
          position: relative;
                }
        .button-{index}::after {
            content: "";
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            width: 100%;
            height: 100%;
            background-color: rgba(143, 143, 179, 0.774);
            z-index: -1;
            border-radius: 5px;
            border: solid 2px black;
            transition: 0.3s ease-in-out;
            }
            .button-{index}:hover::after {
            top: -0.6rem;
            left: -0.6rem;
            width: calc(100% + 0.5rem * 2);
            height: calc(100% + 0.5rem * 2);
            }
        `,
        },
        {
          css: `.button-{index}{
            padding: 2rem 4rem;
            background: rgb(255, 255, 255);
            text-align: center;
            font-size: 19px;
            text-transform: uppercase;
            cursor: pointer;
            border: none;
            color: rgb(255, 255, 255);
            font-weight: 500;
            letter-spacing: 1px;
            position: relative;
            }
            .button-{index}::before {
            content: "";
            position: absolute;
            background: rgb(0, 0, 0);
            clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
            transition: clip-path 0.4s cubic-bezier(0.2, 1, 0.8, 1);
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            }        
            .button-{index}:hover::before {
          background: #000;
          clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
        }
                  .button-{index} span {
          display: block;
          mix-blend-mode: difference;
          transition: transform 0.4s cubic-bezier(0.2, 1, 0.8, 1);
        }

        .button-{index}:hover span {
          transform: translate3d(-10px, 0, 0);
        }

        `,
        },
        {
          css: `.button-{index}{
         padding: 1rem 3rem;
        font-size: 19px;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #00b09b;
        border: none;
        text-transform: uppercase;
        box-shadow: 8px 9px rgb(63, 63, 63);
        transition: all 0.3s;
        }
        .button-{index}:active {
        box-shadow: 0 0px rgb(212, 212, 212);
        transform: translateY(4px);
        }
        `,
        },
        {
          css: `.button-{index}{
            padding: 1.2rem 3rem;
            background: rgb(253, 161, 161);
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            border: 2px solid black;
            color: rgb(0, 0, 0);
            font-weight: 500;
            letter-spacing: 1px;
            position: relative;
            border-radius: 8px;
            box-shadow: 5px 5px 0 black;
            transition: box-shadow 0.3s, transform 0.3s;
        }
            .button-{index}:hover {
            box-shadow: 2px 2px 0 black;
            transform: translate(-5px, -5px);
            }
        `,
        },
        {
          css: `.button-{index}{
            padding: 1.5rem 3rem;
            background: none;
            text-align: center;
            font-size: 16px;
            text-transform: uppercase;
            cursor: pointer;
            border: none;
            color: rgb(255, 255, 255);
            font-weight: 500;
            letter-spacing: 1px;
            position: relative;
                    }
        
            .button-{index}::before {
            content: "";
            position: absolute;
            background: black;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transition: transform 0.3s cubic-bezier(0.2, 1, 0.7, 1);
            z-index: -1;
            }

            .button-{index}:hover::before {
            transform: scale3d(0.9, 0.8, 1);
            }

            .button-{index}::after {
            content: "";
            position: absolute;
            border: 1px solid black;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            transform: scale3d(0.9, 0.65, 1);
            }

            .button-{index}:hover::after {
            transform: scale3d(1, 1, 1);
            }
        `,
        },
        {
          css: `.button-{index}{
         padding: 1.5rem 3rem;
        background: rgb(54, 54, 54);
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
        border: none;
        color: rgb(255, 255, 255);
        font-weight: 500;
        letter-spacing: 1px;
        position: relative;
        z-index: 1;
        overflow: hidden;
                }
        
        .button-{index}::after {
        content: "";
        position: absolute;
        background: linear-gradient(135deg, #90f7ec 10%, #32ccbc 100%);
        width: 100%;
        height: 100%;
        top: -90px;
        left: 0;
        z-index: -1;
        transition: top 0.3s ease-in-out;
        }
        .button-{index}:hover::after {
        top: 0;
        color: #fff;
        }
        `,
        },
        {
          css: `
        /*  you can also use this styling with anchor <a> tag. */

        .button-{index}{
        font-size: 1.2rem;
        text-decoration: none;
        font-weight: 700;
        color: #000;
        text-transform: uppercase;
        font-family: Georgia, "Times New Roman", Times, serif;
        position: relative;
        border:none;
        background:none;
        cursor:pointer;
        }

        .button-{index}::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        width: 100%;
        height: 2px;
        transform: scalex(0);
        transform-origin: right;
        transition: transform 250ms ease-in;
        }
        .button-{index}:hover::after {
        transform: scalex(1);
        transform-origin: left;
        }
        `,
        },
        {
          css: `
           /*  you can also use this styling with anchor <a> tag. */
          .button-{index}{
          font-size: 1.2rem;
          text-decoration: none;
          font-weight: 500;
          color: #000;
          text-transform: uppercase;
          font-family: sans-serif;
          position: relative;
          background:none;
          border:none;
          cursor:pointer;
        }
        .button-{index} span::after,
            span::before {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              background: black;
              width: 100%;
              height: 2px;
              transform: scalex(0);
              transform-origin: right;
              transition: transform 250ms ease-in;
              }
           .button-{index} span::before {
                bottom: -5px;
                transform-origin: left;
              }
          .button-{index} span:hover::after {
              transform: scalex(1);
              transform-origin: left;
            }
          .button-{index} span:hover::before {
            transform: scalex(1);
            transform-origin: right;
          }
        `,
        },
        {
          css: `
          .button-{index}{
          background:none;
          cursor:pointer;
          border:none;
          padding: 0 5px;
          text-decoration: none;
          font-weight: 500;
          font-size: 18px;
          color: rgb(58, 58, 58);
          text-transform: uppercase;
          font-family: sans-serif;
          transition: transform 250ms ease-in;
          position: relative;
          }
          
          .button-{index}::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          background: black;
          width: 100%;
          height: 2px;
          transform: scale(0);
          transform-origin: left;
          transition: transform 250ms ease-in;
        }
        .button-{index}:hover::after {
          transform: scale(1);
        }
        .button-{index}{
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.4, 1, 0.8, 1);
        }

        .button-{index}:hover{
          transform: scale3d(1.1, 1.1, 1.1);
        }
        `,
        },
        {
          css: `
          
        .button-{index}{
        background:none;
        border:none;
        cursor:pointer;
        }  
          
        .button-{index}{
        text-decoration: none;
        font-weight: 800;
        font-size: 18px;
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        font-family: sans-serif;
        position: relative;
        padding-bottom: 2px;
     

        }
        .button-{index}::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: black;
        width: 100%;
        height: 6px;
        border-radius: 5px;
        transition: height 250ms ease-in;
      }
      .button-{index}:hover::after {
        height: 2px;
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
      let html = `<button class="button-${index}" role="button" ><span>Button${index}<span/></button>`;
      this.index = index;

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
      // tool tip
      tippy("[data-tippy-content]", {
        animation: "perspective",
      });

      li.querySelector(
        ".button-wrapper"
      ).dataset.tippyContent = `Click to copy button ${index}`;
      ul.appendChild(li);

      clickEvent.addEventListener(
        "click",
        function () {
          this.copy(button, li, html, index);
        }.bind(this),
        false
      );
    },
    // copying   function
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

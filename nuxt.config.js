require("dotenv").config();
export default {
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Beautiful CSS Buttons",

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Amazing CSS button for your Websites",
      },
      { name: "format-detection", content: "telephone=no" },

      // Twitter
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@Ashraful__malik",
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "CSS Buttons",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Beautiful CSS Buttons for You Website",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://uibuttons.netlify.app/uibutton-img.png",
      },
      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: "og:site_name", property: "og:site_name", content: "UIButtons" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://uibuttons.netlify.app",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "CSS Buttons",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Beautiful CSS Buttons for You Websites",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "https://uibuttons.netlify.app/uibutton-img.png",
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: "https://uibuttons.netlify.app/uibutton-img.png",
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: "UI Buttons",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: `uibuttons.netlify.app`,
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],

    // canonical

    /*
     ** Head Property - https://nuxtjs.org/docs/2.x/features/meta-tags-seo
     */
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    // "~/assets/css/main.css",
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-analytics"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // google analytic

  googleAnalytics: {
    id: `${process.env.GOOGLE_ANALYTICS_ID}`,
    disableScriptLoader: true,
    checkDuplicatedScript: true,
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: `${process.env.GOOGLE_ANALYTICS_ID}`,
      disableScriptLoader: true,
      checkDuplicatedScript: true,
    },
  },
  devServer: {
    https: true,
  },
};

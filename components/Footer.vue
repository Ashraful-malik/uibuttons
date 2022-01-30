<template>
  <div>
    <footer>
      <div class="footer-content">
        <div class="logo">
          <h1 class="logo-color">
            <NuxtLink to="/" class="logo-link"> UI Buttons </NuxtLink>
          </h1>
        </div>
        <div class="social-links">
          <a href="https://www.instagram.com/ashraful__malik/" target="_blank">
            <i data-feather="instagram" class="icon"></i>
          </a>
          <a href="https://codepen.io/ashraful404" target="_blank">
            <i data-feather="codepen" class="icon"></i>
          </a>
          <a href="https://github.com/Ashraful-malik/uibuttons" target="_blank">
            <i data-feather="github" class="icon"></i>
          </a>
        </div>
      </div>
      <div class="bottom-text">
        <p>
          Made with<i data-feather="heart" fill="red"></i> by
          <a href="https://www.instagram.com/ashraful__malik/" target="_blank">
            Ashraful
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import feather from "feather-icons";

export default {
  mounted() {
    feather.replace();
  },
};
</script>

<style></style>

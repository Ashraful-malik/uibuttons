<template>
  <div>
    <nav>
      <div class="logo">
        <h1 class="logo_text">
          <NuxtLink to="/" class="logo-link"> UI Buttons </NuxtLink>
        </h1>
      </div>
      <div class="nav-links">
        <div class="nav-link">
          <NuxtLink to="/"> Buttons </NuxtLink>
        </div>
        <div class="nav-link">
          <div class="new-tag">New</div>
          <NuxtLink to="/hover-buttons"> Hover Effect Buttons </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

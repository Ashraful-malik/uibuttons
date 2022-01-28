<template>
  <div>
    <Buttons />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },
  name: "IndexPage",
  mounted() {
    console.log(process.env.GOOGLE_ANALYTICS_ID);
  },
};
</script>

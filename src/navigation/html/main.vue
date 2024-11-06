<template>
  <div>
    <div class="nav-group">
      <nav-item v-for="item in navs" :item="item"></nav-item>
    </div>
  </div>
</template>
<script setup>
import navs from "./nav.js";
import NavItem from "../../components/nav-item.vue";
</script>

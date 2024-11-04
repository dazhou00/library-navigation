<template>
  <el-menu :collapse="collapse">
    <el-menu-item v-for="item in menus">
      <el-icon><Menu /></el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from "vue";
import { menus, menuProps } from "./index.js";

defineOptions({
  name: "LnMenu",
});

const props = defineProps(menuProps);
</script>

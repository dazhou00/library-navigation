<template>
  <el-menu :collapse="collapse">
    <el-menu-item
      :class="{ active: activeMenu == item.path }"
      v-for="item in menus"
      @click="handleClick(item)"
    >
      <el-icon><Menu /></el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref, computed } from "vue";
import { menus, menuProps } from "./index.js";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "LnMenu",
});

const props = defineProps(menuProps);

const router = useRouter();
const route = useRoute();

const activeMenu = computed(() => {
  return route.path;
});
const handleClick = (item) => {
  console.log(item);
  router.push({ path: item.path });
};
</script>

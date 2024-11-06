<template>
  <header class="ln-header">
    <el-icon
      :size="20"
      @click="$emit('tologgleCollapse', (menuCollapse = !menuCollapse))"
    >
      <Fold v-if="!menuCollapse" />
      <Expand v-else />
    </el-icon>
    <el-switch v-model="isDark" />
  </header>
</template>
<script setup>
import { ref } from "vue";
import { useDark } from "@vueuse/core";
defineOptions({
  main: "LnHeader",
});
const emit = defineEmits({
  tologgleCollapse: () => true,
});

const menuCollapse = ref(false);
const isDark = useDark({
  valueDark: "dark",
  valueLight: "light",
});
</script>

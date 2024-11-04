<template>
  <el-container>
    <el-scrollbar>
      <el-affix>
        <el-switch
          v-model="isDark"
          :active-action-icon="View"
          :inactive-action-icon="Hide"
        />
      </el-affix>

      <router-view></router-view>
    </el-scrollbar>
  </el-container>
</template>

<script setup>
import { useDark } from "@vueuse/core";
defineOptions({
  main: "LnView",
});

const isDark = useDark({
  valueDark: "dark",
  valueLight: "light",
});
</script>

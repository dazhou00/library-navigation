<template>
  <el-container style="width: 100%; height: 100%">
    <el-aside :width="menuCollapse ? '60px' : '200px'" class="flex flex-column">
      <div class="ln-title">知识导航</div>

      <el-scrollbar ref="scrollbar" style="flex: 1">
        <ln-menu :collapse="menuCollapse"></ln-menu>
      </el-scrollbar>
    </el-aside>

    <el-container class="flex-column">
      <ln-header @tologgleCollapse="menuCollapse = $event" />
      <ln-view />
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, watch } from "vue";

import LnMenu from "./menu/main.vue";
import LnHeader from "./view/header.vue";
import LnView from "./view/main.vue";

const menuCollapse = ref(false);
</script>

<style></style>

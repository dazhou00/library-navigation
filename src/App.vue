<template>
  <el-container style="width: 100%; height: 100%">
    <el-aside :width="menuCollapse ? 60 : 200">
      <el-scrollbar ref="scrollbar">
        <el-affix>
          <div>导航</div>
          <el-icon @click="menuCollapse = !menuCollapse">
            <Fold v-if="!menuCollapse" />
            <Expand v-else />
          </el-icon>
        </el-affix>

        <ln-menu :collapse="menuCollapse"></ln-menu>
      </el-scrollbar>
    </el-aside>

    <ln-view></ln-view>
  </el-container>
</template>

<script setup>
import { ref, watch } from "vue";

import LnMenu from "./menu/main.vue";
import LnView from "./view/main.vue";

const menuCollapse = ref(false);

const scrollbar = ref();
watch(menuCollapse, () => {
  scrollbar.value.update();
});
</script>

<style></style>

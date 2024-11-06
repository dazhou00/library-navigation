<template>
  <div class="nav-item" @click="handleClick">
    <div class="flex align-center top">
      <el-image :src="item.logo" style="width: 40px; height: 40px">
        <template #error>
          <div class="image-slot">
            {{ item.title.slice(0, 1) }}
          </div>
        </template>
      </el-image>
      <div class="title">{{ item.title }}</div>
    </div>

    <div class="description">{{ item.description }}</div>
  </div>
</template>
<script setup>
import {} from "vue";

defineOptions({
  name: "NavItem",
});

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
});

const handleClick = () => {
  console.log(props.item);
  window.open(props.item.url, "_blank");
};
</script>

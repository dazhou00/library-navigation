<template>
  <div class="ln-index flex flex-column align-center justify-center">
    <div class="title">前端知识站点导航</div>
    <div class="description">不做知识点的生产者，只是知识的搬运工</div>
  </div>
</template>

<style lang="scss">
.ln-index {
  margin-top: 200px;
  box-sizing: border-box;
  .title {
    font-size: 40px;
    font-weight: bold;
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    max-width: 960px;
    line-height: 1.5;
    color: var(--color);
    transition: color 0.5s;
    font-size: 22px;
    margin: 24px auto 40px;
  }
}
</style>

<script setup>
import {ref} from "vue";

</script>

<template>
  <div>
    <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>支持功能说明</span>
      </div>
    </template>
    <div class="item text">JSON格式化</div>
    <div class="item text">CRON表达式</div>
    <div class="item text">常用正则</div>
    <div class="item text">调色板</div>
  </el-card>
  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
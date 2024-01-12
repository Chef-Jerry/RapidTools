<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <color-picker></color-picker>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import colorPicker from '../../../components/custom/colorPicker/index.vue';
</script>

<style scoped>
.page {
    padding: 5px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}

.el-card {
    display: flex;
    justify-content: center;
}
</style>
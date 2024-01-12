<template>
    <div class="page">
        <el-card shadow="never" class="vel_card_override">
            <vue-json-editor></vue-json-editor>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import VueJsonEditor from '../../../components/custom/jsoneditor/jsoneditor.vue'
</script>

<style scoped>
.page {
    padding: 5px;
}

.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}
</style>
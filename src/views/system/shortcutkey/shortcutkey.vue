<template>
    <div class="page">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span class="text-header">快捷键设置</span>
                    <span>
                        <el-button type="primary" text>恢复默认</el-button>
                    </span>

                </div>
            </template>
            <div class="setting">
                <el-row class="row">
                    <el-col :span="3">
                        <span>显示窗体</span>
                    </el-col>
                    <el-col :span="9">
                        <el-input disabled value="Alt + M"></el-input>
                    </el-col>
                </el-row>
                <el-row class="row">
                    <el-col :span="3">
                        <span>关闭窗体</span>
                    </el-col>
                    <el-col :span="9">
                        <el-input disabled value="Alt + N"></el-input>
                    </el-col>
                </el-row>
            </div>
            
            <template #footer>Footer content</template>
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.page {
    padding: 5px;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text-header{
    font-weight: 700;
    font-size: 16px;
}

.setting{
    margin: 0px 30px 0px 30px;
}

.row{
    margin: 10px 0px 10px 0px;
    display: flex;
    align-items: center;
}

</style>
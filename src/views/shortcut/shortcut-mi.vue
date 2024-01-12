<template>
    <div class="welcome_panel">
        <el-row>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="3">
                <el-card shadow="hover" class="vel_el_card_override vel_el_card_button">
                    <el-icon :size="36" :color="'#409eff'">
                        <Eleme />
                    </el-icon>
                    <p>JSON</p>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>

</script>

<style scoped>

.welcome_panel {
    padding: 20px 0px 0px 20px;
    background-color: #fff;
}

:deep(.vel_el_card_introduce) .el-card__body {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

:deep(.vel_el_card_override) .el-card__header {
    padding-top: 15px;
    padding-bottom: 15px;
}

.introduce_avatar .el-avatar {
    margin-right: 20px;
}

.introduce_desc {
    width: calc(100% - 80px);
    min-width: 200px;
}

.introduce_desc .tit {
    margin: 20px 0 15px 0;
    color: #141b1e;
    font-weight: 400;
    font-size: 20px;
}

.introduce_desc .tips {
    color: #808695;
}

.el-row .el-col {
    padding-bottom: 20px;
    padding-right: 20px;
}

.vel_el_card_override .card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.vel_el_card_override .vel_card_header_left {
    display: flex;
    align-items: center;
}

.vel_el_card_override .vel_card_header_left .el-icon {
    margin-right: 5px;
}

:deep(.vel_el_card_button) .el-card__body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

:deep(.vel_el_card_button) .el-card__body p {
    padding-top: 15px;
}
</style>
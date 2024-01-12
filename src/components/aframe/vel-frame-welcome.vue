<script>
import TableDemo1 from '@/components/common/table-demo-1.vue'
import { getVersion } from '@tauri-apps/api/app';
import { getAssetURL } from '../../utils/toolsutils';

export default {
    components: { TableDemo1 },
    data() {
        return {
            appVersion: "",
            funList: [
                {
                    imageUrl: getAssetURL("json.svg"),
                    name: "JSON",
                    path:""
                },
                {
                    imageUrl: getAssetURL("tiaoseban.svg"),
                    name: "调色板",
                    path:""
                },
                {
                    imageUrl: getAssetURL("Cronometer.svg"),
                    name: "CRON",
                    path:""
                },
                {
                    imageUrl: getAssetURL("zhengze.svg"),
                    name: "正则表达式",
                    path:""
                },
                {
                    imageUrl: getAssetURL("tiaoseban.svg"),
                    name: "二维码",
                    path:""
                }
            ]
        }
    },
    mounted() {
        getVersion().then(version => {
            console.log("version:", version)
            this.appVersion = "v"+version;
        })
    },
    methods: {

    }
}


</script>

<template>
    <div class="welcome_panel">
        <el-row>
            <el-col :xs="24" :sm="24" :md="24" :lg="10" :xl="10">
                <el-card shadow="hover" class="vel_el_card_override">
                    <template #header>
                        <div class="card-header">
                            <div class="vel_card_header_left">
                                <el-icon :size="20">
                                    <Sugar />
                                </el-icon>
                                <span>RapidTools {{ appVersion }}</span>
                            </div>
                            <div class="vel_card_header_right">
                                <!--<el-tag type="info"></el-tag>-->
                            </div>
                        </div>
                    </template>
                    <div class="item text">JSON格式化</div>
                    <div class="item text">CRON表达式</div>
                    <div class="item text">常用正则</div>
                    <div class="item text">调色板</div>
                </el-card>
                <el-card shadow="hover" class="vel_el_card_override" style="margin-top: 5px;">
                    <template #header>
                        <div class="card-header">
                            <div class="vel_card_header_left">
                                <el-icon :size="20">
                                    <Sugar />
                                </el-icon>
                                <span>快捷</span>
                            </div>
                            <div class="vel_card_header_right">
                                <!--<el-tag type="info"></el-tag>-->
                            </div>
                        </div>
                    </template>
                    <el-row :gutter="20">
                        <el-col :span="4" v-for="item in funList">
                            <div>
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="item.imageUrl"
                                        class="image" />
                                    <div style="padding: 0px;text-align: center;">
                                        <span>{{ item.name }}</span>
                                    </div>
                                </el-card>
                            </div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped>
.welcome_panel {
    padding: 20px 0 0 20px;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.image {
    width: 100%;
    display: block;
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

<template>
    <div class="page">
        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="表达式方式1" name="first">
                <div>
                    <CronUi ref="CronUi" @cronResult="resultValue"></CronUi>
                </div>
            </el-tab-pane>
            <el-tab-pane label="表达式方式2" name="second">
                <CronUiSecond ref="CronUiSecond" @cronResult="confirmCron"></CronUiSecond>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import CronUi from "../../../components/custom/cron/cron-ui/index.vue"
import CronUiSecond from "../../../components/custom/cron/cron-second/cron-ui/index.vue";

export default {
    components: { CronUi, CronUiSecond },
    data() {
        return {
            activeName:"first",
            result: "",
            resultForm: {
                cpmEveryStartCron: "",
                cpmEveryEndCron: ""
            }
        };
    },
    methods: {
        open() {
            this.$refs["CronUi"].dialogVisible = true;
        },
        open2() {
            this.$refs["CronUiSecond"].dialogVisible = true;
        },
        // 一次一个表达式---最终产生出来的cron表达式
        resultValue(data) {
            console.log(data);
            this.result = data;
        },
        // 一次两个表达式---规则配置-确定
        confirmCron(data) {
            console.log("cron结果", data);
            this.resultForm.cpmEveryStartCron = data.result;
            this.resultForm.cpmEveryEndCron = data.resultEnd;
        }
    }
}

</script>

<style scoped>
.page {
    padding: 5px;
}
</style>
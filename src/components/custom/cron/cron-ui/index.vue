<template>
    <el-tabs tab-position="left" style="height: 450px;" v-model="activeName">
      <el-tab-pane label="快捷生成" name="first" style="height: 360px;">
        <CronDefault ref="CronDefault" v-if="activeName == 'first'"></CronDefault>
      </el-tab-pane>
      <el-tab-pane label="自定义生成" name="second">
        <CronExc ref="CronExc" v-if="activeName == 'second'"></CronExc>
      </el-tab-pane>
    </el-tabs>
</template>
<script>
import CronExc from "../cron-custom/index.vue";
import CronDefault from "../cron-default/index.vue";
export default {
  components: {
    CronExc,
    CronDefault
  },
  data() {
    return {
      dialogVisible: true,
      activeName: "first",
      result: "" // 最终的结果表达式
    };
  },
  methods: {
    // 确定生成表达式
    confirmClick() {
      if (this.activeName == "first") {
        this.result = this.$refs["CronDefault"].cronExpression;
      } else {
        this.result = this.$refs["CronExc"].cronExpression;
      }
      //console.log(this.result);
      this.$emit("cronResult", this.result);
    }
  }
};
</script>
<style lang="css">
.cron-box-dialog-first {
  width: 700px;
}
.cron-box-dialog-first .el-dialog__header {
  padding: 10px;
  text-align: center;
}
.cron-box-dialog-first .el-dialog__header .el-dialog__headerbtn {
  top: 12px;
  right: 8px;
}
.cron-box-dialog-first .el-dialog__body {
  padding: 0 10px;
}
.cron-box-dialog-first .el-dialog__footer {
  padding: 10px;
  text-align: center;
}
</style>
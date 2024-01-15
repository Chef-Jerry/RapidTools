<template>
    <div>
        <el-card shadow="never" class="vel_card_override">
            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                <el-tab-pane label="MD5加密" name="md5">
                    <el-input v-model="inputStr" :rows="4" type="textarea" placeholder="请输入要加密的内容" />
                    <el-button style="margin-top: 5px;" @click="jerryMd5" type="primary">加密内容</el-button>
                    <el-input style="margin-top: 5px;" v-model="resultStr" :rows="5" type="textarea" placeholder="" />
                </el-tab-pane>
                <el-tab-pane label="SHA1加密" name="sha1">
                    <el-input v-model="inputSha1Str" :rows="4" type="textarea" placeholder="请输入要加密的内容" />
                    <el-button style="margin-top: 5px;" @click="jerrySha1" type="primary">加密内容</el-button>
                    <el-input style="margin-top: 5px;" v-model="resultSha1Str" :rows="5" type="textarea" placeholder="" />
                </el-tab-pane>
                <el-tab-pane label="SHA2加密" name="sha2">
                    <el-input v-model="inputSha2Str" :rows="4" type="textarea" placeholder="请输入要加密的内容" />
                    <el-row justify="space-between">
                        <el-radio-group v-model="radio2">
                            <el-radio label="sha224">sha224</el-radio>
                            <el-radio label="sha256">sha256</el-radio>
                            <el-radio label="sha384">sha384</el-radio>
                            <el-radio label="sha512">sha384</el-radio>
                        </el-radio-group>
                        <el-button style="margin-top: 5px;margin-right: 8px;" @click="jerrySha2" type="primary">加密内容</el-button>
                    </el-row>

                    <el-input style="margin-top: 5px;" v-model="resultSha2Str" :rows="5" type="textarea" placeholder="" />
                </el-tab-pane>
                <el-tab-pane label="SHA3加密" name="sha3">
                    <el-input v-model="inputSha3Str" :rows="4" type="textarea" placeholder="请输入要加密的内容" />
                    <el-row justify="space-between">
                        <el-radio-group v-model="radio3">
                            <el-radio label="sha224">sha224</el-radio>
                            <el-radio label="sha256">sha256</el-radio>
                            <el-radio label="sha384">sha384</el-radio>
                            <el-radio label="sha512">sha512</el-radio>
                        </el-radio-group>
                        <el-button style="margin-top: 5px;margin-right: 8px;" @click="jerrySha3" type="primary">加密内容</el-button>
                    </el-row>

                    <el-input style="margin-top: 5px;" v-model="resultSha3Str" :rows="5" type="textarea" placeholder="" />
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import { invoke } from '@tauri-apps/api/tauri'

export default {
    data() {
        return {
            activeName: 'md5',
            inputStr: "",
            resultStr: "",
            inputSha1Str: "",
            resultSha1Str: "",
            inputSha2Str: "",
            resultSha2Str: "",
            radio2:"sha224",
            inputSha3Str: "",
            resultSha3Str: "",
            radio3:"sha224"
        }
    },
    mounted() {

    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event)
        },
        jerryMd5() {
            let that = this;
            invoke("jerry_md5", { input: this.inputStr }).then(res => {
                console.log(res)
                that.resultStr = res;
            });
        },
        jerrySha1() {
            let that = this;
            invoke("jerry_sha1", { input: this.inputSha1Str }).then(res => {
                console.log(res)
                that.resultSha1Str = res;
            });
        },
        jerrySha2() {
            let that = this;
            invoke("jerry_sha2", { input: this.inputSha2Str, encryption: this.radio2 }).then(res => {
                console.log(res)
                that.resultSha2Str = res;
            });
        },
        jerrySha3() {
            let that = this;
            invoke("jerry_sha3", { input: this.inputSha3Str, encryption: this.radio3 }).then(res => {
                console.log(res)
                that.resultSha3Str = res;
            });
        }
    }
}
</script>

<style>
.vel_card_override {
    height: calc(100vh - 90px - 20px - 20px - 2px);
}
</style>
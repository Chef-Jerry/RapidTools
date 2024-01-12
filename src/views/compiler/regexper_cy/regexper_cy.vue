<template>
    <div>
        <el-card class="box-card" v-for="item in zz">
            <template #header>
                <div class="card-header">
                    <span style="font-weight: 700;font-size: 16px;">{{ item.title }}</span>
                </div>
            </template>
            <div>
                <div class="demo-collapse">
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item v-for="it in item.regexps" :name="it.name">
                            <template #title>
                                <span style="font-weight: 600;font-size: 12px;">{{ it.title }}</span>
                            </template>
                            <div class="cursor_hand" @click="writeRegexper(it.content)">
                                {{ it.content }}
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { writeText } from '@tauri-apps/api/clipboard';
import { ElMessage } from 'element-plus'
const activeName = ref('1')


const writeRegexper = (text) => {
    console.log(text)
    writeText(text);
    ElMessage({message:'复制成功',type: 'success'});
}

const zz = [
    {
        title: "密码验证类",
        regexps: [
            {
                name: "1",
                title: "6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格）",
                content: "^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$"
            },
            {
                name: "2",
                title: "6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母",
                content: "^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$"
            },
            {
                name: "3",
                title: "密码不能为纯数字或字母，不少于6位",
                content: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$"
            }
        ]
    },
    {
        title: "号码验证类",
        regexps: [
            {
                name: "4",
                title: "验证微信号",
                content: "^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$"
            },
            {
                name: "5",
                title: "腾讯QQ号码",
                content: "[1-9][0-9]{4,}"
            },
            {
                name: "6",
                title: "国内电话号码",
                content: "\d{3}-\d{8}|\d{4}-\{7,8}"
            },
            {
                name: "7",
                title: "带中划线的手机号码",
                content: "^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$"
            },
            {
                name: "8",
                title: "普通手机号码",
                content: "^1[34578]\d{9}$"
            },
            {
                name: "9",
                title: "普通电话、传真号码：可以“+”开头，除数字外，可含有“-”",
                content: "^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$"
            },
            {
                name: "10",
                title: "18位身份证号码",
                content: "^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$"
            },
            {
                name: "11",
                title: "中国邮政编码",
                content: "[1-9]\d{5}(?!\d)"
            }
        ]
    },
    {
        title: "地址类",
        regexps: [
            {
                name: "12",
                title: "IP地址",
                content: "(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d).(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d).(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d).(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)"
            },
            {
                name: "13",
                title: "URL",
                content: "[a-zA-z]+://[^\s]*"
            },
            {
                name: "14",
                title: "Email地址",
                content: "[\w!#$%&'*+/=?^_{|}~-]+(?:.[\w!#$%&'*+/=?^_{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?"
            }
        ]
    },
    {
        title: "匹配数字",
        regexps: [
            {
                name: "15",
                title: "验证数字",
                content: "^[0-9]*$"
            },
            {
                name: "16",
                title: "验证n位的数字",
                content: "^\d{n}$"
            },
            {
                name: "17",
                title: "验证至少n位数字",
                content: "^\d{n,}$"
            },
            {
                name: "18",
                title: "验证m-n位的数字",
                content: "^\d{m,n}$"
            },
            {
                name: "19",
                title: "验证零和非零开头的数字",
                content: "^(0|[1-9][0-9]*)$"
            },
            {
                name: "20",
                title: "验证有两位小数的正实数",
                content: "^[0-9]+(.[0-9]{2})?$"
            },
            {
                name: "21",
                title: "验证有1-3位小数的正实数",
                content: "^[0-9]+(.[0-9]{1,3})?$"
            },
            {
                name: "22",
                title: "验证非零的正整数",
                content: "^\+?[1-9][0-9]*$"
            },
            {
                name: "23",
                title: "验证非零的负整数",
                content: "^\-[1-9][0-9]*$"
            },
            {
                name: "24",
                title: "验证非负整数（正整数 + 0）",
                content: "^\d+$"
            },
            {
                name: "25",
                title: "验证非正整数（负整数 + 0）",
                content: "^((-\d+)|(0+))$"
            },

        ]
    },
    {
        title: "验证类",
        regexps: [
            {
                name: "26",
                title: "验证长度为3的字符",
                content: "^.{3}$"
            },
            {
                name: "27",
                title: "验证用户密码,格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线",
                content: "^[a-zA-Z]\w{5,17}$"
            },
            {
                name: "28",
                title: "验证是否含有 ^%&',;=?$\" 等字符",
                content: "[^%&',;=?$\x22]+"
            },
            {
                name: "29",
                title: "验证汉字",
                content: "^[\u4e00-\u9fa5],{0,}$"
            }
        ]
    },
]


</script>

<style>


.cursor_hand{
    cursor:copy
}

</style>
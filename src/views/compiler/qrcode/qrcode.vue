
<template>
    <div>
        <div class="qr">
            <vue-qr ref="qrcode" id="vueqrcode" :value="qrCodeScene" :margin="4" :foreground="foreground" :level="level"
                :background="background" :size="size"></vue-qr>
        </div>
        <div class="qr_input">
            <el-input v-model="qrCodeScene" :rows="2" type="textarea" placeholder="Please input" />
        </div>
        <div class="qr_input">
            <div style="display: flex;justify-self: start;">
                <div class="margin_left">
                    背景色:<el-color-picker v-model="background" />
                </div>
                <div class="margin_left">
                    前景色:<el-color-picker v-model="foreground" />
                </div>
                <div class="margin_left">
                    容错级别:<el-select v-model="level" class="m-2">
                        <el-option v-for="item in levelList" :key="item" :label="item" :value="item" />
                    </el-select>
                </div>
                <!--<div class="margin_left">
                    <el-button type="primary" @click="save">保存二维码</el-button>
                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
import VueQr from 'qrcode.vue'

export default {
    components: { VueQr },
    data() {
        return {
            //二维码内容
            qrCodeScene: '',
            //背景色
            background: '#FFFFFF',
            //二维码颜色
            foreground: '#000000',
            //二维码大小
            size: 220,
            //容错等级
            level: "H",
            levelList: [
                'L', 'M', 'Q', 'H'
            ]
        }
    },
    mounted() {

    },
    methods: {
        save() {
            //找到canvas标签
            const myCanvas = document.getElementsByTagName('canvas');
            console.log(myCanvas)
            //创建一个a标签节点
            const a = document.createElement('a')
            //设置a标签的href属性（将canvas变成png图片）
            a.href = myCanvas[0].toDataURL('image/png').replace('image/png', 'image/octet-stream')
            //设置下载文件的名字
            a.download = '二维码.png'
            //点击
            a.click()
        }
    }
}
/**
 * 
### `value`

- 类型：`string`
- 默认值：`''`

二维码的内容值。

### `size`

- 类型：`number`
- 默认值：`100`

二维码大小。

### `render-as`

- 类型：`RenderAs('canvas' | 'svg')`
- 默认值：`canvas`

生成二维码的 HTML 标签，可选 `canvas` 或 `svg`。其中 `svg` 可以用于 SSR。

### `margin`

- 类型：`number`
- 默认值：`0`

定义空白区的宽度应该是多少。

### `level`

- 类型：`Level('L' | 'M' | 'Q' | 'H')`
- 默认值：`H`

二维码的容错能力等级，取值为 'L', 'M', 'Q', 'H' 之一。了解更多，[维基百科：QR_code](https://en.wikipedia.org/wiki/QR_code#Error_correction)。

### `background`

- 类型：`string`
- 默认值：`#ffffff`

二维码背景颜色。

### `foreground`

- 类型：`string`
- 默认值：`#000000`

二维码前景颜色。
 */

</script>


<style>
.margin_left {
    margin-left: 10px;
}

.qr {
    text-align: center;
    padding-top: 20px;
}

.qr_input {
    padding: 10px;
    text-align: center;
}
</style>


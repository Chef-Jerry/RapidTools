import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import topLevelAwait from 'vite-plugin-top-level-await'

// Vite 配置
// 文档地址：https://vitejs.dev/config/
export default defineConfig({

    base: '',
    plugins: [
        vue(),
        commonjs(),
        topLevelAwait({
            promiseExportName: '__tla',
            promiseImportName: (i) => `__tla_${i}`,
        }),
    ],
    optimizeDeps: {
        include: [
            '@tauri-apps/api',
            'ajv-dist',
            'immutable-json-patch',
            'lodash-es',
            '@fortawesome/free-regular-svg-icons',
            'jmespath'
        ]
    },
    server: {
        strictPort: true,
    },
    envPrefix: ['VITE_', 'TAURI_PLATFORM', 'TAURI_ARCH', 'TAURI_FAMILY', 'TAURI_PLATFORM_VERSION', 'TAURI_PLATFORM_TYPE', 'TAURI_DEBUG'],
    resolve: {
        alias: {
            // build的时候，用于定义别名 @，它指向项目的 src 目录
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        // Tauri uses Chromium on Windows and WebKit on macOS and Linux
        target: process.env.TAURI_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
        // don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? 'esbuild' : false,
        // 为调试构建生成源代码映射 (sourcemap)
        sourcemap: !!process.env.TAURI_DEBUG,
        // 指定build输出目录
        outDir: 'docs',
        // 打包出来的区块如果超过1500KB，触发 'Some chunks are larger than 1500 KiB after minification' 警告
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                // 为所有node_modules的依赖创建一个独立区块
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        // 这里是返回依赖的包名，用作区块的名字
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString();
                    }
                },
                // 把不同的区块放入独立文件夹中
                chunkFileNames: (chunkInfo) => {
                    const facadeModuleId = chunkInfo.facadeModuleId
                        ? chunkInfo.facadeModuleId.split('/')
                        : [];
                    const fileName =
                        facadeModuleId[facadeModuleId.length - 2] || '[name]';
                    return `js/${fileName}/[name].[hash].js`;
                }
            },
        },
    }
})

import i18n from "../../lang"

export const menu_list = {
    "pages": [
        {
            "id": "0-1",
            "label": "个人中心",
            "icon": "",
            "path": "/user/userInfo",
            "component": "/user/page-userinfo"
        }
    ],
    "menus": [
        {
            "id": "100",
            "label": i18n.global.t("menus.developmentTool"),
            "icon": "SetUp",
            "children": [
                {
                    "id": "100-1",
                    "label": i18n.global.t("menus.jsonCompiler"),
                    "icon": "Lollipop",
                    "path": "/compiler/json",
                    "component": "/compiler/json/json"
                },
                {
                    "id": "100-4",
                    "label": i18n.global.t("menus.qrcode"),
                    "icon": "Orange",
                    "path": "/jieshao",
                    "component": "/compiler/qrcode/qrcode"
                },
                {
                    "id": "100-5",
                    "label": i18n.global.t("menus.colorpicker"),
                    "icon": "Coin",
                    "path": "/colorpicker",
                    "component": "/compiler/color/color"
                },
                {
                    "id": "100-6",
                    "label": i18n.global.t("menus.cronSelect"),
                    "icon": "Pear",
                    "path": "/cron",
                    "component": "/compiler/cron/cron"
                },
                {
                    "id": "100-7",
                    "label": i18n.global.t("menus.regexper"),
                    "icon": "Apple",
                    "path": "/regexper_cy",
                    "component": "/compiler/regexper_cy/regexper_cy"
                }
            ]
        },
        {
            "id": "200",
            "label": i18n.global.t("menus.system"),
            "icon": "Setting",
            "children": [
                {
                    "id": "200-1",
                    "label": i18n.global.t("menus.systemShortcut"),
                    "icon": "Lollipop",
                    "path": "/system/shortcutkey",
                    "component": "/system/shortcutkey/shortcutkey"
                }
            ]
        }
    ]
}

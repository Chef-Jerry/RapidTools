/** 状态栏 */
use crate::SystemTray;
use tauri::{CustomMenuItem, SystemTrayMenu, SystemTrayMenuItem, AppHandle, SystemTrayEvent, Manager};

pub fn init_tary(system_tray: SystemTray) -> SystemTray{
    //创建菜单
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let hide = CustomMenuItem::new("hide".to_string(), "Hide");
    let tray_menu = SystemTrayMenu::new()
        .add_item(hide)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    let tray = system_tray.with_menu(tray_menu);

    tray
}

/**
 * 监听托盘事件
 */
pub fn system_tray_loop(app: &AppHandle,event: SystemTrayEvent){
    match event {
        //双击事件
        SystemTrayEvent::DoubleClick { .. } => {
            let windows = app.windows();
            for (_key,win) in windows {
                if win.is_minimized().unwrap() {
                    let _ = win.unminimize();
                }
                let _ = win.show();
                let _ = win.set_focus();
            }
        }
        //左键点击
        SystemTrayEvent::LeftClick { .. } => {

        }
        //点击菜单
        SystemTrayEvent::MenuItemClick { id, .. } => {
            match id.as_str() {
                "quit" => {
                    app.exit(0);
                }
                "hide" => {
                    //隐藏所有窗体
                    let windows = app.windows();
                    for (key,win) in windows {
                        println!("key:{}",key);
                        let _ = win.hide();
                    }
                }
                _ => {

                }
            }
        }
        //右键点击
        SystemTrayEvent::RightClick { .. } => {

        }
        _ => {

        }
    }
}
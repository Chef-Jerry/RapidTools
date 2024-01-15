// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
mod tray;
mod utils;
use tauri::{SystemTray,GlobalShortcutManager, Manager};
use tray::{init_tary, system_tray_loop};
use utils::{md5_utils::jerry_md5,sha_utils::{jerry_sha1,jerry_sha2,jerry_sha3}};

fn main() {
    //初始化托盘
    let system_tray = SystemTray::new();
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![jerry_md5,jerry_sha1,jerry_sha2,jerry_sha3])
        .system_tray(init_tary(system_tray))
        .on_system_tray_event(system_tray_loop)
        .setup(|app| {
            let app_move = app.get_window("main").unwrap();
            let mut global_manager = app.global_shortcut_manager();
            //显示主窗体
            let show_main = app_move.clone();
            let _ = global_manager.register("Alt+M", move ||{
              if show_main.is_minimized().unwrap() {
                let _ = show_main.unminimize();
              }
              let _ = show_main.show();
              //置前
              let _ = show_main.set_focus();
            });
            //隐藏主窗体
            let hide_main = app_move.clone();
            let _ = global_manager.register("Alt+N", move ||{
              let _ = hide_main.hide();
            });
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

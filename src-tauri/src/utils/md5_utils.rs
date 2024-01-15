use tauri::command;


#[command]
pub fn jerry_md5(input: &str) -> String{
    
    let result = md5::compute(input);
    format!("{:x}",result)
}
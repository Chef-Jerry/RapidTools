use crypto::sha2::{Sha224, Sha256, Sha384, Sha512};
use crypto::sha3::Sha3;
use tauri::command;
use crypto::digest::Digest;
use crypto::sha1::Sha1;

#[command]
pub fn jerry_sha1(input: &str) -> String{
    let mut hasher = Sha1::new();
    hasher.input_str(input);
    hasher.result_str()
}


#[command]
pub fn jerry_sha2(input: &str,encryption: &str) -> String {
    match encryption {
        "sha224" => {
            let mut hasher = Sha224::new();
            hasher.input_str(input);
            return hasher.result_str();
        }
        "sha256" => {
            let mut hasher = Sha256::new();
            hasher.input_str(input);
            return hasher.result_str();
        }
        "sha384" => {
            let mut hasher = Sha384::new();
            hasher.input_str(input);
            return hasher.result_str();
        }
        "sha512" => {
            let mut hasher = Sha512::new();
            hasher.input_str(input);
            return hasher.result_str();
        }
        _ => {

        }
    }
    "加密错误".to_string()
}


#[command]
pub fn jerry_sha3(input: &str,encryption: &str) -> String {
    match encryption {
        "sha224" => {
            let mut hasher = Sha3::sha3_224();
            hasher.input_str(input);
            return hasher.result_str();
        }
        "sha256" => {
            let mut hasher = Sha3::sha3_256();
            hasher.input_str(input);
            return hasher.result_str();
        }
        "sha384" => {
            let mut hasher = Sha3::sha3_384();
            hasher.input_str(input);
            return hasher.result_str();
        }
        "sha512" => {
            let mut hasher = Sha3::sha3_512();
            hasher.input_str(input);
            return hasher.result_str();
        }
        _ => {

        }
    }
    "加密错误".to_string()
}




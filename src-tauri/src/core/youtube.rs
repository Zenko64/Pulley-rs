//use serde::{Deserialize, Serialize};
//#[derive(Serialize, Deserialize)]
//pub struct DownloadInput {
//};

#[tauri::command]
pub fn download(url: String, path: String) -> Result<(), String> {
    youtube_dl::YoutubeDl::new(url)
        .output_directory(path)
        .run()
        .map_err(|e| e.to_string())?;
    Ok(())
}

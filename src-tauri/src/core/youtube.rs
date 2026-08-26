//use serde::{Deserialize, Serialize};
//#[derive(Serialize, Deserialize)]
//pub struct DownloadInput {
//};

use std::path::PathBuf;

#[tauri::command]
pub async fn download(url: String, path: String) -> Result<(), String> {
    youtube_dl::YoutubeDl::new(url)
        .output_template("%(title)s.%(ext)s")
        .format("bestvideo*+bestaudio/best")
        .download_to(
            PathBuf::from(path)
                .parent()
                .ok_or_else(|| "The provided path is invalid.".to_string())?,
        )
        .map_err(|e| e.to_string())?;

    Ok(())
}

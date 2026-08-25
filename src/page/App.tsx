import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Download } from 'lucide-react';
import { invoke } from '@tauri-apps/api/core';
import { downloadDir } from '@tauri-apps/api/path';
import { useState } from "react";
import { toast } from "@/components/ui/toast";

export function App() {
    const [url, setUrl] = useState("")

    const download = async () => {
        await invoke("download", { url: url, path: await downloadDir() }).then(() =>
            toast.add({ title: "Download Completed!", type: "success" })
        ).catch((e) =>
            toast.add({ title: "Download Failed.", description: e instanceof Error ? e.message : String(e), type: "error" }))
    }

    return <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row gap-2">
            <Input placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)}></Input>
            <Button onClick={async () => await download()}><Download /><span>Download</span></Button>
        </div>
        <Progress value={1} />
    </div>
}
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Download } from 'lucide-react';

export function App() {
    return <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row gap-2">
            <Input placeholder="Enter URL"></Input>
            <Button className=""><Download /><span>Download</span></Button>
        </div>
        <Progress value={20}/>
    </div>
}
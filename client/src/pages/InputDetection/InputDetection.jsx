import { useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import axiosInstance from "../../axiosInstance";

function InputDetection() {
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = async () => {
        const res = await axiosInstance.post("/input-detect", { input })
        console.log(res.data);
        setResult(res.data.waterfootprint)
    };
    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <div>
                WaterFootPrint: {result} Litres
            </div>
            <div className="m-3">
                <input type="text" placeholder="Enter name to search" onChange={(e) => setInput(e.target.value)} className="border border-slate-200 px-3 py-2 outline-none rounded-md" />
            </div>
            <button onClick={handleSubmit}>Detect</button>
        </div>
    )
}

export default InputDetection
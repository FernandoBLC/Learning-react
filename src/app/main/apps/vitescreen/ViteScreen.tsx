import {useState} from "react";
import viteLogo from "../../../../../public/vite.svg";
import reactLogo from "../../../../assets/react.svg";
import {Button} from "@mui/material";

function ViteScreen() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col justify-center w-9/12">
            <div className="flex justify-center">
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="w-9/12">
                <Button onClick={() => setCount((count) => count + 1)} variant="contained">count is {count}</Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <h1 className="text-3xl font-bold underline">
                    Edit <code>src/App.tsx</code> and save to test HMR
                </h1>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default ViteScreen;
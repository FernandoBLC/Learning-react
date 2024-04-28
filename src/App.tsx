import {useState, SyntheticEvent} from 'react'
import {Tab, Tabs} from '@mui/material'

// Contente Tabs
import ViteScreen from './app/main/apps/vitescreen/ViteScreen.tsx';
import TodosApp from './app/main/apps/learnredux/TodosApp.tsx';

function App() {
    const [tabValue, setTabValue] = useState(0);

    const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <div className="w-full h-auto">
            <Tabs
                value={tabValue}
                onChange={handleChangeTab}
            >
                <Tab
                    value={0}
                    label="Vite Screen"
                />
                <Tab
                    value={1}
                    label="Test Todo App"
                />
            </Tabs>
            <div>
                <div className={tabValue !== 0 ? 'hidden' : ''}>
                    {tabValue !== 0 ? '' : <ViteScreen/>}
                </div>
                <div className={tabValue !== 1 ? 'hidden' : ''}>
                    {tabValue !== 1 ? '' : <TodosApp/>}
                </div>
            </div>
        </div>
    )
}

export default App



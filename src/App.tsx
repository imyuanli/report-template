import React from 'react';
import {useRoutes} from 'react-router-dom'
import routes from "./router";
import './App.less'
import {Button} from "antd";

const App: React.FC = () => {
    const views = useRoutes(routes)


    return (
        <div>
            <header className="header">
                <div>
                    logo
                </div>
                <div>
                    <Button>
                        123
                    </Button>
                </div>
            </header>
            <main className="main">
                {views}
            </main>
        </div>
    )
}
export default App;
import "./index.less"
import {Tabs} from "antd";
import type {TabsProps} from 'antd';
import AnonymousForm from "../components/anonymous-form.tsx";


const Index = () => {
    const items: TabsProps['items'] = [
        {
            key: 'anonymous',
            label: "匿名举报",
            children: <AnonymousForm />
        },
        {
            key: 'real',
            label: '实名举报',
            children: 'Content of Tab Pane 2',
        }
    ];

    return (
        <div className="index">
            <div className={"title"}>
                廉政举报
            </div>
            <div className={"card"}>
            </div>
            <div>
                <Tabs
                    defaultActiveKey="anonymous"
                    type="card"
                    items={items}
                />
            </div>
        </div>
    )
}

export default Index
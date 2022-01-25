import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import './Home.css'
import {userData} from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

export default function Home() {
    return (
        <div className ="home">
            <FeatureInfo></FeatureInfo>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"></Chart>
            <div className="homeWidgets">
                <WidgetSm></WidgetSm>
                <WidgetLg></WidgetLg>
            </div>
        </div>
    )
}

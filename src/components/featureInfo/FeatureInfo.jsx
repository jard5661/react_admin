import { ArrowDownward,ArrowUpward } from '@material-ui/icons';
import './FeatureInfo.css';

export default function FeatureInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className = "featuredMoneyContainer">
                    <span className="featuredMoney">$2,145</span>
                    <span className="featuredMoneyRated">-11.4<ArrowDownward className="featuredIcon negative"></ArrowDownward></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>   
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className = "featuredMoneyContainer">
                    <span className="featuredMoney">$4,145</span>
                    <span className="featuredMoneyRated">  -1.4<ArrowDownward className="featuredIcon negative"></ArrowDownward></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>   
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className = "featuredMoneyContainer">
                    <span className="featuredMoney">$2.225</span>
                    <span className="featuredMoneyRated">+1.2<ArrowUpward className="featuredIcon"></ArrowUpward></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>   
            </div>
        </div>
    )
}

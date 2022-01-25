import './WidgetSm.css'
import {Visibility} from '@material-ui/icons'
export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://placeimg.com/640/480/people" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fajar Rizkiadi</span>
                        <span className="widgetSmUSerTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"></Visibility>    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://placeimg.com/640/480/people" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fajar Rizkiadi</span>
                        <span className="widgetSmUSerTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"></Visibility> Display   
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://placeimg.com/640/480/people" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fajar Rizkiadi</span>
                        <span className="widgetSmUSerTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"></Visibility>    Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://placeimg.com/640/480/people" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Fajar Rizkiadi</span>
                        <span className="widgetSmUSerTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"></Visibility> Display   
                    </button>
                </li>
            </ul>
        </div>
    )
}

import './WidgetLg.css'

export default function WidgetLg() {
    const Button = ({type})=>{
        return <button className={'widgetLgButton ' + type} > {type}</button>
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTab">
                    <td className="widgetLgUser">
                        <img src="https://placeimg.com/640/480/people" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Approved"></Button></td>
                </tr>
            
                <tr className="widgetLgTab">
                    <td className="widgetLgUser">
                        <img src="https://placeimg.com/640/480/people" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Declined"></Button></td>
                </tr>
              
                <tr className="widgetLgTab">
                    <td className="widgetLgUser">
                        <img src="https://placeimg.com/640/480/people" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Susan</span>
                    </td>
                    <td className="widgetLgDate">2 Jan 2022</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus"><Button type="Pending"></Button></td>
                </tr>
            </table>
        </div>
    )
}

import './User.css'
import { LocationCity, MailOutline, PermIdentityOutlined, PhoneAndroid, CalendarToday, Publish } from '@material-ui/icons';
export default function User() {
    return (
        <div className='user'>
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <button className="userAddButton">Create</button>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src='https://placeimg.com/640/480/people'
                            alt=''
                            className='userShowImg'></img>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Jard</span>
                            <span className="userShowUserTitle">SoftWare Engineer</span>
                        </div>
                    </div>
                    <div className="userShowButton">
                        <div className="userShowInfo">
                            <PermIdentityOutlined className="userShowIcon"></PermIdentityOutlined>
                            <span className="userShowTitle">Account Details</span>

                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"></CalendarToday>
                            <span className="userShowTitle">10.10.1998</span>

                        </div>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"></PhoneAndroid>
                            <span className="userShowTitle">+1 2345 678</span>

                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"></MailOutline>
                            <span className="userShowTitle">jard5661@gmail.com</span>

                        </div>
                        <div className="userShowInfo">
                            <LocationCity className="userShowIcon"></LocationCity>
                            <span className="userShowTitle">Jakarta</span>

                        </div>

                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text"
                                placeholder='Jard'
                                className='userUpdateInput'></input> 
                            </div>
                            <div className="userUpdateItem"> 
                                <label>Phone</label>
                                <input type="text"
                                placeholder='+1 2345 678'
                                className='userUpdateInput'></input> 
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text"
                                placeholder='jard5661@gmail.com'
                                className='userUpdateInput'></input> 
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text"
                                placeholder='Jakarta'
                                className='userUpdateInput'></input> 
                            </div>
                        </div>
                        <div className="userUpdateRight">
                           <div className="userUpdateUpload">
                               <img className="userUpdateImg" src="https://placeimg.com/640/480/people" alt=''></img>
                               <label htmlFor="file"><Publish></Publish></label>
                                <input type="file" id="file" style={{display:'none'}}></input>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

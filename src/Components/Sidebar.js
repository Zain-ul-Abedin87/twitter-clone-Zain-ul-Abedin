import React from 'react'
import "./sidebar.css"
import SidebarOption from "./SidebarOptions"
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button} from "@material-ui/core"


function Sidebar() {
    return (
        <div className="sidebar">
            {/* <p>Am from Side bar</p> */}
            <TwitterIcon className="sidebar-twiteIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="notifications"/>
            <SidebarOption Icon={MailOutlineIcon } text="MailOutlineIcon"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="notifications"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="BookmarkBorderIcon"/>
            <SidebarOption Icon={ListAltIcon} text="ListAltIcon"/>
            <SidebarOption Icon={PermIdentityIcon} text="PermIdentityIcon"/>
            <SidebarOption Icon={MoreHorizIcon} text="MoreHorizIcon"/>
            
            {/* <SidebarOption text=""/> */}
            <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
        </div>
    )
}

export default Sidebar

import React from 'react'
import './Header.css'
import { IconButton } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
function Header() {
    return (
        <div className='header'>
            <div className="header_icons">
                <div className="header_icon  header_icon--active">
                    <IconButton>
                        <HomeIcon />
                    </IconButton>
                    <p>Home</p>
                </div>
                <div className="header_icon">
                    <IconButton>
                        <FlashOnIcon />
                    </IconButton> 
                    <p>Trending</p>   
                </div>
                <div className="header_icon">
                    <IconButton>
                        <LiveTvIcon />
                    </IconButton>
                    <p>Verified</p>    
                </div>
                <div className="header_icon">
                    <IconButton>
                        <VideoLibraryIcon />
                    </IconButton>
                    <p>Collections</p>    
                </div>
                <div className="header_icon">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <p>Search</p>    
                </div>
                <div className="header_icon">
                    <IconButton>
                        <PersonOutlineIcon />
                    </IconButton>
                    <p>Account</p>    
                </div>
                
            </div>
            <img 
                src='https://cdn.freebiesupply.com/images/large/2x/hulu-logo-white.png' 
                alt='' 
            />
        </div>
    )
}

export default Header

import React from 'react';
import { AppBar, IconButton, Box, Toolbar, Typography, Badge, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'next/image';

// OWNER : next_admin
// LAST EDIT : 07 Sep 2022


const menuId = 'primary-search-account-menu';

const WAppBar = props => {

    /**
     * DEFINE PROPS
     */
    let _color = props.color;
    let _context = props.context;
    let _logo = props.logo;
    let _numberInbox = props.numberInbox;
    let _numberNotification = props.numberNotification;
    let _onLogOut = props.onLogOut;
    let _onMenuDrawerClick = props.onMenuDrawerClick;
    let _position = props.position;
    let _title = props.title;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const isProfileMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar
                position={_position}
                style={{ zIndex: 10000000, background: _color }}
            >
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={_onMenuDrawerClick}>
                        <MenuIcon />
                    </IconButton>
                    <div style={{ background: 'white', borderRadius: 20, padding: 7, marginRight: 10 }}>
                        <Image
                            priority
                            src={_logo}
                            // src="https://collections.dgpmall.com/image/1.03/logo.png"
                            height={25}
                            width={25}
                        />
                    </div>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }} fontWeight="bold">
                        {_title}
                    </Typography>

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={_numberInbox} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={_numberNotification} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                            &nbsp;
                            <Typography variant="subtitle2">{_context.user.user_name}</Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isProfileMenuOpen}
                onClose={handleProfileMenuClose}
                style={{ zIndex: 10000001 }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem onClick={_onLogOut}>LogOut</MenuItem>
            </Menu>
        </>
    )
}

export default WAppBar;
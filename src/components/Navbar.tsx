import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Div } from '../utils/styled-components';
import { Font } from '../utils/theme/typo';
import CountrySelect from './CountrySelect';
import { primary } from '../utils/theme/colors';

const navbarItems = [
    { label: 'Home', link: '#' },
    { label: 'Find a center', link: '#' },
    { label: 'Contact', link: '#' },
    { label: 'Open your LaserAddict center', link: '#' },
    { label: 'News', link: '#' }
];

const Navbar: React.FC = () => {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img style={{ height: 30 }} src="/images/logo.png" alt="LaserAddict Logo" />
                <Div sx={{
                    display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: {
                        lg: 5,
                        xs: 3
                    }
                }}>
                    {navbarItems.map((item, id) => (
                        <Font key={id} color="inherit" sx={{
                            textDecoration: 'none',
                            transition: 'color 0.35s ease-in-out, text-decoration 0.35s ease-in-out',
                            '&:hover': {
                                color: primary,
                                cursor: 'pointer',
                            }
                        }}>{item.label}</Font>
                    ))}
                </Div>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <CountrySelect />
            </Div>
        </AppBar >
    );
};

export default Navbar;

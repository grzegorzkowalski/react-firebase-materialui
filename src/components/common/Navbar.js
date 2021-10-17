import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BasicMenu from "./BasicMenu";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BasicMenu />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
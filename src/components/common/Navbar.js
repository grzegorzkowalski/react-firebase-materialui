import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BasicMenu from "./BasicMenu";
import Typography from "@mui/material/Typography";

const Navbar = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <BasicMenu />
                </Toolbar>
                <Typography>{props.email ? props.email : "użytkownik niezalogowany"}</Typography>
            </AppBar>
        </Box>
    );
};

export default Navbar;
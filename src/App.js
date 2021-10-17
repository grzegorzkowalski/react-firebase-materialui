import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AddArticle from "./components/AddArticle";
import Navbar from "./components/common/Navbar";
import Container from "@mui/material/Container";
import {useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebase/firebaseConfig";

function App() {
    const [email, setEmail] = useState("");
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user.email);
                setEmail(user.email);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <Navbar email={email} />
            <Container maxWidth="sm">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/addarticle" component={AddArticle} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../../firebase/firebaseConfig";

const AddArticle = () => {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState("");
    const [text, setText] = useState("");
    const [success, setSuccess] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, "articles"), {
            title,
            photo,
            text
        });
        if (docRef) {
            setSuccess(true);
        }
    }

    return (
        <Box>
            <Typography variant="h2">Dodaj artykuł</Typography>
            {
                success && <Typography variant="h3" sx={{color: "green"}}>
                    Artykuł dodany
                </Typography>
            }
            <form onSubmit={e => submitHandler(e)}>
                <TextField
                    required
                    id="outlined-required"
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Photo"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Button
                    variant="contained"
                    type="submit"
                >
                    Dodaj artykuł
                </Button>
            </form>
        </Box>
    );
};

export default AddArticle;
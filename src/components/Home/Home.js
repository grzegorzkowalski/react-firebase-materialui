import { getAuth } from "firebase/auth";
import app from "../../firebase/firebaseConfig";
import { useEffect, useState}  from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const Home = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        const db = getFirestore(app);
        const querySnapshot = await getDocs(collection(db, "articles"));
        const tab = [];
        querySnapshot.forEach((doc) => {
            tab.push(doc.data());
            console.log(doc.data());
        });
        setArticles(tab);
    }

    useEffect(() => {
        const auth = getAuth(app);
        const user = auth.currentUser;
        if (user) {
            console.log(user);
            setIsLogged(true);
        } else {
            console.log("brak użytkownika");
        }
    }, []);

    useEffect(() => {
        getArticles();
    }, [isLogged]);

    if (isLogged) {
        return(
            <div>
                {
                    articles.map((el) => {
                        return (
                            <div key={el.id}>
                                <p>{el.title ? el.title : el.Title}</p>
                                <img src={el.photo ? el.photo : el.Photo}/>
                                <p>{el.text ? el.text : el.Text}</p>
                            </div>
                        )
                    })
                }
            </div>
            )
    }
    else {
        return <div>Zaloguj się</div>
    }
};

export default Home;
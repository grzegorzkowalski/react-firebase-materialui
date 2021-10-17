import ClickTest from "../../Counter";

const Home = () => {
    const name = "Grzegorz";
    const tab = ["Ala"];
    return (
        <div>
            Strona główna
            <>
                <div>Tytuł</div>
                <div className="App">
                    Witaj {tab[0]}!
                </div>
                <ClickTest />
            </>
        </div>
    );
};

export default Home;
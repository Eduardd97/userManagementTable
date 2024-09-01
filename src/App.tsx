import "./App.css";
import { Footer } from "./components/FooterComponent/Footer";
import { Header } from "./components/HeaderComponent/Header";
import { UsersTableComponent } from "./components/UsersTableComponent/UsersTableComponent";

function App() {
    return (
        <div className='app-content'>
            <Header />
            <UsersTableComponent />
            <Footer/>
        </div>
    );
}

export default App;

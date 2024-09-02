import "./Footer.css";
import copyright from "../../assets/copyright/copyright-svgrepo-com.svg";

export const Footer = () => {
    return (
        <footer>
            <section className='copyright'>
                <img src={copyright} alt='copyright' />
                <span>2024-2025</span>
            </section>

            <a href='https://linkedin.com/in/eduard-kozeichuk-843b06221' className="linkedin-link">Eduard Kozeichuk</a>
        </footer>
    );
};

import "./Header.css";
import usersIcon from "../../assets/usersIcon/users-user-svgrepo-com.svg";

export const Header = () => {
    return (
        <header>
            <div className="user-icon-box">
                <img src={usersIcon} alt='Logo' className="user-icon"/>
            </div>

            <div className="users-teble-title-box">
                <h1 className="users-teble-title">Users Table</h1>
            </div>
        </header>
    );
};

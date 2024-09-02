import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../customHooks/hooks";
import { fetchUsers } from "../../redux/slice/usersSlice";
import {
    setEmailFilter,
    setNameFilter,
    setPhoneFilter,
    setUsernameFilter,
} from "../../redux/slice/filtersSlice";
import searchIcon from "../../assets/searchIcon/search-svgrepo-com.svg";

import "./UsersTableComponent.css";

export const UsersTableComponent: FC = () => {
    const dispatch = useAppDispatch();
    const { users, loading, error } = useAppSelector((state) => state.users);
    const { name, username, email, phone } = useAppSelector(
        (state) => state.filters
    );
    const [activeInputIndex, setActiveInputIndex] = useState<number | null>(
        null
    );

    // Icon click handler
    const handleClick = (index: number) => {
        // Switching the active state of the input
        if (activeInputIndex === index) {
            setActiveInputIndex(null); // If you click on the same icon again, hide the input
        } else {
            setActiveInputIndex(index); // Otherwise, we show the input under the selected icon
        }
    };

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Erorr: {error}</div>;
    }

    const filteredUsers = users.filter((user) => {
        return (
            user.name.toLowerCase().includes(name.toLowerCase()) &&
            user.username.toLowerCase().includes(username.toLowerCase()) &&
            user.email.toLowerCase().includes(email.toLowerCase()) &&
            user.phone.toLowerCase().includes(phone.toLowerCase())
        );
    });

    return (
        <div className='users-table'>
            <h1>User Dashboard</h1>
            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <section>
                                    <span>Name</span>
                                    <img
                                        src={searchIcon}
                                        alt=''
                                        onClick={() => handleClick(0)}
                                    />
                                </section>
                                <div className="th-input-box">
                                    <input
                                        className={
                                            activeInputIndex === 0 ? "active-inpun" : ""
                                        }
                                        type='text'
                                        value={name}
                                        placeholder='Filter by name'
                                        onChange={(e) =>
                                            dispatch(setNameFilter(e.target.value))
                                        }
                                    />
                                </div>
                            </th>
                            <th>
                                <section>
                                    <span> User Name</span>
                                    <img
                                        src={searchIcon}
                                        alt=''
                                        onClick={() => handleClick(1)}
                                    />
                                </section>
                                <div className="th-input-box">
                                    <input
                                        className={
                                            activeInputIndex === 1 ? "active-inpun" : ""
                                        }
                                        type='text'
                                        value={username}
                                        placeholder='Filter by user name'
                                        onChange={(e) =>
                                            dispatch(setUsernameFilter(e.target.value))
                                        }
                                    />
                                </div>
                            </th>
                            <th>
                                <section>
                                    <span>Email</span>
                                    <img
                                        src={searchIcon}
                                        alt=''
                                        onClick={() => handleClick(2)}
                                    />
                                </section>
                                <div className="th-input-box">
                                    <input
                                        className={
                                            activeInputIndex === 2 ? "active-inpun" : ""
                                        }
                                        type='text'
                                        value={email}
                                        placeholder='Filter by email'
                                        onChange={(e) =>
                                            dispatch(setEmailFilter(e.target.value))
                                        }
                                    />
                                </div>
                            </th>
                            <th>
                                <section>
                                    <span>Phone</span>
                                    <img
                                        src={searchIcon}
                                        alt=''
                                        onClick={() => handleClick(3)}
                                    />
                                </section>
                                <div className="th-input-box">
                                    <input
                                        className={
                                            activeInputIndex === 3 ? "active-inpun" : ""
                                        }
                                        type='text'
                                        value={phone}
                                        placeholder='Filter by phone'
                                        onChange={(e) =>
                                            dispatch(setPhoneFilter(e.target.value))
                                        }
                                    />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

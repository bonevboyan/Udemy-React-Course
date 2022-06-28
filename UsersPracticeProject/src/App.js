import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [users, setUsers] = useState([]);

    const addUserHandler = (name, age) => {
        setUsers((oldUsers) => {
            return [...oldUsers, { name, age, id: Math.random.toString() }];
        });
    };

    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList items={users} />
        </div>
    );
}

export default App;

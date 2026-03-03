import { Suspense, use } from "react";

const FetchData = () => fetch('https://dummyjson.com/users').then((res) => res.json());

const userResource = FetchData(); // ✅ renamed to match usage below

const Users = ({ userResource }) => { // ✅ removed unused `user`, fixed prop name
    const userData = use(userResource);
    console.log(userData.users); // ✅ fixed: .users not .user

    return (
        <div>
            <h2>User List</h2>
            {
                userData?.users?.map((user) => (
                    <h3 key={user.id}>{user.firstName}</h3> // ✅ camelCase + key prop
                ))
            }
        </div>
    );
};

function User1() {
    return (
        <div>
            <h2>Use API in Reactjs</h2>
            <Suspense fallback={<p>Loading......</p>}>
                <Users userResource={userResource} /> // ✅ consistent prop name
            </Suspense>
        </div>
    );
}

export default User1;
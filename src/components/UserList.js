const UserList = (props) => {
    const userProfile = props.userProfile;


return (
    <div className="User-List">
        {userProfile.map((user) => (
            <div className="user-preview" key={user.id}>
                <p>{user.username}</p>
                <p>{user.translations}</p>
            </div>
        ))}
    </div>
);
}

export default UserList;
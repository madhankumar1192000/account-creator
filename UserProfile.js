import { useLocation } from "react-router-dom"

function UserProfile(){
    let location = useLocation()

    return(
        <div className="profile-container">
            <h1 className="heading">Account Settings</h1>
            <div className="profile">
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s" alt="pic"/>
                <div className="person">
                    <h1>{location.state.data.name}</h1>
                    <p>{location.state.data.email}</p>
                    <p>{location.state.data.company}</p>
                </div>  
            </div>
            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <hr className="line"/>
        </div>
    )
}

export default UserProfile
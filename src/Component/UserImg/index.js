import avatar from "../../Assest/avatar.webp";

function UserImg() {
    return (
        <>
            <div>
                <div className="userImg">
                    <span className="rounded-circle">
                        <img src={avatar} alt="avatar" />
                    </span>
                </div>
            </div>
        </>
    )
}

export default UserImg;

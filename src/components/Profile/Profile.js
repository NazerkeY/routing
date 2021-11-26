export const Profile = () => {
    return (
        <div className="d-flex flex-column align-items-center w-auto mt-5">
            <h1>Profile page</h1>
            <div className="info-block d-flex flex-row align-items-center w-auto mt-5">
                <img src="https://www.pngkey.com/png/full/73-730477_first-name-profile-image-placeholder-png.png" width="200"/>
                <div className="name-block">
                    <h2>Pablo Jackson</h2>
                    <p>29 years old</p>
                </div>
            </div>
        </div>
    );
}
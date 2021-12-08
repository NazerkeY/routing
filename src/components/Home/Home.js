export const Home = (props) => {
    return (
        <div className="home-block d-flex flex-column align-items-center w-auto mt-5">
            <h1 className="mb-4">Welcome to the homepage!</h1>
            <h2>{props.message}</h2>
        </div>
    )
}
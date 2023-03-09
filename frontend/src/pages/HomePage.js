import construction from '.././imgs/construction.jpg';

function Home() {
    return (
        <>
            <h2>Welcome! We're doing some home renovations right now...</h2>
            <p>Under construction!</p>
            <img src={construction} width={400} alt="handsome construction worker" />
        </>
    );
}

export default Home;
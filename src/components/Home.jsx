import background from '/src/assets/bg13.jpg';

const Home = () => {
  return (
    <div className="my-8 md:py-8 px-7 relative" id="home" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="h-screen flex items-center justify-center">
        <div className="text-center md:w-1/2 text-black">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide mb-8 font-serif">
            Hello, I'm CHANDRU KJ
          </h1>
          <p className="text-lg mb-8 font-sans font-light">
            Full Stack Developer and Web Enthusiast
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

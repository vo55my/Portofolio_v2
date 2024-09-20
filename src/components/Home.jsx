import Profil from '../assets/Profil.png'

const Home = () => {
  return (
    <div id="home" className="page">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <img className="img-thumbnail" src={Profil} alt="Profil" />
        </div>
        <div className="col-lg-8 col-sm-6 d-flex flex-column justify-content-center">
          <h1 className="fw-bold">Dhaifullah Hilmy</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

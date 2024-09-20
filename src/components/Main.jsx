import Home from './Home';
import About from './About';
import Menu from './Menu';

const Main = () => {
  return (
    <section className="d-flex text-light">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-11 col-sm-12 align-self-center">
            <div className="halaman" data-bs-spy="scroll" data-bs-target="#menu" data-bs-smooth-scroll="true" tabIndex="0">
              <Home />
              <About />
            </div>
          </div>
          <div className="col-lg-1 col-sm-12 align-self-center d-none d-lg-block">
            <Menu />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

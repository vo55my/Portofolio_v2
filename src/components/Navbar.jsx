import SocialLinks from './SocialLinks';
import ModeToggle from './ModeToggle';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg pb-5">
      <div className="container">
        <a className="navbar-brand text-light fw-bold" href="#">
          Portofolio
        </a>
        <SocialLinks />
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;

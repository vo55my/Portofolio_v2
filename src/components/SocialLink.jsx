import PropTypes from 'prop-types';

const SocialLink = ({ href, icon, title }) => {
  return (
    <li className="nav-item">
      <a
        className="nav-link fs-4 text-light px-2"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={title}
      >
        <i className={`bi ${icon}`}></i>
      </a>
    </li>
  );
};

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default SocialLink;

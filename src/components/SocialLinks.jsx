import SocialLink from './SocialLink';

const SocialLinks = () => {
  return (
    <ul className="navbar-nav ms-auto flex-row">
      <SocialLink
        href="mailto:dhaifullahhilmy@gmail.com"
        icon="bi-envelope"
        title="Email"
      />
      <SocialLink
        href="https://www.facebook.com/profile.php?id=100007533818546"
        icon="bi-facebook"
        title="Facebook"
      />
      <SocialLink
        href="https://www.instagram.com/si_hilmy"
        icon="bi-instagram"
        title="Instagram"
      />
      <SocialLink
        href="https://www.linkedin.com/in/dhaifullah-hilmy/"
        icon="bi-linkedin"
        title="LinkedIn"
      />
      <SocialLink
        href="https://github.com/vo55my"
        icon="bi-github"
        title="GitHub"
      />
    </ul>
  );
};

export default SocialLinks;

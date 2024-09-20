import SkillsList from './SkillsList';


const About = () => {
  return (
    <div id="about" className="page">
      <p className="fs-5">
        <h2 className="fw-bold mb-3">
          <i className="bi bi-person-square"></i> About Me
        </h2>
        Saya adalah fresh graduate yang berkomitmen untuk meniti karir sebagai Software Developer dengan minat khusus pada pengembangan web, khususnya front-end. Menguasai HTML, CSS, dan JavaScript, saya memiliki pengalaman menciptakan antarmuka responsif dan berorientasi pada pengguna. Saya memiliki kemampuan komunikasi yang baik, mudah beradaptasi, serta senang bekerja dalam tim. Saya siap berkontribusi dengan ide-ide kreatif dan solusi inovatif di dunia digital.
      </p>
      <h4 className="mt-2 fw-bold">My Skills</h4>
      <SkillsList />
    </div>
  );
};

export default About;

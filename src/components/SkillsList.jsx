import SkillBadge from './SkillBadge';

const SkillsList = () => {
  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'PHP',
    'Bootstrap',
    'ReactJS',
    'Laravel',
    'Sass',
    'Pemecahan Masalah',
    'Berpikir Kritis',
    'Manajemen Waktu',
    'Public Speaking'
  ];

  return (
    <div>
      {skills.map((skill, index) => (
        <SkillBadge key={index} skillName={skill} />
      ))}
    </div>
  );
};

export default SkillsList;

import PropTypes from 'prop-types';
import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaLaravel, FaSass, FaBootstrap } from 'react-icons/fa';
import { GiThink, GiPublicSpeaker, GiSandsOfTime } from "react-icons/gi";
import { MdOutlineSyncProblem } from "react-icons/md";

const SkillBadge = ({ skillName }) => {
  const getSkillIcon = (skill) => {
    switch (skill) {
      case 'HTML':
        return <FaHtml5 size={20} color="#e34c26" />;
      case 'CSS':
        return <FaCss3Alt size={20} color="#2965f1" />;
      case 'Javascript':
        return <FaJs size={20} color="#f0db4f" />;
      case 'PHP':
        return <FaPhp size={20} color="#777bb4" />;
      case 'Bootstrap':
        return <FaBootstrap size={20} color="#563d7c" />;
      case 'ReactJS':
        return <FaReact size={20} color="#61dafb" />;
      case 'Laravel':
        return <FaLaravel size={20} color="#ff2d20" />;
      case 'Sass':
        return <FaSass size={20} color="#cc6699" />;
      case 'Berpikir Kritis':
        return <GiThink size={20} color='#F39C12' />;
      case 'Public Speaking':
        return <GiPublicSpeaker size={20} color='#E74C3C' />;
      case 'Manajemen Waktu':
        return <GiSandsOfTime size={20} color='#3498DB' />;
      case 'Pemecahan Masalah':
        return <MdOutlineSyncProblem size={20} color='#4CAF50' />;
      default:
        return null;
    }
  };

  return (
    <span className="badge rounded-pill text-bg-light m-1">
      {getSkillIcon(skillName)}
      <span className='p-2'>{skillName}</span>
    </span>
  );
};

SkillBadge.propTypes = {
  skillName: PropTypes.string.isRequired,
};

export default SkillBadge;

import { FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';

export const getContactIcon = (title: string) => {
  switch (title.toLowerCase()) {
    case 'email':
      return <FaMailBulk size={20} />;
    case 'github':
      return <FaGithub size={20} />;
    case 'linkedin':
      return <FaLinkedin size={20} />;
    default:
      return null;
  }
}

import { type Link } from '@/lib/teamData';

interface LinkButtonProps {
  link: Link;
}

const LinkButton = ({ link }: LinkButtonProps) => {
  const getHref = () => {
    switch (link.type) {
      case 'email':
        return `mailto:${link.value}`;
      case 'github':
      case 'linkedin':
      case 'website':
      case 'researchgate':
      case 'orcid':
      default:
        return link.value;
    }
  };

  const getIcon = () => {
    switch (link.type) {
      case 'email':
        return '📧';
      case 'github':
        return '🐙';
      case 'linkedin':
        return '💼';
      case 'website':
        return '🌐';
      case 'researchgate':
        return '🔬';
      case 'orcid':
        return '🆔';
      default:
        return '🔗';
    }
  };

  const isEmail = link.type === 'email';

  return (
    <a
      href={getHref()}
      target={!isEmail ? "_blank" : "_self"}
      rel={!isEmail ? "noopener noreferrer" : ""}
      className="inline-flex items-center gap-2 bg-white bg-opacity-70 hover:bg-opacity-90 px-3 py-2 rounded-full text-sm font-medium text-gray-800 hover:text-gray-900 transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
    >
      <span className="text-lg">{getIcon()}</span>
      {link.label}
    </a>
  );
};

export default LinkButton;

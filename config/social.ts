import type { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';

export type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
  label: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/cishocksr',
    icon: FaGithub,
    label: 'Visit my GitHub profile',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/christopherishockley',
    icon: FaLinkedin,
    label: 'Connect with me on LinkedIn',
  },
  {
    name: 'Email',
    url: 'mailto:cishocksr@cishockley.com',
    icon: FaEnvelope,
    label: 'Send me an email',
  },
];

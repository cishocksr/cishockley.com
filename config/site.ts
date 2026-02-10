import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
    label: string;
}

export const socialLinks: SocialLink[] = [
    {
        name: "Github",
        url: "https://github.com/cishocksr",
        icon: FiGithub,
        label: "View Github Profile"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/christopherishockley",
        icon: FiLinkedin,
        label: "Connect on LinkedIn"
    },
    {
        name: "Email",
        url: "mailto:cishocksr@cishockley.com",
        icon: FiMail,
        label: "Send me an Email"
    }
]
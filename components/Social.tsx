import Link from "next/link";
import { ReactNode, useMemo } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};

const Social = (props: SocialProps) => {
  const socials = useMemo(() => {
    return [
      {
        icon: <FaGithub />,
        url: "https://github.com/Victorfer18",
      },
      {
        icon: <FaLinkedinIn />,
        url: "https://linkedin.com/in/victor-fernando-magalh%C3%A3es-vasconcelos-0673681a3",
      },
    ] as { icon: ReactNode; url: string }[];
  }, []);

  return (
    <div className={props.containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          className={props.iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;

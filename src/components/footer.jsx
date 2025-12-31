import { Facebook, Github, Linkedin, Twitter, Youtube } from "lucide-react";


const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/OmKadam-1/",
    icon: <Github className="inline-block" />,
  },
  {
    name: "LinkedIn",
    url: "",
    icon: <Linkedin className="inline-block" />,
  },
  {
    name: "Twitter",
    url: "",
    icon: <Twitter className="inline-block" />,
  },
  {
    name: "YouTube",
    url: "",
    icon: <Youtube className="inline-block" />,
  },
  {
    name: "Facebook",
    url: "",
    icon: <Facebook className="inline-block" />,
  },
];

const FooterLink = ({ name, url, icon }) => {
  return (
    <a href={url} className="mx-2 mr-3 align-middle">
      {icon}

      <span className="ml-1">{name}</span>
    </a>
  );
};

function Footer() {
  return (
    <div className="w-full bg-[] px-10 py-4 flex justify-around">
      <div>
        Made with <span style={{ color: "red" }}>Dedication</span> Technology
      </div>

      <div>
        {SOCIAL_LINKS.map(({ name, url, icon }) => {
          return <FooterLink key={name} name={name} url={url} icon={icon} />;
        })}
      </div>
    </div>
  );
}

export default Footer;
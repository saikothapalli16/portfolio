import { link } from "fs";

export interface Contact {
    title: string;
  image?: string;
  link?: string;
}

export const EXPERIENCES: Contact[] = [ 
    {
        title: "Email",
        image: "/email.png",
        link: "mailto:venkatasai.kothapalli@gmail.com"
        
    },
{
    title: "LinkedIn",
    image: "/linkedin.png",
    link: "https://www.linkedin.com/in/saikothapalli16/"
},
{
    title: "GitHub",
    image: "/github.png",
    link: "https://github.com/saikothapalli16"
},
{
    title: "Resume",
    image: "/resume.png",
    link: "/Sai_Kothapalli_Resume.pdf"
},
{
    title: "Instagram",
    image: "/instagram.png",
    link: "https://www.instagram.com/saikothapalli16/"
}
];
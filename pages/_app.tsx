import "../src/styles/globals.css";
import {
  Button,
  CenterSection,
  FollowUs,
  Footer,
  Form,
  Header,
  Project,
} from "../dist/src/index";
import React from "react";
function MyApp() {
  const followlinks = {
    socialLinks: [
      {
        href: "https://whatsapp.com/channel/0029VakgzRJ5kg7BkQFSJK36",
        src: "https://api.mafazaa.com/icons/whatsapp.svg",
        alt: "whatsapp",
      },
      {
        href: "https://facebook.com/mafazaa.org",
        src: "https://api.mafazaa.com/icons/facebook.svg",
        alt: "facebook",
      },
      {
        href: "https://youtube.com/@mafazaa_official",
        src: "https://api.mafazaa.com/icons/youtube.svg",
        alt: "youtube",
      },
      {
        href: "mailto:support@mafazaa.com",
        src: "https://api.mafazaa.com/icons/mail.svg",
        alt: "mail",
      },
    ],
    support: "support@mafazaa.com",
  };
  const links = {
    socialLinks: [
      {
        href: "https://whatsapp.com/channel/0029VakgzRJ5kg7BkQFSJK36",
        src: "https://api.mafazaa.com/icons/whatsapp.svg",
        text: "whatsapp",
      },
      {
        href: "https://facebook.com/mafazaa.org",
        src: "https://api.mafazaa.com/icons/facebook.svg",
        text: "facebook",
      },
      {
        href: "https://youtube.com/@mafazaa_official",
        src: "https://api.mafazaa.com/icons/youtube.svg",
        text: "youtube",
      },
      {
        href: "mailto:support@mafazaa.com",
        src: "https://api.mafazaa.com/icons/mail.svg",
        text: "mail",
      },
      {
        href: "https://github.com/mafazaa-org/",
        src: "https://api.mafazaa.com/icons/github-mark-white.svg",
        text: "github logo",
      },
    ],
    support: "support@mafazaa.com",
    importantLinks: [
      {
        href: "https://mafazaa.com/#projects",
        text: "مشاريعنا",
      },
      {
        href: "https://mafazaa.com/contact",
        text: "تواصل معنا",
      },
      {
        href: "https://mafazaa.com/idea",
        text: "فكرة المشروع",
      },
      {
        href: "https://mafazaa.com/join",
        text: "انضم إلينا",
      },
      {
        href: "https://mafazaa.com/",
        text: "الرئيسية",
      },
    ],
  };
  const projects = [
    {
      title: "عينا سلسبيلا",
      en: "ainaa",
      description:
        "مشروع يهدف ان شاء الله الى تنظيف النت من المحتوى الاباحي ثم كل ما يغضب الله عز و جل",
    },
    {
      title: "نباتا حسنا",
      en: "nabataa",
      description:
        "مشروع يهدف إلى إنشاء جيل صالح بإذن الله تعالى عبر توفير/تجميع محتوى كرتوني إسلامي هادف و غير ذلك من الطرق التي تغرس الدين القويم و شرع الله في الطفل.",
    },
    {
      title: "زدني علما",
      en: "elmaa",
      description:
        "مشروع يهدف إن شاء الله إلى تعريب المحتوى التعليمي الأجنبي أو إنشاء محتوى عالى الجودة حتى يصير لنا نفس الجودة التعليمية لدى الغرب",
    },
    {
      title: "رزقا حسنا",
      description:
        "مشروع يهدف إلى مساعدة الشباب على الكسب و العمل عن طريق توفير أو تسهيل أو إهداء فرص عمل في مجالات مختلفة أو توفير خدمات تسهل على الشباب بدء مشاريعهم الخاصة",
      en: "rezqaa",
    },
  ];
  return (
    <div>
      <Header links={links} show />

      <Form />
      <div className="flex items-center justify-center gap-6 p-6">
        <Button
          link="/"
          text="testing"
          textColor="#222222"
          fill={false}
          backgroundOrBorderColor="#dfe214"
        />
        <Button text="overwrite it" />
      </div>
      <FollowUs links={followlinks} />
      <div className="grid grid-cols-3  gap-4 w-fit p-4 m-4">
        <Project
          title={"نباتا حسناً"}
          description={"this is a test for this project"}
          en={""}
        />
        <Project
          title={"نباتا حسناً"}
          description={"this is a test for this project"}
          en={""}
        />{" "}
        <Project
          title={"نباتا حسناً"}
          description={"this is a test for this project"}
          en={""}
        />{" "}
      </div>
      <Footer links={links} projects={projects} />
    </div>
  );
}

export default MyApp;

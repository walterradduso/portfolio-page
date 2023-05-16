import { SiHtml5, SiJavascript, SiTypescript } from 'react-icons/si';

export const languageIcon = (iconId: string) => {
  switch (iconId) {
    case 'JavaScript':
      return <SiJavascript />;
    case 'TypeScript':
      return <SiTypescript />;
    case 'HTML':
      return <SiHtml5 />;
    default:
      return <></>;
  }
};

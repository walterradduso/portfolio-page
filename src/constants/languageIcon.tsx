import {
  SiAstro,
  SiCss3,
  SiElectron,
  SiEslint,
  SiFirebase,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPrettier,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export const languageIcon = (iconId: string) => {
  switch (iconId.toLowerCase()) {
    case 'astro':
      return <SiAstro />;
    case 'css':
      return <SiCss3 />;
    case 'electron':
      return <SiElectron />;
    case 'eslint':
      return <SiEslint />;
    case 'firebase':
      return <SiFirebase />;
    case 'html':
      return <SiHtml5 />;
    case 'javascript':
      return <SiJavascript />;
    case 'nextjs':
      return <SiNextdotjs />;
    case 'prettier':
      return <SiPrettier />;
    case 'reactjs':
      return <SiReact />;
    case 'redux':
      return <SiRedux />;
    case 'sass':
      return <SiSass />;
    case 'tailwindcss':
      return <SiTailwindcss />;
    case 'typescript':
      return <SiTypescript />;
    case 'vitejs':
      return <SiVite />;
    default:
      return <></>;
  }
};

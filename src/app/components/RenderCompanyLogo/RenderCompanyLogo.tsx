import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  company: string;
}

function RenderCompanyLogo({ company }: Props): ReactNode {
  return <Image alt={`${company} Logo`} height={56} src={`/images/companies/${company?.toLowerCase()}.jpeg`} width={56} />;
}

export default RenderCompanyLogo;

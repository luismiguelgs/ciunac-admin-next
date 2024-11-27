import { auth } from '@/auth';
import CertificateNew from './CertificateNew';

export default async function NewCertificatePage() 
{
    const session = await auth();

    return (
        <CertificateNew session={session} />
    )
}

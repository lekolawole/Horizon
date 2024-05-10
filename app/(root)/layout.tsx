import Image from 'next/image'
import Sidebar from "@/components/ui/Sidebar";
import MobileNav from '@/components/ui/MobileNav';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { AuthRoutes } from '@/constants/messages';

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect(AuthRoutes.SignIn);
  
  return (
    <main className="flex min-h-screen w-full font-inter justify-between">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

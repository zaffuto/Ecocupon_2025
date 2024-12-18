import Link from "next/link";
import LogoIcon from "../../icons/logo";
import MobileMenu from "./mobile-menu";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu title="EcoCupon" />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoIcon className="h-8 flex-none" />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              EcoCupon
            </div>
          </Link>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Link href="/" className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6">
            <LogoIcon className="h-8 flex-none" />
            <div className="ml-2 flex-none text-sm font-medium uppercase">
              EcoCupon
            </div>
          </Link>
        </div>
        <div className="flex justify-end md:w-1/3">
          <Link
            href="/solicitar-demo"
            className="rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Solicitar Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

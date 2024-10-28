import Image from "next/legacy/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="py-2 px-4 bg-slate-300 w-full">
      <nav>
        <ul className="flex justify-between items-center md:justify-center gap-5 text-white flex-wrap">
          <li className="flex justify-center w-full md:w-auto">
            <Link href="/" aria-label="logo">
              <Image
                alt="asklisa-logo"
                width={120}
                height={30}
                src={"https://app-staging.asklisa.com.br/images/logo.png"}
                objectFit="contain"
                layout="intrinsic"
                className="mx-auto"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

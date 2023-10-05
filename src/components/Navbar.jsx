import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-900 p-[1rem]">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h3 className="font-bold md:text-3xl text-xl py-3 text-green-500 ">
              Next CRUD
            </h3>
          </Link>
          <div className="md:text-lg text-md">
            <ul className="flex gap-5 font-bold">
              <li>
                <Link
                  className="text-slate-300 hover:text-slate-500"
                  href="/new"
                >
                  Crear
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-300 hover:text-slate-500"
                  href="/about"
                >
                  Acerca de
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

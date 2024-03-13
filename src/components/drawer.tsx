import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

interface props{
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    children?: React.ReactDOM
}

export default function Drawer({ children, isOpen, setIsOpen }:props) {
  return (
    <>
      <main
        className={
          " fixed overflow-hidden z-50 bg-black bg-opacity-50 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            "right-0 md:w-3/12 w-3/4 absolute bg-primary px-8 py-12 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="">
            <div className="flex items-center justify-end">
              <div>
                <AiOutlineClose
                  onClick={() => setIsOpen(false)}
                  className="text-secondary text-3xl float-right cursor-pointer"
                />
              </div>
            </div>
            <div className="flex items-center justify-end px-48">
              <ul className="text-left space-y-4 w-48 py-12">
                <li className="w-72 px-3 py-2 flex flex-col gap-1 border-b border-primary hover:border-secondary transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/students"
                  >
                    For Students
                  </Link>
                </li>
                <li className="w-72 px-3 py-2 group flex flex-col gap-1 border-b border-primary hover:border-secondary transition ease-in-out duration-700">
                  <Link
                    className="no-underline hover:text-secondary transition ease-in-out duration-700"
                    href="/about"
                  >
                    How it Works
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section
          className=" w-1/2 h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    </>
  );
}
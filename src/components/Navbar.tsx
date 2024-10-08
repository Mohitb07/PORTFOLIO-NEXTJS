import { useLayoutEffect } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";

import data from "../data/data.json";

const navigation = [
  { name: "About", href: "#about", current: false },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#contact", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      let header = document.querySelector("nav");
      header.classList.toggle("nav-scrolled", window.scrollY > 0);
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="w-screen fixed transition-all ease-in-out duration-500 z-50"
    >
      {({ open }) => (
        <>
          <div
            className={`max-w-7xl mx-auto px-2 sm:px-6 ${
              open && "glassNavbar"
            } lg:px-8 lg:bg-transparent`}
          >
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 transition-all ease-in-out duration-300"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 transition-all ease-in-out duration-300"
                      aria-hidden="true"
                    />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="block uppercase tracking-wider font-bold mt-3 lg:hidden h-8 w-auto">
                    {data.brand}
                  </h1>

                  <h1 className="hidden uppercase tracking-wider lg:block h-8 w-auto font-bold mt-1 text-lg">
                    {data.brand}
                  </h1>
                </div>
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-400 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="block md:hidden">
            {({ close }) => (
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black transition-all ease-in-out duration-300">
                {navigation.map((item) => (
                  <a
                    onClick={() => close()}
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

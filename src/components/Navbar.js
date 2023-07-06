import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const navigation = [
    { name: "Home", link: "/" },
    { name: "Story", link: "/story" },
  ];
  return (
    <div className="w-full">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between mb-3"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <Link
                // className="text-gradient font-medium navbar-brand px-2"
                to="/"
              >
                <p className="font-semibold text-white hover:text-blue hover:px-4 text-lg">
                  Solidity Blocks
                </p>
              </Link>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  className="font-semibold text-white hover:text-blue hover:px-4"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <Link
                to="/apphome"
                className="font-semibold text-white hover:text-blue hover:px-4"
              >
                Launch App
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

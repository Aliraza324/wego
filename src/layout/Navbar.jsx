import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { dropdownMenu, mobileMenu } from "@/animations/animations";

const navStructure = [
  { label: "Home", href: "/" },
  {
    label: "About us",
    href: "/about",
    dropdown: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    label: "What We Offer",
    href: "/what-we-offer",
    dropdown: [
      { label: "Zero Waste 360° for Business ™", href: "/offer/business-360" },
      { label: "Zero Waste 360° construction ™", href: "/offer/construction-360" },
      { label: "Zero Waste 360° hospitality ™", href: "/offer/hospitality-360" },
      { label: "Zero Waste 360° sports ™", href: "/offer/sports-360" },
      { label: "Waste to Value Calculator ™ Make Profit from Waste", href: "/offer/calculator" },
      { label: "Zero Waste Legal – CSRD-Compliant Reporting (ESRS 5)", href: "/offer/legal-csrd" },
      { label: "Zero Waste Workshops", href: "/offer/workshops" },
      { label: "Zero Waste Walking Tours", href: "/offer/walking-tours" },
    ],
  },
  { label: "Commitment", href: "/commitment" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-950/85 backdrop-blur-xl py-3 shadow-2xl"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity flex items-center gap-1 font-sans"
          >
            <span>WEGO</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E1E0CC]"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navStructure.map((item) => {
              const isCurrent = location.pathname === item.href;
              const hasDropdown = Boolean(item.dropdown);
              const isOpen = activeDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      to={item.href}
                      className={`text-sm sm:text-base font-normal tracking-wide transition-colors duration-200 flex items-center gap-1 py-1.5 ${
                        isCurrent
                          ? "text-[#E1E0CC] font-medium"
                          : "text-white/85 hover:text-[#E1E0CC]"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {hasDropdown && (
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                        className={`p-0.5 text-white/70 hover:text-[#E1E0CC] transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#E1E0CC]" : ""
                        }`}
                        aria-label={`Toggle ${item.label} menu`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          variants={dropdownMenu}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className={`absolute top-full left-0 mt-2 bg-white text-neutral-900 rounded-xl shadow-2xl border border-neutral-100 overflow-hidden z-50 ${
                            item.dropdown.length > 4 ? "w-80 sm:w-96" : "w-48 sm:w-56"
                          }`}
                        >
                          <div className="py-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-5 py-2.5 text-sm sm:text-[15px] font-normal text-neutral-800 hover:text-black hover:bg-[#E1E0CC]/20 transition-colors leading-snug"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            {/* Search Icon & Modal Toggle */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-1.5 text-white/85 hover:text-[#E1E0CC] transition-colors rounded-full hover:bg-white/10"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    variants={dropdownMenu}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 top-full mt-3 w-72 bg-neutral-900 border border-white/15 rounded-2xl p-3 shadow-2xl backdrop-blur-xl z-50"
                  >
                    <div className="relative flex items-center">
                      <Search className="w-4 h-4 text-white/50 absolute left-3" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        autoFocus
                        className="w-full bg-white/10 border border-white/15 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#E1E0CC]"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-white/90 hover:text-[#E1E0CC] rounded-lg bg-white/5 border border-white/10"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white rounded-lg bg-white/10 border border-white/15 backdrop-blur-md"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden mt-3"
            >
              <div className="relative flex items-center bg-neutral-900 border border-white/15 rounded-xl p-2">
                <Search className="w-4 h-4 text-white/50 absolute left-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full bg-transparent pl-8 pr-3 py-1.5 text-sm text-white placeholder-white/40 focus:outline-none"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden mt-4 rounded-2xl bg-neutral-950/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navStructure.map((item) => {
                  const isCurrent = location.pathname === item.href;
                  const hasDropdown = Boolean(item.dropdown);
                  const isSubOpen = mobileDropdownOpen === item.label;

                  return (
                    <div key={item.label} className="border-b border-white/5 pb-1">
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => {
                            if (!hasDropdown) setMobileMenuOpen(false);
                          }}
                          className={`py-2 text-sm font-medium transition-colors ${
                            isCurrent ? "text-[#E1E0CC]" : "text-white/90 hover:text-[#E1E0CC]"
                          }`}
                        >
                          {item.label}
                        </Link>

                        {hasDropdown && (
                          <button
                            type="button"
                            onClick={() =>
                              setMobileDropdownOpen(isSubOpen ? null : item.label)
                            }
                            className="p-2 text-white/70 hover:text-[#E1E0CC]"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isSubOpen ? "rotate-180 text-[#E1E0CC]" : ""
                              }`}
                            />
                          </button>
                        )}
                      </div>

                      {/* Mobile Submenu */}
                      {hasDropdown && (
                        <AnimatePresence>
                          {isSubOpen && (
                            <motion.div
                              variants={mobileMenu}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="pl-3 py-2 flex flex-col gap-1.5 bg-white/5 rounded-xl my-1"
                            >
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  to={subItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="text-xs text-white/80 hover:text-[#E1E0CC] py-1.5 px-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;

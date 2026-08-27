import NextLink from "next/link";
import { GrLinkedin } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";

const footerLinks = {
  Product: [
    { label: "Job discovery", href: "/jobs" },
    { label: "Worker AI", href: "/worker-ai" },
    { label: "Companies", href: "/companies" },
    { label: "Salary data", href: "/salary-data" },
  ],
  Navigations: [
    { label: "Help center", href: "/help" },
    { label: "Career library", href: "/career-library" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Brand Guideline", href: "/brand-guideline" },
    { label: "Newsroom", href: "/newsroom" },
  ],
};

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0d0d0f] px-6 py-16">
      <div className="mx-auto container">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <NextLink href="/" className="flex items-center text-xl font-bold">
              <span className="text-[#3b82f6]">hire</span>
              <span className="text-[#f97316]">loop</span>
            </NextLink>
            <p className="mt-4 text-sm text-gray-400">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h3 className="text-sm font-medium text-[#6366f1]">{section}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <NextLink href={link.href} className="text-sm text-gray-400 hover:text-white">
                        {link.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <NextLink
              href="https://facebook.com"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-white/10"
            >
              <ImFacebook2 className="text-2xl" />
            </NextLink>
            <NextLink
              href="https://linkedin.com"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-white/10"
            >
              <GrLinkedin className="text-2xl" />
            </NextLink>
          </div>

          <div className="flex flex-col items-center gap-2 text-xs text-gray-500 sm:flex-row sm:gap-4">
            <span>Copyright {new Date().getFullYear()} — HireLoop</span>
            <div className="flex items-center gap-4">
              <NextLink href="/terms" className="hover:text-gray-300">
                Terms & Policy
              </NextLink>
              <NextLink href="/privacy" className="hover:text-gray-300">
                Privacy Guideline
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
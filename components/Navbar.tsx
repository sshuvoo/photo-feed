import Logo from "./Logo";
import NavDropDown from "./NavDropDown";

export default function Navbar({ locale }: { locale: string }) {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <Logo locale={locale} />
        <NavDropDown navlocale={locale} />
      </div>
    </nav>
  );
}

import NavButton from "./NavButton";

export default function Navbar() {
  return (
    <header className="body-font border-b">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavButton text="Home" url="/" />
          <NavButton text="Projects" url="/projects" />
          <NavButton text="Blog" url="/blog" />
          <NavButton text="Contact" url="/contact" />
        </nav>
      </div>
    </header>
  );
}

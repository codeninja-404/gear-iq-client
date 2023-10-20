
import logo from "../../assets/logo.jpg";

const Footer = () => {
  return (
    <div className="bg-gray-600 bg-opacity-30">
      <footer className="md:flex container mx-auto justify-between items-center text-center  p-10  text-base-content">
        <aside className="my-4 dark:text-white">
          <div className="mx-auto">
            <div className="w-28 mx-auto my-2">
              <img
                className="rounded-full"
                src={logo}
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
          

          <p>
            GearIQ Ltd.
            <br />
            Providing Car Services since 1992
          </p>
        </aside>
        <nav className="my-4">
          <header className="uppercase font-bold text-red-500 ">Services</header>
          <div className="flex dark:text-white flex-col justify-between items-center">
            <a className="link link-hover">Brand Cars</a>
            <a className="link link-hover">Modification</a>           
            <a className="link link-hover">Rental</a>
          </div>
        </nav>
        <nav className="my-4">
          <header className="uppercase font-bold text-red-500">Company</header>
          <div className="flex dark:text-white flex-col justify-between items-center">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
          </div>
        </nav>
        <nav className="my-4">
          <header className="uppercase font-bold text-red-500">Legal</header>
          <div className="flex dark:text-white flex-col justify-between items-center">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import { Container } from "../utilities";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleClick = () => setIsMenuOpen(() => !isMenuOpen);
  return (
    <>
      <Container className="bg-red-400 flex">
        <a href="/" className="flex items-center text-md">
          <p className="mr-2 h-[1.8rem] w-[1.8rem]"> Craving </p>
        </a>
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-3 [&_a:hover]:text-grey [&_a]:ml-6 [&_a]:text-sm [&_a]:transition-colors">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li className="hidden lg:block">
              <a href="">Groceries</a>
            </li>
            <li className="hidden lg:block">
              <a href="">Contact us</a>
            </li>
          </ul>
        </nav>

        <div className=" ml-auto flex items-center gap-3">
          <a href="/login">Log in</a>
        </div>

        <nav
          className={`absolute inset-0 z-30 mt-16 h-[100vh] w-full bg-background px-4 py-2 opacity-100 md:hidden ${
            isMenuOpen ? " opacity-100" : " hidden "
          }`}
        >
          <ul className="[&_a]: flex flex-col gap-3  py-3   text-lg [&_a:hover]:text-grey [&_a]:transition-colors  [&_li]:border-b-2 [&_li]:border-grey-dark ">
            <li onClick={handleClick}>
              <a className="hover:bg-gray-100 block py-2" href="">
                Home
              </a>
            </li>
            <li onClick={handleClick}>
              <a className="hover:bg-gray-100 block py-2" href="">
                Features
              </a>
            </li>

            <li className="block" onClick={handleClick}>
              <a className="hover:bg-gray-100 block py-2" href="">
                Groceries
              </a>
            </li>
            <li className="block" onClick={handleClick}>
              <a className="hover:bg-gray-100 block py-2" href="">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <Container className="grid  grid-cols-2 bg-blue-400 p-10">
        <div>
          <h1>
            Enjoy Fresh Food in Your <span>Healthy Life</span>
          </h1>
          <p>
            Our commitment is to provide you with a menu that not only satisfies
            your taste buds but also contributes to your overall well-being.
          </p>
          <div>
            <button>playstore</button>
            <button>appstore</button>
          </div>
          <span>
            13k reviews <span>*****</span>
          </span>
        </div>
        <div>
          <img src="/hero.png" alt="" />
        </div>
      </Container>
    </>
  );
}

function Hero() {
  return (
    <>
      <Container>
        <Nav />
        <HeroSection />
      </Container>
    </>
  );
}
export default Hero;

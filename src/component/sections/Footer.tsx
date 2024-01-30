import { Container } from "../utilities";

const footerLinks = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Changelog", href: "#" },
      { title: "Docs", href: "#" },
      { title: "Linear Method", href: "#" },
      { title: "Download", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Products", href: "#" },
      { title: "Restaurants", href: "#" },
      { title: "About", href: "#" },
      { title: "Delivery", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Terms and Conditions", href: "#" },
      { title: "Privacy Policy", href: "#" },
      { title: "Blogs", href: "#" },
      { title: "Contact us", href: "#" },
    ],
  },
  {
    title: "Developers",
    links: [
      { title: "fb", href: "#" },
      { title: "tw", href: "#" },
      { title: "gi", href: "#" },
    ],
  },
];

function Footer() {
  return (
    <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between lg:flex-col">
            <div className="flex items-center text-grey">
              {/* <Logo className="mr-4 h-4 w-4" /> Vertica - Designed worldwide */}
            </div>
            <div className="mt-auto flex space-x-4 text-grey">
              {/* <TwitterIcon /> */}
              {/* <GithubIcon /> */}
              {/* <SlackIcon /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          {footerLinks.map((column) => (
            <nav
              key={column.title}
              className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[18rem]"
            >
              <h3 className="mb-3 font-medium">{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link.title} className="[&_a]:last:mb-0">
                    <a
                      className="mb-5 block text-grey transition-colors hover:text-off-white"
                      href={link.href}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>
      )
    </footer>
  );
}
export default Footer;

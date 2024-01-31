import { Container } from "../utilities";


function Nav() {
  return (
    <>
      <Container>Nav</Container>
    </>
  );
}

function HeroSection() {
  return (
    <>
      <Container>Order</Container>
    </>
  );
}

function Hero() {
  return (
    <>
      <Container>
      <Nav/>
      <HeroSection/>
      </Container>
    </>
  );
}
export default Hero;

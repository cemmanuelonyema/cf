import { Container } from "../utilities";

function Features() {
  return (
    <>
      <Container className="">
        <h2>Our Features</h2>
        <p>
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="grid grid-cols-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </Container>
    </>
  );
}

export default Features;

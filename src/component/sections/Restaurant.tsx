import { Container } from "../utilities";

function Restaurant() {
  return (
    <>
      <Container>
        <h2>Our Restaurant</h2>
        <p>
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
        <div className="grid grid-cols-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </Container>
    </>
  );
}

export default Restaurant;

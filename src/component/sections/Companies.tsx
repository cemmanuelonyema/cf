import { Container } from "../utilities";

function Qualities() {
  return (
    <>
      <Container className="grid grid-cols-3">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Container>
    </>
  );
}

function Companies() {
  return (
    <>
      <Container>
        <Qualities />
        <div className="grid grid-cols-4">
          <img src="/public/coca.png" alt="" />
          <img src="/public/coca.png" alt="" />
          <img src="/public/coca.png" alt="" />
          <img src="/public/coca.png" alt="" />
        </div>
      </Container>
    </>
  );
}

export default Companies;

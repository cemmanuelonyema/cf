import { Container } from "../utilities";

function Order() {
  return (
    <>
      <Container className="grid grid-cols-2">
        <div>
          <h1>
            Enjoy Fresh Food in Your <span>Healthy Life</span>
          </h1>
          <p>
            Why wait in line or stress about dinner plans when you can have a
            gourmet experience delivered straight to your doorstep? Our mobile
            app makes it convenient for you to explore our diverse menu,
            customize your order, and track it in real-time.
          </p>
          <p>
            Complete your order swiftly and securely with our streamlined
            checkout process. Your satisfaction is our priority, and that
            includes making your transaction hassle-free.
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
export default Order;

import card from "./assets/card.svg";
import visa from "./assets/visa.svg";
import discover from "./assets/discover.svg";
import paypal from "./assets/paypal.svg";
import menu from "./assets/menu.svg";
import "./App.css";
import avatar from "./assets/image-avatar.png";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="container">
      <header>
        <div className="menu pointer" onClick={() => setIsOpen(!isOpen)}>
          <img src={menu} alt="menu" />
        </div>
        <nav className={`${isOpen ? "show" : "hide"}`}>
          <ul className="flex nav text-gray fs-400">
            <li className="pointer">Trips</li>
            <li className="pointer">Recently Viewed</li>
            <li className="pointer">Bookings</li>
            <div className="avatar pointer">
              <img src={avatar} alt="avatar" />
            </div>
          </ul>
        </nav>
      </header>
      <div className="flow">
        <div className="flex payment">
          <section
            className="payment-info flow"
            style={{ "--flow-space": "2rem" }}
          >
            <div>
              <h1 className="fs-500 fw-400 text-black">Payment Information</h1>
              <p className="fs-200 text-gray">Choose your method of payment</p>
            </div>
            <img src={card} alt="credit card" style={{ width: "25em" }} />
          </section>
          <div className="flow" style={{ "--flow-space": "3rem" }}>
            <div className="flex cards">
              <img src={visa} alt="visa" />
              <img src={discover} alt="discover" />
              <img src={paypal} alt="paypal" />
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flow payment-form"
              style={{ "--flow-space": "1.5rem" }}
            >
              <div className="flex">
                <div>
                  <label htmlFor="card" className="fs-200 text-gray">
                    Credit card number
                  </label>
                  <input
                    name="card"
                    id="card"
                    placeholder="4324 5433 9382 1030"
                  />
                </div>
                <div>
                  <label htmlFor="card" className="fs-200 text-gray">
                    Expiration date
                  </label>
                  <input name="card" id="card" placeholder="03/24" />
                </div>
              </div>
              <div className="flex">
                <div>
                  <label htmlFor="card" className="fs-200 text-gray">
                    Security code
                  </label>
                  <input name="card" id="card" placeholder="420" />
                </div>
                <div>
                  <label htmlFor="card" className="fs-200 text-gray">
                    Postal Code
                  </label>
                  <input name="card" id="card" placeholder="10119" />
                </div>
              </div>

              <div>
                <input type="radio" />
                <span>Use this card for next time purchase</span>
              </div>
              <button className="btn btn-primary fs-200 pointer add">
                Add Card
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <table className="summary">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>₦2,497.00</td>
            </tr>
            <tr>
              <td>Estimated TAX</td>
              <td>₦119.64</td>
            </tr>
            <tr>
              <td>
                Promotional Code: <span className="text-gray">Z4KXLM9A</span>
              </td>
              <td>₦-60.00</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex complete">
        <button className="btn btn-primary fs-400">Complete Payment</button>
        <p className="fs-400 fw-700">TOTAL: ₦2556.64</p>
      </div>
    </main>
  );
}

export default App;

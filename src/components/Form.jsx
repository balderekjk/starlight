import { useState } from "react";

const Form = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [statusClass, setStatusClass] = useState("hidden");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusClass("neutral");
    setStatusMessage("Processing. Hold tight...");

    const data = new FormData(event.target);
    const action = event.target.action;

    try {
      const response = await fetch(action, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (result.error) {
        setStatusMessage(
          "There was an error processing your form. Feel free to try again and/or contact us."
        );
        setStatusClass("error");
      } else {
        setStatusMessage("Success! Your form submission was processed.");
        setStatusClass("success");
        event.target.reset();
      }
    } catch (error) {
      setStatusMessage(
        "Sorry, something went wrong. Feel free to contact us about this matter."
      );
      setStatusClass("error");
    } finally {
      setTimeout(() => {
        setStatusMessage("");
        setStatusClass("hidden");
      }, 5000);
    }
  };

  return (
    <form
      className="[&_label]:block [&_label]:mb-3 [&_input]:rounded-md rounded-lg p-4 border-[1px] border-[var(--sl-color-gray-5)] shadow-md [&_input:not([type='radio'])]:w-full [&_input+span]:ml-2 [&_input]:accent-[var(--sl-color-accent)] [&_input]:border-[1px] [&_input]:border-[var(--sl-color-gray-5)] max-w-[615px] w-full box-border"
      onSubmit={handleSubmit}
      action="https://script.google.com/macros/s/AKfycbw-y6YYG9c_3qcujy_-Qqaem0She2U9lBE76UV8m1sBNgryBxxRqAjCT9AUUQKxAsnq/exec?sheetName=2024 Mock Registrants"
    >
      <div className="not-content">
        <h3>Registrant Information</h3>
        <p>asterisk (*) means required</p>
        <hr />
        <label>
          First Name*
          <input name="First Name" type="text" required />
        </label>
        <label>
          Last Name*
          <input name="Last Name" type="text" required />
        </label>
        <label>
          Email*
          <input name="Email" type="email" required />
        </label>
        <label>
          Organization or Affiliation*
          <input name="Organization" type="text" required />
        </label>
        <label>
          Position Title*
          <input name="Position" type="text" required />
        </label>
        <label>
          City*
          <input name="City" type="text" required />
        </label>
        <label>
          State*
          <input name="State" type="text" required />
        </label>
        <label>
          Zip Code*
          <input name="Zip" type="text" required />
        </label>
        <label>
          Phone Number*
          <input name="Phone" type="tel" required />
          <p className="text-gray-600 dark:text-gray-400 mt-0">numbers only</p>
        </label>
        <h3 className="mb-2">Payment Method*</h3>
        <p className="text-gray-600 dark:text-gray-400">
          **Only One Purchase Per Person/Email/Submission**
          <br />
          NHEA Convention Registration is $300
          <br />
          If paying with Cash, Check, or Purchase Order, direct your payment to:
          <br />
          NHEA
          <br />
          P.O. Box 1190
          <br />
          Wailuku, HI 96793
        </p>
        <hr />
        <label>
          <input type="radio" name="Payment Method" value="PayPal" />
          <span>PayPal</span>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Submit this form and yellow PayPal button will appear below
          </p>
        </label>
        <label>
          <input type="radio" name="Payment Method" value="Cash" />
          <span>Cash</span>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            See above for address or have it ready on day of event
          </p>
        </label>
        <label>
          <input type="radio" name="Payment Method" value="Check" />
          <span>Check</span>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            See above for address or have it ready on day of event
          </p>
        </label>
        <label>
          <input type="radio" name="Payment Method" value="Purchase Order" />
          <span>Purchase Order</span>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            If known, please enter PO No. below; see above for address
          </p>
        </label>
        <label>
          Purchase Order No.
          <input name="Purchase Order No." type="text" />
        </label>
        <button
          disabled={statusMessage ? true : false}
          id="action-submit"
          className="my-4 py-2 px-5 cursor-pointer rounded-md border-[1px] bg-[hsl(96,100%,92%)] border-[var(--sl-color-text-accent)] text-[#222] hover:bg-[hsl(96,100%,83%)] disabled:bg-slate-300 disabled:text-gray-500 disabled:border-gray-400 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
      <blockquote id="status" className={`py-2 text-[#222] ${statusClass}`}>
        {statusMessage}
      </blockquote>
      <p className="text-center">
        <strong>
          If you have any inquiries or requests please email{" "}
          <a href="#">nhea.hawaii@gmail.com</a>.
        </strong>{" "}
        This form is not yet protected by reCAPTCHA and the Google Privacy
        Policy and Terms of Service apply.
      </p>
    </form>
  );
};

export default Form;

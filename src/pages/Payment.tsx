const PaymentForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle payment submission logic here
  };

  return (
    <div className="container mt-5" style={{ boxShadow: "0px 5px 15px rgb(245, 245, 245)" }}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card border-dark" style={{ boxShadow: "rgb(245, 245, 245) 0px 5px 15px", borderRadius: "20px" }}>
            <div className="card-header bg-dark text-white">
              <h3 className="text-center mb-0 font-weight-bold">
                Payment Details
              </h3>
            </div>
            <div className="card-body" style={{ padding: "20px" }}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label
                    htmlFor="cardNumber"
                    className="text-dark font-weight-bold"
                  >
                    Card Number :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="expiryDate"
                    className="text-dark font-weight-bold"
                  >
                    Expiry Date :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    placeholder="MM/YY"
                    
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cvv" className="text-dark font-weight-bold">
                    CVV :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvv"
                    placeholder="123"
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="cardHolder"
                    className="text-dark font-weight-bold"
                  >
                    Card Holder Name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardHolder"
                    placeholder="John Doe"
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="billingAddress"
                    className="text-dark font-weight-bold"
                  >
                    Billing Address :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="billingAddress"
                    placeholder="123 Main St, City, Country"
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="zipCode"
                    className="text-dark font-weight-bold"
                  >
                    Zip Code :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    placeholder="12345"
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="country"
                    className="text-dark font-weight-bold"
                  >
                    Country :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="United States"
                    style={{ border: "1.5px solid black" }}
                    required
                  />
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-dark btn-lg">
                    Make Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;

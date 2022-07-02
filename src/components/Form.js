import React from "react";

class Form extends React.Component {
  state = {
    email: "",
    checked: false,
  };

  handelform = (e) => {
    const { email } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handChecked = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  submitBtn = (e) => {
    const { email, checked } = this.state;
    if (email.includes("@") === true && checked === true) {
      alert("🎉Congratulations!!!");
    } else if (email.includes("@") === false) {
      alert("This email is not valid!");
    } else if (checked === false) {
      alert("Please accept our rules!");
    }

    this.setState({
      email: "",
      checked: true,
    });
  };

  render() {
    const { email, checked } = this.state;
    return (
      <div className="container">
        <form className="form">
          <h2>Contact Us</h2>
          <div className="typing">
            <div className="form__email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={this.handelform}
              />
            </div>
            <div className="form__checked">
              <input
                type="checkbox"
                name="checked"
                id="checked"
                value={checked}
                onChange={this.handChecked}
              />
              <label htmlFor="checked">Terms & Conditions</label>
            </div>
            <button
              type="button"
              onClick={this.submitBtn}
              className="btn btn-success"
            >
              --Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

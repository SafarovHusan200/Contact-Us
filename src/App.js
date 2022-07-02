import React, { Component } from "react";

class App extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    nativeLang: "",
    agrement: false,
    gender: "",
  };

  handleValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleChacked = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };
  validateInput = (e) => {
    if (e.target.value.length < 4) {
      alert("Iltimos, 4 tadan ko'p so'z kiriting! ");
    }
  };
  render() {
    const { firstName, email, message, nativeLang, agrement } =
      this.state;
    return (
      <div className="container">
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={this.handleValue}
              onBlur={this.validateInput}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              onChange={this.handleValue}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={this.handleValue}
            ></textarea>
          </div>
          <div className="mt-3">
            <label htmlFor="nativeLang">Native Language</label>
            <select
              name="nativeLang"
              id="nativeLang"
              className="form-select"
              value={nativeLang}
              onChange={this.handleValue}
            >
              <option disabled></option>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
              <option value="eng">eng</option>
            </select>
          </div>
          <div className="form-check mt-3">
            <input
              type="checkbox"
              name="agrement"
              id="agrement"
              className="form-check-input"
              value={agrement}
              onChange={this.handleChacked}
            />
            <label htmlFor="agrement" className="form-check-label">
              Agrement
            </label>
          </div>
          <div className="mt-3">
            <label htmlFor="gender">Gender</label> <br />
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={this.handleValue}
            />
            <label htmlFor="male" className="form-check-label mx-2">
              Male
            </label>
            <br />
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={this.handleValue}
            />
            <label htmlFor="female" className="form-check-label mx-2">
              Female
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default App;

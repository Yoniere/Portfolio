import React, { Component } from "react";
import { projectService } from "../servics/projectsService";

export class Contact extends Component {
  state = {
    contactMessege: "",
  };

   componentDidMount() {
    const contactMessege = projectService.getEmptyMessage();
    this.setState({ contactMessege }, () =>
      console.log(this.state.contactMessege)
    );
  }
  handleChange = async ({ target }) => {
    const field = target.name;
    const value = target.value;
    this.setState(
      (prevState) => ({
        contactMessege: { ...prevState.contactMessege, [field]: value },
      }),
      () => console.log(this.state.contactMessege)
    );
  };

  onSendEmail = (ev) => {
    ev.preventDefault();
    projectService.addMessage({ ...this.state.contactMessege });
    const contactMessege= projectService.getEmptyMessage()
    this.setState({contactMessege})
  };

  render() {
    const { contactMessege } = this.state;
    if (!contactMessege) <div>Loading...</div>;
    return (
      <section className="contact container" id="contact">
        <h2 className="contact-header">Contact Me</h2>
        <hr></hr>

        <p>
          <i className="fa fa-map-marker fa-fw"></i>
          Tel Aviv, Israel
        </p>

        <p>
          <i className="fa fa-phone fa-fw"></i>
          Phone: +972-506569632
        </p>

        <p>
          <i className="fa fa-envelope fa-fw"></i>
          Email: jontaner12@gmail.com
        </p>

        <br></br>
        <p>Let's get in touch. Send me a message:</p>
        <form onSubmit={this.onSendEmail} className="form">
          <input
            onChange={this.handleChange}
            type="text"
            id="name"
            name="name"
            value={contactMessege.name}
            placeholder="Name"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id="email"
            name="email"
            value={contactMessege.email}
            placeholder="Email"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id="subject"
            name="subject"
            value={contactMessege.subject}
            placeholder="Subject"
          />
          <input
            onChange={this.handleChange}
            type="text"
            id="message"
            name="message"
            value={contactMessege.message}
            placeholder="Message"
          />
          <button>
            <i className="fa fa-paper-plane"></i>
            SEND MESSAGE
          </button>
        </form>
      </section>
    );
  }
}

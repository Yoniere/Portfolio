import React, { Component } from "react";

export class Contact extends Component {
//   state = {
//     contact: null,
//   };

//   handleChange = async ({ target }) => {
//     const field = target.name;
//     const value = target.value;
//     this.setState((prevState) => ({
//         contact: { ...prevState.contact, [field]: value },
//     }));
//   };

//   onSendEmail = async (ev) => {
//     ev.preventDefault();
//     this.props.addPlant({ ...this.state.plant });
//     // await plantService.save({ ...this.state.plant });
//     this.props.loadPlants();
//     this.props.history.push("/plant");
//   };
  render() {
    // const { contact } = this.state;
    return (
      <section className="contact container" id='contact'>
        <h2 className="contact-header">Contact Me</h2>
        <hr></hr>

        <p>
          <i className="fa fa-map-marker fa-fw"></i>
          Tel Aviv, Israel
        </p>

        <p>
          <i className="fa fa-phone fa-fw"></i>
          Phone: +972 506569632
        </p>

        <p>
          <i className="fa fa-envelope fa-fw"></i>
          Email: jontaner12@gmail.com
        </p>

        {/* <form onSubmit={this.onSendEmail}>
          <input onChange={this.handleChange} type="text" id="email" name="email" value={contact.email} />
          <input onChange={this.handleChange}type="text" id="subject" name="subject" value={contact.subject} />
          <input onChange={this.handleChange} type="text" id="messege" name="messege" value={contact.messege} />
        </form> */}
      </section>
    );
  }
}

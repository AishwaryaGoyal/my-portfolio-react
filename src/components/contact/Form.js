import React from "react";

function Form(props) {
  return (
    <main className="contact">
      <form action="https://formspree.io/f/xyylqqkn" method="post">
        <label htmlFor="name">
          Name:{" "}
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input
          type="text"
          id="name"
          className="inputs"
          name="user_name"
          required
          autoFocus
        />

        <label htmlFor="mail">
          E-mail:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <input
          type="email"
          id="mail"
          className="inputs"
          name="user_email"
          required
        />

        <label htmlFor="msg">
          Message:
          <abbr title="required" aria-label="required">
            *
          </abbr>
        </label>
        <textarea
          id="msg"
          className="inputs"
          name="user_message"
          required
        ></textarea>

        <button id="btnSubmit" type="submit">
          <strong>Send your message</strong>
        </button>

        <p>We will get back to you as soon as possible. ^_^</p>
      </form>
    </main>
  );
}

export default Form;

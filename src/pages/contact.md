---
title: Contact Us
description: How to get in contact with Open Infrastructure Services
hide_table_of_contents: true
---

import styles from './contact.module.css';
import Background from '/img/background.jpg';

<div id="herobanner"
  style={{
    width: "100%",
    height: "360px",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "norepeat",
    marginBottom: "50px",
  }} >
  <h1 className={styles.headertext}> Contact Us </h1>
</div>

<form id="fs-frm" name="complaint-form" accept-charset="utf-8" action="https://formspree.io/f/xayzqnpq" method="post">
  <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="Your Name *" required="" />
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="Your Email *" required="" />
    <label for="telephone">Telephone Number (Optional)</label>
    <input type="telephone" name="telephone" id="telephone" placeholder="Your Phone Number" />
    <label for="message">Message</label>
    <textarea rows="6" name="message" id="message" placeholder="Your Message *" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
  </fieldset>
  <input type="submit" value="Send Us A Message" />
</form>
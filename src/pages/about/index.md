---
title: About
description: About Open Infrastructure Services
hide_table_of_contents: true
---

import Gary from '/img/gary.png';
import Jeff from '/img/jeff.jpeg';
import Nate from '/img/nate.jpg';
import Background from '/img/background.jpg';
import styles from './index.module.css';

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
  <h1 className={styles.headertext} > About Us </h1>
</div>

<Columns>
  <Column className='text--left'>
    <img src={Jeff} style={{width: 200}} align="left" hspace="10" />
    ## Jeff McCune

    Founder of Open Infrastructure Services

    [Email](mailto:jeff@openinfrastructure.co)
  </Column>
  <Column className='text--left'>
    <img src={Gary} style={{width: 200}} align="left" hspace="10" />
    ## Gary Larizza

    Principal Consultant

    [Email](mailto:gary@openinfrastructure.co)
  </Column>
  <Column className='text--left'>
    <img src={Nate} style={{width: 200}} align="left" hspace="10" />
    ## Nate McCurdy

    Principal Consultant

    [Email](mailto:nate@openinfrastructure.co)
  </Column>
</Columns>
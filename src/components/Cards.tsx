import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "../index2.css";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Link } from "react-scroll";




export default function CardDemo() {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const Logo = require("../assets/me.png")
    const header = (
      <img alt="Card" id="img" src={Logo} width={100} height={50} />
    );
    const footer = (
      <span>
        <Button className="Button">
          <Link onClick={handleClick} to='name' smooth={true} duration={500}>
          Let's Collaborate
          </Link>
        </Button>
      </span>
    );
  
    return (
      <div className='flex'>
        <div className="hidden lg:flex xl:max-w-[100%] ml-20">
        <Card
          className="card"
          title="Mishaal Odeh"
          subTitle="Trader/Coder/Lawyer"
          style={{ width: "10rem" }}
          footer={footer}
          header={header}
        >
          <p className="m-0" style={{ lineHeight: "1.2" }}>
            Hello there, i can offer help in the following fields:<br></br><br></br><ul className="Fields"> <li>1. Quant Dev</li>
            <li>2. Front End</li> <li>3. Trading</li> <li>4. Legal Consultation</li></ul>
          </p>
        </Card>
        </div>
      </div>
    );
  }
  
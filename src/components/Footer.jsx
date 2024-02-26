import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section>
        <div>
            <div>
                <img src={logo} alt="hoobank" />
            </div>
            <p>
                A new way to make the payments easy, reliable and secure.
            </p>
        </div>

        <div>
            {footerLinks.map((footerlink) => (
                <div>
                    <h4>
                        {footerlink.title}
                    </h4>

                    <ul>
                        {footerlink.links.map((link,index) => (
                            <li>
                                {link.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Footer;
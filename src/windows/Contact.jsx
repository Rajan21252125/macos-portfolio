import React from 'react'
import WindowWrapper from "#hoc/windowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import {socials} from "#constants/index.js";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h3>Contact</h3>
            </div>
            <div className="p-5 space-y-5">
                <img src="/images/andrian.jpg" alt="Rajan" className="w-20 rounded-full" />
                <h3>Let's Connect</h3>
                <p>Got an idea, a bug to squash? or just wanna talk tech? I'm in.</p>
                <p>grajan408@gmail.com</p>

                <ul>
                    {socials.map(({ id, bg, link, icon, text}) => (
                        <li key={id} style={{ background: bg}}>
                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} alt={text} className="size-5"/>
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}


const ContactWrapper = WindowWrapper(Contact, "contact");
export default ContactWrapper

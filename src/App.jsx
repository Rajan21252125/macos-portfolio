import React from 'react';
import {Dock, Navbar, Welcome} from '#components';
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";
import {Contact, Finder, ImageWindow, Resume, Safari, Terminal, Text} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Safari />
            <Terminal />
            <Resume />
            <Finder />
            <Text />
            <ImageWindow />
            <Contact />
        </main>
    )
}
export default App

import React from 'react';
import {Dock, Navbar, Welcome} from '#components';
import gsap from 'gsap';
import { Draggable } from "gsap/Draggable";
import {Resume, Safari, Terminal} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Resume />
            <Terminal />
            <Safari />
        </main>
    )
}
export default App

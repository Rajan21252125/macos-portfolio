import React from 'react';
import {locations} from "#constants/index.js";
import clsx from "clsx";
import useLocationStore from "#store/location.js";
import useWindowStore from "#store/windows.js";
import {useGSAP} from "@gsap/react";
import { Draggable } from "gsap/Draggable";


const projects = locations.work?.children ?? [];

const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    const folderClick = (item) => {
        setActiveLocation(item);
        openWindow("finder");
    }

    useGSAP(() => {
        Draggable.create(".folder")
    },[])
    return (
        <section id="home">
            <ul>
                {projects.map((project) => (
                    <li key={project.id} className={clsx("group folder", project.windowPosition)} onClick={() => folderClick(project)}>
                        <img src="/images/folder.png" alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Home

import React from 'react'
import WindowControls from "#components/WindowControls.jsx";
import {Mail, Search, SearchIcon} from "lucide-react";
import {gallery, photosLinks} from "#constants/index.js";
import useLocationStore from "#store/location.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import clsx from "clsx";
import useWindowStore from "#store/windows.js";

const Gallery = () => {
    const { activeLocation, setActiveLocation} = useLocationStore();
    const { openWindow } = useWindowStore();


    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume");
        if (item.kind === "folder") return setActiveLocation(item);
        if (["fig","url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };
    const renderList = (name,items) => (
        <div>

        </div>
    )
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map((item) => (
                            <li key={item.id}>
                                <img src={item.icon} alt={item.title} className="w-4"/>
                                <p>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="gallery">
                    <ul>
                        {gallery.map((item) => (
                            <li key={item.id} onClick={() => openItem(item)}>
                                <img src={item.img} alt={`image${item.id}`} className="w-64"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const GalleryWrapper = WindowWrapper(Gallery, "photos");
export default GalleryWrapper

import React from 'react'
import WindowWrapper from "#hoc/windowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/windows.js";

const ImageWindow = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;
    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2>{name}</h2>
            </div>
            <div className="p-5 bg-white">
                {imageUrl && (
                    <div className="w-full">
                        <img src={imageUrl} alt={name} className="w-full h-auto max-h-[70vh] object-contain rounded"/>
                    </div>
                )}
            </div>
        </>
    )
}


const ImageWindowWrapper = WindowWrapper(ImageWindow, "imgfile");
export default ImageWindowWrapper

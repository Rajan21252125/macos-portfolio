import React from 'react'
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import {Download} from "lucide-react";
import {Document, Page, pdfjs} from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';



pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.con/pdfj-dist@${pdfjs.version}/build/pdf.worker.min.minjs`;

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume"/>
                <h2>Resume.pdf</h2>

                <a href="files/Resume-Rajan-Gupta.pdf" download className="cursor-pointer" title="Download resume">
                    <Download className="icon" />
                </a>

            </div>
            <Document file="files/Resume-Rajan-Gupta.pdf">
                <Page pageNumber={1} renderTextLayer renderAnnotationLayer/>
            </Document>
        </>
    )
}

const ResumeWrapper = WindowWrapper(Resume, "resume");
export default ResumeWrapper;

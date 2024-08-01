import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"; // Importing icons for navigation
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1); // Reset to the first page when the document is loaded
    console.log("Document loaded successfully. Number of pages:", numPages);
  };

  const goToPrevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(prevPageNumber => prevPageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume d-flex justify-content-center" style={{ position: "relative" }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page
              pageNumber={pageNumber}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
          <div className="navigation-buttons">
            <Button
              variant="secondary"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 1,
                padding: "10px",
                borderRadius: "50%",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none"
              }}
            >
              <BsArrowLeft />
            </Button>
            <Button
              variant="secondary"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              style={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: 1,
                padding: "10px",
                borderRadius: "50%",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none"
              }}
            >
              <BsArrowRight />
            </Button>
          </div>
        </Row>

        <Row className="d-flex justify-content-between mt-3">
          <Col className="text-center">
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { Pagination, Button } from "semantic-ui-react";
import "react-pdf/dist/Page/AnnotationLayer.css";

export default function({ file }) {
  const [page, setPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  return (
    <>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onItemClick={({ pageNumber }) => setPage(pageNumber)}
      >
        <Page pageNumber={page} />
      </Document>
      <Pagination
        activePage={page}
        onPageChange={(e, { activePage }) => setPage(activePage)}
        totalPages={numPages}
      />
      <Button as="a" href={file} floated="right">
        Download
      </Button>
    </>
  );
}

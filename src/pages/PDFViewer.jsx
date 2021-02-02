// import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'
import React, {useState} from 'react'
import {Document, Page} from 'react-pdf'

export default function MyApp() {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({numPages}) {
    setNumPages(numPages)
  }

  return (
    <div>
      hahaaha
      <Document file={`../../public/give-and-take.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  )
}

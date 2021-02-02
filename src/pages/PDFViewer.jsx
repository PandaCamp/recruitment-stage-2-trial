// import {Page, Text, View, Document, StyleSheet} from '@react-pdf/renderer'
import React, {useState} from 'react'
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack'
// import * as pdf from 'react-pdf'
import s from '../assets/give-and-take.pdf'
// export default function MyApp() {
//   const [numPages, setNumPages] = useState(null)
//   const [pageNumber, setPageNumber] = useState(1)

//   function onDocumentLoadSuccess({numPages}) {
//     setNumPages(numPages)
//   }

//   return (
//     <div>
//       <button>{`<`}</button> Page {pageNumber}
//       of {numPages}
//       <button onClick={() => {}}> {` >`} </button>
//       <Document file={s} onLoadSuccess={onDocumentLoadSuccess}>
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p></p>
//     </div>
//   )
// }

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
}

export default function Sample() {
  const [file, setFile] = useState(s)
  const [numPages, setNumPages] = useState(null)

  function onFileChange(event) {
    setFile(event.target.files[0])
  }

  function onDocumentLoadSuccess({numPages: nextNumPages}) {
    setNumPages(nextNumPages)
  }

  return (
    <div className="Example">
      <header>
        <h1>react-pdf sample page</h1>
      </header>
      <div className="Example__container">
        <div className="Example__container__load">
          <label htmlFor="file">Load from file:</label> <input onChange={onFileChange} type="file" />
        </div>
        <div className="Example__container__document">
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      </div>
    </div>
  )
}

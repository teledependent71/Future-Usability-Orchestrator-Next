import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'
import PropTypes from 'prop-types'

import booksPageInitialProps3f73aResource from '../../resources/books-page-initial-props-3f73a'

const Books = (props) => {
  return (
    <>
      <div className="books-container">
        <Head>
          <title>Books - Future Usability Orchestrator</title>
          <meta
            property="og:title"
            content="Books - Future Usability Orchestrator"
          />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <>
              <Repeater
                items={params}
                renderItem={(BooksEntities) => (
                  <>
                    <div className="books-container1">
                      <h1>{BooksEntities?.title}</h1>
                      <span>{BooksEntities?.title}</span>
                      <span>{BooksEntities?.price}</span>
                    </div>
                  </>
                )}
              />
            </>
          )}
          initialData={props.booksEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .books-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .books-container1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Books.defaultProps = {
  booksEntities: [],
}

Books.propTypes = {
  booksEntities: PropTypes.array,
}

export default Books

export async function getStaticProps(context) {
  const response = await booksPageInitialProps3f73aResource({
    ...context?.params,
  })
  return {
    props: {
      booksEntities: response,
      ...response?.meta,
    },
    revalidate: 60,
  }
}

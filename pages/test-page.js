import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/thq-react-components'

import testPageResource from '../resources/test-page'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Future Usability Orchestrator</title>
          <meta
            property="og:title"
            content="test-page - Future Usability Orchestrator"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_kbrhx2) => (
            <>
              <h1>{context_kbrhx2?.name}</h1>
            </>
          )}
          initialData={props.contextKbrhx2Prop}
          persistDataDuringLoading={true}
          key={props?.contextKbrhx2Prop?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  const contextKbrhx2Prop = await testPageResource({
    ...context?.params,
  })
  return {
    props: {
      contextKbrhx2Prop: contextKbrhx2Prop?.data?.[0],
    },
  }
}

import React from "react"
import { ExampleButton } from "../components/Button"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello world!</h1>
      <ExampleButton>test</ExampleButton>
    </Layout>
  )
}

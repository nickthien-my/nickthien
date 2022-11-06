import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
          </div>
          <div className="row">
            <div className="col">
            <p>Insert Photo</p>
            </div>
            <div className="col">
            <h2>Nicholas Thien</h2>
            <p>Web Developer | Teacher | Content Creator</p>
            </div>
<div className="row">
  <div className="col">
  <p>I have  worked, etc. etc</p>
  <button>Get in touch</button>
  <p>Download CV</p>
  </div>
</div>
            <div className="row">
              Scrolling Slideshow here!
            </div>
            
          </div>
        </div>
      </Layout>
    </>

  )
}

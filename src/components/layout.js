import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <div className="content">
          {children}
        </div>
        <footer>
          <p>Copyright 2021</p>
        </footer>
      </div>
    </>
  )
}

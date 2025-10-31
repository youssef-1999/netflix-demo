import React from 'react'

function Loading() {
  return (
   <div className="d-flex justify-content-center align-items-center min-vh-100 bg-black">
          <img
            src="/assets/netflix_spinner.gif"
            alt="Loading..."
            style={{ width: "150px" }}
          />
        </div>
  )
}

export default Loading
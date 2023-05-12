import React from 'react'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";


function Loader() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <ClipLoader
        color='#000'
        loading={loading}
        size={80}
      />
    </div>
  )
}

export default Loader
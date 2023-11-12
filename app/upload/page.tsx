'use client'

import React from 'react'
import { CldUploadButton } from 'next-cloudinary';

function UploadPage() {
  return (
    <CldUploadButton uploadPreset="nef8rv63">
        <button className='btn btn-primary' onClick={() => {open}}>Upload</button>
    </CldUploadButton>
  )
}

export default UploadPage;

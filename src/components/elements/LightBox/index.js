import React, { Fragment } from 'react'
import ModalImage from "../LightBoxDev"

const LightBox = ({src, title}) => {
  return (
    <Fragment>
      <ModalImage
        small={src}
        large={src}
        alt={title}
      />
    </Fragment>
  )
}

export default LightBox
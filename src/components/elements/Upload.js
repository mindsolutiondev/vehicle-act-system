import React, { useState, useEffect, Fragment } from "react"
import styled from "styled-components"
import { CloudUploadOutlined } from "@ant-design/icons"
import { List, Avatar } from "antd"

const ContainerWrapper = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed;
  padding-bottom: 20px;
  padding-top: 10px;
  background: rgba(0, 0, 0, 0.02);

  span {
    font-weight: 400;
    font-size: "0.8125rem";
  }
`
const Upload = ({ imageUrl, onChange, title, trigger, preview }) => {
  const [descriptionImg, setDescriptionImg] = useState("")

  useEffect(async () => {
    const setDefaultImage = async () => {
      if (preview !== undefined) {
        console.log("----->", preview)
        await setDescriptionImg(preview)
        await onChange(title, preview)
      } else {
        await onChange("", "")
      }
    }

    const triggerDelUpload = () => {
      if (trigger) {
        setDescriptionImg("")
      } else console.log("status =", trigger)
    }
    await setDefaultImage()
    await triggerDelUpload()
  }, [trigger, title, preview])

  const _onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      const filename = e.target.files[0].name
      reader.onloadend = () => {
        setDescriptionImg(reader.result)
        onChange(title, reader.result)
      }

      reader.readAsDataURL(e.target.files[0])
    }
  }
  return (
    <ContainerWrapper>
      {descriptionImg === "" ? (
        <Fragment>
          <CloudUploadOutlined />
          คลิกเพื่ออัพโหลด
          <span>ไฟล์ที่รองรับ: รูปภาพทุกชนิด</span>
          <input
            key={Date.now()}
            type="file"
            style={{
              cursor: "pointer",
              opacity: 0,
              width: "100%",
              padding: "50px",
              position: "absolute",
              top: "18px",
            }}
            accept="image/*"
            onChange={_onSelectFile}
          />
        </Fragment>
      ) : (
        <Fragment>
          <Avatar size={100} src={descriptionImg} />
          <input
            key={Date.now()}
            type="file"
            style={{
              cursor: "pointer",
              opacity: 0,
              width: "100%",
              padding: "50px",
              position: "absolute",
              top: "18px",
            }}
            accept="image/*"
            onChange={_onSelectFile}
          />
        </Fragment>
      )}
    </ContainerWrapper>
  )
}

export default Upload

import React, { useState, useEffect, useRef, useCallback } from "react"
import styled from "styled-components"
import { CloudUploadOutlined } from "@ant-design/icons"
import { Avatar } from "antd"

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
const Upload = ({ loading, onChange, title, trigger, preview }) => {
  const [descriptionImg, setDescriptionImg] = useState(null)
  const [loadingUpload, setLoadingUpload] = useState(false)
  const inputFile = useRef(null)

  useEffect(() => {
    const setDefaultImage = async () => {
      if (preview !== undefined) {
        await setDescriptionImg(preview)
        await onChange(title, preview)
      } else {
        await onChange("", "")
      }
    }
    setDefaultImage()
  }, [trigger, title, preview])

  const _onSelectFile = useCallback((e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      // const filename = e.target.files[0].name
      reader.onloadend = async () => {
        setLoadingUpload(true)
        await setDescriptionImg(reader.result)
        await onChange(title, reader.result)
        setLoadingUpload(false)
      }

      reader.readAsDataURL(e.target.files[0])
    }
  }, [])

  return (
    <ContainerWrapper>
      {!loading ? (
        descriptionImg === "" || descriptionImg === null ? (
          <>
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
              ref={inputFile}
              accept="image/*"
              onChange={_onSelectFile}
            />
          </>
        ) : (
          <>
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
              ref={inputFile}
              accept="image/*"
              onChange={_onSelectFile}
            />
          </>
        )
      ) : (
        <>Uploaded ...</>
      )}
    </ContainerWrapper>
  )
}

export default Upload

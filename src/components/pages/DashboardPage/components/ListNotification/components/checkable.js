import React, { useState } from "react"

import { Tag } from "antd"

const { CheckableTag } = Tag

const Checkable = ({ filter }) => {
  const [selectedTags, setSelectedTags] = useState([])
  const tagsData = ["7 Day", "Expired", "15 Day"]

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    setSelectedTags(nextSelectedTags)
    filter(nextSelectedTags)
  }

  return (
    <div className="tw-m-4">
      <span style={{ marginRight: 8 }}>กรองข้อมูล :</span>
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  )
}

export default Checkable

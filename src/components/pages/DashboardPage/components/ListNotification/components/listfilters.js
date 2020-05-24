import React, { useState } from "react"
import { Tag } from "antd"

const { CheckableTag } = Tag

const tagsFromServer = ["7 Day", "15 Day", "Expired"]

const ListFilters = () => {
  const [selectedTag, setSelectedTag] = useState([])

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTag, tag]
      : selectedTag.filter((t) => t !== tag)
    setSelectedTag(nextSelectedTags)
  }

  return (
    <div>
      <h6 style={{ marginRight: 8, display: "inline" }}>Categories:</h6>
      {tagsFromServer.map((tag) => (
        <CheckableTag
          key={tag}
          checked={selectedTag.indexOf(tag) > -1}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </div>
  )
}

export default ListFilters

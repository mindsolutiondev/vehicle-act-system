import React from 'react'
import { Card } from 'antd';
import Loadable from 'react-loadable'
import noimage from '../../core/images/nopic.png'
const { Meta } = Card;


const LightBox = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "Lightbox.page"*/ './LightBox'
    ),
  loading: () => null,
  delay: 1000,
})

const card = ({ cover, titles, children }) => {
  return (
    <Card
      hoverable
      style={{ width: '50%' }}
      cover={
        !cover
          ?
          <img src={noimage} width="50%" />
          :
          <LightBox 
            src ={!cover ? "https://zenit.org/wp-content/uploads/2018/05/no-image-icon.png" : cover} 
            title={titles} 
          />
      }
    >
      <Meta title={titles} />
    </Card>
  )
}

export default card
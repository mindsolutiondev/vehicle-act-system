import React from 'react'
import { Row, Col } from 'antd'
import propTypes from 'prop-types'
import Loadable from 'react-loadable'
import styled from 'styled-components'

const ColStyled = styled(Col)`
  display: flex;
  justify-content: center;
`
const CardExpanded = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "CardExpanded.page"*/ '../../../../components/elements/Card'
    ),
  loading: () => null,
  delay: 1000,
})


const ListExpanded = ({ data }) => {
  return (
    <div>
      <Row>
        <ColStyled span={8}>
          <CardExpanded coverpicture='disabled' cover={data.vehicalBook} titles="เล่มรถ" />
        </ColStyled>
        <ColStyled span={8}>
          <CardExpanded coverpicture='disabled' cover={data.insureDocuments} titles="เอกสารประกัน" />
        </ColStyled>
        <ColStyled span={8}>
          <CardExpanded coverpicture='disabled' cover={data.vehicleImg} titles="รูปรถ" />
        </ColStyled>
      </Row>
    </div>
  )
}

ListExpanded.propTypes = {
  data: propTypes.objectOf(propTypes.any),
}

export default ListExpanded

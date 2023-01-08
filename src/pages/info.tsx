// @ts-ignore
import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 50px;
  }
`

const textStyle = css`
  font-size: 17px;
  font-weight: 700;
  color: gray;
`

// Kebab Case
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

// Camel case - 객체를 통한 Styled Component
const Text2 = styled('div')<{ disable: boolean }>(disable => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={textStyle}>{title}</div>
      <Text1 disable={true}>{description}</Text1>
      <Text2 disable={true}>{author}</Text2>
      <Link to="/">To main</Link>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

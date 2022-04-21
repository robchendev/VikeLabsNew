import React from 'react'
import { ResultLink, ResultContainer, ResultBlock, Title, Excerpt, LinkBtnContainer, MetaContainer } from './styles'
import LinkBtn from '../LinkBtn/LinkBtn'

const SearchResult = ({ title, description, link }) => {
  console.log(link)
  return (
    <React.Fragment key={title}>
      <ResultLink to={title.toLowerCase().replaceAll(" ","-")}>
        <ResultContainer>
          <ResultBlock>
            <MetaContainer>
              <Title>{title}</Title>
              <Excerpt>{description}</Excerpt>
            </MetaContainer>
            { typeof link !== 'undefined' &&
              <LinkBtnContainer>
                <LinkBtn github={link} />
              </LinkBtnContainer>
            }
          </ResultBlock>
        </ResultContainer>
      </ResultLink>
    </React.Fragment>
  )
}

export default SearchResult
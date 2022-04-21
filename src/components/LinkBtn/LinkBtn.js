import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { GitHubButton, UnChecked } from './styles'

const LinkBtn = ({ github }) => {
  return (
    <a target="_blank" href={`https://github.com/${github}`}>
      <GitHubButton onClick={(e) => e.stopPropagation()}>
        <UnChecked><FaGithub /></UnChecked>
      </GitHubButton>
    </a>
  )
}

export default LinkBtn
import React from 'react'
import { HiOutlineCode, HiOutlineUserGroup, HiOutlineHome, HiOutlineBookOpen } from "react-icons/hi"
import { FaGithub } from 'react-icons/fa'

export const internalLinks = [
  {
    label: "Home",
    icon: <HiOutlineHome />,
    link: "/"
  },
  {
    label: "About",
    icon: <HiOutlineUserGroup />,
    link: "/about"
  },
  {
    label: "Projects",
    icon: <HiOutlineCode />,
    link: "/p"
  },
  {
    label: "Blog",
    icon: <HiOutlineBookOpen />,
    link: "/b"
  }
]
export const externalLinks = [
  {
    label: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/vikelabs/",
  },
]
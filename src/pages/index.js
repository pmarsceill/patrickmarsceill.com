import React from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { Normalize } from 'styled-normalize'


const GlobalStyle  = createGlobalStyle`
  body {
    background-color: #ffaaaa;
  }
`

export default () => (
  <div>
    <GlobalStyle />
    <Normalize />
    <div>yeah</div>
  </div>
)

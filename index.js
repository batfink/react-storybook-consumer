import React from "react"
import ReactDOM from "react-dom"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
`

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    height: 100vh;
`

const App = ({ name }) => (
    <Wrapper>
        <GlobalStyle />
        You’re the only one, { name }!
    </Wrapper>
)

const mountNode = document.getElementById("app")
ReactDOM.render(<App name="Joe" />, mountNode)
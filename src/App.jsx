import React from 'react'
import styled from 'styled-components'
import Principal from './pages/Principal'
export default function App() {
    return (
        <Main>
            <Principal />
        </Main>
    )
}

const Main = styled.div`
    font-family: 'Poppins', sans-serif;
`;
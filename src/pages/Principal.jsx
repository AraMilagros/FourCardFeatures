import React from 'react'
import styled from 'styled-components'
import 'animate.css';

import ContainerCards from '../components/ContainerCards';

export default function Principal() {
    return (
        <main>
            <ContainerText>
                <section className='animate__animated animate__pulse'>
                    <label className='label title'>Reliable, efficient delivery</label>
                    <label className='label subtitle'>Powered by Technology</label>
                    <p className='parrafo'>
                        Our Artificial intelligence powered tools use millions of project data
                        points to ensure that your project is successful
                    </p>
                </section>

            </ContainerText>

            <ContainerCards />
        </main>

    )
}

const ContainerText = styled.div`

    .label{
        /* border:2px solid red; */
        display: block;
        width: max-content;
        margin: 12px auto;
        /* margin: 10px; */
    }

    .title{
        font-size: 26px;
    }
    .subtitle{
        font-size: 26px;
        font-weight: 600;
    }

    .parrafo{
        /* border: 2px solid green; */
        width: 35%;
        text-align: center;
        margin: auto;
    }
`;
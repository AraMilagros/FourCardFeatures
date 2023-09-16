import React from 'react'
import styled from 'styled-components'
import 'animate.css';

import { breakpoints } from '../assets/js/breakpoints';
import ContainerCards from '../components/ContainerCards';

export default function Principal() {
    return (
        <main>
            <ContainerText>
                <section className='section animate__animated animate__pulse'>
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

    margin-top: 4em;
    .label{
        display: block;
        width: max-content;
        margin: 12px auto;
    }

    .subtitle{
        font-weight: 600;
    }

    .parrafo{
        text-align: center;
        margin: auto;
    }

    @media (max-width: ${breakpoints.xxl}){
        .title{
            font-size: 26px;
        }
        .subtitle{
            font-size: 26px;
        }

        .parrafo{
            width: 40%;
        }
    }

    @media (max-width: ${breakpoints.xl}){
        .parrafo{
            width: 60%;
        }
    }

    @media (max-width: ${breakpoints.sm}){
        .title{
            font-size: 22px;
        }
        .subtitle{
            font-size: 22px;
        }
    }
    @media ((min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.lg})){
        .section{
            animation: none;
        }
        .parrafo{
            width: 90%;
        }
    }


`;
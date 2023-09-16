import React from 'react'
import styled from 'styled-components'

import 'animate.css';
//data para las cards
import { data } from '../assets/js/data';
//componentes
import Cards from './Cards';

export default function ContainerCards() {
    return (
        <Conteiner>
            {
                data.map((item, i) => {
                    return (
                        <Cards
                            key={i}
                            lista={item}
                        />
                    )
                })
            }

        </Conteiner>
    )
}

const Conteiner = styled.div`
    width: 80%;
    margin: 2em auto;
    /* border: 2px solid blue; */
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Divide el contenedor en 3 columnas de igual ancho */
    gap: 2em 0; 

    
    .cc{
        border-radius: 6px;
        box-shadow: 0px 0px 30px hsl(0, 0%, 41%, .4);
        margin: auto;
        
        cursor: pointer;
    }

    .cyan{
        border-top: 5px solid hsl(180, 62%, 55%);
        
        grid-column: 1;
        grid-row: 1 / 3;


    }

    .red{
        border-top: 5px solid hsl(0, 78%, 62%);
        grid-column: 2;
        grid-row: 1;
        
    }

    .orange{
        border-top: 5px solid hsl(34, 97%, 64%);

        grid-column: 2;
        grid-row: 2;
    }

    .blue{
        border-top: 5px solid hsl(212, 86%, 64%);

        grid-column: 3;
        grid-row: 1 / 3;

    }

`;

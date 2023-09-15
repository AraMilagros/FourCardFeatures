import React from 'react'
import styled from 'styled-components'

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
    /* div{
        display: inline-flexbox;
    } */
    border: 2px solid blue;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Divide el contenedor en 3 columnas de igual ancho */
    gap: 10px 4px;

    
    .cc{
        border-radius: 6px;
        box-shadow: 0px 0px 30px hsl(0, 0%, 41%, .4);
    }

    .cyan{
        border-top: 5px solid hsl(180, 62%, 55%);
        
        grid-column: 1;
        grid-row: 1 / 3;
        margin: auto;
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
        margin: auto;
    }

`;



//   .item1 {
//     grid-column: 1 / 2; /* Caja 1 ocupa la columna 1 */
//     grid-row: 1 / 3;/* Caja 1 ocupa 2 filas */
    
//     margin-top: 1em;
//     margin-bottom: 1em;
//     border:2px solid red;
//   }
  
//   .item2 {
//     border:2px solid red;
//     grid-column: 2 / 3; /* Caja 2 ocupa la columna 2 */
//     grid-row: 1 / 2; /* Caja 2 ocupa 1 fila */
//   }
  
//   .item3 {
//     border:2px solid red;
//     grid-column: 2 / 3; /* Caja 3 ocupa la columna 2 */
//     grid-row: 2 / 3; /* Caja 3 ocupa 1 fila */
//   }
  
//   .item4 {
//     border:2px solid red;
//     grid-column: 3 / 4; /* Caja 4 ocupa la columna 3 */
//     grid-row: 1 / 3; /* Caja 4 ocupa 2 filas */
//     margin-top: 1em;
//     margin-bottom: 1em;
//   }
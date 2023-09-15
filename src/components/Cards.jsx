import React from 'react'
import styled from 'styled-components'

const iconos = require.context('../assets/img/', true);

export default function Cards(props) {
    return (
        // <ConteinerCard>
            <CardBody className={props.lista.clase}>
                <label className='cb cb-title'>{props.lista.title}</label>
                <p className='cb cb-parrafo'>
                    {props.lista.parrafo}
                </p>
                <ImgCards src={iconos(props.lista.img)} alt="title-alt-img" />
            </CardBody>
        // </ConteinerCard>


    )
}

const ConteinerCard = styled.div`
    width: 21em;
    /* margin:10px;

    .cc{
        border-radius: 6px;
        box-shadow: 0px 0px 30px hsl(0, 0%, 41%, .4);
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

    } */


`;

const CardBody = styled.div`
    position: relative;
    overflow: hidden;

    .cb{
        margin: 1em 1.5em;
    }
    .cb-title{
        font-weight: 600;
        font-size: 17px;
        display: block;
        
    }
`;

const ImgCards = styled.img.attrs(props => ({
    src: props.src || null,
}))`
    border:2px solid red;
    float: right;
    margin: 1em 1.5em 1.5em 0;
`;

// <div class="grid-container">
// <div class="item1">Caja 1</div>
// <div class="item2">Caja 2</div>
// <div class="item3">Caja 3</div>
// <div class="item4">Caja 4</div>
// </div>
// .grid-container {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr); /* Divide el contenedor en 3 columnas de igual ancho */
//     gap: 10px 4px; /* Espacio entre las cajas */
//   }


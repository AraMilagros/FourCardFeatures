import React from 'react'
import styled from 'styled-components'

import { breakpoints } from '../assets/js/breakpoints';
const iconos = require.context('../assets/img/', true);

export default function Cards(props) {
    return (
            <CardBody className={props.lista.clase}>
                <label className='cb cb-title'>{props.lista.title}</label>
                <p className='cb cb-parrafo'>
                    {props.lista.parrafo}
                </p>
                <ImgCards src={iconos(props.lista.img)} alt="title-alt-img" />
            </CardBody>

    )
}

const CardBody = styled.div`
    position: relative;
    width: 21em;

    .cb{
        margin: 1em 1.5em;
    }
    .cb-title{
        font-weight: 600;
        font-size: 17px;
        display: block;
        
    }

    @media (max-width: ${breakpoints.xl}){
        width: 20em;
    }


`;

const ImgCards = styled.img.attrs(props => ({
    src: props.src || null,
}))`
    float: right;
    margin: 1em 1.5em 1.5em 0;
`;
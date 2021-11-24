import {styled} from "@mui/material";
import {useState} from "react";
import React from "react";


export type SquareState = "" | "X" | "O";
interface StyledProps {
    value?: SquareState;
}

const StyledSquare = styled('button')(({value}: StyledProps) => {

    let bgColor = '';

    switch (value) {
        case '':
            bgColor = `rgba(174, 215, 209, 0.6)`;
            break;

        case 'X':
            bgColor = `rgba(17, 190, 196, 0.8)`;
            break;
        case 'O':
            bgColor = `rgba(43, 230, 130, 0.8)`;
            break;
        default:
            bgColor = `rgba(90, 50,43,1)`;
            break;
    }


   return ({
        width: 'auto',
        background: `${bgColor}`,
        border: `${value === '' ? '1px solid' : '2px solid'}`,
        borderBottomColor: `rgba(${bgColor}, 0.1)`,
        borderRightColor: `rgba(${bgColor}, 1)`,
        borderLeftColor: `rgba(${bgColor}, 0.3)`,
        borderTopColor: `rgba(${bgColor}, 1)`,
       '&:hover':{
           color: `${bgColor}`,
           opacity: `0.6`,
           border: `3px solid`,

       },
    })
})

interface SquareProps {
    id: number,
    callback: (squareId: number) => void,
    value: SquareState
}


const Square = ({id, value, callback}: SquareProps) => {

    const onPickHandler = () => {
        console.log('my val',id,  value);
        if (value === '') {
            // Inform parent
            callback(id)
        }
    }

    return <StyledSquare
        value={value}
        onClick={onPickHandler} >
    </StyledSquare>
}

export default Square;

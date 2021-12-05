import {styled} from "@mui/material";
import React from "react";
import xImg from './../assets/x.png';
import oImg from './../assets/o.svg';


export type SquareState = "" | "X" | "O";
interface StyledProps {
    value?: SquareState;
}

const SquareX = styled('div')(() => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    'img': {
        width: '60px',
    }
}));

const StyledSquare = styled('button')(({value}: StyledProps) => {

   return ({
       backgroundColor: 'rgba(238,238,238,0.22)',
       width: 'auto',
       maxWidth: '100px',
       overflow: 'hidden',
       border: `${value === '' ? '2px solid rgba(50, 50, 50, 0.9)' : '1px solid rgba(50, 50, 50, 0.9)'}`,
       '&:hover':{
           color: `rgba(174, 215, 209, 0.1)`,
       },

       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'


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

    return (
        <StyledSquare
            value={value}
            onClick={onPickHandler} >
            { value === 'O' && <SquareX>
                <img src={oImg} />
            </SquareX>}

            { value === 'X' && (
                <SquareX>
                    <img src={xImg} />
                </SquareX>
            )}
        </StyledSquare>
    )
}

export default Square;

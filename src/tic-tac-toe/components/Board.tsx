import Square from "./Square";
import {styled, Theme, useTheme} from "@mui/material";
import React from "react";
import {BoardState} from "../pages/TicTacToe";

interface StyledProps {
    theme: Theme;
    width: number,
    height: number
}

const StyledBoard = styled('div')(({width, height}: StyledProps) => ({

    display: 'grid',
    gridTemplateRows: `repeat(
        ${height},
        calc(30vw / ${width})
    )`,
    gridTemplateColumns: `repeat(${width}, 1fr)`,
    gridGap: '1px',
    border: `2px solid rgba(51, 51, 51, 0.5)`,
    width: '100%',
    maxWidth: '25vw',
    // backgroundColor: `rgba(255, 255, 255, 0.4)`,
    margin: 'auto'
}))

interface BoardProps {

    onPick: (squareId: number) => void,
    currentBoard: BoardState
}

const Board = ({currentBoard, onPick}: BoardProps) => {

    const theme = useTheme();


    const onChoseHandler = (squareId: number) => {
        onPick(squareId);
    }

    const board = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    console.log(currentBoard)

    return (
        <StyledBoard theme={theme} width={board[0].length} height={board.length}>

            {currentBoard && board.map((row: number[], row_index: number) =>
                row.map((square: number, index: number) => {
                    return (
                        <Square
                            key={index}
                            id={ row_index * row.length + index }
                            value={currentBoard.board[row_index * row.length + index]}
                            callback={onChoseHandler}
                        />
                    )}
                ))
            }

        </StyledBoard>
    )
}

export default Board;

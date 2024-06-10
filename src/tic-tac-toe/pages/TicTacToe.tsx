import Board from "../components/Board";
import {IconButton, styled} from "@mui/material";
import bgImage from './../assets/paper-bg.jpeg'
import {useState} from "react";
import TurnHeader from "../components/TurnHeader";
import {SquareState} from "../components/Square";
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';

const TicTacToeBackground = styled('div')(() => ({
    width: '100vw',
    height: '100vh',
    background: `url(${bgImage}) rgba(0, 0, 0, 0.2)`,
    backgroundSize: 'cover',
    overflow: 'hidden'
}))


const TicTacToeWrapper = styled('div')(() => ({
    paddingTop: '15vh',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    background: `rgba(229, 229, 229, 0.8)`,
}))

export interface BoardState {
    board: SquareState[],
}

interface HistoryState {
    boardHistory: BoardState[],
    currentStep: number
}

const initialHistoryState: HistoryState = {
    boardHistory: [{
        board: Array(9).fill('')
    }],
    currentStep: 0
}

const TicTacToe = () => {

    const [history, setHistory] = useState(initialHistoryState);
    const [isXTurn, setIsXTurn] = useState(true);
    const [hasWinner, setHasWinner] = useState(false);
    const [winner, setWinner] = useState('');
    const [hasGameFinished, setGameAsFinished] = useState(false);

    const onPickHandler = (squareId: number) => {

        // Add new record on history
        setHistory((prevHistory: HistoryState) => {
            const lastBoardRecord = prevHistory.boardHistory[prevHistory.currentStep].board
            lastBoardRecord[squareId] = isXTurn ? 'X' : 'O';
            const newBoardState: BoardState = {
                board: lastBoardRecord,
            }
            const updatedBoardHistory: BoardState[] = prevHistory.boardHistory.concat(newBoardState);
            return {
                currentStep: prevHistory.currentStep + 1,
                boardHistory: updatedBoardHistory
            };
        })

        setIsXTurn((prevState => !prevState));

    }


    const onRestartHandler = () => {

        setHistory({
            currentStep: 0,
            boardHistory: [{
                board: Array(9).fill('')
            }]
        });
        setIsXTurn(true);
        setHasWinner(false);
        setWinner('');
        setGameAsFinished(false);
    }

    const onWinnerCheck = () => {
        if (!hasWinner) {
            const winningIndexes = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];

            const latestBoard = history.boardHistory[history.currentStep].board;
            winningIndexes.forEach((row, rowIndex) => {
                const [index1, index2, index3] = winningIndexes[rowIndex];

                if (latestBoard[index1] &&
                    latestBoard[index1] === latestBoard[index2] &&
                    latestBoard[index1] === latestBoard[index3]) {
                    setHasWinner(true)
                    setWinner(latestBoard[index1])
                    setGameAsFinished(true)

                    console.log('we have winner')
                }
            })


        }
    }

    onWinnerCheck();


    return (
        <TicTacToeBackground>
            <TicTacToeWrapper>
                {hasWinner && hasGameFinished && <>
                    <h1>We have a winner!</h1>
                    <h2> All hail {winner} </h2>
                </>
                }

                {!hasWinner && !hasGameFinished && (
                    <>
                        <TurnHeader whoseTurn={isXTurn ? 'X' : 'O'}/>
                        <Board
                            currentBoard={history.boardHistory[history.currentStep]}
                            onPick={onPickHandler}
                        />
                    </>
                )}

                {!hasWinner && hasGameFinished && (
                    <>
                        <h1>We have no winner</h1>
                        <h2> Restart game </h2>
                    </>
                )}
                <IconButton onClick={onRestartHandler} size={'large'}>
                    <ReplaySharpIcon
                        fontSize={'large'}
                        sx={{paddingTop: '30px'}}
                    />
                </IconButton>
            </TicTacToeWrapper>
        </TicTacToeBackground>
    )

}

export default TicTacToe;

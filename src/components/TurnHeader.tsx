

interface TurnHeaderProps {
    whoseTurn: 'O' | 'X';
}

const TurnHeader = ({ whoseTurn }: TurnHeaderProps) => {

    return (
        <h3>Now is {whoseTurn} turn</h3>
    )

}

export default TurnHeader;


export const PlayerRaiting = ({ rating }) => {

    const totalRating = 10;
    const playerRating = Math.round(rating);
    const remaingRating = totalRating - playerRating;
    const listItems = [];
    let classRating;

    if(playerRating >= 7){
        classRating = 'good'
    }
    
    if(playerRating >= 4 && playerRating <= 6){
        classRating = 'middle'
    }
    
    if(playerRating >= 1 && playerRating < 4){
        classRating = 'low'
    }

    for (let indexRating = 0; indexRating < playerRating; indexRating++) {
        listItems.push(<li className={classRating}></li>);
    }
    for (let indexRating = 0; indexRating < remaingRating; indexRating++) {
        listItems.push(<li></li>);
    }

    return (
        <ul className="list-unstyled activity-leval">
            {listItems}
        </ul>
    )
}

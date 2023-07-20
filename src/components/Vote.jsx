import { useState } from "react";

const Vote = ({votes}) => {
    const [likes, setLikes] = useState(votes)
    const [isClicked, setIsClicked] = useState(false)
    const [clickCount, setClickCount] = useState(0)

    const handleClick = () => {
        if (!isClicked) {
            setLikes((currentLikes) => {
                return currentLikes + 1
            })
        }
        setIsClicked(true)
        setClickCount(clickCount + 1) 
    }

    const handleDisable = isClicked > 0

    return (
        <>
        <button className="like-button" onClick={handleClick} disabled={handleDisable}>Like</button>
        <span className="likes-count">{likes}</span>
        </>
    )
}

export default Vote;
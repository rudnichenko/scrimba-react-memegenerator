import React from "react"
import memesData from "../memesData"

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form--body">
                <input className="form--inputs_text" type="text" placeholder="Top text" />     
                <input className="form--inputs_text" type="text" placeholder="Bottom text" />
                <button className="form--submit" onClick={getMeme}>Get a new meme image  🖼</button>
            </div>
            <img className="meme--image" src={meme.randomImage} alt="Meme" />
        </main>
    )
}
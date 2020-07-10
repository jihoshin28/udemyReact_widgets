import React, {useState, useEffect} from 'react'
import axios from 'axios'

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM

const Convert = ({text, language}) => {
    console.log(text, language)
    let [delayedText, setDelayedText] = useState(text)

    useEffect(()=> {
        let timerId = setTimeout(() => {
            setDelayedText(text)
        }, 500)

        return() => {
            clearTimeout(timerId)
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async()=> {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: delayedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            
            setTranslated(data.data.translations[0].translatedText)
            
        }
        doTranslation()
    }, [language, delayedText])

    const [translated, setTranslated] = useState('')
    return(
        <div>
            <h1>Output</h1>
            <h1 className = "ui header">
                {translated}
            </h1>
        </div>
    )
}
export default Convert


import {Typography} from "@material-ui/core";
import {useCallback, useEffect, useState} from "react";
import {styled} from "@mui/material";
import {keyframes} from "@emotion/react";

export interface ITypewriterProps {
    sentences: string[],
    speed: number,
}

const fade = keyframes `
  0%,100% { opacity: 0 }
  50% { opacity: 1 }
`


const AnimatedCursor = styled('div')(() => ({

    animation: `${fade} 3s linear`
}))


export const Typewriter = ({sentences, speed}: ITypewriterProps) => {
    const [presentText, setPresentText] = useState<{text: string, index: number}>({text: '', index: 0})


    const generateSentence = useCallback(() => {
        const textGeneratorInterval = setInterval(() => {
            setPresentText(prev => {
                const characterIndex = prev.text.length
                console.log('charIndex', characterIndex)
                const nextCharacter = sentences[prev.index].charAt(characterIndex)

                if (sentences[prev.index].length === prev.text.length) {
                    clearInterval(textGeneratorInterval)
                    setPresentText(prev => ({...prev, index:prev.index +1}))
                    eraseSentence()
                }
                return ({...prev, text: prev.text + nextCharacter})
            })
        }, speed)

    }, [presentText.text, presentText.index, sentences, speed,])

    const eraseSentence = useCallback(() => {
        const textEraserInterval = setInterval(() => {
            setPresentText(prev => {
                if (prev.text.length === 0) {
                    clearInterval(textEraserInterval)
                    if (prev.index >= sentences.length) {
                        setPresentText(prev => ({...prev, index: 0}))
                    }
                    generateSentence()
                }
                return ({...prev, text: prev.text.slice(0, -1)})
            })
        }, speed * 0.35)
    }, [presentText.text, presentText.index, sentences, speed, generateSentence])


    useEffect(() => {
        generateSentence()
        // todo: current solution is crushing, refactor with the ref code
        // ref: https://github.com/awran5/react-simple-typewriter/blob/main/src/hooks/useTypewriter.tsx
    }, [])

return (
    <div style={{display: 'flex', flexDirection: 'row', padding: 10 }}>
        <Typography variant={"body1"}>
            {presentText.text}
        </Typography>
        <AnimatedCursor>
            <Typography variant={"body1"}>
                |
            </Typography>
        </AnimatedCursor>
    </div>
)

}

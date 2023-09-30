import './EnglishOutput.css'
import {Button, Paper} from "@mui/material";
import React, {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setEnglishAudio} from "../features/audioSlice";

const EnglishOutput = () => {
    const [englishAudioState, setEnglishAudioState] = useState(null)
    const dispatch = useDispatch()

    const getEnglishTranslation = async () => {
        try {
            const response = await axios.get("http://localhost:5000/result");
            const base64Audio = response.data.translated_audio;
            const blob = base64toBlob(base64Audio, "audio/wav");
            const blobUrl = URL.createObjectURL(blob);
            setEnglishAudioState(blobUrl);
            dispatch(setEnglishAudio(blobUrl))
        } catch (e) {
            console.log("Error while fetching results: ", e);
        }
    };


    const base64toBlob = (base64Data, contentType) => {
        const sliceSize = 512;
        const byteCharacters = atob(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            const slice = byteCharacters.slice(offset, offset + sliceSize);
            const byteNumbers = new Array(slice.length);

            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }

        return new Blob(byteArrays, {type: contentType});
    }


    return (
        <div className={"output-body"}>
            <Paper elevation={3} className={"paper"}>
                Here will be the output
                <Button onClick={getEnglishTranslation}>Get Translation</Button>
                <audio src={englishAudioState} controls="controls" className={"controls"}/>
            </Paper>
        </div>
    );
};

export default EnglishOutput;
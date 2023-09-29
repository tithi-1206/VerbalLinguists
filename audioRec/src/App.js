import React, {useState, useEffect} from "react";
import AudioRecording from "./Audio/AudioRecording";
import './styles.css'
import EnglishOutput from "./Audio/EnglishOutput";
import {Typography} from "@mui/material";

const App = () => {
    return (
        <div style={{textAlign: '-webkit-center'}}>
            <div className={'App'}>
                {/*<div className={'App-child'}>*/}
                <Typography variant="h2" mb={8}>
                    Verbal Linguists
                </Typography>
                <div className="App-Content">
                    <AudioRecording/>
                    {/*<AudioRecording/>*/}
                    <EnglishOutput/>
                </div>
                {/*</div>*/}
            </div>
        </div>
    );
};

export default App;

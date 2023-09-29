// import React, { Component } from "react";
// import MicRecorder from "mic-recorder-to-mp3";
// import axios from "axios";
// import './AudioRecording.css';

// const Mp3Recorder = new MicRecorder({ bitRate: 128 });

// export default class AudioRecording extends Component {
//     state = {
//         isRecording: false,
//         blobURL: "",
//         isBlocked: false
//     };

//     componentDidMount() {
//         navigator.mediaDevices
//             .getUserMedia({ audio: true })
//             .then(() => {
//                 console.log("Permission granted");
//                 this.setState({ isBlocked: false });
//             })
//             .catch(() => {
//                 console.log("Permission Denied");
//                 this.setState({ isBlocked: true });
//             });
//     }

//     start = () => {
//         if (this.state.isBlocked) {
//             console.log("Permission Denied");
//         } else {
//             Mp3Recorder.start()
//                 .then(() => {
//                     this.setState({ isRecording: true });
//                 })
//                 .catch((e) => console.error(e));
//         }
//     };

//     stop = () => {
//         Mp3Recorder.stop()
//             .getMp3()
//             .then(async ([buffer, blob]) => {
//                 const blobURL = URL.createObjectURL(blob);
//                 const file = new File(buffer, 'audio.mp3', {
//                     type: blob.type,
//                     lastModified: Date.now()
//                 });

//                 let baseAudio = await this.audioToBase64(file);
//                 // console.log(baseAudio)
//                 // Post the audio data to the server
//                 this.postAudioData(baseAudio);

//                 this.setState({ blobURL, isRecording: false });
//             })
//             .catch((e) => console.log(e));
//     };

//     audioToBase64 = async (audioFile) => {
//         return new Promise((resolve, reject) => {
//             let reader = new FileReader();
//             reader.onerror = reject;
//             reader.onload = (e) => resolve(e.target.result);
//             reader.readAsDataURL(audioFile);
//         });
//     };

//     postAudioData = async (baseAudio) => {

//         try {
//             console.log(baseAudio)
//             // Replace with your server endpoint
//             const response = await axios.post("http://localhost:5000/audio", {
//                 audioData: baseAudio,
//             });

//             console.log("Audio data posted successfully:", response.data);
//         } catch (error) {
//             console.error("Error posting audio data:", error);
//         }
//     };

//     render() {
//         return (
//             <div className={"input-body"}>
//                 Audio recording
//                 <audio src={this.state.blobURL} controls="controls" />
//                 <div className={"control-button"}>
//                     <button onClick={this.start} disabled={this.state.isRecording}>
//                         Record
//                     </button>
//                     <button onClick={this.stop} disabled={!this.state.isRecording}>
//                         Stop
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

///////////////////////////////////////////////////////////////////////////////////
/*
import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";
import './AudioRecording.css';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const AudioRecording = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(() => {
                console.log("Permission granted");
                setIsBlocked(false);
            })
            .catch(() => {
                console.log("Permission Denied");
                setIsBlocked(true);
            });
    }, []);

    const start = () => {
        if (isBlocked) {
            console.log("Permission Denied");
        } else {
            Mp3Recorder.start()
                .then(() => {
                    setIsRecording(true);
                })
                .catch((e) => console.error(e));
        }
    };

    const stop = () => {
        Mp3Recorder.stop()
            .getMp3()
            .then(async ([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob);
                const file = new File(buffer, 'audio.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                let baseAudio = await audioToBase64(file);
                // console.log(baseAudio)
                // Post the audio data to the server
                postAudioData(baseAudio);

                setBlobURL(blobURL);
                setIsRecording(false);
            })
            .catch((e) => console.log(e));
    };

    const audioToBase64 = async (audioFile) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = reject;
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(audioFile);
        });
    };

    const postAudioData = async (baseAudio) => {
        try {
            // console.log(baseAudio);
            // Replace with your server endpoint
            const response = await axios.post("http://localhost:5000/audio", {
                audioData: baseAudio,
            });

            console.log("Audio data posted successfully:", response.data);
        } catch (error) {
            console.error("Error vvvposting audio data:", error);
        }
    };

    return (
        <div className={"input-body"}>
            Audio recording
            <audio src={blobURL} controls="controls" />
            <div className={"control-button"}>
                <button onClick={start} disabled={isRecording}>
                    Record
                </button>
                <button onClick={stop} disabled={!isRecording}>
                    Stop
                </button>
            </div>
        </div>
    );
}

export default AudioRecording;
*/


/*
import React, { Component } from "react";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";
import './AudioRecording.css';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

export default class AudioRecording extends Component {
    state = {
        isRecording: false,
        blobURL: "",
        isBlocked: false
    };

    componentDidMount() {
        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(() => {
                console.log("Permission granted");
                this.setState({ isBlocked: false });
            })
            .catch(() => {
                console.log("Permission Denied");
                this.setState({ isBlocked: true });
            });
    }

    start = () => {
        if (this.state.isBlocked) {
            console.log("Permission Denied");
        } else {
            Mp3Recorder.start()
                .then(() => {
                    this.setState({ isRecording: true });
                })
                .catch((e) => console.error(e));
        }
    };

    stop = () => {
        Mp3Recorder.stop()
            .getMp3()
            .then(async ([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob);
                const file = new File(buffer, 'audio.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                let baseAudio = await this.audioToBase64(file);
                // Ensure proper base64 encoding
                baseAudio = baseAudio.replace(/^data:audio\/mp3;base64,/, ''); // Remove the data URI prefix if present

                // Post the correctly encoded audio data to the server
                this.postAudioData(baseAudio);

                this.setState({ blobURL, isRecording: false });
            })
            .catch((e) => console.log(e));
    };

    audioToBase64 = async (audioFile) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = reject;
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(audioFile);
        });
    };

    postAudioData = async (baseAudio) => {
        try {
            console.log(baseAudio);
            // Replace with your server endpoint
            const response = await axios.post("http://localhost:5000/audio", {
                audioData: baseAudio,
            });

            console.log("Audio data posted successfully:", response.data);
        } catch (error) {
            console.error("Error posting audio data:", error);
        }
    };

    render() {
        return (
            <div className={"input-body"}>
                Audio recording
                <audio src={this.state.blobURL} controls="controls" />
                <div className={"control-button"}>
                    <button onClick={this.start} disabled={this.state.isRecording}>
                        Record
                    </button>
                    <button onClick={this.stop} disabled={!this.state.isRecording}>
                        Stop
                    </button>
                </div>
            </div>
        );
    }
}
*/

import React, {useState, useEffect} from "react";
import MicRecorder from "mic-recorder-to-mp3";
import axios from "axios";
import './AudioRecording.css';
import {Button, ButtonGroup, Paper, Typography} from "@mui/material";

const Mp3Recorder = new MicRecorder({bitRate: 128});

const AudioRecording = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [blobURL, setBlobURL] = useState("");
    const [isBlocked, setIsBlocked] = useState(false);
    const [audioDataState, setAudioDataState] = useState(null)

    useEffect(() => {
        navigator.mediaDevices
            .getUserMedia({audio: true})
            .then(() => {
                console.log("Permission granted");
                setIsBlocked(false);
            })
            .catch(() => {
                console.log("Permission Denied");
                setIsBlocked(true);
            });
    }, []);

    const start = () => {
        if (isBlocked) {
            console.log("Permission Denied");
        } else {
            Mp3Recorder.start()
                .then(() => {
                    setIsRecording(true);
                })
                .catch((e) => console.error(e));
        }
    };

    const stop = () => {
        Mp3Recorder.stop()
            .getMp3()
            .then(async ([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob);
                const file = new File(buffer, 'audio.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });

                let baseAudio = await audioToBase64(file);
                // Ensure proper base64 encoding
                baseAudio = baseAudio.replace(/^data:audio\/mp3;base64,/, ''); // Remove the data URI prefix if present

                setAudioDataState(baseAudio)
                // Post the correctly encoded audio data to the server
                // postAudioData(baseAudio);

                setBlobURL(blobURL);
                setIsRecording(false);
            })
            .catch((e) => console.log(e));
    };

    const audioToBase64 = async (audioFile) => {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = reject;
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(audioFile);
        });
    };

    const postAudioData = async () => {
        try {
            // console.log(baseAudio);
            // Replace with your server endpoint
            const response = await axios.post("http://localhost:5000/audio", {
                audioData: audioDataState,
            });

            console.log("Audio data posted successfully:", response.data);
        } catch (error) {
            console.error("Error posting audio data:", error);
        }
    };

    return (
        <div className={"input-body"}>
            <Paper elevation={3} className={"paper"}>
                <Typography variant={"h3"}>Speak Up!</Typography>
                <audio src={blobURL} controls="controls" className={"controls"}/>
                <div className={"control-button"}>
                    {/*<button onClick={start} disabled={isRecording}>*/}
                    {/*    Record*/}
                    {/*</button>*/}
                    {/*<button onClick={stop} disabled={!isRecording}>*/}
                    {/*    Stop*/}
                    {/*</button>*/}
                    {/*<button onClick={isRecording ? stop : start}>*/}
                    {/*    {isRecording ? "Stop" : "Record"}*/}
                    {/*</button>*/}

                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button variant="contained" onClick={isRecording ? stop : start}>
                            {isRecording ? "Stop" : "Record"}
                        </Button>
                        <Button onClick={postAudioData}>Submit</Button>
                    </ButtonGroup>

                </div>
            </Paper>
        </div>
    );
}

export default AudioRecording;

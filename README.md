# VERBAL LINGUISTS

Built by- Amit Ramrakhyani, Mit, Vatsal Balasra, Tithi Dangarwala, Bhavya and Varzil Thakkar

Problem Statement: Speech to text transcription for Indian languages. The problem entails transcription in the native script and then translation to English. The languages of interest are Hindi, Indian English, Urdu, Bengali, Punjabi.

Our Approach: Our project focuses on building a user-friendly platform that accommodates the various languages spoken across India, such as Hindi, Urdu, Bengali, Punjabi, and Indian English. Users can input audio content in their chosen language, and our platform will provide an audio output with an English translation. This initiative aims to facilitate communication across language differences within India.

Required Tech Stack:

# Getting Started

## Dependencies

- Clone the repository using the command below:

```
git clone https://github.com/balasravatsal/VerbalLinguists
```

- Install the required libraires using these commands:

```
pip install transformers datasets pyaudio pydub gtts 
```

## Executing the program

- Use the following command in the command prompt to run the code:

```
python3 main.py
```

# Basic Flow

The flow of the execution of program includes following steps:

0. Audio Input from front end using react, 
1. Input of Native Language Audio
2. Background Noise and White Noise Reduction in input audio
3. Recognition of the language from the audio
4. Classification of the language from the audio(first level classification - pu, hi/ur(second classification model only trained for hi and ur), bn, gu) (models ke name)
4. Forwarding the audio to the model of the recognized language and transcripting it to Native Language Text (models ke name)
5. Forwarding the native text to the (model name of english language) and translating it to English Language Text 
6. Transcripting it to English Language Audio using the python library **gtts** 
7. Translated audio is displayed in frontend using react

"in steps mein we can include using this or that library"

"flow chart idhar aayega"

# Issues Faced during Runtime

# Issues Faced during Output

Issues can be found during the translation of Urdu Audio. Urdu has a lot of similarities to Hindi which makes it hard for the model to recognize the language.

Also Indian English is not inluded..."iska mein aage likh rahi hu"

# Fine Tuning of the Integrated Model

Install essential development libraries and dependencies, including compression, audio processing, linear algebra, and logging libraries, crucial for building software in various domains like data compression, audio processing, numerical computation, and application logging.

```
!apt install -y liblzma-dev libbz2-dev libzstd-dev libsndfile1-dev libopenblas-dev li
```

Remove existing directories (IndicWav2Vec, fairseq, kenlm, flashlight) and clone fresh copies of these repositories from their respective GitHub URLs, typically used for project development or initialization.

```
!rm -rf IndicWav2Vec fairseq kenlm flashlight
!git clone https://github.com/AI4Bharat/IndicWav2Vec.git
!git clone https://github.com/pytorch/fairseq.git
!git clone https://github.com/kpu/kenlm.git
!git clone https://github.com/flashlight/flashlight.git
```

Install Python Packages

```
%cd /content/IndicWav2Vec
!pip install packaging soundfile swifter -r w2v_inference/requirements.txt
%cd ..
```

Change the current directory to '/content/fairseq,' check out a specific Git commit ('cf8ff8c3c5242e6e71e8feb40de45dd699f3cc08'), and install the 'fairseq' Python package from that commit.

```
%cd /content/fairseq
!git checkout cf8ff8c3c5242e6e71e8feb40de45dd699f3cc08
!pip install ./
%cd /content

```

Navigate to the 'kenlm' source directory, create a 'build' directory for compilation, configure the build using CMake, build the project with 16 parallel processes using 'make,' and return to the '/content' directory.

```
%cd /content/kenlm
!mkdir -p build
%cd build
!cmake .. 
!make -j 16
%cd /content
```

Change to the '/content/flashlight/bindings/python' directory, switch to a specific Git commit, set environment variables ('USE_MKL' and 'KENLM_ROOT'), and install the 'flashlight' Python package with the specified configuration.

```
%cd /content/flashlight/bindings/python
!git checkout 06ddb51857ab1780d793c52948a0759f0ccc6ddb
!export USE_MKL=0 && export KENLM_ROOT="/content/kenlm/" && python setup.py install
%cd /content
```

Change directory to IndicWav2Vec

```
%cd /content/IndicWav2Vec
```

Navigate to the '/content/IndicWav2Vec' directory, install the 'tree' command, and use 'tree' to display the directory structure of 'workshop-2022/asr_data/noa_training_1hr' in a tree-like format, showing subdirectories and files.

```
!apt-get -y install tree && tree -dC workshop-2022/asr_data/noa_training_1hr
```

Navigate to the '/content/IndicWav2Vec/workshop-2022' directory, create a 'models' directory if it doesn't exist, remove existing files matching patterns 'hi_mucs_dc.pt*' and 'checkpoint_ft.pt*' from the 'models' directory, and download two pre-trained model files ('hi_mucs_dc.pt' and 'checkpoint_ft.pt') from specified URLs into 'models' for further project use.

Start Fine Tuning

```
%cd /content/IndicWav2Vec/workshop-2022
!mkdir models
# !mkdir checkpoints
!cd models && rm -rf hi_mucs_dc.pt* && wget https://storage.googleapis.com/ai4b-speech/TTS/KENLM/hi_mucs_dc.pt
!cd models && rm -rf checkpoint_ft.pt* && wget https://storage.googleapis.com/ai4b-speech/TTS/KENLM/checkpoint_ft.pt
%cd ..
```

Train a Fairseq sequence-to-sequence model for speech recognition in Hindi using specific configurations, including dataset settings, model parameters, and training hyperparameters.

Run Fine Tuning

```
!fairseq-hydra-train task.data=${PWD}"/workshop-2022/asr_data/noa_training_1hr/manifest/hindi" \
    dataset.max_tokens=200000 \
    common.log_interval=20 \
    model.freeze_finetune_updates=1000 \
    model.w2v_path=${PWD}"/workshop-2022/models/checkpoint_ft.pt" \
    checkpoint.save_dir=${PWD}"/workshop-2022/models/indicwav2vec_noa" \
    checkpoint.restore_file=${PWD}"/workshop-2022/models/hi_mucs_dc.pt" \
    distributed_training.distributed_world_size=1 \
    +optimization.update_freq='[1]' \
    +optimization.lr=[0.0001] \
    optimization.max_update=100000 \
    checkpoint.save_interval_updates=10000 \
    --config-dir ${PWD}"/finetune_configs" \
    --config-name ai4b_xlsr 
```
















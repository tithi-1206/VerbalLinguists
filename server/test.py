import pybase64 as base64

# Read audio file as binary data
with open('D:\\SIH\\untitled3\\server\\output.mp3', 'rb') as audio_file:
    audio_binary_data = audio_file.read()

# Encode binary data to base64
base64_audio = base64.b64encode(audio_binary_data).decode('utf-8')

# Print or use the base64_audio variable as needed
print(base64_audio)

import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';

interface DictaphoneProps {
  onTranscript: (transcript: string) => void;
}

const Dictaphone: React.FC<DictaphoneProps> = ({ onTranscript }) => {
    const [textToCopy, setTextToCopy] = useState<string | undefined>(undefined);
    const [isCopied, setCopied] = useClipboard(textToCopy || "", {
        successDuration: 1000
    });

    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition,
        resetTranscript
    } = useSpeechRecognition();

    useEffect(() => {
        onTranscript(transcript);
    }, [transcript, onTranscript]);

    if (!browserSupportsSpeechRecognition) {
        return <p className="text-red-500">Your browser doesn't support speech recognition.</p>;
    }

    const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    };

    const clearTranscript = () => {
        resetTranscript();
        setTextToCopy(undefined); // Clear the copied text as well
        onTranscript(''); // Update the parent component with an empty string
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Speech to Text Converter</h2>
            <p className="text-gray-600 mb-4">A React hook that converts speech from the microphone to text and makes it available to your React components.</p>

            <div
                className="main-content p-4 mb-4 bg-gray-100 border border-gray-300 rounded-md cursor-pointer"
                onClick={() => setTextToCopy(transcript)}
            >
                {transcript || <span className="text-gray-400">Click to see the transcript here...</span>}
            </div>

            <div className="flex space-x-4 ">
                <button
                    type='button'
                    onClick={setCopied}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                >
                    {isCopied ? 'Copied!' : 'Copy to clipboard'}
                </button>
                <button
                    type='button'
                    onClick={startListening}
                    className={`px-4 py-2 text-white rounded-md transition duration-200 ${
                        listening ? 'bg-green-700 animate-pulse' : 'bg-green-500 hover:bg-green-600'
                    }`}
                >
                    {listening ? 'Listening...' : 'Start Listening'}
                </button>
                <button
                    type='button'
                    onClick={SpeechRecognition.stopListening}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                >
                    Stop Listening
                </button>
                <button
                    type='button'
                    onClick={clearTranscript}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
                >
                    Clear Transcript
                </button>
            </div>
        </div>
    );
};

export default Dictaphone;

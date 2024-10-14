import Loader from './loader.jsx';
import AudioBar from './audioBar.jsx';

const ProcessedFile = ({
    file,
    text,
    emotions,
    sentimentLoading,
    back = () => { }
}) => {
    console.log({ text, emotions });

    return (<>
        <div className="flex justify-between w-full mb-6 mt-12">
            <span>&nbsp;</span>
            <h3 className="text-3xl font-medium">Session <span className="text-primary">Output</span></h3>
            <button onClick={back} className="transition-colors duration-500 w-7 h-7 grid place-content-center rounded-full hover:bg-slate-400 hover:bg-opacity-10"
            >
                <svg className="-ml-1" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7L10 12L15 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
        <p className="text-primary font-bold self-start mb-2 text-xl">Transcription</p>
        <p className="text-start mb-4 w-full">
            {text}
        </p>
        <p className="text-primary font-bold self-start mb-2 text-xl">Acoustic Analysis</p>

        <div className="text-start w-full">
            {
                (sentimentLoading) ?
                    (<Loader className='!w-6 !h-6 opacity-85' />) :
                    (emotions && emotions.status === "success") ? (
                        <>
                            {emotions.emotion_recognition.map(({ emotion, score }) => (
                                <span key={emotion} className="ml-2">{emotion} <sub>({((score - 0.12) * 1_000).toFixed(2)})</sub></span>
                            ))}
                        </>
                    ) : (
                        <span>No emotions detected.</span>
                    )
            }
        </div>
        <br />
        <p className="text-primary font-bold self-start mb-4 text-xl">Recording</p>
        <audio controls className="w-full mb-4 hidden">
            <source src={URL.createObjectURL(file)} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <AudioBar
            file={file}
        />
    </>
    )
}


export default ProcessedFile;
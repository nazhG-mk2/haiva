import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import PlayIcon from '../assets/playIcon.jsx';
import PauseIcon from '../assets/pauseIcon.jsx';
import FastForwardIcon from '../assets/fastForwardIcon.jsx';
import React from 'react';

function AudioBar({
    file
}) {

    const customIcons = {
        play: <PlayIcon />,
        pause: <PauseIcon className='w-[40px] h-[40px] p-[1px]' />,
        forward: <FastForwardIcon className='ml-auto' />,
        rewind: <FastForwardIcon className="transform rotate-180" />,
    };


    return (
        <AudioPlayer
            src={
                URL.createObjectURL(file)
            }
            onPlay={e => console.log("Reproduciendo")}
            autoPlayAfterSrcChange={false}
            showVolumeControl={false}
            customIcons={customIcons}
        />

    );
}

export default React.memo(AudioBar, (prevProps, nextProps) => {
    return prevProps.file === nextProps.file;
});

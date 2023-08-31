import { memo } from "preact/compat";

const AuditoryThings = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Auditory Things (Transcripts, etc.)</h2>
      <div className="flex flex-col gap-3">
        <p>
          Consider users who may have auditory disabilities or prefer reading over audio content. Provide alternative formats like transcripts for audio and video content.
        </p>
        <h3 className="text-lg font-semibold mb-2">Transcripts for Audio/Video</h3>
        <p>
          Including transcripts with your audio and video content allows users to access the content through reading. This benefits people with hearing impairments, as well as those in noisy environments.
        </p>
        <pre>
          {`
            <audio controls>
              <source src="audio.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
            <p><a href="audio-transcript.txt">Download Audio Transcript</a></p>
          `}
        </pre>
        <p>
          In the example above, a link to download the transcript is provided alongside the audio element.
        </p>
        <p>
          By ensuring you provide alternative formats, you make your content more accessible to a wider audience.
        </p>
      </div>
    </>
  );
};

export default memo(AuditoryThings);

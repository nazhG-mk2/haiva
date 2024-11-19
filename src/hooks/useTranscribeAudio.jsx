import { useState } from "react";

const useTranscribeAudio = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const transcribeAudio = async (file) => {
        setLoading(true);
        setError(null);

        try {
            console.log('Archivo:', file);

            // Convertir archivo MP3 a Base64
            const fileToBase64 = (file) => {
                return new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result.split(",")[1]);
                    reader.onerror = (error) => reject(error);
                });
            };

            const base64Audio = await fileToBase64(file);

            // Realizar la petición fetch
            const response = await fetch("http://44.197.199.9:9006/transcribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ voice: base64Audio }),
            });

            const data = await response.json();
            setResponse(
                data
            );
            console.log({
                data,
                sentimentAnalysisData
            });

        } catch (error) {
            setError("Error transcribing audio");
        } finally {
            setLoading(false);
        }
    };

    return { transcribeAudio, loading, error, response };
};

export default useTranscribeAudio;
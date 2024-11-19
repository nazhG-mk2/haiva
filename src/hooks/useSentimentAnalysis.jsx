import axios from "axios";
import { useState } from "react";

const useSentimentAnalysis = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const analyzeSentiment = async (file) => {
        setLoading(true);
        setError(null);

        try {
            console.log('analyzeSentiment file:', file);

            // Crear un FormData para enviar el archivo
            const formData = new FormData();
            formData.append("audio_file", file);

            // Usar axios para enviar el archivo al endpoint
            const { data } = await axios.post("http://44.197.199.9:9006/compute", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setResponse(data);
            console.log({ data });

        } catch (error) {
            setError("Error analyzing sentiment");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return { analyzeSentiment, loading, error, response };
};

export default useSentimentAnalysis;

import { useEffect, useRef } from "react";
import { Viewer } from "mapillary-js";

const View = ({ setTrueCoords, setImageLoaded }) => {
    const containerRef = useRef(null);
    const accessToken =
        import.meta.env.VITE_MAPILLARY_TOKEN;

    useEffect(() => {
        if (!containerRef.current || !accessToken) return;

        const viewer = new Viewer({
            accessToken,
            container: containerRef.current,
            cover: false,
            component: {
                cover: false,
                direction: true,
                image: true,
                sequence: true,
                navigation: true,

            }
        });
        const getRandomCoords = () => {
            const lat = Math.random() * 140 - 70;
            const lng = Math.random() * 360 - 180;
            return [lat, lng];
        };



        const loadRandomImage = async(maxAttempts = 10) => {
            let attempts = 0;

            while (attempts < maxAttempts) {
                const [lat, lng] = getRandomCoords();
                const buffer = 0.05;
                const bbox = [lng - buffer, lat - buffer, lng + buffer, lat + buffer];
                const url = `https://graph.mapillary.com/images?fields=id,geometry,sequence&bbox=${bbox.join(",")}&limit=10`;


                try {
                    const response = await fetch(url, {
                        headers: { Authorization: `OAuth ${accessToken}` },
                    });
                    const data = await response.json();
                    const sequenceImages = data.data.filter(img => img.sequence && img.sequence.id);
                    if (!sequenceImages.length) {
                        console.warn("No images found. Retrying...");
                        attempts++;
                        continue;
                    }

                    const randomImage =
                        sequenceImages[Math.floor(Math.random() * sequenceImages.length)];

                    await viewer.moveTo(randomImage.id);
                    const [lng, lat] = randomImage.geometry.coordinates;
                    console.log(`True Location: ${lat}, ${lng}`);
                    setTrueCoords({ lat, lng });
                    setImageLoaded(true);
                    return; // ✅ Let Game.jsx start timer

                } catch (e) {
                    console.error(e);
                    attempts++;
                }
            }


        };

        loadRandomImage();

        return () => viewer.remove();
    }, [accessToken, setTrueCoords, setImageLoaded]);

    return ( <
        div ref = { containerRef }
        style = {
            {
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
            }
        }
        />
    );
};

export default View;
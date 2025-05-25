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


            }
        });




        const loadRandomImage = async() => {

            setImageLoaded(false);




            const randomLat = Math.random() * 140 - 70;
            const randomLng = Math.random() * 360 - 180;
            const buffer = 0.05;
            const bbox = [randomLng - buffer, randomLat - buffer, randomLng + buffer, randomLat + buffer];
            const url = `https://graph.mapillary.com/images?fields=id,geometry&bbox=${bbox.join(",")}&limit=10`;


            try {
                const response = await fetch(url, {
                    headers: { Authorization: `OAuth ${accessToken}` },
                });
                const data = await response.json();

                if (!data.data.length) {
                    console.warn("No images found. Retrying...");
                    loadRandomImage(); // Retry
                    return;
                } else {
                    const randomImage =
                        data.data[Math.floor(Math.random() * data.data.length)];

                    viewer.moveTo(randomImage.id).then(() => {
                        const [lng, lat] = randomImage.geometry.coordinates;
                        console.log(`True Location: ${lat}, ${lng}`);
                        setTrueCoords({ lat, lng });
                        setImageLoaded(true);

                    });
                }
            } catch (e) {
                console.error(e);
                setImageLoaded(false);

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
import Portada from "./Portada";
import VideoFondo from "./VideoFondo";



export default function ContainerPortada() {
    return (
            <div className="relative flex flex-col items-center justify-center w-full min-h-screen text-center portada">
                <VideoFondo />
                <Portada />
            </div>
    )

}

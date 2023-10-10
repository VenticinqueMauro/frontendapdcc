
export default function VideoFondo() {
    return (
        <video className="absolute top-0 left-0 z-0 object-cover w-full h-full bg-center bg-no-repeat " autoPlay muted loop>
            <source src="/videoCesped.mp4" type="video/mp4" />
        </video>
    )
}

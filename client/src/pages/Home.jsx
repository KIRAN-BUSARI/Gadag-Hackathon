
function Home() {
    return (
        <>
            <div className="h-[90vh] bg-white justify-center items-center max-w-7xl gap-4 mx-auto grid grid-cols-3">
                <div className="border border-black px-3 py-4 rounded-md">
                    <img src="/magnify.png" alt="" className="object-cover" />
                    <div className="text-center text-black">
                        <button onClick={() => window.location.href = "/detection"}>Object Detection</button>
                    </div>
                </div>
                <div className="border border-black px-3 py-4 rounded-md">
                    <img src="/magnify.png" alt="" className="object-cover" />
                    <div className="text-center text-black">
                        <button onClick={() => window.location.href = "/image-classification"}>Image Classificatoin</button>
                    </div>
                </div>
                <div className="border border-black px-3 py-4 rounded-md">
                    <img src="/magnify.png" alt="" className="object-cover" />
                    <div className="text-center text-black">
                        <button onClick={() => window.location.href = "/detection"}></button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home
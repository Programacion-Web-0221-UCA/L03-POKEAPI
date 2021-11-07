const Card = () => {
    return (
        <div className="w-72 h-96 bg-white rounded shadow-lg">
            <div className="w-72 h-40 bg-gray-100 rounded-t flex justify-center items-center">
                <img src="https://w7.pngwing.com/pngs/71/956/png-transparent-whiskers-drawing-jigglypuff-jigglypuff-white-mammal-face.png" className="w-32 h-32" />
            </div>
            <div>
                <div className="flex justify-between items-center mx-4">
                    <h2 className="font-roboto text-xl">Jigglypuff</h2>
                    <p className="font-roboto text-xl">Nº 39</p>
                </div>
                <div>
                    <h3>type</h3>
                    <p>normal</p>
                    <p>fairy</p>
                </div>
                <div>
                    <h3>type</h3>
                    <p>cute-charm</p>
                    <p>competitive</p>
                    <p>friend-guard</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
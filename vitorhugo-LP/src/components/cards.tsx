interface cardProps {
    name: string;
    text?: string;
    img: string;
}

export const Card = (props: cardProps) => {
    return(
        <>
        <div className={`flex max-w-[300px] h-[355px] bg-[${props.img}] flex-col justify-center items-center border p-5 rounded-xl hover:scale-102 duration-200`}>
            <div className="flex w-full justify-center">
                <h1 className="text-center font-bold" style={{ fontFamily: 'Alegreya SC, serif' }}>{props.name}</h1>
            </div>
            <div className="flex h-[35vh] items-center">
                <p className="text-justify" style={{ fontFamily: 'Alegreya SC, serif' }}>{props.text}</p>
            </div>
            
        </div>
        </>
    )
}
type Props = {
    rate: number;
}

export const EmojiRating = ({ rate }: Props) => {
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;

    const rateInt = Math.floor(rate);
    let stars = '';
    function starsEmoji(num){
        num = rateInt;
        if (rateInt >= 0 && rateInt < 1){
            let stars = '😐'.repeat(5)
            return stars;
        }else if (rateInt >= 1 && rateInt < 2){
            let stars = '😔'.repeat(5)
            return stars;
        }else if (rateInt >= 2 && rateInt < 3){
            let stars = '🙂'.repeat(5)
            return stars;
        }else if (rateInt >= 3 && rateInt < 4){
            let stars = '🙃'.repeat(5)
            return stars;
        }else if (rateInt >= 4 && rateInt < 5){
            let stars = '😇'.repeat(5)
            return stars;
        }else if(rateInt >= 5){
            let stars = '😀'.repeat(5)
            return stars;
        }
    }
    
    
    // const stars = '😀'.repeat(rateInt) + '😶'.repeat(5 - rateInt)


    return (
        <div className="flex items-center text-6xl">
            <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
            <div className="ml-3">{starsEmoji(stars)}</div>
        </div>
    )
}
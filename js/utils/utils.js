 const utils = {
    abbreviationOfPossibilities:function(possibilities){
        const symbols = ["","mil","mi","bi","tri"];
        const tier = Math.log10(possibilities) / 3 | 0;
        if (tier == 0){
            return possibilities;
        }else{
            const sufix = symbols[tier];
            const scale = Math.pow(10, tier * 3);
            const scaled = possibilities / scale;
            let abbreviationOfPossibilities = 0;
            if (possibilities >= 9999){
                abbreviationOfPossibilities =  Math.floor(scaled);
            }else{
                abbreviationOfPossibilities = scaled.toFixed(1);
            }
            return abbreviationOfPossibilities + " " + sufix;
        }
    }
}

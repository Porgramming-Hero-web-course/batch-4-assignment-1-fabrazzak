{





const countWordOccurrences=(sentence:string,word:string):number =>{

    const sentenceToLowerCase= sentence.toLowerCase();
    const wordToLowerCase= word.toLowerCase();
    const words =sentenceToLowerCase.split(" ");
    const numberOfWordRepeat= words.filter(w => w == wordToLowerCase).length
    

    return numberOfWordRepeat;

    

    

}


countWordOccurrences("I love Typescript", "typescript");













}
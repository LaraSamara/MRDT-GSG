function reverseWord(word){
    if(word === "") return 0;
    return 1 + reverseWord(word.slice(1));
}
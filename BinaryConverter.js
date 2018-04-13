function binaryConverter(num){
    if(num>=1) {
        return binaryConverter(Math.floor(num/2))+(num%2);
    
    }
    return '';

}

binaryConverter(5);

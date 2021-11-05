function TOH(discsAmount =0, A ='', C ='', B ='') {
    console.log(`Current state disks=${discsAmount} a=${A} b=${B} c=${C}`);
    if (discsAmount > 0) {
        TOH(discsAmount - 1, A, B, C);
        console.log(`Move disc ${discsAmount} from ${A} to ${C}`);
        TOH(discsAmount - 1, B, C, A);
    }
}
    
TOH(3, '1', '3', '2');
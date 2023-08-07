var grade=(prompt("enter a grade between a,b,c"));
var result;
switch(grade){
    case 'A':
        result="A grade";
        break;
        case 'B':
            result="B grade";
            break;
            case 'C':
                result="C grade";
                break;
                default:
                    result="No grade";
}
console.log(result);
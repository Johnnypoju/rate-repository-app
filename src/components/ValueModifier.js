
//Made for rounding numeric data if value over thousand

const ValueModifier = (value) => {

    console.log(value)
    if (value > 999) {
        const alteredValue = value/1000;
        const rounded = alteredValue.toPrecision(3)+"k";
        return rounded;
    }
    return value;
     
};

export default ValueModifier;
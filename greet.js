function greet(name){
    if(name === null){
        return "Hello, my friend."
    }
    if(!Array.isArray(name)){
        if(name == name.toUpperCase()){
            // var str = `HELLO, ${name}.`;
            //console.log(`HELLO ${name}!`);
            return `HELLO ${name}!`
        }
    }
    if(Array.isArray(name)){
        if(name.length >2){
            if(name[1] == name[1].toUpperCase()){
                return `Hello, ${name[0]} and ${name[2]}. AND HELLO ${name[1]}!`
            }
            return `Hello, ${name[0]}, ${name[1]}, and ${name[2]}.`
        }
        
        return `Hello, ${name.join(" and ")}.`
    }

    return `Hello, ${name}.`;
}


module.exports = greet;

let name = "JavaScript";
let reverse = "";

let count  = name.length - 1;
for (let i = count; i >= 0; i--){
    reverse += name[i]
}

document.write(name)
document.write("<br/>")
document.write(reverse)
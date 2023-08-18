//your JS code here. If required.

const bow = document.getElementById("browser-info");
const bname = navigator.appName;
const version = navigator.appVersion;
const value = "You are using "+bname+" "+"version is "+version;
// const ptag = document.createElement("p");
// const cont = document.createTextNode("rahuls");
// ptag.appendChild(cont);
// bow.appendChild(ptag);
// ptag.value = "rahul";
// bow.appendChild(ptag);
bow.append(value);


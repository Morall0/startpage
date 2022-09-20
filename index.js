let a_tags = document.getElementsByTagName('a');

let keys = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z";
let keys_array = keys.split(",");

console.log(a_tags.length);

for (let i=0; i<a_tags.length; i++) {
	let html = a_tags[i].innerHTML;
	a_tags[i].innerHTML = `<span class="shortcut">[${keys_array[i]}]</span> ${html}`;
}


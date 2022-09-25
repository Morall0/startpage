const a_tags = document.getElementsByTagName('a');

const keys = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,X,Y,Z";
const keys_array = keys.split(",");

for (let i=0; i<a_tags.length; i++) {
	let htmlContent = a_tags[i].innerHTML;
	a_tags[i].id = keys_array[i];
	a_tags[i].innerHTML = `<span class="shortcut">[${keys_array[i]}]</span> ${htmlContent}`;
}

const htmlHotkey = document.getElementsByTagName("html")[0];

htmlHotkey.addEventListener("keydown",(e)=>{
	if (e.shiftKey) {
		if (keys_array.includes(e.key)) {
			const a_link = document.getElementById(e.key);
			if (a_link !== null) {
				window.open(a_link.href);
			} 
		}
	}
});

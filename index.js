function stringLength(key) {
		return len;
}

const a_tags = document.getElementsByTagName('a');
const keys = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,T,U,V,X,Y,Z";
const keys_array = keys.split(",", a_tags.length);


for (let i=0; i<a_tags.length; i++) {
	let htmlContent = a_tags[i].innerHTML;
	a_tags[i].id = keys_array[i];
	a_tags[i].innerHTML = `<span class="shortcut">[${keys_array[i]}]</span> ${htmlContent}`;
}

const htmlHotkey = document.getElementsByTagName('html')[0];
const inputSearch = document.getElementById('inputSearch');
const cursor = document.getElementById('cursorAnimation');	
const formTag = document.getElementsByTagName('form')[0];
inputSearch.value = "";

htmlHotkey.addEventListener("keydown",(e)=>{
	if (e.shiftKey && !e.ctrlKey) {

		if (keys_array.includes(e.key)) {
			const a_link = document.getElementById(e.key);
			window.open(a_link.href);
		}

		if (e.key === 'S') {
			cursor.style.borderColor = '#fbb829';
			formTag.style.display = 'inline';
			inputSearch.focus();
			e.preventDefault();
		}
	}
});

let txt = "";
inputSearch.addEventListener('keydown', (e) =>{
	e.stopPropagation();
	//TODO: change the array for a RegExp to detect alphanumeric characters.
	const noSK = ['Backspace', 'Enter', 'Shift', 'Control', 'Alt', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'CapsLock', 'OS', 'Escape', 'Delete'];
	if (noSK.includes(e.key))
		txt = e.key === 'Backspace'? txt.slice(0,-1):txt;
	else 
		txt += e.key;
	const len = (txt.length === 0)? 0:txt.length;
	inputSearch.style.width = `${len - ( 0.4 * len ) }em`;
})

formTag.addEventListener('submit', (e)=>{
	e.preventDefault();	
	const urlQuery = "https://duckduckgo.com/?t=ffab&q=";
	const searchValue = urlQuery+inputSearch.value;
	console.log(searchValue);
	window.open(searchValue);
	inputSearch.blur();
	formTag.style.display = 'none';
	inputSearch.value = "";
	txt = "";
	inputSearch.style.width = `0em`;
	cursor.style.borderColor = 'white';
})

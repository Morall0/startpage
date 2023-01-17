const cols=document.getElementById('cols');

// Creating all the columns for the sites.
slist.forEach((sites)=>{
    let col=document.createElement("div");
    col.className = 'col';
    let ul=document.createElement("ul");
    col.innerHTML=`<h3>/${sites.type}/</>`;

    // Adding the sites for each type.
    sites.sites.forEach((site)=>{
        ul.innerHTML+=`<li><a id="${site.key}" target="_blank" href="${site.link}"><span class="shortcut">[${site.key}] </span>${site.name}</a></li>`; 
    });
    col.appendChild(ul);
    cols.appendChild(col);
});

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

module.exports = (str) => {
	let html = '';
	const lines = str.split("\n") 

	for(let i = 0; i < lines.length; i++){
    	let line = lines[i].trim();
		
    	if(line.trim().startsWith("= ")){
			html+=(`<h1>${line.substring(2)}</h1>`);
      	continue;
    	};
      
    
		if(line.startsWith("* ")){
      		let ul = [];
      		while(i < lines.length && lines[i].trim().startsWith("* ")){
        		ul.push(`<li>${lines[i].trim().substring(2)}</li>`)
        		console.log(line)
        		i++
      		}
      		html+= (`<ul>${ul.join("")}</ul>`)
      		continue;
		}
    	if (line){
			let p = line
      		if (line.includes("((")){
        		p = p.replace(/\(\((https?:\/\/[^\s]+)\s+([^)]+)\)\)/g, (math, url, text)=> `<a href="${url}">${text.trim()}</a>`)
          
     		}

      		html+=(`<p>${p}</p>`)
      		continue
    	}
  }
  
	return html;
};

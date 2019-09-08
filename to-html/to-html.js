//jvx
class tohtml{
	constructor(){
		this.data={}
	}

	for(req,type){
		this.data=req;
		let _this=this

		if(req instanceof Array || typeof req != 'object' ){
			throw Error(`type of '${req}' required Object`)
		}else{

			//if type not elem
			type != 'elem'?(()=>{
				
				document.querySelectorAll('[json]').forEach(elem=>{
					let result = eval(`this.data.${elem.getAttribute('json')}`)
					if(result == undefined){
						console.error(`${elem.getAttribute('json')} : not found`)
					}else{
						elem.innerHTML = result
					}
				})


			})():(()=>{

				Object.keys(req).forEach(elem=>{

					let text = document.querySelector(elem)
					if(text){
						text.innerHTML = req[elem]
					}
				})

			})()

		}

		

	}


}

let toHTML = new tohtml()
# to-html

parse Object dan menampilkannya di html

contoh

 ```js
 <script src="to-html.js"></script>
	<script>
		window.onload=()=>{
			let json = {
			  nama:'Virdio Samuel',
        hobi:'baca buku'
			}
			toHTML.for(json)
		}
	</script>
```

```html
<h1 json='nama'></h1>
<p json='hobi'></h1>
```

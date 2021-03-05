# Element Creator JS
Create elements with javascript easily.



EXAMPLE #1:

HTML code:
```javascript
<div id="example-2"></div>
```

JAVASCRIPT code:
```javascript
var elements2 = [
	{
		'tag': 'div',
		'att': {
			'class': 'example-1'
		},
		'child': [
			{
				'tag': 'span',
				'html': 'Auto script!',
				'script': function(params) {
					alert('Example #1');
				}
			}
		]
	}
];

var newElem2 = create(elements2, document.getElementById('example-2'));

console.log(newElem2);
```

Result:
```html
<div id="example-2">
	<div>
		<span>Auto script!</span>
	</div>
</div>
```



EXAMPLE #2:

JAVASCRIPT code:
```javascript
var elements = [
	{
		'tag': 'div',
		'att': {
			'class': 'example-class'
		},
		'child': [
			{
				'tag': 'button',
				'att': {
					'id': 'example-id'
				},
				'html': 'Click me!',
				'script': {
					'click': function(params) {
						alert('Example #2');
					}
				}
			}
		]
	}
];

var newElem1 = create(elements, document.body);

console.log(newElem1);
```

Result:
```html
<div class="example-class">
	<button id="example-id">Click me!</button>
</div>
```

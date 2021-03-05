# Element-Creator-JS
Create elements with javascript easily.

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
				'html': 'Send',
				'script': {
					'click': function(params) {
						console.log(this);
					}
				}
			}
		]
	}
];

create(elements, document.body);
```

HTML result:
```html
<div class="example-class">
	<button id="example-id">Send</button>
</div>
```

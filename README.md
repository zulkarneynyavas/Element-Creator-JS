# Element-Creator-JS
Create elements with javascript easily.

```javascript
var elements = [
	{
		'tag': 'div',
		'html': 'a',
		'child': [
			{
				'tag': 'button',
				'att': {
					'id': 'wowow'
				},
				'html': 'e',
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

// ==UserScript==
// @name        GoogleDriveEasyDownload
// @namespace   http://localhost
// @include     https://drive.google.com/*
// @include		http://chuangtseu.fr/*
// @version     1
// @grant       none
// ==/UserScript==

var style = document.getElementsByTagName('head')[0].appendChild(document.createElement('style'));
style.textContent = "\
	.jfk-dl{\
	display:inline-block;\
	height:19px;\
	text-align:center;\
	width:19px;\
	padding:2px\
	}\
	\
	.jfk-dl:before{\
		content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==);\
		content:-webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 1x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 2x)\
	}\
	\
	.jfk-dl-hover:before{\
		content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==);\
		content:-webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 1x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 2x)\
	}\
	\
	.jfk-dl-active:before{\
		content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==);\
		content:-webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 1x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 2x)\
	}\
	\
	.jfk-dl-checked:before{\
		content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==);\
		content:-webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 1x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 2x)\
	}\
	\
	.jfk-dl-checked.jfk-dl-hover:before{\
		content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==);\
		content:-webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 1x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 2x)\
	}\
	\
	.jfk-dl-checked.jfk-dl-active:before{\
		content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==);\
		content:-webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 1x,url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3gUHEQI2Ub9eagAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVRYw+1WwUrDQBSc0d1NP0Bri0nQ6p+oxYvY2hhSRQTxlwTBowgiQkH8IhXqeUNOOawHUaigbdbogu47PtiZYd57w7IoCrgsQdKtAGOMUwFzcFzOHXC+A34E7h2weXR5dW0eHp8menEU4ugw46848JH8s97/W0IbrFpzwAbLj4B5nk8FPTu/MFrnlYCbiws4PTnmt0dAEtvdTQgxPzO5lALdrY36dmB9rcNkrwcpp+eWUhJZmiCOQta6hJ3VFe4P+hBCfEGuMEwTROHyzOdArXXVFDQ3tyOUZTnRD4JX8na7xR89wzgKOUwHUEq99xqNAAdZWpncyoG3Go+fzejuHiTR391Ba6lplWjWAv7Mf8AL8H9CL8C5gBerrVgOlW4oQgAAAABJRU5ErkJggg==) 2x)\
	}\
	\
	.doclistview-list.doclistview-transitions .doclist-star,.doclistview-list.doclistview-transitions .jfk-dl{\
		-webkit-transition:font-size .218s,height .218s,line-height .218s,margin .218s,padding .218s,width .218s;\
		-moz-transition:font-size .218s,height .218s,line-height .218s,margin .218s,padding .218s,width .218s;\
		-o-transition:font-size .218s,height .218s,line-height .218s,margin .218s,padding .218s,width .218s;\
		transition:font-size .218s,height .218s,line-height .218s,margin .218s,padding .218s,width .218s\
	}\
	\
	.doclistview-list.density-normal .doclist-star,.doclistview-list.density-normal .jfk-dl{\
		margin-top:8px!important\
	}\
	\
	.doclistview-list.density-small .doclist-star,.doclistview-list.density-small .jfk-dl{\
		margin-top:5px!important\
	}\
	\
	.doclistview-list.density-tiny .doclist-star,.doclistview-list.density-tiny .jfk-dl{\
		margin-top:0!important\
	}\
	\
	.gridview-name-container .jfk-dl{\
		padding:0\
	}";
	
function simulate(element, eventName)
{
    var defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    }
    
    var options = extend(defaultOptions, arguments[2] || {});
    var oEvent, eventType = null;
    
    var eventMatchers = {
        'HTMLEvents': /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
        'MouseEvents': /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
    }

    for (var name in eventMatchers)
    {
        if (eventMatchers[name].test(eventName)) { eventType = name; break; }
    }

    if (!eventType)
        throw new SyntaxError('Only HTMLEvents and MouseEvents interfaces are supported');

    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent(eventName, options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function extend(destination, source) {
    for (var property in source)
      destination[property] = source[property];
    return destination;
}


function simulateRightClick(element)
{
    var rightClickOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 2,
        which: 3,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
        //'view': window
    }
    
    if (document.createEvent)
    {    	        
        var rmbEvent = new MouseEvent('click', rightClickOptions);
        element.dispatchEvent(rmbEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function simulateContextMenu(element)
{
    var defaultOptions = {
        pointerX: 0,
        pointerY: 0,
        button: 0,
        ctrlKey: false,
        altKey: false,
        shiftKey: false,
        metaKey: false,
        bubbles: true,
        cancelable: true
    }
    
	var options = extend(defaultOptions, arguments[2] || {});
    var oEvent = null;
	eventType = 'HTMLEvents';
	
    if (document.createEvent)
    {
        oEvent = document.createEvent(eventType);
        if (eventType == 'HTMLEvents')
        {
            oEvent.initEvent('contextmenu', options.bubbles, options.cancelable);
        }
        else
        {
            oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
            options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
            options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
        }
        
        element.dispatchEvent(oEvent);
    }
    else
    {
        options.clientX = options.pointerX;
        options.clientY = options.pointerY;
        var evt = document.createEventObject();
        oEvent = extend(evt, options);
        element.fireEvent('on' + eventName, oEvent);
    }
    return element;
}

function downloadFile(thisElt) {	
	var targetElt = thisElt;
	
	simulateContextMenu(targetElt);
	var contextMenuElt = document.body.querySelector("div.detroit-contextmenu[tabindex='0']");
	
	if (contextMenuElt.childNodes[13])
	simulate(contextMenuElt.childNodes[13], "mousedown");
    simulate(contextMenuElt.childNodes[13], "mouseup");
}

function noDownload(thisElt) {
	alert("No Download");
}

function prepareTable() {
	var filesTableElt = document.getElementsByClassName('doclist-table')[0];
	var colgroup = filesTableElt.querySelector("colgroup");
	var thead = filesTableElt.querySelector("thead");
	var tbody = filesTableElt.querySelector("tbody");
	
	colgroup.querySelector(".doclist-col-star").insertAdjacentHTML('afterend', '<col class="doclist-col-star">');
	thead.querySelector(".doclist-header-star").insertAdjacentHTML('afterend', '<th class="doclist-header-star"><div class="doclist-header-inner doclist-header-label-star"><div class="doclist-header-label"><div class="goog-inline-block"></div></div></div></th>');
	
	var filesElts = tbody.childNodes;
	
	var htmlStrNoAction = '<td class="doclist-td-star"><div class="jfk-dl" role="button" aria-label="Download file" aria-checked="false" onclick="noDownload(this)"></div></td>';
	var htmlStrDownloadFile = '<td class="doclist-td-star"><div class="jfk-dl" role="button" aria-label="Download file" aria-checked="false" onclick="downloadFile(this)" ></div></td>';
	for (var i = 0; i < filesElts.length; ++i) {
		if (filesElts[i].innerHTML.search('Folder') >= 0) {
			//alert("Warning folder !");
			filesElts[i].childNodes[2].insertAdjacentHTML('afterend', htmlStrNoAction);
		}
		else {
			filesElts[i].childNodes[2].insertAdjacentHTML('afterend', htmlStrDownloadFile);
		}		
	}
	
	filesTableElt.onchange = prepareTable;
}

function showCss() {
    var downloadCssSource = "Caca dans ta bouche";

	console.log(downloadCssSource);
}

prepareTable();

console.log("downloadCssSource");

var websiteStorage = unsafeWindow;

if (undefined == unsafeWindow) {
    websiteStorage.simulate = simulate;
    websiteStorage.extend = extend;
    websiteStorage.simulateRightClick = simulateRightClick;
    websiteStorage.simulateContextMenu = simulateContextMenu;
    websiteStorage.downloadFile = downloadFile;
    websiteStorage.noDownload = noDownload;
    websiteStorage.prepareTable = prepareTable;
    websiteStorage.showCss = showCss;
}
else {
    function contentEval(source) {
      // Check for function input.
      if ('function' == typeof source) {
        // Execute this function with no arguments, by adding parentheses.
        // One set around the function, required for valid syntax, and a
        // second empty set calls the surrounded function.
        source = '(' + source + ')();'
      }
    
      // Create a script node holding this  source code.
      var script = document.createElement('script');
      script.setAttribute("type", "application/javascript");
      script.textContent = source;
    
      // Insert the script node into the page, so it will run, and immediately
      // remove it to clean up.
      document.body.appendChild(script);
      document.body.removeChild(script);
    }
    
    contentEval('' + simulate);
    contentEval('' + extend);
    contentEval('' + simulateRightClick);
    contentEval('' + simulateContextMenu);
    contentEval('' + downloadFile);
    contentEval('' + noDownload);
    contentEval('' + prepareTable);
    contentEval('' + showCss);
}

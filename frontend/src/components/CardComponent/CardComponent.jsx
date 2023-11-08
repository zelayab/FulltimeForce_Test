import React from 'react'

export const CardComponent = (props) => {

	return(
		<div class="max-w-sm rounded overflow-hidden shadow-lg m-10">
		<img class="w-full" src={props.img} alt="Sunset in the mountains"/>
		<div class="px-6 py-4">
		  <div class="font-bold text-xl mb-2">{props.title}</div>
		  <p class="text-gray-700 text-base">
		  {props.text}
		  </p>
		</div>
		<div class="px-6 pt-4 pb-2">
		  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#test</span>
		  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#challenge</span>
		  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fullstack</span>
		</div>
	  </div>
	)
}


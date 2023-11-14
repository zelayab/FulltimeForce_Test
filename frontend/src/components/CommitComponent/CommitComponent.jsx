import React from 'react'
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


export const CommitComponent = (props) => {
    const dateFixed = new Date(props.date)

	return(
        <>
                <div class="border-r border-b border-l border-gray-400 p-4 flex flex-col justify-between leading-normal m-4 border">
                    <div class="mb-8">
                        <p class="text-sm text-gray-600 flex items-center">
                        <BsFillExclamationTriangleFill />
                        Members only
                        </p>
                        <div class="text-gray-900 font-bold text-xl mb-2">{props.message}</div>
                       
                    </div>
                    <div class="flex items-center">
                        <img class="w-10 h-10 rounded-full mr-4 border-2 border-blue-500" src={props.img} alt="Avatar of Jonathan Reinink" />
                        <div class="text-sm">
                        <p class="text-gray-900 leading-none">{props.name}</p>
                        <p class="text-gray-600">
                            {dateFixed.toLocaleDateString()} - {dateFixed.toLocaleTimeString()} 
                        </p>
                        </div>
                        <div class="ml-4 flex">
                            <a href={props.toCommit} target="_blank" class="text-blue-500 hover:text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center pl-4">
                                < BsArrowRightSquareFill className="text-3xl text-blue-500 mr-45" />
                                Go to commit !
                            </a>
                        </div>
                    </div>
                </div>
        </>
	)
}



import React from 'react'
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { BsArrowRightSquareFill } from "react-icons/bs";


export const CommitComponent = (props) => {
    const dateFixed = new Date(props.date)

    return (
        <>
            <div className="border-r border-b border-l border-gray-400 p-4 flex flex-col justify-between leading-normal m-4 border">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                        <BsFillExclamationTriangleFill />
                        Members only
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{props.message}</div>

                </div>
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full mr-4 border-2 border-blue-500" src={props.img} alt="Avatar of Jonathan Reinink" />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{props.name}</p>
                        <p className="text-gray-600">
                            {dateFixed.toLocaleDateString()} - {dateFixed.toLocaleTimeString()}
                        </p>
                    </div>
                    <div className="ml-4 flex">
                        <a href={props.toCommit} target="_blank" className="text-blue-500 hover:text-blue-800 font-bold py-2 px-4 rounded inline-flex items-center pl-4">
                            < BsArrowRightSquareFill className="text-3xl text-blue-500 mr-59" />
                            <p className='ml-4'
                            >Go to commit !</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}



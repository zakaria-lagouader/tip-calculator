import React from 'react'
import Form from './Form'
import Result from './Result'

function Calculator() {
    return (
        <div className="bg-white max-w-[800px] w-full rounded-xl p-4 shadow-xl grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Form />
            <Result />
        </div>
    )
}

export default Calculator

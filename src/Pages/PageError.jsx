import {useRouteError} from 'react-router-dom'

export default function PageError(){
    const error = useRouteError();
    console.log(error)
    return <>
        <div className="flex justify-center mt-40">
            <div className="text-center">
            <h1 className="text-lg font-bold font-sans text-slate-700 text-3xl">{error.status} | { error.statusText }</h1>
            </div>
        </div>
    </>
}   
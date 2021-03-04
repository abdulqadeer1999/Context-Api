import {useGlobalState,useGlobalStateUpdate} from 'react'

function Dashboard () {
    const globalState = useGlobalState()
    const setGlobalState = useGlobalState()

    return (
        <div>
             <h1>Dashboard</h1>
        <button onClick={() => {
            setGlobalState(prev => ({ ...prev, darkTheme: !prev.darkTheme }))
        }}

        >toggle</button>
        {"===>" + JSON.stringify(globalState)}
        <p>this is a protected route</p>
        </div>
    )
}

export default Dashboard
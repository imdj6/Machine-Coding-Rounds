import React from 'react'

function NotFound() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div>
                <h1>HTTP 404 Brain Not Found</h1>
                <table>
                    <tr>
                        <td><p>The inteligence you are looking for might have been removed</p></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default NotFound
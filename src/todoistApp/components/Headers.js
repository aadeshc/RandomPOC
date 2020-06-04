import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
export const Headers = () => {
    return (
        <div>
            <header className="headers">
                <nav>
                    <div className="logo"></div>
                    <div className="settings">
                        <ul>
                            <li>+</li>
                            <li><FaPizzaSlice /></li>
                        </ul>

                    </div>
                </nav>

            </header>
        </div>
    )
}

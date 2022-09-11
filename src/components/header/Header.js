import React from 'react'

const Header = () => {
    return (
        <header className="bg-green-600">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex w-full items-center justify-between border-b border-indigo-900 py-6 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">Your Company</span>
                            <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" />
                        </a>
                    </div>
                    <div className="ml-10 space-x-4">
                        <a
                            href="#"
                            className="inline-block rounded-md border border-transparent bg-green-800 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                        >
                            Account
                        </a>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header
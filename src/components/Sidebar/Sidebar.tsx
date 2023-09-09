"use client";

import Link from "next/link";
import { GrLogout, GrScheduleNew, GrSchedules } from "react-icons/gr";
import { FaUserDoctor } from "react-icons/fa6";
import { signOut } from "next-auth/react";

const Sidebar = () => {
    return (
        <div className="flex min-h-screen w-16 flex-col justify-between border-e bg-sky-500">
            <div>
                <div className="inline-flex h-16 w-16 items-center justify-center">
                    <span
                        className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                    >
                        D
                    </span>
                </div>

                <div className="border-t border-gray-100">
                    <div className="px-2">
                        <div className="py-4">
                            <div>
                                <Link
                                    href="/dashboard"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                >
                                    <FaUserDoctor className="text-black" />
                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                        Doctor Dashboard
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                            <li>
                                <Link
                                    href="/dashboard/addschedule"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                >
                                    <GrScheduleNew />
                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                        Add Schedule
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard/appointments"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                >
                                    <GrSchedules />

                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                        Appointments
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-sky-500 p-2">
                <div>
                    <button
                    onClick={() => signOut()}
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <GrLogout />

                        <span
                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                        >
                            Logout
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
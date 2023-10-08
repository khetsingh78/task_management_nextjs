import Image from "next/image";
import Link from "next/link";
import react from "react";
import deletesvg from "@/public/delete.svg";
import editsvg from "@/public/edit.svg";

export default function Tudo({ taskDetails, id }) {
    return (
        <>
            <div className="card px-8 py-6 shadow-md bg-slate-100 relative">
                <div className="absolute left-0 top-4 w-full px-8  actionButton">
                    <div className=" flex justify-between align-middle">
                        <Link href={`/edittask/${id}`}>
                            {/* <span className="material-symbols-outlined text-green-500 cursor-pointer">
                                edit
                            </span> */}
                            <Image src={editsvg} alt="edit" className=" cursor-pointer" />
                        </Link>
                        {/* <span className="material-symbols-outlined text-red-600 cursor-pointer">
                            delete
                        </span> */}
                        <Image src={deletesvg} alt="delete" className=" cursor-pointer" />

                    </div>
                </div>
                <h1 className=" text-2xl text-slate-900 font-bold my-4">{taskDetails.title}</h1>
                <p className=" text-lg text-slate-500 font-serif">
                    {taskDetails.description}
                </p>
                <div className=" flex justify-between align-middle my-4">
                    <p className=" text-lg text-green-300"> Status</p>
                    <p>{taskDetails.date}</p>
                </div>
            </div>

        </>
    )
}
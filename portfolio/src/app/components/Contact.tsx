'use client'
import { EnvelopeIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import gitIcon from "../assets/github-mark.png"
import { toast } from "react-toastify"


const Contact = () => {

    const copyEmail = () => {
        const email = "syferwebdev@gmail.com";
        navigator.clipboard.writeText(email)
            .then( () => {
                toast.success("Email copied to clipboard!",
                    {
                        autoClose: 1000,
                        position: "bottom-right"
                    }
                )
            })
            .catch( (err) => {
                console.error("Failed to copy, so sorry please try again!" , err)
            })
    }

  return (
    <section className="flex justify-center">
        <div className="flex flex-col items-center max-w-[896px]">
            <h2 className="section_title">
                <EnvelopeIcon className="w-12 inline" /> Get In Touch
            </h2>

            {/* Form & contact details container */}
            <div className="flex w-full gap-8 justify-center p-16">
                {/* Contact Form */}
                <form 
                    action=""
                    className="flex flex-col gap-6 bg-neu-white shadow-custom-grey-neu theme_border p-12"
                >
                    {/* Name field */}
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        placeholder="Name"
                        className="form_field_style"
                    />
                    {/* Email field */}
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="Email"
                        className="form_field_style"
                    />
                    {/* Reason selector drop-down field */}
                    <select 
                        name="reason" 
                        id="reason"
                        required
                        className="form_field_style"
                        defaultValue={"DEFAULT"}
                    >
                        <option value="DEFAULT" hidden disabled >Reason of contact</option>
                        <option value="job">Job Opportunities</option>
                        <option value="interview">Interviews</option>
                        <option value="freelance">Freelance</option>
                        <option value="collab">Collab</option>
                    </select>
                    {/* Message field */}
                    <textarea 
                        name="message" 
                        id="message"
                        required
                        placeholder="Let me know how I can contribute to your team."
                        rows={5}
                        className="form_field_style w-80"
                    />
                    {/* Submit Button */}
                    <button 
                        type="submit"
                        className="px-4 py-2 font-semibold rounded-full bg-black text-white text-xl border-2 border-white hover:bg-neu-white hover:border-2 hover:border-black hover:text-black"
                    >
                        Let&apos;s Connect
                    </button>
                </form>
                {/* Contact Details */}
                <div >
                    <p className="text-lg">
                        I&apos;m always eager to connect and discuss exciting opportunities. Looking forward to hearing from you! If you prefer to reach out via email, feel free to drop me a message via:
                    </p>
                    <div className="flex flex-col gap-4 mt-8">
                        <p className="flex items-center gap-4">
                            <EnvelopeIcon className="w-10" />
                            <span className="contact_colon"> : </span>
                            <span
                                className="contact_link cursor-pointer"
                                onClick={copyEmail}
                            >
                                syferwebdev@gmail.com
                            </span>
                        </p>
                        <p className="flex items-center gap-4">
                            <Image 
                                src={gitIcon}
                                alt="GitHub icon"
                                className="w-10"
                            />
                            <span className="contact_colon"> : </span>
                            <a 
                                href="https://github.com/SyferWD"
                                target="_blank"
                                className="contact_link"
                            >
                                https://github.com/SyferWD
                            </a>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
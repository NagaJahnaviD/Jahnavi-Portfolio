import { useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com'

export const Contact = ()=>{
    const [formData,setFormData]=useState({
        from_name:"",
        email:"",
        message:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,e.target,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert("Message sent");
            setFormData({from_name:"",email:"",message:""})
        }).catch(()=>alert("Something went wrong.Plee try again."))
    }

    return <section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Send me an Email</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input 
                             type="text" 
                             id="from_name" 
                             name="from_name" 
                             required 
                             value={formData.from_name}
                             onChange={(e) => {
                                 console.log("Name Updated:", e.target.value); // Debugging
                                 setFormData({ ...formData, from_name: e.target.value });
                             }}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Name.." 
                        />
                    </div>
                    <div className="relative">
                        <input 
                            type="email"  // Changed type to "email" for validation
                            id="email" 
                            name="email" 
                            required 
                            value={formData.email}
                            onChange={(e)=>setFormData({...formData,email:e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="example@gmail.com" 
                        />
                    </div>
                    <div className="relative">
                        <textarea 
                            id="message" 
                            name="message"
                            rows={5} 
                            required 
                            value={formData.message}
                            onChange={(e)=>setFormData({...formData,message:e.target.value})}
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                            placeholder="Your message.." 
                        />
                    </div>
                    <button 
                        className="w-full bg-blue-500 text-white py-3 px-6 font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>

            </div>
        </RevealOnScroll>
    </section>
}
'use client'
import { FormEvent, useState, ChangeEvent } from "react";


const ContactFormComponent = () => {
    
    interface FormData {
        name: string;
        email: string;
        message: string;
      }
      
      const ContactForm = () => {
        const [formData, setFormData] = useState<FormData>({
          name: '',
          email: '',
          message: ''
        });
      
        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };
      
        const handleSubmit = (e: FormEvent) => {
          e.preventDefault();
          // Aquí puedes manejar el envío del formulario
          console.log('Form data:', formData);
        };
      
        return (<div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
                ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
              Send
            </button>
          </form>
                </div>
        );
      }; 
    }      
    export default ContactFormComponent
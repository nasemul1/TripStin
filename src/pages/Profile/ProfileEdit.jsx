import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarLoader from "react-spinners/BarLoader";
import { toast } from 'react-toastify';

const ProfileEdit = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    // form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        father_name: "",
        mother_name: "",
        address: "",
        city: "",
        province: "",
        postal_code: "",
        country: "",
        nid: "",
        passport: "",
        image: null,
        about: "",
        tourism_experience: "",
        education: "",
        experience: "",
        skills: "",
        languages: "",
        hobbies: "",
    });

    // data fetch
        // variables
    const url = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('authToken');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetch api
    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
                }
            };
            
            try {
                const response = await fetch(url + '/user', options);
                const fetchData = await response.json();
                const user = fetchData.user;
                setFormData({
                    name: user.name || "",
                    email: user.email || "",
                    username: user.username || "",
                    phone: user.phone || "",
                    father_name: user.user_info.father_name || "",
                    mother_name: user.user_info.mother_name || "",
                    address: user.user_info.address || "",
                    city: user.user_info.city || "",
                    province: user.user_info.province || "",
                    postal_code: user.user_info.postal_code || "",
                    country: user.user_info.country || "",
                    nid: user.user_info.nid || "",
                    passport: user.user_info.passport || "",
                    image: null,
                    about: user.user_info.about || "",
                    tourism_experience: user.user_info.tourism_experience || "",
                    education: user.user_info.education || "",
                    experience: user.user_info.experience || "",
                    skills: user.user_info.skills || "",
                    languages: user.user_info.languages || "",
                    hobbies: user.user_info.hobbies || "",
                });
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
  
        fetchData();
    }, []);

    
    // put request
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
          form.append(key, formData[key]);
        });
    
        const options = {
          method: "PUT",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: form,
        };
    
        try {
          const response = await fetch(url + `/user/$formData.user}`, options);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          toast.success("Profile updated successfully!");
          console.log(data);
        } catch (error) {
          toast.error("An error occurred while updating the profile.");
          console.error(error);
        }
    };

    if (loading) {
        return <div className='mx-auto mt-28 h-[520px] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex justify-center items-center'>
            <BarLoader color='#0C3358' />
        </div>;
    }
    
    return (
        <div className="mx-auto mt-28 mb-8 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] font-poppins text-slate-800">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form onSubmit={handleSubmit}>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="username">
                                            Username
                                        </label>
                                        <input  
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm text-gray-400 border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="username"
                                            id="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            disabled
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                                            Email address
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm text-gray-400 border focus:outline-none focus:border-slate-800 w-full"
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled
                                        /> 
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="name">
                                            Name
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="phone">
                                            Phone
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="fathername">
                                        Father Name
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="fathername"
                                            id="fathername"
                                            value={formData.father_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="mothername">
                                        Mother Name
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="mothername"
                                            id="mothername"
                                            value={formData.mother_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="nid">
                                        National ID
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="nid"
                                            id="nid"
                                            value={formData.nid}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="passport">
                                        Passport ID
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="passport"
                                            id="passport"
                                            value={formData.passport}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="address">
                                            Address
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="address"
                                            id="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />  
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="city">
                                            City
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="city"
                                            id="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="country">
                                            Country
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="country"
                                            id="country"
                                            value={formData.country}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="postcode">
                                            Postal Code
                                        </label>
                                        <input
                                            className=" px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            type="text"
                                            name="postcode"
                                            id="postcode"
                                            value={formData.postal_code}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6 border-b-1 border-blueGray-300" />

                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                About Me
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="about">
                                            About me
                                        </label>
                                        <textarea
                                            name="about"
                                            id="about"
                                            className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            rows="4"
                                            value={formData.about}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="tExp">
                                            Tourism Experience
                                        </label>
                                        <textarea
                                            name="experience"
                                            id="tExp"
                                            className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            rows="4"
                                            value={formData.tourism_experience}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="edu">
                                            Education
                                        </label>
                                        <textarea
                                            name="edu"
                                            id="edu"
                                            className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            rows="4"
                                            value={formData.education}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="skill">
                                            Skill
                                        </label>
                                        <textarea
                                            name="skill"
                                            id="skill"
                                            className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            rows="4"
                                            value={formData.skills}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="lang">
                                            Language Skill
                                        </label>
                                        <textarea
                                            name="language"
                                            id="lang"
                                            className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            rows="4"
                                            value={formData.languages}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="hobbies">
                                            Hobbies
                                        </label>
                                        <textarea
                                            name="hobbies"
                                            id="hobbies"
                                            className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm border focus:outline-none focus:border-slate-800 w-full"
                                            rows="4"
                                            value={formData.hobbies}
                                            onChange={handleChange}
                                        >
                                        </textarea>
                                    </div>
                                </div>
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <button type="submit" className='text-sm px-4 py-2 border-2 border-slate-800 hover:text-white hover:bg-slate-800 rounded duration-150'>Update</button>
                                        <button type='button' onClick={handleGoBack} className='text-sm text-red-500 ml-2 px-4 py-2 border-2 border-red-500 hover:text-white hover:bg-red-500 rounded duration-150'>Discard</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit
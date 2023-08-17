import Profilepic from "./images/profilePhoto.jpg";
import { IonIcon } from "@ionic/react";
import Footer from "./footer";
import {personOutline, paperPlaneOutline, schoolOutline, locationOutline, trashOutline} from 'ionicons/icons';
import React, { useState, useEffect } from "react";
import { useParams, Link ,useNavigate} from "react-router-dom";
import axios from "axios";
const baseUrl = `http://127.0.0.1:8000/user/`;
function Editprofile(){

    const { id } = useParams();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("");
    const [profile_picture, setProfilePicture] = useState("");
    const [university, setUniversity] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [location, setLocation] = useState("");
    const [about_me, setAbout] = useState("");
    const navigate = useNavigate();
    const [short_description,setDescription] = useState("");  
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        axios.get(baseUrl + id + "/").then((response) => {
            setUsername(response.data.username);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phone_number);
            setProfilePicture(response.data.profile_picture);
            setUniversity(response.data.university);
            setFirstname(response.data.first_name);
            setLastname(response.data.last_name);
            setLocation(response.data.location);
            setAbout(response.data.about_me);
            setDescription(response.data. short_description);
        });
    }, []);

    const handleSaveAndExit = (e) => {
        const updatedData = {
            username,
            email,
            phone_number,
            profile_picture,
            university,
            first_name,
            last_name,
            location,
            about_me,
            short_description
            // ... (add other fields as needed)
        };

        axios.put(baseUrl + id + "/", updatedData) // Assuming PUT method for updating data
            .then(response => {
                // Handle success, redirect or show a success message
                // navigate('/profile')
            })
            .catch(error => {
                // Handle error, show an error message
            });
    };

    return(
        <body className="bg-gray-100 min-h-screen">
            <div className="sticky top-0 z-10 w-full h-20 border bg-gray-100 flex justify-end items-center space-x-2 pr-40">
                <button className="text-black text-sm font-semibold cursor-pointer">Cancel</button>
                 <Link to="/profile">
                <button className="text-black text-xs font-semibold px-3 py-2 cursor-pointer border rounded-md outline-none bg-[#05F26C] hover:bg-[#0dc55d]" onClick={handleSaveAndExit}>
                    Save and Exit
                </button>
                </Link>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 pl-20 pr-20 pb-10">
                <div className="w-1/4 flex flex-col space-y-8 border ml-20 p-12 justify-center items-center">
                    <div className="w-40 h-40 overflow-hidden rounded-full">
                    <img src={profile_picture} className="object-cover w-full h-full"></img>
                    </div>
                    <div className="flex flex-col space-y-2">
                            <div className="relative">
                            <IonIcon
                                icon={personOutline}
                                className="text-2xl text-[#279477] absolute left-2 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                    type="text"
                                    placeholder={first_name}
                                    className="border-2 outline-none w-full focus:border-2 focus:border-green-500 rounded-sm py-2 px-3 pl-10 placeholder-black "
                                    value={first_name}
                                    onChange={(e) => setFirstname(e.target.value)}>
                            </input>
                            </div>
                            <div className="relative">
                            <IonIcon
                                icon={personOutline}
                                className="text-2xl text-[#279477] absolute left-2 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                    type="text"
                                    placeholder={last_name}
                                    className="border-2 outline-none focus:border-2 focus:border-green-500 w-full rounded-sm py-2 px-3 pl-10 placeholder-black "
                                    value={last_name}
                                    onChange={(e) => setLastname(e.target.value)}>
                            </input>
                            </div>
                            <div className="relative">
                            <IonIcon
                                icon={paperPlaneOutline}
                                className="text-2xl text-[#279477] absolute left-2 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                    type="text"
                                    placeholder={email}
                                    className="border-2 outline-none focus:border-2 focus:border-green-500 w-full rounded-sm py-2 px-3 pl-10 placeholder-black "
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}>
                            </input>
                            </div>
                            <div className="relative">
                            <IonIcon
                                icon={schoolOutline}
                                className="text-2xl text-[#279477] absolute left-2 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                    type="text"
                                    placeholder={university}
                                    className="border-2 outline-none focus:border-2 focus:border-green-500 w-full rounded-sm py-2 px-3 pl-10 placeholder-black "
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}>
                            </input>
                            </div>
                            <div className="relative">
                            <IonIcon
                                icon={locationOutline}
                                className="text-2xl text-[#279477] absolute left-2 top-1/2 transform -translate-y-1/2"
                            />
                            <input
                                    type="text"
                                    placeholder={location}
                                    className="border-2 outline-none focus:border-2 focus:border-green-500 w-full rounded-sm py-2 px-3 pl-10 placeholder-black "
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}>
                            </input>
                            </div>
                    </div>
                </div>
                <div className="w-3/4">
                    <button className="w-full pt-10 pb-5 border-b-4 text-lg font-semibold text-green-700 border-green-700 ">Profile</button>
                    <div className="flex flex-row mt-10">
                    <input type="text" placeholder="About Me"
                    className="w-full border-2 pl-2 py-2 outline-none font-semibold text-lg focus:border-green-700"
                    value={about_me}
                    onChange={(e) => setAbout(e.target.value)}
                    >
                    </input>
                    <IonIcon
                            icon={trashOutline}
                            className="text-xl text-[#279477] pl-2"
                    />
                    </div>
                    <div className="flex flex-row mt-10">
                    <input type="text" placeholder="Add Short Description"
                    className="w-full pb-10 pl-2 pt-2 font-semibold text-lg border-2 outline-none focus:border-green-700"
                    value={short_description}
                    onChange={(e) => setDescription(e.target.value)}
                    >
                    </input>
                    <IonIcon
                            icon={trashOutline}
                            className="text-xl text-[#279477] pl-2"
                    />
                    </div>
                    

                </div>
            </div>
            <Footer />

        </body>

    );
}
export default Editprofile;
import React from "react";
import { 
    FaBook, FaUsers, FaComments, FaQuestionCircle, FaShareAlt, FaThumbsUp, FaThumbsDown, 
    FaRegSmile, FaBell, FaPen, FaSearch, FaEnvelope, FaLock,
    FaUserCircle, FaReply, FaQuoteRight, FaPaperPlane, FaGlobe, FaLink, FaHashtag 
} from "react-icons/fa";
import { 
    IoRocket, IoChatbubbles, IoNotifications, IoPeopleCircle, IoSettings, IoShareSocial, 
    IoDocumentText, IoHelpCircle, IoLogIn, IoLogOut, IoAddSharp,
    IoMail, IoBookmark, IoEye, IoEyeOff, IoHeart, IoHeartDislike, IoAttach, IoAdd 
} from "react-icons/io5";
import { ReactComponent as ForumersOff } from './Forumers-512-off.svg'
import "./HeroSection.css";

const Showcase = () => {
    const icons = {
        FaBook, IoDocumentText, FaComments, FaQuestionCircle, FaShareAlt, 
        FaRegSmile, FaBell, FaPen, FaSearch, FaEnvelope, FaLock,
        FaUserCircle, FaReply, FaQuoteRight, FaPaperPlane, FaGlobe, FaLink, FaHashtag, 
        IoRocket, IoChatbubbles, IoNotifications, IoPeopleCircle, IoHeart, IoShareSocial, 
        FaThumbsUp, FaThumbsDown, FaUsers, IoHelpCircle, IoLogIn, IoLogOut, 
        IoMail, IoBookmark, IoEye, IoHeartDislike, IoEyeOff, IoSettings, IoAttach, IoAddSharp, IoAdd };

return (
            <div className="hero-show">
                <div className="forum-mockup">
                    <ForumersOff className="hero-image" />
                    <div className="forum-channels">
                        {Object.values(icons).map((Icon, index) => (
                            <div key={index} className="channel" style={{color: '', backgroundColor: ''}}>
                                <Icon size={23} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
);
};

export {Showcase};
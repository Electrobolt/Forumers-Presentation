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
        IoMail, IoBookmark, IoEye, IoHeartDislike, IoEyeOff, IoSettings, IoAttach, IoAddSharp, IoAdd
    };

    const colorize = (index, total) => {
        const startColor = [66, 175, 97]; 
        const endColor = [52, 152, 219]; 
        const ratio = index / (total - 1);
        const r = Math.round(startColor[0] + ratio * (endColor[0] - startColor[0]));
        const g = Math.round(startColor[1] + ratio * (endColor[1] - startColor[1]));
        const b = Math.round(startColor[2] + ratio * (endColor[2] - startColor[2]));
        return `${r}, ${g}, ${b}`;
    };

    return (
        <div className="hero-show">
            <div className="forum-mockup">
                <div className="forum-channels">
                    {Object.values(icons).map((Icon, index) => (
                        <div key={index} 
                             className="channel" 
                             style={{ 
                                color: 'rgb('+colorize(index, Object.values(icons).length)+')', 
                                backgroundColor: 'rgba('+colorize(index, Object.values(icons).length)+',0.102)'
                        }}>
                            <Icon size={23} />
                        </div>
                    ))}
                </div>
                <ForumersOff className="hero-image" />
            </div>
        </div>
    );
};

export { Showcase };
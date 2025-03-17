import React, { useState } from 'react';
import style from './Cards.module.css';

const Cards = ({ dataCards, dataSection }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleCardClick = (index, link) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    const handleImageClick = (img) => {
        navigator.clipboard.writeText(img); 
        alert('Ссылка на изображение скопирована!');
    };

    return (
        <div className={style.cards}>
            <div className={style.row}>
                {dataCards.map((item, index) => (
                    <div key={index}>
                        <div className={style.card} onClick={() => handleCardClick(index)}>
                            <img src={item.img} alt={item.title} />
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {openIndex !== null && (
                <div className={style.sectionContainer}>
                    {dataSection[openIndex].imgs.map((img, imgIndex) => (
                        <div key={imgIndex} className={style.section}>
                            <img 
                                src={img} 
                                alt="" 
                                onClick={() => handleImageClick(img)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cards;
